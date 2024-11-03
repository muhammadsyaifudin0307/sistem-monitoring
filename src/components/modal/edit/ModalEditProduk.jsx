import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const ModalEditProduk = ({ isOpen, onClose, product, onSave }) => {
  const [name, setName] = React.useState(product.name);
  const [code, setCode] = React.useState(product.code || ""); // State to hold the product code

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("kode", code); // Append the product code

    console.log("Saving product:", { ...product, name, code }); // Log the product details being saved
    onSave({ ...product, name, code }); // Save product with new name, code, and image
    onClose(); // Close the modal after saving
  };

  React.useEffect(() => {
    if (isOpen) {
      console.log("Modal opened with product:", product);
    } else {
      console.log("Modal closed");
    }
  }, [isOpen, product]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-950 bg-opacity-50">
      <div className="bg-zinc-900 rounded-lg p-4">
        <h2 className="text-xl font-bold text-zinc-100 mb-4">Edit Produk</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-zinc-100 mb-2 font-bold">Nama Produk</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log("Name updated:", e.target.value); // Log the updated name
              }}
              className="p-2 w-full bg-zinc-100 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-zinc-100 mb-2 font-bold">Kode Produk</label>
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                console.log("Kode updated:", e.target.value); // Log the updated code
              }}
              className="p-2 w-full bg-zinc-100 rounded"
              required
            />
          </div>

          <div className="btn-action flex justify-end items-center">
            <button
              type="submit"
              className="font-bold bg-green-600 text-zinc-100 py-2 px-4 rounded">
              Simpan
            </button>
            <button
              type="button"
              onClick={onClose}
              className="font-bold bg-zinc-600 text-zinc-100 ml-2 py-2 px-4 rounded">
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Add prop types validation
ModalEditProduk.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean and is required
  onClose: PropTypes.func.isRequired, // onClose should be a function and is required
  product: PropTypes.shape({
    id: PropTypes.number.isRequired, // product.id should be a number and is required
    name: PropTypes.string.isRequired, // product.name should be a string and is required
    code: PropTypes.string, // product.kode should be a string but is optional
  }).isRequired, // product should be an object and is required
  onSave: PropTypes.func.isRequired, // onSave should be a function and is required
};

export default ModalEditProduk;
