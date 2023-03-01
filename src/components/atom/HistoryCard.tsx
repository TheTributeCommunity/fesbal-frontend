import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../enums/app-route';

interface HistoryCardProps {
  title: string;
  id?: number;
  isoDate: string;
  description: string;
}

const HistoryCard: FC<HistoryCardProps> = ({ id, title, isoDate, description }) => {
  const date = new Date(isoDate).toLocaleDateString();
  const time = new Date(isoDate).toLocaleTimeString();

  const navigate = useNavigate()

  function redirectToPickupDetails() {
    let path = AppRoute.PICKUP_DETAILS.toString()
    if (id) {
      path = path.replace(':id', id.toString())
      navigate(path)
    }
  }

  return (
    <div className="px-8 py-5 bg-white" onClick={redirectToPickupDetails}>
      <div className="flex justify-between">
        <p className="text-xs text-primary-color">{date}</p>
        <p className="text-xs text-primary-color">{time}</p>
      </div>
      <p className="text-secondary-color font-bold">{title}</p>
      <p className="text-secondary-color font-light max-h-12 truncate">{description}</p>
    </div>
  );
};

export default HistoryCard;
