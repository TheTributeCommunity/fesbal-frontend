import {useTranslation} from "react-i18next";
import AppCopyClipboardButton from "../components/atom/AppCopyClipboardButton";
import AppWatchButton from "../components/atom/AppWatchButton";
import AppLocationButton from "../components/atom/AppLocationButton";
import AppBellButton from "../components/atom/AppBellButton";
import {namespaces} from "../i18n/i18n.constants";
import AppPageBurgerHeader from "../components/molecules/AppPageBurgerHeader";
import AppBottomNav from "../components/molecules/AppBottomNav";

const pickup = {
    "neighbourhood": "Asociación de Vecinos de Maspalomas",
    "address": "Calle de los Jazmines 835100 San Bartolomé de Tirajana, Las Palmas"
}
const PickupPoint = () => {
    const {t: translate} = useTranslation(namespaces.pages.pickupPoint);

    return (
        <div className="app-page h-screen">
            <AppPageBurgerHeader title={translate("title")} link="/login"/>
            <div className="app-page__container">
                <h1 className="my-4 font-big-title">{pickup.neighbourhood}</h1>
                <p className="text-primary-color font-label">{translate("address")}</p>
                <AppCopyClipboardButton text={pickup.address}/>
            </div>
            <AppBottomNav/>
        </div>
    );
}

export default PickupPoint;
