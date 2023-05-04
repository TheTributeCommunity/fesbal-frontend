import { useContext, useEffect, useState } from 'react'
import HistoryCard from '../components/atom/HistoryCard'
import AppWrapper from '../components/molecules/AppWrapper'
import PickupService from '../services/PickupService'
import { InflatedPickup, Pickup } from '../types/Pickup'
import { getPickupItemsDescription } from '../types/FoodPicking'
import { AppRoute } from '../enums/app-route'
import { UsersContext } from '../contexts/usersContext'

const PickupHistoryPage = () => {
    const [pickupHistory, setPickupHistory] = useState<Pickup[]>([])
    const { firebaseUser } = useContext(UsersContext)

    useEffect(() => {
        firebaseUser && PickupService.getRecipientPickupHistory(firebaseUser.uid).then(pickups => {
            setPickupHistory(pickups)
        })
    }, [firebaseUser])

    const PickupCard = ({pickup}: {pickup: Pickup}): JSX.Element => {
        return (
            <HistoryCard path={AppRoute.PICKUP_DETAILS} id={pickup.id} title={pickup.entity.entityName} isoDate={pickup.signDate} description={''} pickup={pickup} />
        )
    }

    return (
        <AppWrapper title="Historial de recogidas" showBackButton showBurger containerClassName="px-0">
            <div className="mb-6">
                <h2 className="text-secondary-color text-xl font-bold px-8 mb-1">Última recogida</h2>
                {!pickupHistory.length ? (
                    <p className="text-secondary-color px-8 text-base">No hay última recogida</p>
                ) : (
                    <PickupCard pickup={pickupHistory[0]} />
                )}
            </div>
            <h2 className="text-secondary-color text-xl font-bold px-8 mb-1">Recogidas anteriores</h2>
            <div className="flex flex-col gap-2">
                {pickupHistory.length <= 1 ? <p className="text-secondary-color px-8 text-base">No hay más recogidas</p> : pickupHistory.slice(1).map((pickup, index) => (
                    <PickupCard key={`pickup_${index}`} pickup={pickup} />
                ))}
            </div>
        </AppWrapper>
    )
}

export default PickupHistoryPage
