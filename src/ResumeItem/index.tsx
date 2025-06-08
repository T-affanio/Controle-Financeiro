type Props = {
  title: string;
  value: number;
  color?: string; // ← cor opcional vinda de fora
};

export const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <div className="flex-1">
      <div className="text-black/70 font-semibold">{title}</div>
      <div className={`text-lg font-bold ${color ?? ''}`}>
        R$ {value.toFixed(2)}
      </div>
    </div>
  );
};
