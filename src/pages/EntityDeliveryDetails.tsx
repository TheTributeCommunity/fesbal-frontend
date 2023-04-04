import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import AppWrapper from '../components/molecules/AppWrapper'
import { namespaces } from '../i18n/i18n.constants'
import Delivery from '../types/Delivery'
import DeliveryService from '../services/DeliveryService'
import { dateToDdMmYyyy, dateToHoursMinutes } from '../helpers/textUtils'
import { FoodList } from '../components/molecules/FoodList'

export const EntityDeliveryDetails = () => {

    const {id} = useParams<{ id: string }>()
    const [delivery, setDelivery] = useState<Delivery | null>(null)

    useEffect(() => {
        DeliveryService.getDeliveryDetails(Number(id)).then(setDelivery)
    }, [])

    const {t: translation} =  useTranslation(namespaces.pages.entityDeliveryDetails)

    const date = delivery ? dateToDdMmYyyy(new Date(delivery.deliveryTimestamp)) : ''
    const time = delivery ? dateToHoursMinutes(new Date(delivery.deliveryTimestamp)) : ''

    return (
        <AppWrapper title={translation('title')}>
            <div>
                <div className="flex-col px-6 gap-6 mb-8">
                    <div className="flex-1 pb-6">
                        <p className="text-2xl text-secondary-color font-bold">{delivery?.recipient.fullName || ''}</p>
                        <p className="text-primary-color text-2xl font-normal">{delivery?.recipient.id || ''}</p>
                    </div>
                    <div className="flex flex-1">
                        <div className="flex-auto">
                            <p className="text-xs text-primary-color">{translation('date')}</p>
                            <p className="leading-5">{date}</p>
                        </div>
                        <div className="flex-auto">
                            <p className="text-xs text-primary-color">{translation('time')}</p>
                            <p className="leading-5">{time}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <FoodList items={delivery?.foodItems || []}/>
                </div>
            </div>
        </AppWrapper>
    )
}