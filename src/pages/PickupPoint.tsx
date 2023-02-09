import {useTranslation} from "react-i18next";
import AppCopyClipboardButton from "../components/atom/AppCopyClipboardButton";
import {namespaces} from "../i18n/i18n.constants";
import AppWrapper from "../components/molecules/AppWrapper";

const pickup = {
    "neighbourhood": "Asociación de Vecinos de Maspalomas",
    "address": "Calle de los Jazmines 835100 San Bartolomé de Tirajana, Las Palmas"
}
const PickupPoint = () => {
    const {t: translate} = useTranslation(namespaces.pages.pickupPoint);

    return (
        <AppWrapper title={translate("title")} showBackButton showBurger>
            <div className="flex w-full flex-col justify-start">
                <h1 className="my-4 font-big-title">{pickup.neighbourhood}</h1>
                <p className="text-primary-color font-label">{translate("address")}</p>
                <AppCopyClipboardButton text={pickup.address}/>
            </div>
        </AppWrapper>
    );
}

export default PickupPoint;
