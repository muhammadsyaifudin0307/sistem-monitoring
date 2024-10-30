import { useState } from "react";
import { AxiosInstace } from "../../../libs/Axios";
import * as XLSX from "xlsx";
import { BsPencil, BsTrash, BsCardList } from "react-icons/bs";
import Pagination from "../pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineSearch } from "react-icons/ai";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import ModalImportExcelLab from "../modal/import excel/ModalImportExcelLab";
import ModalEditLab from "../modal/edit/ModalEditLab";
import ModalAddLab from "../modal/add/ModalAddLab";
import ModalHapusLab from "../modal/hapus/ModalHapusLab";
import ModalDetailLab from "../modal/detail/ModalDetailLab";

const TableLab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState(null);
  const [importModalOpen, setImportModalOpen] = useState(false);

  const handleImportExcel = (file) => {
    console.log("File Excel yang diimpor:", file);
    toast.success(`File ${file.name} berhasil diimpor!`, {
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
  const data = [
    {
      id: 1,
      tanggal: "2020-02-10",
      name: "it",
      gr: 40,
      cm: 10,
      nol: 32,
      gr2: 32,
      cm2: 32,
      puluh4: 32,
      impurity: 34,
      filth: 43,
      temp: 543,
      ph: 5,
      moisture: 32,
      whitness: 12,
      grade: "AA",
    },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleAddProduct = (newProduct) => {
    console.log("Produk baru telah ditambahkan:", newProduct);
    toast.success(`${newProduct.name} Berhasil Ditambahkan!`, {
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
  const openDetailModal = (product) => {
    if (product?.id) {
      setSelectedDetailProduct(product);
      setDetailModalOpen(true);
    } else {
      console.error("Product ID is missing");
    }
  };
  const handleEditSave = (updatedProduct) => {
    console.log("Produk telah diperbarui:", updatedProduct);
    toast.success(`${updatedProduct.name} Berhasil Diperbarui!`, {
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
    setEditModalOpen(false);
  };

  const handleDelete = () => {
    console.log("Produk telah dihapus:", selectedProduct);
    toast.success(`${selectedProduct.name} Berhasil Dihapus!`, {
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
    setDeleteModalOpen(false);
  };

  const exportToExcel = async () => {
    try {
      const response = await AxiosInstace.get("/endpoint");
      const data = response.data;

      const formattedData = data.map((item) => ({
        No: item.id,
        Tanggal: item.tanggal,
        "Jenis Ikan": item.name,
        "Jelly Strength gr": item.gr,
        "Jelly Strength cm": item.cm,
        "Jelly Strength 0°": item.nol,
        "Jelly Strength gr 40°": item.gr2,
        IMPURITY: item.impurity,
        FILTH: item.filth,
        "Temperatur Produk": item.temp,
        PH: item.ph,
        Moisture: item.moisture,
        Whiteness: item.whitness,
        Grade: item.grade,
      }));

      const worksheet = XLSX.utils.json_to_sheet(formattedData, {
        skipHeader: true,
      });
      const workbook = XLSX.utils.book_new();

      XLSX.utils.sheet_add_aoa(
        worksheet,
        [
          [
            "No",
            "Tanggal",
            "Jenis Ikan",
            "Jelly Strength",
            "",
            "",
            "",
            "IMPURITY",
            "FILTH",
            "Temperatur Produk",
            "PH",
            "Moisture",
            "Whiteness",
            "Grade",
          ],
          ["", "", "", "gr", "cm", "0°", "gr 40°", "", "", "", "", "", ""],
        ],
        { origin: "A1" }
      );

      XLSX.utils.sheet_add_json(worksheet, formattedData, {
        skipHeader: true,
        origin: "A3",
      });

      XLSX.utils.book_append_sheet(workbook, worksheet, "Data Hasil Lab");
      XLSX.writeFile(workbook, "Data_Hasil_Lab.xlsx");

      toast.success("Data berhasil diekspor ke Excel!", {
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
    } catch (error) {
      console.error("Gagal mengambil data dari API:", error);
      toast.error("Gagal mengekspor data ke Excel.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-red-500 text-white",
        bodyClassName: "flex items-center",
      });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5 mt-1">
        <div className="flex items-center space-x-4">
          <div className="search-input flex items-center border border-zinc-100 rounded overflow-hidden flex-grow h-10">
            <div className="relative flex-grow h-full">
              <input
                type="search"
                className="p-2 pl-10 w-full h-full outline-none"
                placeholder="Cari Barang..."
              />
              <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-2.5 transform text-gray-400 text-2xl" />
            </div>
          </div>
          <button
            onClick={() => setAddModalOpen(true)}
            className="px-4 py-2 bg-green-500 text-zinc-100 font-bold rounded hover:bg-green-600">
            Tambah Produk
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={exportToExcel}
            className="flex items-center px-4 py-2 bg-blue-500 text-zinc-100 font-bold rounded hover:bg-blue-600">
            <PiMicrosoftExcelLogoFill className="mr-2 text-2xl" />
            Convert to Excel
          </button>
          <button className="flex items-center px-4 py-2 bg-yellow-500 text-zinc-100 font-bold rounded hover:bg-yellow-600">
            <PiMicrosoftExcelLogoFill className="mr-2 text-2xl" />
            Import Excel
          </button>
        </div>
      </div>
      <h1 className="text-xl font-bold text-zinc-100 font-serif mb-4">
        Daftar Barang
      </h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th rowSpan="2" className="border border-zinc-100">
              No
            </th>
            <th rowSpan="2" className="border border-zinc-100">
              Tanggal
            </th>
            <th rowSpan="2" className="border border-zinc-100">
              Jenis Produk
            </th>
            <th colSpan="6" className="border border-zinc-100">
              <span className=" text-zinc-100">Jelly Streight</span>
            </th>
            <th className="border border-zinc-100" rowSpan="2">
              Grade
            </th>
            <th className="border border-zinc-100" rowSpan="2">
              Action
            </th>
          </tr>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <td className="border border-zinc-100 font-bold">gr</td>
            <td className="border border-zinc-100 font-bold">cm</td>
            <td className="border border-zinc-100 font-bold">0</td>
            <td className="border border-zinc-100 font-bold">gr</td>
            <td className="border border-zinc-100 font-bold">cm</td>
            <td className="border border-zinc-100 font-bold">40</td>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          {currentData.map((item, index) => (
            <tr key={item.id} className="border-b border-zinc-600">
              <td className=" ">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="px-2 py-3">{item.tanggal}</td>
              <td className="px-2 py-3">{item.name}</td>
              <td className="px-2 py-3">{item.gr}</td>
              <td className="px-2 py-3">{item.cm}</td>
              <td className="px-2 py-3">{item.nol}</td>
              <td className="px-2 py-3">{item.gr2}</td>
              <td className="px-2 py-3">{item.cm2}</td>
              <td className="px-2 py-3">{item.puluh4}</td>
              <td className="px-2 py-3">{item.grade}</td>
              <td className="px-2 py-3">
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
                  <button
                    onClick={() => openDetailModal(item)}
                    className="text-blue-600 hover:text-blue-200"
                    aria-label="Detail">
                    <BsCardList className="text-2xl" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
      <ModalAddLab
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddProduct}
      />
      {selectedProduct && (
        <ModalEditLab
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          product={selectedProduct}
          onSave={handleEditSave}
        />
      )}
      {selectedProduct && (
        <ModalHapusLab
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          product={selectedProduct}
          onDelete={handleDelete}
        />
      )}
      {selectedDetailProduct && (
        <ModalDetailLab
          isOpen={detailModalOpen}
          onClose={() => setDetailModalOpen(false)}
          product={selectedDetailProduct}
        />
      )}
      <ModalImportExcelLab
        isOpen={importModalOpen}
        onClose={() => setImportModalOpen(false)}
        onImport={handleImportExcel}
      />
      <ToastContainer />
    </div>
  );
};
export default TableLab;
