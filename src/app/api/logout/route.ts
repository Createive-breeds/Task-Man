"use server";

import { StandarResponse } from "@/global";
import { logout } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST() {
  logout();
  return NextResponse.json(
    new StandarResponse("LOGOUT_SUCCESSFUL", 200, null),
    { status: 200 }
  );
}
