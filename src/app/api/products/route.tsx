import { db } from "@/src/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const resp = await db.produk.findMany();
    return NextResponse.json(resp, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
}
