import { useEffect, useMemo, useState } from 'react';
import AppBackButton from '../components/atom/AppBackButton';
import AppBurgerMenuButton from '../components/atom/AppBurgerMenuButton';
import HistoryCard from '../components/atom/HistoryCard';
import PickupService from '../services/PickupService';
import { Pickup } from '../types/Pickup';

const PickupHistoryPage = () => {
  const [pickupHistory, setPickupHistory] = useState<Pickup[]>([]);
  const lastPickup = useMemo(() => pickupHistory[0], [pickupHistory]);

  useEffect(() => {
    PickupService.getPickupHistory().then(setPickupHistory);
  }, []);

  return (
    <div className="min-h-screen flex flex-col page-bg mb-16">
      <div className="flex flex-row justify-between items-center p-8 text-[#0F95CE] text-base font-bold">
        <AppBackButton link=""/>
        <h1>Historial de recogidas</h1>
        <AppBurgerMenuButton />
      </div>
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
    </div>
  );
};

export default PickupHistoryPage;
