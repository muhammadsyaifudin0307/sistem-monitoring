import { useState } from "react";
import PropTypes from "prop-types";

const ModalAddProses = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    jam: "",
    jenisProduk: "",
    organoleptik: "",
    tempOfFishReceiving: "",
    reject: "",
    tempOfFishDeheading: "",
    tempOfProductWashing: "",
    tempOfProductMeatSeparating: "",
    ph: "",
    tempOfProductLeaching: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
    setFormData({
      jam: "",
      jenisProduk: "",
      organoleptik: "",
      tempOfFishReceiving: "",
      reject: "",
      tempOfFishDeheading: "",
      tempOfProductWashing: "",
      tempOfProductMeatSeparating: "",
      ph: "",
      tempOfProductLeaching: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-zinc-950 opacity-50"
        onClick={onClose}></div>
      <div className="hide-scrollbar bg-zinc-900 rounded-lg p-6 z-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto ">
        <h2 className="text-xl font-bold mb-4 text-zinc-100">
          Tambah Data Proses
        </h2>
        <form className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Jam
            </label>
            <input
              type="time"
              name="jam"
              value={formData.jam}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Jenis Produk
            </label>
            <select
              name="name"
              value={formData.jenisProduk}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="" disabled>
                Pilih Produk
              </option>
              <option value="Produk A"></option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Organoleptik (Receiving)
            </label>
            <input
              type="number"
              name="organoleptik"
              value={formData.organoleptik}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Fish (Receiving)
            </label>
            <input
              type="number"
              name="tempOfFishReceiving"
              value={formData.tempOfFishReceiving}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Reject (Receiving)
            </label>
            <input
              type="number"
              name="reject"
              value={formData.reject}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Fish (Deheading)
            </label>
            <input
              type="number"
              name="tempOfFishDeheading"
              value={formData.tempOfFishDeheading}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Product (Washing I)
            </label>
            <input
              type="number"
              name="tempOfProductWashing"
              value={formData.tempOfProductWashing}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Product (Meat Separating)
            </label>
            <input
              type="number"
              name="tempOfProductMeatSeparating"
              value={formData.tempOfProductMeatSeparating}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              PH (Leaching)
            </label>
            <input
              type="number"
              name="ph"
              value={formData.ph}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Product (Leaching)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Product (Refinary)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Temp of Product (Mixing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Bad Smell (Mixing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Bad Colour (Mixing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Moiture (Forming)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Themp Of Product (Forming)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Foreign matterial (Forming)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Themp of CPF (Freezing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Metal Calibration (Packing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Metal inclusion/ Reject (Packing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Labeling (Packing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Themp of Anteroom (Storing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Themp of CSR 1(Storing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Themp of CSR 2(Storing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Product dehydration (Storing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Condensation (Storing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Container Check (Stuffing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Quality (Stuffing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Broken (Stuffing)
            </label>
            <input
              type="number"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-zinc-100">
              Remark
            </label>
            <input
              type="text"
              name="tempOfProductLeaching"
              value={formData.tempOfProductLeaching}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </form>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-zinc-300 hover:bg-zinc-400 text-zinc-800 py-2 px-4 rounded mr-2 font-bold">
            Batal
          </button>
          <button
            onSubmit={handleSubmit}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-bold">
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
};
ModalAddProses.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
export default ModalAddProses;