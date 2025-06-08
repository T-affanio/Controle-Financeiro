import { formatCurrentMonth } from "@/helpers/dateFilter";
import { ResumeItem } from "@/ResumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handelPrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };
  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <div className="bg-white shadow-2xl rounded-xl p-5 -mt-10 flex  items-center text-center">
      {/* area do mes */}
      <div className="flex-1 flex items-center ">
        <span
          className="text-2xl cursor-pointer w-10"
          onClick={handelPrevMonth}
        >
          ⬅️
        </span>
        <h1 className="flex-1 text-center text-black">
          {formatCurrentMonth(currentMonth)}
        </h1>
        <span className="text-2xl cursor-pointer " onClick={handleNextMonth}>
          ➡️
        </span>
      </div>
      {/*  resumo da area  */}
      <div className="flex-2 flex text-black ">
        <ResumeItem title="Receitas" value={income} color="text-green-600" />
        <ResumeItem title="Despesas" value={expense} color="text-orange-800" />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          color={income - expense < 0 ? "text-red-600" : "text-green-600"}
        />
      </div>
    </div>
  );
};
