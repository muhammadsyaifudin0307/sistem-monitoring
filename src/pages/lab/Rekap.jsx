import TableRekapLab from "../../components/table/TableRekapLab";
import TableWhiteness from "../../components/table/TableWhiteness";
import TableGel from "../../components/table/TableGel";
import TableBau from "../../components/table/TableBau";

const Rekap = () => {
  return (
    <main className="p-4">
      <div className=" flex justify-start items-center p-2 mb-4 ">
        <div className="title text-zinc-100 font-bold text-2xl font-serif ">
          Rekap Lab Bulanan
        </div>
      </div>
      <div className="p-6 bg-zinc-900 rounded-lg">
        <div className="title text-zinc-100 font-bold text-lg mb-4">
          Produks Yang Diuji
        </div>
        <TableRekapLab />
      </div>
      <div className="p-6 bg-zinc-900 rounded-lg mt-8">
        <div className="title text-zinc-100 font-bold text-lg mb-4">
          {"WHITNESS <50"}
        </div>
        <TableWhiteness />
      </div>
      <div className="p-6 bg-zinc-900 rounded-lg mt-8">
        <div className="title text-zinc-100 font-bold text-lg mb-4">
          {"GEL STRENGHT <300"}
        </div>
        <TableGel />
      </div>
      <div className="p-6 bg-zinc-900 rounded-lg mt-8">
        <div className="title text-zinc-100 font-bold text-lg mb-4">
          {"Bau"}
        </div>
        <TableBau />
      </div>
    </main>
  );
};

export default Rekap;
