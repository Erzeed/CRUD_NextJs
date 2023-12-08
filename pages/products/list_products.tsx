import Navbar from "@/components/Navbar";

export default function ListProducts() {
  return (
    <div className="container__listproduk antialiased">
      <div className="listproduk__header px-5 flex justify-between items-center w-full h-[60px] border-b">
        <Navbar />
      </div>
      <div className="list_produk__main"></div>
    </div>
  );
}
