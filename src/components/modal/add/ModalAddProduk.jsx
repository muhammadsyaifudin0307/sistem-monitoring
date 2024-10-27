import React from 'react';
import PropTypes from 'prop-types';

const ModalAddProduk = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = React.useState('');
  const [code, setCode] = React.useState('');
  const [imageFile, setImageFile] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { name, code, img: imageFile };
    onAdd(newProduct);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-950 bg-opacity-50">
      <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-zinc-100 mb-6 text-center">Tambah Produk</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-zinc-100 font-medium mb-2">Nama Produk</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Produk"
              className="p-2 w-full bg-zinc-100 text-zinc-900 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="code" className="block text-zinc-100 font-medium mb-2">Kode Produk</label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Kode Produk"
              className="p-2 w-full bg-zinc-100 text-zinc-900 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="image" className="block text-zinc-100 font-medium mb-2">Upload Gambar</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImageFile(URL.createObjectURL(e.target.files[0]))}
              className="p-2 w-full bg-zinc-100 text-zinc-900 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button type="submit" className="bg-green-600 text-zinc-100 py-2 px-4 rounded hover:bg-green-700 transition font-bold">
              Simpan
            </button>
            <button type="button" onClick={onClose} className="bg-zinc-600 text-zinc-100 py-2 px-4 rounded hover:bg-zinc-700 transition font-bold">
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ModalAddProduk.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ModalAddProduk;
