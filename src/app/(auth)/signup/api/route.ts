// src\app\(auth)\signup\api\route.ts
"use server";

import { StandarResponse } from "@/global";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const user = await request.json();
  if (!user) {
    return NextResponse.json(
      new StandarResponse("USER_IS_REQUIRED", 401, null),
      { status: 401 }
    );
  }

  const { fullName, email, password } = user;

  const existingUser = await prisma.users.findUnique({
    where: {
      email, // email is assumed to be a unique field
    },
  });

  if (existingUser) {
    return NextResponse.json(
      new StandarResponse("USER_ALREADY_EXISTS", 401, null),
      { status: 409 }
    );
  }

  let newUser;
  try {
    newUser = await prisma.users.create({
      data: {
        fullName,
        email,
        password,
        age: 0,
      },
    });
  } catch (e) {
    return NextResponse.json(
      new StandarResponse("AN_ERROR_OCCURED", 401, e as object),
      { status: 401 }
    );
  }

  return NextResponse.json(
    new StandarResponse("REGISTRATION_WAS_SUCCESSFUL", 201, {
      id: newUser.id,
      email,
    }),
    { status: 201 }
  );
}
