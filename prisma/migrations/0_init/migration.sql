-- CreateTable
CREATE TABLE "produk" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "harga" INTEGER NOT NULL,
    "stok" INTEGER NOT NULL,
    "foto" TEXT NOT NULL,
    "suplier_id" INTEGER NOT NULL,
    CONSTRAINT "produk_suplier_id_fkey" FOREIGN KEY ("suplier_id") REFERENCES "suplier" ("id_suplier") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "suplier" (
    "id_suplier" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama_suplier" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

