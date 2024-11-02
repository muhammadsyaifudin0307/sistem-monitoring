import FormRekapLab from "../../components/form/FormRekapLab";
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
        <FormRekapLab />
      </div>
    </main>
  );
};

export default Rekap;
