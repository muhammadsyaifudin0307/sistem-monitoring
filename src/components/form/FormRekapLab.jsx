import { useState, useRef } from "react";
import TableBau from "../table/TableBau";
import TableGel from "../table/TableGel";
import TableWhiteness from "../table/TableWhiteness";
import TableMoisture from "../table/TableMoisture";
import TableProdukUji from "../table/TableProdukUji";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

import * as XLSX from "xlsx";
import { toast } from "react-toastify";

const FormRekapLab = () => {
  const [activeMonth, setActiveMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Menggunakan useRef untuk referensi setiap tabel
  const produkUjiRef = useRef();
  const gelRef = useRef();
  const moistureRef = useRef();
  const whitenessRef = useRef();
  const bauRef = useRef();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleMonthChange = (month) => setActiveMonth(month);
  const handleYearChange = (event) => setSelectedYear(event.target.value);

  const exportToExcel = () => {
    try {
      // Mengambil data dari setiap tabel
      const produkUjiData = produkUjiRef.current?.getData() || [];
      const gelData = gelRef.current?.getData() || [];
      const moistureData = moistureRef.current?.getData() || [];
      const whitenessData = whitenessRef.current?.getData() || [];
      const bauData = bauRef.current?.getData() || [];

      // Membuat workbook dan worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(
        workbook,
        XLSX.utils.json_to_sheet(produkUjiData),
        "Produk Uji"
      );
      XLSX.utils.book_append_sheet(
        workbook,
        XLSX.utils.json_to_sheet(gelData),
        "Gel"
      );
      XLSX.utils.book_append_sheet(
        workbook,
        XLSX.utils.json_to_sheet(moistureData),
        "Moisture"
      );
      XLSX.utils.book_append_sheet(
        workbook,
        XLSX.utils.json_to_sheet(whitenessData),
        "Whiteness"
      );
      XLSX.utils.book_append_sheet(
        workbook,
        XLSX.utils.json_to_sheet(bauData),
        "Bau"
      );

      // Menyimpan workbook ke file Excel
      XLSX.writeFile(workbook, `Rekap_Lab_${selectedYear}_${activeMonth}.xlsx`);
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
      console.error("Export to Excel failed:", error);
      toast.error("Gagal mengekspor data!");
    }
  };

  return (
    <main className="p-4 bg-zinc-900 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-zinc-100 font-serif">
          Rekap Lab
        </h1>
        <div className="flex justify-end  gap-2">
          <button
            onClick={exportToExcel}
            className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            <PiMicrosoftExcelLogoFill className="mr-2 text-2xl" />
            Convert to Excel
          </button>
          <input
            type="number"
            onChange={handleYearChange}
            value={selectedYear}
            min="1900"
            max={new Date().getFullYear()}
            className="text-center border border-zinc-300 p-2 w-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="mb-6 flex justify-between gap-1">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => handleMonthChange(month)}
            className={`font-semibold px-[13px] py-2 rounded-md transition-colors duration-200 ${
              activeMonth === month
                ? "bg-zinc-600 text-zinc-100"
                : "bg-zinc-100 text-zinc-800 hover:bg-zinc-300"
            }`}>
            {month}
          </button>
        ))}
      </div>
      <div className="space-y-8">
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Produk Uji</h2>
          <TableProdukUji
            ref={produkUjiRef}
            month={activeMonth}
            year={selectedYear}
          />
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Gel</h2>
          <TableGel ref={gelRef} month={activeMonth} year={selectedYear} />
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Moisture</h2>
          <TableMoisture
            ref={moistureRef}
            month={activeMonth}
            year={selectedYear}
          />
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Whiteness</h2>
          <TableWhiteness
            ref={whitenessRef}
            month={activeMonth}
            year={selectedYear}
          />
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Bau</h2>
          <TableBau ref={bauRef} month={activeMonth} year={selectedYear} />
        </div>
      </div>
    </main>
  );
};

export default FormRekapLab;
