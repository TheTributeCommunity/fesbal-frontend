import AppBackButton from "../components/atom/AppBackButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import AppCopyClipboardButton from "../components/atom/AppCopyClipboardButton";
import AppWatchButton from "../components/atom/AppWatchButton";
import AppLocationButton from "../components/atom/AppLocationButton";
import AppBellButton from "../components/atom/AppBellButton";

const address = "Calle de los Jazmines 835100 San Bartolomé de Tirajana, Las Palmas";

const PickupPoint = () => {
    return (
        <div className="h-screen flex flex-col page-bg text-blue-dark p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <div className="flex flex-row justify-between items-center text-blue-light text-base font-bold">
                    <AppBackButton goTo="/login"/>
                    <h1>Punto de recogida</h1>
                    <AppBurgerMenuButton/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">
                        Asociación de Vecinos de Maspalomas
                    </h1>
                    <p className="text-blue-light text-sm">Dirección</p>
                    <AppCopyClipboardButton text={address}/>
                </div>
            </div>
            <nav className="flex flex-row justify-between items-center self-center w-full md:w-1/2 lg:w-1/3 bg-white rounded-xl p-4">
                <AppWatchButton/>
                <AppLocationButton/>
                <AppBellButton/>
            </nav>
        </div>
    );
}

export default PickupPoint;
