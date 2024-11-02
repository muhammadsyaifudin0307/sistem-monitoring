const TableMoisture = () => {
  return (
    <div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <th colSpan="6" className="border border-zinc-100">
              {"MOISTURE >77"}
            </th>
          </tr>
          <tr className="bg-zinc-600 text-zinc-100 uppercase text-sm text-center leading-normal">
            <td className="border border-zinc-100 font-bold">gr</td>
            <td className="border border-zinc-100 font-bold">cm</td>
            <td className="border border-zinc-100 font-bold">0</td>
            <td className="border border-zinc-100 font-bold">gr</td>
            <td className="border border-zinc-100 font-bold">cm</td>
            <td className="border border-zinc-100 font-bold">40</td>
          </tr>
        </thead>
        <tbody className="text-zinc-100 text-base font-bold text-center">
          <tr className="border-b border-zinc-600">
            <td className=" ">dd</td>
            <td className="px-2 py-3">p</td>
            <td className="px-2 py-3">g</td>
            <td className="px-2 py-3">g</td>
            <td className="px-2 py-3">g</td>
            <td className="px-2 py-3">g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableMoisture;
