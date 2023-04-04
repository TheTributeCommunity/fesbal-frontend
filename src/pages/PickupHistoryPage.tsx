import { useEffect, useMemo, useState } from 'react'
import HistoryCard from '../components/atom/HistoryCard'
import AppWrapper from '../components/molecules/AppWrapper'
import PickupService from '../services/PickupService'
import { Pickup } from '../types/Pickup'
import { getPickupItemsDescription } from '../types/FoodPicking'
import { AppRoute } from '../enums/app-route'

const PickupHistoryPage = () => {
    const [pickupHistory, setPickupHistory] = useState<Pickup[]>([])
    const lastPickup = useMemo(() => pickupHistory[0], [pickupHistory])

    useEffect(() => {
        PickupService.getPickupHistory().then(setPickupHistory)
    }, [])

    const PickupCard = ({pickup}: {pickup: Pickup}): JSX.Element => {
        return (
            <HistoryCard path={AppRoute.PICKUP_DETAILS} id={pickup.id} title={pickup.title} isoDate={pickup.date} description={getPickupItemsDescription(pickup.pickupItems)} />
        )
    }

    return (
        <AppWrapper title="Historial de recogidas" showBackButton showBurger containerClassName="px-0">
            <div className="mb-6">
                <h2 className="text-secondary-color text-xs px-8 mb-1">Última recogida</h2>
                {!lastPickup ? (
                    <p>No hay última recogida</p>
                ) : (
                    <PickupCard pickup={lastPickup} />
                )}
            </div>
            <h2 className="text-secondary-color text-xs px-8 mb-1">Recogidas anteriores</h2>
            <div className="flex flex-col gap-2">
                {pickupHistory.slice(1).map((pickup, index) => (
                    <PickupCard key={`pickup_${index}`} pickup={pickup} />
                ))}
            </div>
        </AppWrapper>
    )
}

export default PickupHistoryPage
