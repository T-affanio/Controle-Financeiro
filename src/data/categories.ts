import { Category } from "@/types/Category";
export const categories: Category = {
  food: { title: 'Alimentação', color: 'bg-red-500', expense: true },
  collage: { title: 'Faculdade', color: 'bg-yellow-400', expense: true },
  salary: { title: 'Salario', color: 'bg-green-500', expense: false },
  cardbank: { title: 'Cartao', color: 'bg-orange-700', expense: true },
  invest: { title: 'Investimento', color: 'bg-orange-700', expense: true },
  game: { title: 'lazer', color: 'bg-orange-700', expense: true },

  // pode add categoria aqui 
};
