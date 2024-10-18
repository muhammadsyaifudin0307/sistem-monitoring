import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ModalEditBarangMasuk = ({ isOpen, onClose, product, onSave }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  // Gunakan useEffect agar updatedProduct tersinkronisasi saat product berubah
  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSave = () => {
    onSave(updatedProduct);
  };

  if (!isOpen) return null; // Modal tidak ditampilkan jika isOpen bernilai false

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-zinc-950 opacity-50" onClick={onClose}></div>
      <div className="bg-zinc-900 rounded-lg p-6 z-50 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-zinc-100">Edit Produk</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-base font-medium text-zinc-100">Nama Produk</label>
            <input
              type="text"
              name="name"
              value={updatedProduct.name || ''}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">Tanggal</label>
            <input
              type="date"
              name="date"
              value={updatedProduct.date || ''}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">Jumlah</label>
            <input
              type="number"
              name="count"
              value={updatedProduct.count || ''}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">Satuan</label>
            <input
              type="text"
              name="satuan"
              value={updatedProduct.satuan || ''}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">Pengirim</label>
            <input
              type="text"
              name="keterangan"
              value={updatedProduct.pengirim || ''}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">Keterangan</label>
            <input
              type="text"
              name="keterangan"
              value={updatedProduct.keterangan || ''}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
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
            onClick={handleSave}
            className="font-bold px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

// Menambahkan PropTypes untuk validasi
ModalEditBarangMasuk.propTypes = {
  isOpen: PropTypes.bool.isRequired,     // isOpen harus berupa boolean dan wajib diisi
  onClose: PropTypes.func.isRequired,    // onClose harus berupa fungsi dan wajib diisi
  product: PropTypes.shape({             // product harus berupa objek dengan struktur yang ditentukan
    name: PropTypes.string,
    date: PropTypes.string,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    satuan: PropTypes.string,
    pengirim: PropTypes.string,
    keterangan: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,     // onSave harus berupa fungsi dan wajib diisi
};

export default ModalEditBarangMasuk;
