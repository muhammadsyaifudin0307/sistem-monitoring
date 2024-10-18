import CardStokSecond from "../../components/card/CardStokSecond";

const  Outgoing = () => {
    return (
      <main className="p-4">
        <div className=" flex justify-between items-center">
          <div className="title text-zinc-100 font-bold text-2xl font-serif ">
            Barang Keluar
          </div>
          <div className="total-stok w-1/6"><CardStokSecond /></div>
        </div>
      </main>
    );
  };
  
  export default Outgoing;
  