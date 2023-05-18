import { useContext, useEffect, useState } from 'react'
import HistoryCard from '../components/atom/HistoryCard'
import AppWrapper from '../components/molecules/AppWrapper'
import PickupService from '../services/PickupService'
import { Pickup } from '../types/Pickup'
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
            <HistoryCard pickup={pickup} />
        )
    }

    return (
        <AppWrapper title="Historial de recogidas" showBackButton showBurger containerClassName="px-0">
            <div className="flex flex-col gap-2">
                {!pickupHistory.length ? <p className="text-secondary-color px-8 text-base">No hay recogidas que mostrar</p> : pickupHistory.map((pickup, index) => (
                    <PickupCard key={`pickup_${index}`} pickup={pickup} />
                ))}
            </div>
        </AppWrapper>
    )
}

export default PickupHistoryPage
