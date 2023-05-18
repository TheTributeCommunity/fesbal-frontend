import moment from 'moment'
import { FC } from 'react'
import { Pickup } from '../../types/Pickup'

interface HistoryCardProps {
  pickup: Pickup
}

const HistoryCard: FC<HistoryCardProps> = ({ pickup }) => {
    const signDate = pickup.signDate ? moment(pickup.signDate) : undefined
    const date = signDate?.format('DD/MM/YYYY')
    const time = signDate?.format('HH:mm a')

    return (
        <div className="cursor-pointer px-8 py-5 bg-white">
            <div className="flex justify-between">
                <p className="text-xs text-primary-color">{date}</p>
                <p className="text-xs text-primary-color">{time}</p>
            </div>
            {/* TODO add entity name */}
            <p className="text-secondary-color font-bold">{'title'}</p>
        </div>
    )
}

export default HistoryCard
