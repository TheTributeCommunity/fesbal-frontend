import { useContext, useEffect, useMemo, useState } from 'react'
import HistoryCard from '../components/atom/HistoryCard'
import AppWrapper from '../components/molecules/AppWrapper'
import PickupService from '../services/PickupService'
import { PickupWithItems } from '../types/Pickup'
import { getPickupItemsDescription } from '../types/FoodPicking'
import { AppRoute } from '../enums/app-route'
import { UsersContext } from '../contexts/usersContext'

const PickupHistoryPage = () => {
    const [pickupHistory, setPickupHistory] = useState<PickupWithItems[]>([])
    const lastPickup = useMemo(() => pickupHistory[0], [pickupHistory])
    const { firebaseUser } = useContext(UsersContext)

    useEffect(() => {
        firebaseUser && PickupService.getPickupHistory(firebaseUser.uid).then(setPickupHistory)
    }, [firebaseUser])

    const PickupCard = ({pickup}: {pickup: PickupWithItems}): JSX.Element => {
        return (
            <HistoryCard path={AppRoute.PICKUP_DETAILS} id={pickup.id} title={pickup.entityId} isoDate={pickup.startedAt} description={getPickupItemsDescription(pickup.pickupItems)} />
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
