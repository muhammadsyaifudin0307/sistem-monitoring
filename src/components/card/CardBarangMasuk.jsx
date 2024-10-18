import { RiInboxArchiveLine } from "react-icons/ri";

const CardBarangMasuk = () => {
  return (
    <main className="p-4 bg-zinc-900 rounded-xl max-w-xs w-full mx-auto">
      <div className="flex items-center gap-4 mb-2">
        <div className="icon bg-green-500 rounded-full p-3 flex-shrink-0">
          <RiInboxArchiveLine className="text-3xl" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-base text-zinc-400 md:text-lg">
            Barang Masuk
          </div>
          <div className="font-extrabold text-zinc-100 text-xl md:text-2xl">
            8789
          </div>
        </div>
      </div>
    </main>
  );
}

export default CardBarangMasuk;
