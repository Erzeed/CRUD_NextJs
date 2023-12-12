import { NextRequest, NextResponse } from "next/server";

export const GET = async (_req: NextRequest) => {
  console.log("hai");
  return NextResponse.json({ message: "Hello World" });
};
