import { useState } from 'react';
import { BsPencil, BsTrash } from "react-icons/bs";
import Pagination from '../pagination/Pagination';
import { ToastContainer, toast } from 'react-toastify'; // Tambahkan toast di sini
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSearch } from 'react-icons/ai';
import ModalEditBarangMasuk from '../modal/edit/ModalEditBarangMasuk';
import ModalHapusBarangMasuk from '../modal/hapus/ModalHapusBarangMasuk';

const TableStok = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const data = [
    { id: 1, name: 'Hans Burckcwnenidcnwieger', date: '12-8-2024' , count: 1 , satuan:'pcs', pengirim :'PT Sinar Mas Jaya' , keterangan:'berhasil'},
    { id: 2, name: 'Hans Burcsoncsger', date: '12-8-2024' , count: 1 , satuan:'pcs', pengirim :'PT Sinar Mas Jaya' , keterangan:'berhasil'},
    { id: 3, name: 'Hans Bucosdnodcnnonooorger', date: '12-8-2024' , count: 1 , satuan:'pcs', pengirim :'PT Sinar Mas Jaya' , keterangan:'berhasil'},
   ];

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
    console.log("Produk telah diperbarui:", updatedProduct);
    toast.success(`${updatedProduct.name} berhasil diperbarui!`); 
    setEditModalOpen(false);
  };

  const handleDelete = () => {
    // Hapus logika produk di sini
    console.log("Produk telah dihapus:", selectedProduct);
    toast.success(`${selectedProduct.name} berhasil dihapus!`); // Tampilkan toast sukses
    setDeleteModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-5 mt-1 ">
        {/* Search Input */}
        <div className="search-input flex items-center border border-zinc-100 rounded overflow-hidden flex-grow h-10" >
          <div className="relative flex-grow h-full">
            <input
              type="search"
              className="p-2 pl-10 w-full h-full outline-none"
              placeholder="Cari Barang..."
              style={{ height: '100%' }}
            />
            <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-2.5 transform text-gray-400 text-2xl" />
          </div>
        </div>
        <button
          onClick=''
          className="ml-4 px-4 py-2 bg-green-500 text-zinc-100 font-bold rounded hover:bg-green-600"
        >
          Tambah Produk
        </button>

        <ToastContainer />
      </div>
        <h1 className="text-xl font-bold text-zinc-100 font-serif mb-4">Daftar Barang</h1>
      <table className="min-w-full table-auto ">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th className="py-2 px-4">No</th>
            <th className="py-2 px-4">Tanggal</th>
            <th className="py-2 px-4">Lot</th>
            <th className="py-2 px-4">Nama Produk</th>
            <th className="py-2 px-4">Jumlah</th>
            <th className="py-2 px-4">Satuan</th>
            <th className="py-2 px-4">Keterangan</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          {currentData.map((item, index) => (
            <tr key={item.id} className="border-b border-zinc-600">
              <td className="py-3 px-6">{(currentPage - 1) * itemsPerPage + index + 1}</td>
              
              <td className="py-3 px-6">{item.date}</td>
              <td className="py-3 px-6">{item.count}</td>
              <td className="py-3 px-6">{item.name}</td>
              <td className="py-3 px-6">{item.count}</td>
              <td className="py-3 px-6">{item.satuan}</td>
              <td className="py-3 px-6">{item.keterangan}</td>
              <td className="py-3 px-6">
                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => openEditModal(item)}
                    className="text-green-600 hover:text-green-200"
                    aria-label="Edit"
                  >
                    <BsPencil className="text-xl" />
                  </button>
                  <button
                    onClick={() => openDeleteModal(item)}
                    className="text-red-600 hover:text-red-200"
                    aria-label="Delete"
                  >
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

    </div>
  );
};

export default TableStok;
