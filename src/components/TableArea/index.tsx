import { Item } from "@/types/Items";
import { TabelItem } from "../TableItem";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  return (
    <>
      <table className="w-full bg-white   shadow-xl rounded-md ">
        <thead>

          <tr className="text-xl  text-black text-left">
            <th className="w-28 px-8">Data</th>
            <th className="w-36 p-3">Categoria</th>
            <th className="px-6">Título</th>
            <th className="w-40  ">Valor</th>
          </tr>
        </thead>

        <tbody >
          {list.map((item, index) => (
            <TabelItem key={index} item={ item}/>
          ))}
        </tbody>
      </table>
    </>
  );
};
