"use server";

import { StandarResponse } from "@/global";
import prisma from "@/lib/prisma";
import { Roles } from "@prisma/client";
import  bcrypt  from "bcrypt"; 
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

  const authUser = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (authUser) {
    return NextResponse.json(
      new StandarResponse("USER_ALREADY_EXISTS", 401, null),
      { status: 401 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = await prisma.users.create({
    data: {
      fullName,
      email,
      password: hashedPassword,
      age:0,
      role: Roles.USER
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
