import { FC } from 'react';

interface HistoryCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
}

const HistoryCard: FC<HistoryCardProps> = ({ title, date, time, description }) => {
  return (
    <div className="px-8 py-5 bg-white">
      <div className="flex justify-between">
        <p className="text-xs text-[#0F95CE]">22/07/2022</p>
        <p className="text-xs text-[#0F95CE]">10:34 a.m.</p>
      </div>
      <p className="text-[#002E5D] font-bold">{title}</p>
      <p className="font-light max-h-12 truncate">
        5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes
      </p>
    </div>
  );
};

export default HistoryCard;
