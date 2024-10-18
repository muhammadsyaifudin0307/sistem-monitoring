// components/modal/add/ModalAddBarangMasuk.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const ModalAddBarangMasuk = ({ isOpen, onClose, onAdd }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    date: '',
    count: '',
    satuan: '',
    pengirim: '',
    keterangan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAdd = () => {
    onAdd(newProduct);
    setNewProduct({
      name: '',
      date: '',
      count: '',
      satuan: '',
      pengirim: '',
      keterangan: '',
    }); // Reset form setelah produk ditambahkan
    onClose();
  };

  if (!isOpen) return null; // Modal hanya ditampilkan jika isOpen bernilai true

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-zinc-950 opacity-50" onClick={onClose}></div>
      <div className="bg-zinc-900 rounded-lg p-6 z-50 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-zinc-100">Tambah Produk</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-100">Nama Produk</label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Nama Produk"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">Tanggal</label>
            <input
              type="date"
              name="date"
              value={newProduct.date}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">Jumlah</label>
            <input
              type="number"
              name="count"
              value={newProduct.count}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Jumlah Produk"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">Satuan</label>
            <input
              type="text"
              name="satuan"
              value={newProduct.satuan}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Satuan (pcs, kg, dll)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">Pengirim</label>
            <input
              type="text"
              name="pengirim"
              value={newProduct.pengirim}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Nama Pengirim"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">Keterangan</label>
            <input
              type="text"
              name="keterangan"
              value={newProduct.keterangan}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Keterangan Opsional"
            />
          </div>
        </form>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="font-bold mr-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Batal
          </button>
          <button
            onClick={handleAdd}
            className="font-bold px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
};
ModalAddBarangMasuk.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Validasi bahwa isOpen harus berupa boolean
    onClose: PropTypes.func.isRequired, // Validasi bahwa onClose harus berupa fungsi
    onAdd: PropTypes.func.isRequired,   // Validasi bahwa onAdd harus berupa fungsi
  };

export default ModalAddBarangMasuk;
