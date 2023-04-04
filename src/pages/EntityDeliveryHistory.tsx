import { useEffect, useMemo, useState } from 'react'
import HistoryCard from '../components/atom/HistoryCard'
import AppWrapper from '../components/molecules/AppWrapper'
import Delivery from '../types/Delivery'
import DeliveryService from '../services/DeliveryService'
import { getPickupItemsDescription } from '../types/FoodPicking'
import { AppRoute } from '../enums/app-route'

const EntityDeliveryHistory = () => {
    const [deliveryHistory, setDeliveryHistory] = useState<Delivery[]>([])
    const lastDelivery = useMemo(() => deliveryHistory[0], [deliveryHistory])

    useEffect(() => {
        DeliveryService.getDeliveryHistory().then(setDeliveryHistory)
    }, [])

    const DeliveryCard = ({delivery}: {delivery: Delivery}): JSX.Element => {
        return (
            <HistoryCard path={AppRoute.ENTITY_DELIVERY_HISTORY_DETAILS} id={delivery.id} title={delivery.recipient.fullName || ''} isoDate={delivery.deliveryTimestamp} description={getPickupItemsDescription(delivery.foodItems)} />
        )
    }

    return (
        <AppWrapper title="Historial de envíos" showBackButton showBurger containerClassName="px-0">
            <div className="mb-6">
                <h2 className="text-secondary-color text-xs px-8 mb-1">Última recogida</h2>
                {!lastDelivery ? (
                    <p>No hay última entrega</p>
                ) : (
                    <DeliveryCard delivery={lastDelivery} />
                )}
            </div>
            <h2 className="text-secondary-color text-xs px-8 mb-1">Recogidas anteriores</h2>
            <div className="flex flex-col gap-2">
                {deliveryHistory.slice(1).map((delivery, index) => (
                    <DeliveryCard key={`delivery_${index}`} delivery={delivery} />
                ))}
            </div>
        </AppWrapper>
    )
}

export default EntityDeliveryHistory
