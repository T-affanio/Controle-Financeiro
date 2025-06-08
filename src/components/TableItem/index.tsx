import { categories } from "@/data/categories";
import { formatDate } from "@/helpers/dateFilter";
import { Item } from "@/types/Items";

type Props = {
  item: Item;
};

export const TabelItem = ({ item }: Props) => {
  return (
    <tr className="text-black font-medium text-lg">
      <td className="px-8">{formatDate(item.date)}</td>
      <td className="">
        <div  className={`block text-center  py-0.5 rounded-[20px] text-white ${categories[item.category].color}`}>
            {categories[item.category].title}
        </div>
      </td>
      <td className="px-6">{item.title}</td>
      <td className="py-2.5">
        <div className={categories[item.category].expense ? 'text-red-600' : 'text-green-700'}>
            {item.value}
        </div>
      </td>
    </tr>
  );
};
