import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import AppCopyClipboardButton from "../components/atom/AppCopyClipboardButton";
import AppWatchButton from "../components/atom/AppWatchButton";
import AppLocationButton from "../components/atom/AppLocationButton";
import AppBellButton from "../components/atom/AppBellButton";
import {namespaces} from "../i18n/i18n.constants";

const pickup = {
    "neighbourhood": "Asociación de Vecinos de Maspalomas",
    "address": "Calle de los Jazmines 835100 San Bartolomé de Tirajana, Las Palmas"
}
const PickupPoint = () => {
    const {t} = useTranslation(namespaces.pages.pickupPoint);

    return (
        <div className="flex h-screen flex-col justify-between p-8 page-bg text-secondary-color">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <div className="flex flex-row items-center justify-between text-base font-bold text-primary-color">
                    <AppBackButton goTo="/login"/>
                    <h1 className="text-primary-color font-mini-title">{t("title")}</h1>
                    <AppBurgerMenuButton/>
                </div>
                <div>
                    <h1 className="mb-4 font-big-title">{pickup.neighbourhood}</h1>
                    <p className="text-primary-color font-label">{t("address")}</p>
                    <AppCopyClipboardButton text={pickup.address}/>
                </div>
            </div>
            <nav
                className="sticky bottom-0 flex w-full flex-row items-center justify-between self-center rounded-xl bg-white p-4 px-10 md:w-1/2 lg:w-1/3">
                <AppWatchButton/>
                <AppLocationButton/>
                <AppBellButton/>
            </nav>
        </div>
    );
}

export default PickupPoint;
