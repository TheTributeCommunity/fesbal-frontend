import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import AppWrapper from "../components/molecules/AppWrapper"
import { AppRoute } from "../enums/app-route"
import { namespaces } from "../i18n/i18n.constants"
import { Pickup } from "../types/Pickup"
import PickupService from "../services/PickupService"
import { dateToDdMmYyyy, dateToHoursMinutes } from "../helpers/textUtils"
import { FoodList } from "../components/molecules/FoodList"

export const PickupDetails = () => {

    const { id } = useParams<{ id: string }>();
    const [ pickup, setPickup ] = useState<Pickup | null>(null);


    useEffect(() => {
        PickupService.getPickupDetails(Number(id)).then(setPickup);
    }, []);

    const {t: translation} =  useTranslation(namespaces.pages.pickupDetails);

    const date = pickup ? dateToDdMmYyyy(new Date(pickup.date)) : "";
    const time = pickup ? dateToHoursMinutes(new Date(pickup.date)) : "";

    return (
        <AppWrapper title={translation("title")} link={AppRoute.PICKUP_HISTORY}>
            <div>
                <div className="flex-col px-6 gap-6 mb-8">
                    <div className="flex-1 pb-6">
                        <p className="text-xs text-primary-color">{translation("entityName")}</p>
                        <p className="leading-5">{pickup?.entityName}</p>
                    </div>
                    <div className="flex flex-1">
                        <div className="flex-auto">
                            <p className="text-xs text-primary-color">{translation("date")}</p>
                            <p className="leading-5">{date}</p>
                        </div>
                        <div className="flex-auto">
                            <p className="text-xs text-primary-color">{translation("time")}</p>
                            <p className="leading-5">{time}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <FoodList items={pickup?.pickupItems || []}/>
                </div>
            </div>
        </AppWrapper>
    )
}