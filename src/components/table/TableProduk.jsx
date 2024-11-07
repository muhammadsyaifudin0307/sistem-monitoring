import { useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalEditProduk from "../modal/edit/ModalEditProduk";
import ModalHapusProduk from "../modal/hapus/ModalHapusProduk";
import ModalAddProduk from "../modal/add/ModalAddProduk";
import { Tooltip } from "react-tooltip";
import { IoEnterOutline, IoExitOutline } from "react-icons/io5";

const TableProduk = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [data, setData] = useState([
    { id: 1, code: "S0019", name: "Hans Burger" },
    { id: 2, code: "S0020", name: "Jolina Angelle" },
    // Tambahkan data produk lainnya sesuai kebutuhan
  ]);

  const [barangMasuk, setBarangMasuk] = useState([]);
  const [barangKeluar, setBarangKeluar] = useState([]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const navigate = useNavigate();

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

  const handleEditSave = (updatedProduct) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === updatedProduct.id ? updatedProduct : item
      )
    );
    toast.success(`${updatedProduct.name} berhasil diperbarui!`);
    setEditModalOpen(false);
  };

  const handleDelete = () => {
    setData((prevData) =>
      prevData.filter((item) => item.id !== selectedProduct.id)
    );
    toast.success(`${selectedProduct.name} berhasil dihapus!`);
    setDeleteModalOpen(false);
  };

  const handleAddProduct = (newProduct) => {
    setData((prevData) => [
      ...prevData,
      { ...newProduct, id: prevData.length + 1 },
    ]);
    toast.success(`${newProduct.name} berhasil ditambahkan!`);
    setAddModalOpen(false);
  };

  const handleBarangMasuk = (product) => {
    setBarangMasuk((prev) => [...prev, product]);
    toast.success(`${product.name} berhasil ditambahkan ke Barang Masuk!`, {
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

  const handleBarangKeluar = (product) => {
    setBarangKeluar((prev) => [...prev, product]);
    toast.success(`${product.name} berhasil ditambahkan ke Barang Keluar!`, {
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

  const goToBarangMasukPage = () => {
    navigate("/incoming", { state: { barangMasuk } });
  };

  const goToBarangKeluarPage = () => {
    navigate("/outgoing", { state: { barangKeluar } });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-zinc-100 font-serif">
          Daftar Produk
        </h1>
        <ToastContainer />
        <div className="flex items-center mb-4 gap-3">
          <button
            data-tooltip-id="masukTooltip"
            data-tooltip-content="Lihat Barang Masuk"
            onClick={goToBarangMasukPage}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 font-bold flex items-center gap-2">
            <IoEnterOutline className="text-2xl" />
          </button>

          <button
            data-tooltip-id="keluarTooltip"
            data-tooltip-content="Lihat Barang Keluar"
            onClick={goToBarangKeluarPage}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 font-bold flex items-center gap-2">
            <IoExitOutline className="text-2xl" />
          </button>
          <button
            onClick={() => setAddModalOpen(true)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 font-bold">
            Tambah Produk
          </button>
        </div>
      </div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th className="py-2 px-4">No</th>
            <th className="py-2 px-4">Kode Barang</th>
            <th className="py-2 px-4">Nama Produk</th>
            <th className="py-2 px-4">Actions</th>
            <th className="py-2 px-4">Opsi</th>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          {currentData.map((item, index) => (
            <tr key={item.id} className="border-b border-zinc-600">
              <td className="py-3 px-6">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="py-3 px-6">{item.code}</td>
              <td className="py-3 px-6">{item.name}</td>
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
                </div>
              </td>
              <td className="py-3 px-6">
                <div className="flex items-center justify-center space-x-2">
                  <button
                    data-tooltip-id="masukTooltip"
                    data-tooltip-content="Tambahkan ke Barang Masuk"
                    onClick={() => handleBarangMasuk(item)}
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 font-bold">
                    Barang Masuk
                  </button>
                  <button
                    data-tooltip-id="keluarTooltip"
                    data-tooltip-content="Tambahkan ke Barang Keluar"
                    onClick={() => handleBarangKeluar(item)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 font-bold">
                    Barang Keluar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Tooltip id="masukTooltip" place="top" type="dark" effect="solid" />
      <Tooltip id="keluarTooltip" place="top" type="dark" effect="solid" />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />

      {selectedProduct && (
        <ModalEditProduk
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          product={selectedProduct}
          onSave={handleEditSave}
        />
      )}

      {selectedProduct && (
        <ModalHapusProduk
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          product={selectedProduct}
          onDelete={handleDelete}
        />
      )}

      <ModalAddProduk
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
};

export default TableProduk;
