import { useEffect, useMemo, useState } from 'react';
import AppBackButton from '../components/atom/AppBackButton';
import AppBurgerMenuButton from '../components/atom/AppBurgerMenuButton';
import HistoryCard from '../components/atom/HistoryCard';
import AppWrapper from '../components/molecules/AppWrapper';
import PickupService from '../services/PickupService';
import { Pickup } from '../types/Pickup';

const PickupHistoryPage = () => {
  const [pickupHistory, setPickupHistory] = useState<Pickup[]>([]);
  const lastPickup = useMemo(() => pickupHistory[0], [pickupHistory]);

  useEffect(() => {
    PickupService.getPickupHistory().then(setPickupHistory);
  }, []);

  return (
    <AppWrapper title="Historial de recogidas" showBackButton showBurger>
      <div className="mb-6">
        <h2 className="text-[#002E5D] text-xs px-8 mb-1">Última recogida</h2>
        {!lastPickup ? (
          <p>No hay última recogida</p>
        ) : (
          <HistoryCard title={lastPickup.title} isoDate={lastPickup.date} description={lastPickup.description} />
        )}
      </div>
      <h2 className="text-[#002E5D] text-xs px-8 mb-1">Recogidas anteriores</h2>
      <div className="flex flex-col gap-2">
        {pickupHistory.slice(1).map((pickup) => (
          <HistoryCard title={pickup.title} isoDate={pickup.date} description={pickup.description} />
        ))}
      </div>
    </AppWrapper>
  );
};

export default PickupHistoryPage;
