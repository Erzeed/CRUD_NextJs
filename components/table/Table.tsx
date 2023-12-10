import Rows from "./Table-rows";

/* eslint-disable react/no-unknown-property */
export default function Table() {
  const dataHeader = [
    " ",
    "Nama",
    "Deskripsi",
    "Harga",
    "Stok",
    "Suplier",
    "Alamat",
    "Email",
    "Action",
  ];
  return (
    <div className="card_container w-full h-18 flex items-center border px-3 py-2 rounded-lg mt-3 overflow-scroll ">
      <table className="w-full contoh h-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            {dataHeader.map((name) => (
              <th
                key={1}
                scope="col"
                className="px-6 py-4 font-xs text-gray-400 tracking-wide"
              >
                {name.toUpperCase()}
              </th>
            ))}
            <th
              scope="col"
              className="px-6 py-4 font-medium text-gray-900"
            ></th>
          </tr>
        </thead>
        <tbody className="container_table">
          <Rows />
          <Rows />
          <Rows />
          <Rows />
          <Rows />
          <Rows />
          <Rows />
        </tbody>
      </table>
    </div>
  );
}
