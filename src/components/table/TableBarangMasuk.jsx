import { useState } from "react";
import * as XLSX from "xlsx";
import { BsPencil, BsTrash, BsCardList } from "react-icons/bs";
import Pagination from "../pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineSearch } from "react-icons/ai";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import ModalAddBarangMasuk from "../modal/add/ModalBarangMasuk";
import ModalEditBarangMasuk from "../modal/edit/ModalEditBarangMasuk";
import ModalHapusBarangMasuk from "../modal/hapus/ModalHapusBarangMasuk";
import ModalDetailBarangMasuk from "../modal/detail/ModalDetailBarangMasuk";
import ModalImportExcelBarangMasuk from "../modal/import excel/ModalImportExcelBarangMasuk";

const TableBarangMasuk = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState(null);
  const [importModalOpen, setImportModalOpen] = useState(false);

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

  const data = [
    // Data produk yang akan ditampilkan
    {
      id: 1,
      name: "ITOYORI",
      date: "2020-02-10",
      count: 10,
      saldo: 1000,
      kg: 1,
      komposisi: "WE+SX+DW+KH",
      keterangan: "Loka Indomina",
      gr: 399.0,
      cm: 10,
      js40: 1.20009,
      impurity: 15.0,
      filth: 10,
      temp: 18.1,
      ph: 7,
      moisture: 75.5,
      whitness: 55.6,
      grade: "SS",
    },
    {
      id: 2,
      name: "MAGURO",
      date: "2020-02-10",
      count: 5,
      saldo: 800,
      kg: 2,
      komposisi: "MG+XP+RT",
      keterangan: "PT Fresh Tuna",
      gr: 300.0,
      cm: 8,
      js40: 1.10011,
      impurity: 10.0,
      filth: 8,
      temp: 16.2,
      ph: 6.8,
      moisture: 72.3,
      whitness: 54.2,
      grade: "AA",
    },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleAddProduct = (newProduct) => {
    console.log("Produk baru telah ditambahkan:", newProduct);
    toast.success(`${newProduct.name} Berhasil Ditambahkan!`, {
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
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Barang Masuk");
    XLSX.writeFile(workbook, "Data_Barang_Masuk.xlsx");
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
    <div className="container mx-auto p-4">
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
          <button
            onClick={() => setAddModalOpen(true)}
            className="px-4 py-2 bg-green-500 text-zinc-100 font-bold rounded hover:bg-green-600">
            Tambah Produk
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
        Daftar Barang
      </h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th className="py-2 px-4">No</th>
            <th className="py-2 px-4">Tanggal</th>
            <th className="py-2 px-4">Nama Produk</th>
            <th className="py-2 px-4">Jumlah</th>
            <th className="py-2 px-4">Saldo</th>
            <th className="py-2 px-4">Cm</th>
            <th className="py-2 px-4">JS 40`</th>
            <th className="py-2 px-4">Keterangan</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          {currentData.map((item, index) => (
            <tr key={index} className="border-b border-zinc-600">
              <td className="py-3 px-6">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="py-3 px-6">{item.date}</td>
              <td className="py-3 px-6">{item.name}</td>
              <td className="py-3 px-6">{item.count}</td>
              <td className="py-3 px-6">{item.saldo}</td>
              <td className="py-3 px-6">{item.cm}</td>
              <td className="py-3 px-6">{item.js40}</td>
              <td className="py-3 px-6">{item.keterangan}</td>
              <td className="py-3 px-6">
                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => openEditModal(item)}
                    className="text-green-600 hover:text-green-200"
                    aria-label="Edit">
                    <BsPencil className="text-xl" />
                  </button>
                  <button
                    onClick={() => openDeleteModal(item)}
                    className="text-red-600 hover:text-red-200"
                    aria-label="Delete">
                    <BsTrash className="text-xl" />
                  </button>
                  <button
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

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />

      {/* Modal Components */}
      <ModalAddBarangMasuk
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddProduct}
      />
      {selectedProduct && (
        <ModalEditBarangMasuk
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          product={selectedProduct}
          onSave={handleEditSave}
        />
      )}
      {selectedProduct && (
        <ModalHapusBarangMasuk
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          product={selectedProduct}
          onDelete={handleDelete}
        />
      )}
      {selectedDetailProduct && (
        <ModalDetailBarangMasuk
          isOpen={detailModalOpen}
          onClose={() => setDetailModalOpen(false)}
          product={selectedDetailProduct}
        />
      )}
      <ModalImportExcelBarangMasuk
        isOpen={importModalOpen}
        onClose={() => setImportModalOpen(false)}
        onImport={handleImportExcel}
      />
      <ToastContainer />
    </div>
  );
};

export default TableBarangMasuk;
