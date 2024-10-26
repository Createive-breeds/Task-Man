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

  const { fullName, email, password, age } = user;

  const newUser = await prisma.users.create({
    data: {
      fullName,
      email,
      password,
      age,
    },
  });

  console.log(newUser);

  return NextResponse.json(
    new StandarResponse("REGISTRATION_WAS_SUCCESSFUL", 201, {
      id: newUser.id,
      email,
    }),
    { status: 201 }
  );
}
