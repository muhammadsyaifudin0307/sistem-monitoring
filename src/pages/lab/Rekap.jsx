import TableLab from "../../components/table/TableLab";

const Rekap = () => {
  return (
    <main className="p-4">
      <div className=" flex justify-start items-center p-2 mb-4 ">
        <div className="title text-zinc-100 font-bold text-2xl font-serif ">
          Rekap Lab Bulanan
        </div>
      </div>
      <div className="p-4 bg-zinc-900 rounded-lg">
        <TableLab />
      </div>
      <div className=""></div>
    </main>
  );
};

export default Rekap;
