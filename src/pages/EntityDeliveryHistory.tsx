import { useEffect, useState } from 'react'
import HistoryCard from '../components/atom/HistoryCard'
import AppWrapper from '../components/molecules/AppWrapper'
import { AppRoute } from '../enums/app-route'
import { Pickup } from '../types/Pickup'
import PickupService from '../services/PickupService'
import { useUserStore } from '../store/logged-user'
import BlankStage from '../components/atom/BlankStage'
import Spinner from '../components/atom/Spinner'
import moment from 'moment'
import FamilyIcon from '../components/icons/FamilyIcon'
import { sortBySignDateDescending } from '../helpers/sortHelper'

const EntityDeliveryHistory = () => {
    const [pickupHistory, setPickupHistory] = useState<Pickup[]>([])
    const userId = useUserStore(state => state.userId)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        userId && PickupService.getEntityPickupHistory(userId).then(pickups => {
            setPickupHistory(sortBySignDateDescending(pickups))
            setLoading(false)
        })
    }, [userId])

    const DeliveryCard = ({delivery}: {delivery: Pickup}): JSX.Element => {
        const fullName = delivery.recipientFirstName + ' ' + delivery.recipientLastName 
        const id = delivery.recipientIdentityDocumentNumber
        const members = `${delivery.recipientNumberOfRelatives + 1} miembros`
        const signDate = delivery.signDate ? moment(delivery.signDate) : undefined
        const date = signDate?.format('DD/MM/YYYY')
        const time = signDate?.format('HH:mm a')
        return (
            <div className="flex flex-row w-full shadow-lg rounded-lg px-8 py-5 bg-white">
                <div className="w-1/2 h-full flex flex-col gap-1">
                    <p className="text-secondary-color font-bold text-base">{fullName}</p>
                    <p className="text-secondary-color text-base">{id}</p>
                    <div className="flex gap-1 mt-4">
                        <FamilyIcon/>
                        <p className="text-secondary-color text-base">{members}</p>
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col gap-2 items-end">
                    <p className="text-primary-color text-xs font-medium">{date}</p>
                    <p className="text-primary-color text-xs font-medium">{time}</p>
                </div>
            </div>
        )
    }

    if (loading) return (
        <BlankStage>
            <Spinner />
        </BlankStage>
    )

    return (
        <AppWrapper title="Historial de entregas" showBackButton showBurger containerClassName="px-0">
            {!pickupHistory.length ? (
                <p className="text-secondary-color px-8 text-base mt-3 text-center">No hay entregas</p>
            ) : (
                <div className="flex flex-col gap-2">
                    {pickupHistory.map((pickup, index) => (
                        <DeliveryCard key={`delivery_${index}`} delivery={pickup} />
                    ))}
                </div>
            )}
        </AppWrapper>
    )
}

export default EntityDeliveryHistory
