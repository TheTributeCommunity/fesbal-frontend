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
      <h2 className="text-[#002E5D] text-xs px-8 mb-1">Última recogida</h2>
      <div className="mb-6 px-8 py-5 bg-white">
        <div className="flex justify-between">
          <p className="text-xs text-[#0F95CE]">22/07/2022</p>
          <p className="text-xs text-[#0F95CE]">10:34 a.m.</p>
        </div>
        <p className="text-[#002E5D] font-bold">Asociación de Vecinos de Maspalomas</p>
        <p className="font-light max-h-12 truncate">
          5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes
        </p>
      </div>
      <h2 className="text-[#002E5D] text-xs px-8 mb-1">Recogidas anteriores</h2>
      <div className="flex flex-col gap-2">
        <div className="px-8 py-5 bg-white">
          <div className="flex justify-between">
            <p className="text-xs text-[#0F95CE]">22/07/2022</p>
            <p className="text-xs text-[#0F95CE]">10:34 a.m.</p>
          </div>
          <p className="text-[#002E5D] font-bold">Asociación de Vecinos de Maspalomas</p>
          <p className="font-light max-h-12 truncate">
            5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes
          </p>
        </div>
        <div className="px-8 py-5 bg-white">
          <div className="flex justify-between">
            <p className="text-xs text-[#0F95CE]">22/07/2022</p>
            <p className="text-xs text-[#0F95CE]">10:34 a.m.</p>
          </div>
          <p className="text-[#002E5D] font-bold">Asociación de Vecinos de Maspalomas</p>
          <p className="font-light max-h-12 truncate">
            5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes
          </p>
        </div>
        <div className="px-8 py-5 bg-white">
          <div className="flex justify-between">
            <p className="text-xs text-[#0F95CE]">22/07/2022</p>
            <p className="text-xs text-[#0F95CE]">10:34 a.m.</p>
          </div>
          <p className="text-[#002E5D] font-bold">Asociación de Vecinos de Maspalomas</p>
          <p className="font-light max-h-12 truncate">
            5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes
          </p>
        </div>
        <div className="px-8 py-5 bg-white">
          <div className="flex justify-between">
            <p className="text-xs text-[#0F95CE]">22/07/2022</p>
            <p className="text-xs text-[#0F95CE]">10:34 a.m.</p>
          </div>
          <p className="text-[#002E5D] font-bold">Asociación de Vecinos de Maspalomas</p>
          <p className="font-light max-h-12 truncate">
            5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes
          </p>
        </div>
        <div className="px-8 py-5 bg-white">
          <div className="flex justify-between">
            <p className="text-xs text-[#0F95CE]">22/07/2022</p>
            <p className="text-xs text-[#0F95CE]">10:34 a.m.</p>
          </div>
          <p className="text-[#002E5D] font-bold">Asociación de Vecinos de Maspalomas</p>
          <p className="font-light max-h-12 truncate">
            5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes
          </p>
        </div>
        <div className="px-8 py-5 bg-white">
          <div className="flex justify-between">
            <p className="text-xs text-[#0F95CE]">22/07/2022</p>
            <p className="text-xs text-[#0F95CE]">10:34 a.m.</p>
          </div>
          <p className="text-[#002E5D] font-bold">Asociación de Vecinos de Maspalomas</p>
          <p className="font-light max-h-12 truncate">
            5 botes de garbanzos, 3 litros de leche, 2 paquetes de galletas, 250ml de aceite, 3 botes
          </p>
        </div>
      </div>
    </div>
  );
};

export default PickupHistoryPage;
