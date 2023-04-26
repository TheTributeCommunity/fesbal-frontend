import { useContext, useEffect, useState } from 'react'
import HistoryCard from '../components/atom/HistoryCard'
import AppWrapper from '../components/molecules/AppWrapper'
import { getPickupItemsDescription } from '../types/FoodPicking'
import { AppRoute } from '../enums/app-route'
import { InflatedPickup } from '../types/Pickup'
import PickupService from '../services/PickupService'
import { UsersContext } from '../contexts/usersContext'

const EntityDeliveryHistory = () => {
    const [pickupHistory, setPickupHistory] = useState<InflatedPickup[]>([])
    const { firebaseUser } = useContext(UsersContext)

    useEffect(() => {
        firebaseUser && PickupService.getEntityPickupHistory(firebaseUser.uid).then(pickups => setPickupHistory(pickups))
    }, [firebaseUser])

    const DeliveryCard = ({delivery}: {delivery: InflatedPickup}): JSX.Element => {
        const fullRecipientName = delivery.recipient.firstName + ' ' + delivery.recipient.lastName 
        return (
            <HistoryCard path={AppRoute.ENTITY_DELIVERY_HISTORY_DETAILS} id={delivery.id} title={fullRecipientName || ''} isoDate={delivery.signDate} description={getPickupItemsDescription(delivery.pickupItems)} pickup={delivery} />
        )
    }

    return (
        <AppWrapper title="Historial de entregas" showBackButton showBurger containerClassName="px-0">
            <h2 className="text-secondary-color text-xl font-bold px-8 mb-1">Última recogida</h2>
            {!pickupHistory.length ? (
                <p className="text-secondary-color px-8 text-base">No hay última entrega</p>
            ) : (
                <DeliveryCard delivery={pickupHistory[0]} />
            )}
            <h2 className="text-secondary-color text-xl font-bold px-8 mb-1">Entregas anteriores</h2>
            <div className="flex flex-col gap-2">
                {pickupHistory.length <= 1 ? <p className="text-secondary-color px-8 text-base">No hay más entregas</p> : pickupHistory.slice(1).map((pickup, index) => (
                    <DeliveryCard key={`delivery_${index}`} delivery={pickup} />
                ))}
            </div>
        </AppWrapper>
    )
}

export default EntityDeliveryHistory
