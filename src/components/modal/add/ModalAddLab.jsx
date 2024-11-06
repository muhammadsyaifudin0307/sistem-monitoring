import { useState } from "react";
import PropTypes from "prop-types";

const ModalAddLab = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    tanggal: "",
    name: "",
    gr: "",
    cm: "",
    nol: "",
    gr2: "",
    cm2: "",
    puluh4: "",
    impurity: "",
    filth: "",
    temp: "",
    ph: "",
    moisture: "",
    whitness: "",
    grade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };

    if (name === "gr" || name === "cm") {
      const grValue = parseFloat(updatedFormData.gr) || 0;
      const cmValue = parseFloat(updatedFormData.cm) || 0;
      updatedFormData.nol = (grValue * cmValue).toFixed(2);
    }

    if (name === "gr2" || name === "cm2") {
      const gr2Value = parseFloat(updatedFormData.gr2) || 0;
      const cm2Value = parseFloat(updatedFormData.cm2) || 0;
      updatedFormData.puluh4 = (gr2Value * cm2Value).toFixed(2);
    }

    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.tanggal) {
      alert("Nama Produk dan Tanggal wajib diisi.");
      return;
    }
    onAdd(formData);
    setFormData({
      tanggal: "",
      name: "",
      gr: "",
      cm: "",
      nol: "",
      gr2: "",
      cm2: "",
      puluh4: "",
      impurity: "",
      filth: "",
      temp: "",
      ph: "",
      moisture: "",
      whitness: "",
      grade: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      role="dialog"
      aria-modal="true">
      <div
        className="fixed inset-0 bg-zinc-950 opacity-50"
        onClick={onClose}
        aria-hidden="true"></div>
      <div className="hide-scrollbar bg-zinc-900 rounded-lg p-6 z-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-6 text-zinc-100 text-center">
          Tambah Lab
        </h2>
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Nama Produk
            </label>
            <select
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="" disabled>
                Pilih Produk
              </option>
              <option value="Produk 1">Produk 1</option>
              <option value="Produk 2">Produk 2</option>
              <option value="Produk 3">Produk 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Tanggal
            </label>
            <input
              type="date"
              name="tanggal"
              onChange={handleChange}
              value={formData.tanggal}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Gr
            </label>
            <input
              type="number"
              name="gr"
              onChange={handleChange}
              value={formData.gr}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Cm
            </label>
            <input
              type="number"
              name="cm"
              onChange={handleChange}
              value={formData.cm}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Nol */}
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              0`
            </label>
            <input
              type="number"
              name="nol"
              value={formData.nol}
              readOnly
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Gr
            </label>
            <input
              type="number"
              name="gr2"
              onChange={handleChange}
              value={formData.gr2}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Cm
            </label>
            <input
              type="number"
              name="cm2"
              onChange={handleChange}
              value={formData.cm2}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              40`
            </label>
            <input
              type="number"
              name="puluh4"
              value={formData.puluh4}
              readOnly
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Impurity
            </label>
            <input
              type="number"
              name="cm2"
              onChange={handleChange}
              value={formData.cm2}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Filth
            </label>
            <input
              type="number"
              name="cm2"
              onChange={handleChange}
              value={formData.cm2}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>{" "}
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Themp of product
            </label>
            <input
              type="number"
              name="Themp_of_product"
              onChange={handleChange}
              value={formData.cm2}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              pH
            </label>
            <input
              type="number"
              name="ph"
              onChange={handleChange}
              value={formData.ph}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Moisture
            </label>
            <input
              type="number"
              name="cm2"
              onChange={handleChange}
              value={formData.cm2}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Whiteness
            </label>
            <input
              type="number"
              name="cm2"
              onChange={handleChange}
              value={formData.cm2}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-100">
              Remark
            </label>
            <input
              type="number"
              name="remark"
              onChange={handleChange}
              value={formData.grade}
              className="mt-1 p-3 w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </form>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="font-bold mr-4 px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="font-bold px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
};

ModalAddLab.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ModalAddLab;
