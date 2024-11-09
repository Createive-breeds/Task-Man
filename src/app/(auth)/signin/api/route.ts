"use server";

import { StandarResponse } from "@/global";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createSession } from "@/lib/session";
export async function POST(request: NextRequest) {
  const user = await request.json();
  if (!user) {
    return NextResponse.json(
      new StandarResponse("USER_IS_REQUIRED", 401, null),
      { status: 401 }
    );
  }

  const { email, password } = user;

  const authUser = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (!authUser) {
    return NextResponse.json(
      new StandarResponse("INVALID_USERNAME_OR_PASSWORD", 401, null),
      { status: 401 }
    );
  }

  const match = await bcrypt.compare(password, authUser.password);

  if (!match) {
    console.log("PASSWORD IS NOT CORRECT");
    return NextResponse.json(
      new StandarResponse("INVALID_USERNAME_OR_PASSWORD", 401, null),
      { status: 401 }
    );
  }

  return createSession(authUser.id, authUser.role);
}
