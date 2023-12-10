import Rows from "./Table-rows";

/* eslint-disable react/no-unknown-property */
export default function Table() {
  const dataHeader = [
    "",
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
    <div className="table_container w-full border rounded-lg mt-3 max-h-[80vh] overflow-y-scroll overflow-x-hidden">
      <table className="w-full contoh border-collapse text-left text-sm text-gray-500">
        <thead className="bg-gray-50 sticky z-10 top-0 bg-opacity-50 backdrop-filter backdrop-blur-lg">
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
        <tbody className="table_main w-full max-h-[20vh]">
          <Rows />
          <Rows />
          <Rows />
          <Rows />
          <Rows />
          <Rows />
          <Rows />
          <Rows />
          <Rows />
        </tbody>
      </table>
      <div className="table_pagination bg-white w-full flex justify-end my-5 mr-10 sticky bottom-0">
        <ul className="inline-flex space-x-2">
          <li>
            <button className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button className="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
              1
            </button>
          </li>
          <li>
            <button className="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
              2
            </button>
          </li>
          <li>
            <button className="w-10 h-10 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline">
              3
            </button>
          </li>
          <li>
            <button className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
