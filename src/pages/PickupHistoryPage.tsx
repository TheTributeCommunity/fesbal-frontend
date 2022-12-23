import HistoryCard from '../components/atom/HistoryCard';
import BurgerMenuIcon from '../components/icons/BurgerMenuIcon';
import RightArrowIcon from '../components/icons/RightArrowIcon';

const PickupHistoryPage = () => {
  return (
    <div className="min-h-screen flex flex-col page-bg mb-16">
      <div className="flex flex-row justify-between items-center p-8 text-[#0F95CE] text-base font-bold">
        <button className="bg-white h-12 w-12 rounded-full flex justify-center items-center app-shadow">
          <RightArrowIcon />
        </button>
        <h1>Historial de recogidas</h1>
        <button className="bg-white h-12 w-12 rounded-full flex justify-center items-center app-shadow">
          <BurgerMenuIcon />
        </button>
      </div>
      <div className="mb-6">
        <h2 className="text-[#002E5D] text-xs px-8 mb-1">Última recogida</h2>
        <HistoryCard
          title="Whatever"
          date="22/07/2022"
          time="10:30"
          description="5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes"
        />
      </div>
      <h2 className="text-[#002E5D] text-xs px-8 mb-1">Recogidas anteriores</h2>
      <div className="flex flex-col gap-2">
        <HistoryCard
          title="Asociación de vecinos"
          date="22/07/2022"
          time="10:30"
          description="5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes"
        />
        <HistoryCard
          title="Asociación de vecinos"
          date="22/07/2022"
          time="10:30"
          description="5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes"
        />
        <HistoryCard
          title="Asociación de vecinos"
          date="22/07/2022"
          time="10:30"
          description="5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes"
        />
        <HistoryCard
          title="Asociación de vecinos"
          date="22/07/2022"
          time="10:30"
          description="5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes"
        />
      </div>
    </div>
  );
};

export default PickupHistoryPage;
