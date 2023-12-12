export default function Navbar() {
  return (
    <nav className="px-5 flex justify-between items-center w-full h-[65px] border-b border-gray-700 dark:bg-black sticky top-0 z-20">
      <div className="header__logo">
        <p>logo</p>
      </div>
      <div className="header__function flex w-[27%] justify-between">
        <div className="function__search">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full py-2 px-10 text-sm text-gray-900 border border-gray-300 rounded-lg dark:bg-[#1F2937] dark:border-none"
              placeholder="Search.."
              required
            />
            <p className="absolute end-2.5 font-medium text-gray-500 bottom-2.5 text-xs">
              Enter
            </p>
          </div>
        </div>
        <div className="function__btn">
          <button
            className="w-20 text-2xl font-bold rounded-full h-9 bg-[#1F2937] text-gray-400 hover:bg-green-200 hover:text-lime-800 hover:font-medium"
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </nav>
  );
}
