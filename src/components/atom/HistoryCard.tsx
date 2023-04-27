import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pickup } from '../../types/Pickup'

interface HistoryCardProps {
  title: string
  id: string
  path: string
  isoDate: string | Date
  description: string
  pickup: Pickup
}

const HistoryCard: FC<HistoryCardProps> = ({ id, path, title, isoDate, description, pickup }) => {
    const date = new Date('April 26, 2023 14:13:00').toLocaleDateString()
    const time = new Date('April 26, 2023 14:13').toLocaleTimeString()

    const navigate = useNavigate()

    const redirectToPickupDetails = () => {
        navigate(path.replace(':id', id.toString()), { state: {pickup}})
    }

    return (
        <div className="cursor-pointer px-8 py-5 bg-white" onClick={redirectToPickupDetails}>
            <div className="flex justify-between">
                <p className="text-xs text-primary-color">{date}</p>
                <p className="text-xs text-primary-color">{time}</p>
            </div>
            <p className="text-secondary-color font-bold">{title}</p>
            <p className="text-secondary-color font-light max-h-12 truncate">{description}</p>
        </div>
    )
}

export default HistoryCard
