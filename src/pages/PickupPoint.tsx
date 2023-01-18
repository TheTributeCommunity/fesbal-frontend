import AppBackButton from "../components/atom/AppBackButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import AppCopyClipboardButton from "../components/atom/AppCopyClipboardButton";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import BottomNavBar from "../components/molecules/BottomNavBar";

const pickup = {
    neighbourhood: "Asociación de Vecinos de Maspalomas",
    address: "Calle de los Jazmines 835100 San Bartolomé de Tirajana, Las Palmas",
};
const PickupPoint = () => {
    const {t} = useTranslation(namespaces.pages.pickupPoint);

    return (
        <div className="h-screen flex flex-col page-bg text-secondary-color p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <div className="flex flex-row justify-between items-center text-primary-color text-base font-bold">
                    <AppBackButton goTo="/login" />
                    <h1>{t("title")}</h1>
                    <AppBurgerMenuButton />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">{pickup.neighbourhood}</h1>
                    <p className="text-primary-color text-sm">{t("address")}</p>
                    <AppCopyClipboardButton text={pickup.address} />
                </div>
            </div>
            <BottomNavBar />
        </div>
    );
};

export default PickupPoint;
