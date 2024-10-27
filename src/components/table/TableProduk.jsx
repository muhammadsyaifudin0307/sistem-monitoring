import { useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import Pagination from "../pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalEditProduk from "../modal/edit/ModalEditProduk";
import ModalHapusProduk from "../modal/hapus/ModalHapusProduk";
import ModalAddProduk from "../modal/add/ModalAddProduk";

const TableProduk = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false); // State untuk modal add produk
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [data, setData] = useState([
    // Gunakan state untuk data produk
    {
      id: 1,
      code: "S0019",
      name: "Hans Burger",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      code: "S0020",
      name: "Jolina Angelle",
      img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    // ... Tambahkan data produk lainnya di sini
  ]);

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

  const handleEditSave = (updatedProduct) => {
    // Update logika produk di sini
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
    ]); // Tambahkan ID baru
    toast.success(`${newProduct.name} berhasil ditambahkan!`);
    setAddModalOpen(false); // Tutup modal setelah produk ditambahkan
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold text-zinc-100 font-serif">
          Daftar Produk
        </h1>
        <ToastContainer />
        <button
          onClick={() => setAddModalOpen(true)}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 font-bold">
          Tambah Produk
        </button>
      </div>

      <table className="min-w-full table-auto ">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th className="py-2 px-4">No</th>
            <th className="py-2 px-4">Kode Barang</th>
            <th className="py-2 px-4">Foto</th>
            <th className="py-2 px-4">Nama Produk</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          {currentData.map((item, index) => (
            <tr key={item.id} className="border-b border-zinc-600">
              <td className="py-3 px-6">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="py-3 px-6">{item.code}</td>
              <td className="py-3 px-6">
                <img
                  className="w-20 h-20 rounded-md mx-auto"
                  src={item.img}
                  alt={item.name}
                />
              </td>
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

      {/* Modal Edit */}
      {selectedProduct && (
        <ModalEditProduk
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          product={selectedProduct}
          onSave={handleEditSave}
        />
      )}

      {/* Modal Hapus */}
      {selectedProduct && (
        <ModalHapusProduk
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          product={selectedProduct}
          onDelete={handleDelete}
        />
      )}

      {/* Modal Add Produk */}
      <ModalAddProduk
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddProduct} // Pastikan untuk mengoper fungsi onAdd
      />
    </div>
  );
};

export default TableProduk;
