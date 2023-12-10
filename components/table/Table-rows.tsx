/* eslint-disable react/no-unknown-property */
export default function Rows() {
  return (
    <tr className="hover:bg-gray-100 bg-white">
      <th className="flex contents-center items-center gap-2 px-5 py-3 font-normal text-gray-900 rounded-l-lg border-y border-l h-[100%]">
        <div className="relative h-14 w-14">
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
        </div>
      </th>
      <td className="text-center h-[100%] border-y">
        <span className="inline-flex w-[100px]">Kopi tubruk</span>
      </td>
      <td className="border-y">
        <span className="inline-flex items-center px-2 py-2 rounded-lg gap-1 bg-green-100 text-xs font-semibold w-[200px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
      </td>
      <td className="text-center h-[100%] border-y w-[80px]">Rp.200000</td>
      <td className="border-y">
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-2 text-xs font-semibold text-blue-600">
            100
          </span>
        </div>
      </td>
      <td className="border-y">
        <span className="inline-flex justify-center px-2 py-2 rounded-lg gap-1 bg-orange-100 text-xs font-semibold w-[150px]">
          Maju lancar bersama
        </span>
      </td>
      <td className="border-y">
        <span className="inline-flex pl-5 text-xs font-semibold w-[100px]">
          Cilacap Jawa Tengah
        </span>
      </td>
      <td className="border-y">feizalreza29@gmail.com</td>
      <td className="rounded-r-lg border-y border-r">
        <div className="flex justify-end gap-4">
          <a x-data="{ tooltip: 'Delete' }" href="#">
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </a>
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
}