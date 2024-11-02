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

  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - i
  );

  const handleMonthChange = (month) => setActiveMonth(month);
  const handleYearChange = (event) => setSelectedYear(event.target.value);

  return (
    <main>
      <div className="mb-4">
        <select
          onChange={handleYearChange}
          value={selectedYear}
          className="border p-2 rounded">
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 flex gap-2 overflow-x-auto">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => handleMonthChange(month)}
            className={`p-2 ${
              activeMonth === month ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}>
            {month}
          </button>
        ))}
      </div>
      <div className="mb-10">
        <TableProdukUji month={activeMonth} year={selectedYear} />
      </div>
      <div className="mb-10">
        <TableGel month={activeMonth} year={selectedYear} />
      </div>
      <div className="mb-10">
        <TableMoisture month={activeMonth} year={selectedYear} />
      </div>
      <div className="mb-10">
        <TableWhiteness month={activeMonth} year={selectedYear} />
      </div>
      <div className="mb-10">
        <TableBau month={activeMonth} year={selectedYear} />
      </div>
    </main>
  );
};

export default FormRekapLab;
