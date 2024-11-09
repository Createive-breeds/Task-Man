import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";
import { Roles } from "@prisma/client";
import { redirect } from "next/navigation";
import { PAGES } from "./constants";
import prisma from "./prisma";
import { NextResponse } from "next/server";
import { StandarResponse } from "@/global";

type SessionPayload = {
  userId: string;
  userRole: Roles;
  expiresAt: Date;
  reference: string;
};

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createSession(userId: string, userRole: Roles) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const reference = await `tm_${uuidv4()}`;
  const session = await encrypt({ userId, expiresAt, reference, userRole });

  await prisma.sessions.create({
    data: {
      user: {
        connect: { id: userId },
      },
      expiresAt,
      reference,
    },
  });

  const response = NextResponse.json(
    new StandarResponse("LOGIN_WAS_SUCCESSFUL", 201, {}),
    { status: 201 }
  );

  response.cookies.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  return response;
}

export async function updateSession() {
  const session = (await cookies()).get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export const verifySession = async () => {
  const sessionCookie = (await cookies().get("session"))?.value;

  if (!sessionCookie) {
    redirect(PAGES.SIGN_IN + "?status=exceeded-session");
    return { isAuth: false, userId: null };
  }

  const session = await decrypt(sessionCookie);

  if (!session?.userId) {
    redirect(PAGES.SIGN_IN + "?status=invalid-session-user");
    return { isAuth: false, userId: null };
  }

  if (!session?.reference) {
    redirect(PAGES.SIGN_IN + "?status=invalid-session-reference");
    return { isAuth: false, userId: null };
  }

  const exists = prisma.sessions.findFirst({
    where: {
      reference: session.reference,
      userId: session.userId,
    },
  });

  if (!exists) {
    redirect(PAGES.SIGN_IN + "?status=invalid-session");
    return { isAuth: false, userId: null };
  }

  return { isAuth: true, userId: session.userId };
};

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("error occured decrypt() :", error);

    console.log("Failed to verify session");
  }
}
