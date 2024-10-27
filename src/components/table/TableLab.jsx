import { useState } from "react";
import { BsPencil, BsTrash, BsCardList } from "react-icons/bs";
import Pagination from "../pagination/Pagination";
import { ToastContainer } from "react-toastify";
import { AiOutlineSearch } from "react-icons/ai";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

const TableLab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [data] = useState([
    // Gunakan state untuk data produk
    {
      id: 1,
      tanggal: 2020 - 2 - 10,
      name: "it",
      gr: 40,
      cm: 10,
      nol: 32,
      gr2: 32,
      cm2: 32,
      puluh4: 32,
      grade: "AA",
    },
    {
      id: 2,
      tanggal: 2020 - 2 - 10,
      name: "it",
      gr: 40,
      cm: 10,
      nol: 32,
      gr2: 32,
      cm2: 32,
      puluh4: 32,
      grade: "AA",
    },

    // ... Tambahkan data produk lainnya di sini
  ]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-5 mt-1">
        <div className="flex items-center space-x-4">
          <div className="search-input flex items-center border border-zinc-100 rounded overflow-hidden flex-grow h-10">
            <div className="relative flex-grow h-full">
              <input
                type="search"
                className="p-2 pl-10 w-full h-full outline-none"
                placeholder="Cari Barang..."
              />
              <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-2.5 transform text-gray-400 text-2xl" />
            </div>
          </div>
          <button className="px-4 py-2 bg-green-500 text-zinc-100 font-bold rounded hover:bg-green-600">
            Tambah Produk
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-zinc-100 font-bold rounded hover:bg-blue-600">
            <PiMicrosoftExcelLogoFill className="mr-2 text-2xl" />
            Convert to Excel
          </button>
          <button className="flex items-center px-4 py-2 bg-yellow-500 text-zinc-100 font-bold rounded hover:bg-yellow-600">
            <PiMicrosoftExcelLogoFill className="mr-2 text-2xl" />
            Import Excel
          </button>
        </div>
      </div>
      <h1 className="text-xl font-bold text-zinc-100 font-serif mb-4">
        Daftar Barang
      </h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th rowSpan="2" className="border border-zinc-100">
              No
            </th>
            <th rowSpan="2" className="border border-zinc-100">
              Tanggal
            </th>
            <th rowSpan="2" className="border border-zinc-100">
              Jenis Ikan
            </th>
            <th colSpan="6" className="border border-zinc-100">
              <span className=" text-zinc-100">Jelly Streight</span>
            </th>
            <th className="border border-zinc-100" rowSpan="2">
              Remark
            </th>
            <th className="border border-zinc-100" rowSpan="2">
              Action
            </th>
          </tr>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <td className="border border-zinc-100 font-bold">gr</td>
            <td className="border border-zinc-100 font-bold">cm</td>
            <td className="border border-zinc-100 font-bold">0</td>
            <td className="border border-zinc-100 font-bold">gr</td>
            <td className="border border-zinc-100 font-bold">cm</td>
            <td className="border border-zinc-100 font-bold">40</td>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          {currentData.map((item, index) => (
            <tr key={item.id} className="border-b border-zinc-600">
              <td className=" ">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="px-2 py-3">{item.tanggal}</td>
              <td className="px-2 py-3">{item.name}</td>
              <td className="px-2 py-3">{item.gr}</td>
              <td className="px-2 py-3">{item.cm}</td>
              <td className="px-2 py-3">{item.nol}</td>
              <td className="px-2 py-3">{item.gr2}</td>
              <td className="px-2 py-3">{item.cm2}</td>
              <td className="px-2 py-3">{item.puluh4}</td>
              <td className="px-2 py-3">{item.grade}</td>
              <td className="px-2 py-3">
                <div className="flex items-center justify-center space-x-2">
                  <button
                    className="text-green-600 hover:text-green-200"
                    aria-label="Edit">
                    <BsPencil className="text-xl" />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-200"
                    aria-label="Delete">
                    <BsTrash className="text-xl" />
                  </button>
                  <button
                    className="text-blue-600 hover:text-blue-200"
                    aria-label="Detail">
                    <BsCardList className="text-2xl" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
      ;
    </div>
  );
};
export default TableLab;
