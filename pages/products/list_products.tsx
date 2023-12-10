import Navbar from "@/components/Navbar";
import Table from "@/components/table/Table";

export default function ListProducts() {
  return (
    <div className="container__listproduk antialiased w-screen h-screen ">
      <div className="listproduk__header px-5 flex justify-between items-center w-full h-[60px] border-b">
        <Navbar />
      </div>
      <div className="list_produk__main m-auto h-full w-11/12 my-10">
        <div className="main_title">
          <h1 className="text-3xl font-medium">
            Product <small className="text-xs text-gray-400">(300)</small>
          </h1>
        </div>
        <div className="main_content h-[70%] w-100">
          <Table />
        </div>
      </div>
    </div>
  );
}
