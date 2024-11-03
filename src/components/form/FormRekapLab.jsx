import { useState } from "react";
import TableBau from "../table/TableBau";
import TableGel from "../table/TableGel";
import TableWhiteness from "../table/TableWhiteness";
import TableMoisture from "../table/TableMoisture";
import TableProdukUji from "../table/TableProdukUji";

const FormRekapLab = () => {
  const [activeMonth, setActiveMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

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

  return (
    <main className="p-4 bg-zinc-900 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-zinc-100 font-serif">
          Rekap Lab
        </h1>
        <input
          type="number"
          onChange={handleYearChange}
          value={selectedYear}
          min="1900"
          max={new Date().getFullYear()}
          className="text-center border border-zinc-300 p-2 w-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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
          <h2 className="text-lg font-medium text-zinc-200 mb-4 ">
            Produk Uji
          </h2>
          <TableProdukUji month={activeMonth} year={selectedYear} />
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Gel</h2>
          <TableGel month={activeMonth} year={selectedYear} />
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Moisture</h2>
          <TableMoisture month={activeMonth} year={selectedYear} />
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Whiteness</h2>
          <TableWhiteness month={activeMonth} year={selectedYear} />
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <h2 className="text-lg font-medium text-zinc-200 mb-4">Bau</h2>
          <TableBau month={activeMonth} year={selectedYear} />
        </div>
      </div>
    </main>
  );
};

export default FormRekapLab;
