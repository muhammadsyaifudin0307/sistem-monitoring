import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ModalEditBarangKembali = ({ isOpen, onClose, product = {}, onSave }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product || {});

  useEffect(() => {
    if (product) {
      setUpdatedProduct(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSave = () => {
    onSave(updatedProduct);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-zinc-950 opacity-50"
        onClick={onClose}></div>
      <div className="hide-scrollbar bg-zinc-900 rounded-lg p-6 z-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-zinc-100">
          Edit Barang Kembali
        </h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Nama Barang Kembali
            </label>
            <select
              name="name"
              value={updatedProduct.name || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="" disabled>
                Pilih Barang
              </option>
              <option value="Produk A">Produk A</option>
            </select>
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Tanggal
            </label>
            <input
              type="date"
              name="date"
              value={updatedProduct.date || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Jumlah
            </label>
            <input
              type="number"
              name="count"
              value={updatedProduct.count || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-zinc-100">
              Keterangan
            </label>
            <input
              type="text"
              name="keterangan"
              value={updatedProduct.keterangan || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-zinc-100">
              Penerima Barang
            </label>
            <input
              type="text"
              name="penerima_barang"
              value={updatedProduct.penerima_barang || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </form>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-4 rounded mr-2">
            Simpan
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

ModalEditBarangKembali.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.object,
  onSave: PropTypes.func.isRequired,
};

export default ModalEditBarangKembali;
