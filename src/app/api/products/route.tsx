import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const resp = await db.produk.findMany();
    return NextResponse.json(resp, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      price,
      stock,
      uploudimage,
      namesuplier,
      alamat,
      email,
      description,
    } = await req.json();

    const suplier = await db.suplier.create({
      data: {
        nama_suplier: namesuplier,
        alamat: alamat,
        email: email,
      },
    });
    const produk = await db.produk.create({
      data: {
        nama: name,
        deskripsi: description,
        harga: parseInt(price),
        stok: parseInt(stock),
        foto: uploudimage,
        suplier: {
          connect: { id_suplier: suplier.id_suplier },
        },
      },
    });
    return NextResponse.json({ produk, suplier }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
}
