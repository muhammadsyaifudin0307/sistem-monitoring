import { useState } from "react";
import * as XLSX from "xlsx";
import { BsPencil, BsTrash, BsCardList } from "react-icons/bs";
import Pagination from "../pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineSearch } from "react-icons/ai";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import ModalEditProses from "../modal/edit/ModalEdtProses";
import ModalDetailProses from "../modal/detail/ModalDetailProses";
import ModalImportExcelProses from "../modal/import excel/ModalImportExcelProses";
import ModalAddProses from "../modal/add/ModalAddProses";
import ModalHapusProses from "../modal/hapus/ModalHapusProses";
import { Tooltip } from "react-tooltip";

const TableInputProses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState(null);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataProses, setDataProses] = useState([]);

  const data = [
    {
      id: 1,
      jam: "07.00",
      tanggal: "12-2-2024",
      name: "ml (ikan t)",
      receiving: { organoleptik: 7, thr: 7.1, rej: 8.1 },
      deboning: { dfish: 5 },
      wash: { tpwash: 5 },
      meat_spr: { tpspr: 5 },
      leaching: { ph: 5, tpl: 4.6 },
      refinery: { tpr: 5 },
      mixing: { tpm: 5, bds: 4.6, bdc: 3 },
      forming: { mois: 5, top: 4.6, rem: 9 },
      freezing: { tpcf: 5, tpf: 4.6 },
      packing: { mtl: 5, mir: 4.6, leb: 8 },
      storing: { atr: 5, tcsr1: 4.6, tcsr2: 5, cond: 5 },
      stuffing: { conchek: 5, quality: 4, brok: 6 },
      remark: "AA",
    },
    {
      id: 2,
      jam: "07.00",
      tanggal: "12-2-2024",
      name: "ml (ikan t)",
      receiving: { organoleptik: 7, thr: 7.1, rej: 8.1 },
      deboning: { dfish: 5 },
      wash: { tpwash: 5 },
      meat_spr: { tpspr: 5 },
      leaching: { ph: 5, tpl: 4.6 },
      refinery: { tpr: 5 },
      mixing: { tpm: 5, bds: 4.6, bdc: 3 },
      forming: { mois: 5, top: 4.6, rem: 9 },
      freezing: { tpcf: 5, tpf: 4.6 },
      packing: { mtl: 5, mir: 4.6, leb: 8 },
      storing: { atr: 5, tcsr1: 4.6, tcsr2: 5, cond: 5 },
      stuffing: { conchek: 5, quality: 4, brok: 6 },
      remark: "AB",
    },
  ];
  const handleAddProses = (proses) => {
    console.log("Proses yang diterima dari ModalAddProses: ", proses);

    if (proses && proses.jam && proses.produk) {
      setDataProses([...dataProses, proses]); // Pastikan data dimasukkan dengan benar
      toast.success(`${proses.produk} berhasil ditambahkan!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-zinc-900 text-white",
        bodyClassName: "flex items-center",
      });
    } else {
      toast.error("Nama proses atau produk tidak ditemukan!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-zinc-900 text-white",
        bodyClassName: "flex items-center",
      });
    }
  };

  const handleImportExcel = (file) => {
    console.log("File Excel yang diimpor:", file);
    toast.success(`File ${file.name} berhasil diimpor!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "bg-zinc-900 text-white",
      bodyClassName: "flex items-center",
    });
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  };
  const openDetailModal = (product) => {
    if (product?.id) {
      setSelectedDetailProduct(product);
      setDetailModalOpen(true);
    } else {
      console.error("Product ID is missing");
    }
  };
  const handleEditSave = (updatedProduct) => {
    console.log("Produk telah diperbarui:", updatedProduct);
    toast.success(`${updatedProduct.name} Berhasil Diperbarui!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "bg-zinc-900 text-white",
      bodyClassName: "flex items-center",
    });
    setEditModalOpen(false);
  };

  const handleDelete = () => {
    console.log("Produk telah dihapus:", selectedProduct);
    toast.success(`${selectedProduct.name} Berhasil Dihapus!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "bg-zinc-900 text-white",
      bodyClassName: "flex items-center",
    });
    setDeleteModalOpen(false);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Proses");
    XLSX.writeFile(workbook, "Data_Proses.xlsx");
    toast.success("Data berhasil diekspor ke Excel!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "bg-zinc-900 text-white",
      bodyClassName: "flex items-center",
    });
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-5 mt-1">
        <div className="flex items-center space-x-4">
          <div className="search-input flex items-center border border-zinc-100 rounded overflow-hidden flex-grow h-10">
            <div className="relative flex-grow h-full">
              <input
                type="search"
                className="p-2 pl-10 w-full h-full outline-none"
                placeholder="Cari Proses..."
              />
              <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-2.5 transform text-gray-400 text-2xl" />
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-bold">
            Tambah Proses
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={exportToExcel} // Tambahkan onClick untuk ekspor ke Excel
            className="flex items-center px-4 py-2 bg-blue-500 text-zinc-100 font-bold rounded hover:bg-blue-600">
            <PiMicrosoftExcelLogoFill className="mr-2 text-2xl" />
            Convert to Excel
          </button>
          <button
            onClick={() => setImportModalOpen(true)}
            className="flex items-center px-4 py-2 bg-yellow-500 text-zinc-100 font-bold rounded hover:bg-yellow-600">
            <PiMicrosoftExcelLogoFill className="mr-2 text-2xl" />
            Import Excel
          </button>
        </div>
      </div>
      <h1 className="text-xl font-bold text-zinc-100 font-serif mb-4">
        Daftar Proses
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
              <th rowSpan="2" className="border border-zinc-100">
                No
              </th>
              <th rowSpan="2" className="border border-zinc-100">
                Jam
              </th>
              <th rowSpan="2" className="border border-zinc-100">
                Tanggal
              </th>
              <th rowSpan="2" className="border border-zinc-100">
                Jenis Produk
              </th>
              <th colSpan="3" className="border border-zinc-100">
                <span className="text-zinc-100">Receiving</span>
              </th>
              <th colSpan="1" className="border border-zinc-100">
                <span className="text-zinc-100">Deheading</span>
              </th>
              <th colSpan="1" className="border border-zinc-100">
                <span className="text-zinc-100">Washing I</span>
              </th>
              <th colSpan="1" className="border border-zinc-100">
                <span className="text-zinc-100">Meat Separating</span>
              </th>
              <th colSpan="2" className="px-2 py-2 border border-zinc-100">
                <span className="text-zinc-100">Leaching</span>
              </th>

              <th className="px-2 py-2 border border-zinc-100" rowSpan="2">
                Action
              </th>
            </tr>
            <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
              <td className="px-2 py-2 border border-zinc-100 font-bold">
                Organoleptik
              </td>
              <td className="px-2 py-2 border border-zinc-100 font-bold">
                Temp of fish
              </td>
              <td className="px-2 py-2 border border-zinc-100 font-bold">
                Reject
              </td>
              <td className="px-2 py-2 border border-zinc-100 font-bold">
                Temp of fish
              </td>
              <td className="px-2 py-2 border border-zinc-100 font-bold">
                Temp of Produk
              </td>
              <td className="px-2 py-2 border border-zinc-100 font-bold">
                Temp of Produk
              </td>
              <td className="px-2 py-2 border border-zinc-100 font-bold">pH</td>
              <td className="px-2 py-2 border border-zinc-100 font-bold">
                Temp of Produk
              </td>
            </tr>
          </thead>
          <tbody className="text-zinc-100 text-base font-bold text-center">
            {currentData.map((item, index) => (
              <tr key={item.id} className="border-b border-zinc-600">
                <td className="py-3 px-1">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="px-2 py-3">{item.jam}</td>
                <td className="px-2 py-3">{item.tanggal}</td>
                <td className="px-2 py-3">{item.name}</td>
                <td className="px-2 py-3">{item.receiving.organoleptik}</td>
                <td className="px-2 py-3">{item.receiving.thr}</td>
                <td className="px-2 py-3">{item.receiving.rej}</td>
                <td className="px-2 py-3">{item.deboning.dfish}</td>
                <td className="px-2 py-3">{item.wash.tpwash}</td>
                <td className="px-2 py-3">{item.meat_spr.tpspr}</td>
                <td className="px-2 py-3">{item.leaching.ph}</td>
                <td className="px-2 py-3">{item.leaching.tpl}</td>
                <td className="py-3 px-6">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      data-tooltip-id="btnTooltip"
                      data-tooltip-content="Edit"
                      onClick={() => openEditModal(item)}
                      className="text-green-600 hover:text-green-200"
                      aria-label="Edit">
                      <BsPencil className="text-xl" />
                    </button>
                    <button
                      data-tooltip-id="btnTooltip"
                      data-tooltip-content="Delete"
                      onClick={() => openDeleteModal(item)}
                      className="text-red-600 hover:text-red-200"
                      aria-label="Delete">
                      <BsTrash className="text-xl" />
                    </button>{" "}
                    <button
                      data-tooltip-id="btnTooltip"
                      data-tooltip-content="Detail"
                      onClick={() => openDetailModal(item)}
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
      </div>
      <Tooltip id="btnTooltip" place="top" type="dark" effect="solid" />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
      {/* Modal Components */}

      {selectedProduct && (
        <ModalEditProses
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          product={selectedProduct}
          onSave={handleEditSave}
        />
      )}
      {selectedProduct && (
        <ModalHapusProses
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          product={selectedProduct}
          onDelete={handleDelete}
        />
      )}
      {selectedDetailProduct && (
        <ModalDetailProses
          isOpen={detailModalOpen}
          onClose={() => setDetailModalOpen(false)}
          product={selectedDetailProduct}
        />
      )}
      <ModalImportExcelProses
        isOpen={importModalOpen}
        onClose={() => setImportModalOpen(false)}
        onImport={handleImportExcel}
      />
      <ModalAddProses
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProses}
      />
      <ToastContainer />
    </div>
  );
};

export default TableInputProses;
