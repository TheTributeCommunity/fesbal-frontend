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
    const {t: translate} = useTranslation(namespaces.pages.pickupPoint);

    return (
        <div className="app-page">
            <div className="app-page__header">
                <div className="flex flex-row items-center justify-between">
                    <AppBackButton goTo="/login"/>
                    <p className="text-primary-color font-mini-title">{translate("title")}</p>
                    <AppBurgerMenuButton/>
                </div>
                <div>
                    <h1 className="mb-4 font-big-title">{pickup.neighbourhood}</h1>
                    <p className="text-primary-color font-label">{translate("address")}</p>
                    <AppCopyClipboardButton text={pickup.address}/>
                </div>
            </div>
            <nav className="app-bottom-nav">
                <AppWatchButton/>
                <AppLocationButton/>
                <AppBellButton/>
            </nav>
        </div>
    );
}

export default PickupPoint;
