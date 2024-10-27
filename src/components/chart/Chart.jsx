import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ["Barang Keluar", "Barang Masuk", "Barang Kembali"],
    datasets: [
      {
        label: "Jumlah Barang",
        data: [30, 50, 200],
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "rgba(200, 200, 200, 0.3)",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200, 200, 200, 0.3)",
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-96 p-4 bg-transparent">
      <div className="w-full h-full max-w-4xl">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
