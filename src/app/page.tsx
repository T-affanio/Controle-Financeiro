"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { items } from "@/data/items";
import { filterListByMonth, getCurrentMonth } from "@/helpers/dateFilter";
import { Item } from "@/types/Items";
import { TableArea } from "@/components/TableArea";
import { InfoArea } from "@/components/InfoArea";
import { categories } from "@/data/categories";
import { InputArea } from "@/components/InputArea";

export default function Home() {
  const [list, setList] = useState(items);
  const [filteredList, setFilterdList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilterdList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };
    const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <div className="bg-white/90 h-screen">
      <Header />

      <div className=" m-auto max-w-7xl mb-12">
        {/* area de informacoes */}
        <div>
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />
        </div>
        {/* area de insercao */}
        <InputArea onAdd={handleAddItem}/>

        {/* tabela de items  */}

        <div className="pt-4">
          <TableArea list={filteredList} />
        </div>
      </div>
    </div>
  );
}
