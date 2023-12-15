import { MouseEvent, useState } from "react";

const postData = async (data: object) => {
  // const { BASE_URL } = process.env;
  const resp = await fetch(`http://localhost:3000/api/products`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = resp.json();
  return json;
};

type Props = {
  isHidden: boolean;
  closeBtn: () => void;
};

export default function ModalForm({ isHidden, closeBtn }: Props) {
  const [data, setData] = useState({});
  const [addSuplier, setAddSuplier] = useState(false);

  const onHandleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value } = event.target;

    if (event.target instanceof HTMLInputElement && id === "uploadimage") {
      const files = event.target.files;
      setData((prevData) => ({
        ...prevData,
        [id]: files,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const onHandleAddSupplier = () => {
    addSuplier ? setAddSuplier(false) : setAddSuplier(true);
  };

  const onHandleSubmit = async (
    e: MouseEvent<HTMLButtonElement | MouseEvent>,
  ) => {
    e.preventDefault();
    const resp = await postData(data);
    console.log(resp);
  };
  return (
    <div
      id="crud-modal"
      className={`${
        isHidden ? "hidden" : "none"
      } fixed inset-0 z-50 h-full w-screen scale-5  flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm`}
    >
      <div className="p-2 w-full max-w-md max-h-full overflow-y-auto transition-opacity">
        <div className="bg-black rounded-lg border-4 border-gray-800">
          <div className="flex bg-gray-800 items-center justify-between p-4 border-b rounded-t border-gray-800">
            <h3 className="text-lg font-semibold text-white">
              Create New Product
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
              onClick={closeBtn}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <input
                  type="text"
                  id="name"
                  className="bg-[#1F2937] text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Name product"
                  onChange={(e) => onHandleChange(e)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-[#1F2937] text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Price"
                  onChange={(e) => onHandleChange(e)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <input
                  type="number"
                  name="stock"
                  id="stock"
                  className="bg-[#1F2937] text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Stock"
                  onChange={(e) => onHandleChange(e)}
                />
              </div>
              <div className="col-span-2">
                <select
                  id="suplier"
                  className="bg-[#1F2937] text-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  onChange={(e) => onHandleChange(e)}
                >
                  <option defaultValue="default">Select suplier</option>
                  <option value="TV">Maju jaya</option>
                  <option value="PC">Sejahter bersama</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <button
                className="bg-green-200 px-2 rounded-full text-xs text-lime-800 font-medium"
                type="button"
                onClick={onHandleAddSupplier}
              >
                {addSuplier ? "Sembunyikan" : "tambahkan supplier"}
              </button>
              <div className={`${addSuplier ? "" : "hidden"} col-span-2`}>
                <input
                  type="text"
                  name="namesuplier"
                  id="namesuplier"
                  className="bg-[#1F2937] text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Name Supplier"
                  onChange={(e) => onHandleChange(e)}
                />
              </div>
              <div
                className={`${
                  addSuplier ? "" : "hidden"
                } col-span-2 sm:col-span-1`}
              >
                <input
                  type="text"
                  name="alamat"
                  id="alamat"
                  className="bg-[#1F2937] text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Alamat"
                  onChange={(e) => onHandleChange(e)}
                />
              </div>
              <div
                className={`${
                  addSuplier ? "" : "hidden"
                } col-span-2 sm:col-span-1`}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#1F2937] text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Email"
                  onChange={(e) => onHandleChange(e)}
                />
              </div>
              <div className="col-span-2">
                <input
                  className="w-full text-sm text-white rounded-lg cursor-pointer bg-[#1F2937] p-2.5"
                  aria-describedby="uploud-image_help"
                  id="uploudimage"
                  accept=".jpg, .png, .gif, .jpeg"
                  type="file"
                  onChange={(e) => onHandleChange(e)}
                />
                <div className="mt-2 text-sm text-gray-500" id="uploud-image">
                  Uploud img, max 2mb
                </div>
              </div>
              <div className="col-span-2">
                <textarea
                  id="description"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-white bg-[#1F2937] rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write product description here"
                  onChange={(e) => onHandleChange(e)}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-[#1F2937] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-green-200 hover:text-lime-800 hover:font-medium"
              onClick={(e) => onHandleSubmit(e)}
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Add new product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
