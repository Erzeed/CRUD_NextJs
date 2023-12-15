import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const resp = await db.produk.findMany({
      include: {
        suplier: true, // Assuming "suplier" is the name of the relation in your "produk" model
      },
    });
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

export async function DELETE(req: NextRequest) {
  try {
    const id = await req.json();
    const transaction = await db.$transaction([
      db.produk.delete({ where: { id: parseInt(id) } }),
      db.suplier.delete({ where: { id_suplier: parseInt(id) } }),
    ]);

    return NextResponse.json(transaction, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
}
