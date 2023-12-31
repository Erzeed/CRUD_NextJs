"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface RowProps {
  id: number;
  nama: string;
  deskripsi: string;
  harga: number;
  stok: number;
  foto: string;
  suplier_id: number;
  suplier: {
    id_suplier: number;
    nama_suplier: string;
    alamat: string;
    email: string;
  };
}

const Rows: React.FC<RowProps> = ({
  id,
  nama,
  deskripsi,
  harga,
  stok,
  foto,
  suplier,
}) => {
  const { nama_suplier, alamat, email } = suplier;
  const router = useRouter();

  const onHandleDelete = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const id = (event.target as HTMLInputElement).id;
    try {
      await fetch("/api/products", {
        method: "DELETE",
        body: JSON.stringify(id),
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr className="hover:bg-gray-900 bg-[#1F2937] text-gray-400">
      <th className="flex contents-center items-center px-5 py-3 font-normal rounded-l-lg border-gray-700 border-y border-l h-[100%]">
        <div className="relative h-14 w-14">
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src={foto}
            alt=""
          />
          <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
        </div>
      </th>
      <td className="text-center h-[100%] w-[100px] border-y border-gray-700">
        <span className="text-center">{nama}</span>
      </td>
      <td className="border-y border-gray-700 text-green-950">
        <span className="inline-flex items-center px-2 py-2 rounded-lg gap-1 bg-green-100 text-xs font-semibold w-[200px]">
          {deskripsi}
        </span>
      </td>
      <td className="text-center h-[100%] border-y border-gray-700 w-[80px]">
        {harga}
      </td>
      <td className="border-y border-gray-700">
        <div className="flex justify-center">
          <span className="rounded-full bg-blue-50 px-2 py-2 text-xs font-semibold text-blue-600">
            {stok}
          </span>
        </div>
      </td>
      <td className="border-y border-gray-700 text-orange-950">
        <span className="inline-flex justify-center px-2 py-2 rounded-lg gap-1 bg-orange-100 text-xs font-semibold w-[150px]">
          {nama_suplier}
        </span>
      </td>
      <td className="border-y border-gray-700">
        <span className="inline-flex pl-5 text-xs font-semibold w-[150px]">
          {alamat}
        </span>
      </td>
      <td className="border-y border-gray-700">{email}</td>
      <td className="rounded-r-lg border-y border-gray-700 border-r">
        <div className="flex justify-center gap-4">
          <button type="button" onClick={(event) => onHandleDelete(event)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 cursor-pointer"
              x-tooltip="tooltip"
              id={id}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <a x-data="{ tooltip: 'Edite' }" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              x-tooltip="tooltip"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </a>
        </div>
      </td>
    </tr>
  );
};

export default Rows;
