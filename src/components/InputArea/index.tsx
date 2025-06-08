'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { categories } from '@/data/categories';
import { Item } from '@/types/Items';

type Props = {
  onAdd: (item: Item) => void;
};


const formSchema = z.object({
  date: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
    message: 'Data inválida!',
  }),
  category: z.enum(Object.keys(categories) as [string, ...string[]], {
    errorMap: () => ({ message: 'Categoria inválida!' }),
  }),
  title: z.string().min(1, 'Título vazio!'),
  value: z.number().positive('Valor inválido!'),
});

// 📘 Tipos baseados no schema
type FormData = z.infer<typeof formSchema>;

export const InputArea = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: '',
      category: '',
      title: '',
      value: 0,
    },
  });

  const onSubmit = (data: FormData) => {
    const newItem: Item = {
      date: new Date(data.date),
      category: data.category,
      title: data.title,
      value: data.value,
    };

    onAdd(newItem);
    reset(); 
  };

  const categoryKeys = Object.keys(categories);

  return (
   <form
  onSubmit={handleSubmit(onSubmit)}
  className="bg-white shadow-md rounded-xl p-6 mt-6 flex flex-wrap gap-4"
>

  <div className="flex-1 min-w-[150px]">
    <label className="font-semibold text-black mb-1 block">Data</label>
    <input
      type="date"
      {...register('date')}
      className="w-full border border-blue-200 rounded-md px-3 py-1.5 text-black"
    />
    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
  </div>

 
  <div className="flex-1 min-w-[150px]">
    <label className="font-semibold text-black mb-1 block">Categoria</label>
    <select
      {...register('category')}
      className="w-full border border-blue-200 rounded-md px-3 py-1.5 text-black"
    >
      <option value="" className="text-black">Selecione</option>
      {categoryKeys.map((key) => (
        <option key={key} value={key} className="text-black">
          {categories[key].title}
        </option>
      ))}
    </select>
    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
  </div>

 
  <div className="flex-1 min-w-[150px]">
    <label className="font-semibold text-black mb-1 block">Título</label>
    <input
      type="text"
      {...register('title')}
      className="w-full border border-blue-200 rounded-md px-3 py-1.5 text-black"
    />
    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
  </div>


  <div className="flex-1 min-w-[150px]">
    <label className="font-semibold text-black mb-1 block">Valor</label>
    <input
      type="number"
      step="0.01"
      {...register('value', { valueAsNumber: true })}
      className="w-full border border-blue-200 rounded-md px-3 py-1.5 text-black"
    />
    {errors.value && <p className="text-red-500 text-sm mt-1">{errors.value.message}</p>}
  </div>


  <div className="flex-1 min-w-[150px] self-end">
    <button
      type="submit"
      className="w-full bg-blue-400 hover:bg-blue-600 text-black font-semibold rounded-md py-2 transition"
    >
      Adicionar
    </button>
  </div>
</form>

  );
};
