import { FC } from 'react';

interface HistoryCardProps {
  title: string;
  isoDate: string;
  description: string;
}

const HistoryCard: FC<HistoryCardProps> = ({ title, isoDate, description }) => {
  const date = new Date(isoDate).toLocaleDateString();
  const time = new Date(isoDate).toLocaleTimeString();

  return (
    <div className="px-8 py-5 bg-white">
      <div className="flex justify-between">
        <p className="text-xs text-[#0F95CE]">{date}</p>
        <p className="text-xs text-[#0F95CE]">{time}</p>
      </div>
      <p className="text-[#002E5D] font-bold">{title}</p>
      <p className="font-light max-h-12 truncate">{description}</p>
    </div>
  );
};

export default HistoryCard;
