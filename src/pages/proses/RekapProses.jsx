import { useState } from "react";
import RekapBulanan from "../../components/tabs/RekapBulanan";
import RekapHarian from "../../components/tabs/RekapHarian";
const RekapProses = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <div className="p-4">
      {/* Tab Navigasi */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("monthly")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "monthly"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}>
          Rekap Bulanan
        </button>
        <button
          onClick={() => setActiveTab("daily")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "daily"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}>
          Rekap Harian
        </button>
      </div>

      {/* Konten Tab */}
      <div className="mt-4">
        {activeTab === "monthly" ? <RekapBulanan /> : <RekapHarian />}
      </div>
    </div>
  );
};

export default RekapProses;
