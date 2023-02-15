import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import entityMock from '../mocks/entity.mock'
import AppWrapper from '../components/molecules/AppWrapper'
import BuildingsIcon from '../components/icons/BuildingsIcon'
import ContactIcon from '../components/icons/ContactIcon'
import EntityProfileProps from '../types/EntityProfileProps'
import ProfilePersonalDataItem from '../components/atom/ProfilePersonalDataItem'


const EntityProfile = () => {
    const {t: translate} = useTranslation(namespaces.pages.entityProfile)
    const entity = entityMock

    const getData = (): EntityProfileProps => {
        return {
            entity: [
                {
                    title: translate('entityName'),
                    value: entity?.name
                },
                {
                    title: translate('code'),
                    value: entity?.code,
                },
                {
                    title: translate('province'),
                    value: entity?.province,
                },
                {
                    title: translate('nextDelivery'),
                    value: entity?.nextDelivery,
                },
                {
                    title: translate('address'),
                    value: entity?.address,
                },
                {
                    title: translate('supervisorName'),
                    value: entity?.supervisorName,
                }
            ],
            contact: [
                {
                    title: translate('contactPerson'),
                    value: entity?.contactPerson,
                },
                {
                    title: translate('contactPhone'),
                    value: entity?.contactPhone,
                },
                {
                    title: translate('contactEmail'),
                    value: entity?.contactEmail,
                },
            ],
            logistic: [
                {
                    title: translate('warehouseCapacity'),
                    value: entity?.warehouseCapacity,
                },
            ]
        }
    }

    return (
        <AppWrapper title={translate('title')}>
            <div className="flex w-full flex-col mb-2">
                <ul>
                    {getData().entity.map((personalData, index) => (
                        <ProfilePersonalDataItem key={index} personalData={personalData} index={index}/>
                    ))}
                </ul>
                <div className="flex flex-row items-center gap-2 pl-2 font-bold py-6 ">
                    <ContactIcon/>
                    <h2 className="font-mini-title">{translate('contact')}</h2>
                </div>
                <ul>
                    {getData().contact.map((personalData, index) => (
                        <ProfilePersonalDataItem key={index} personalData={personalData} index={index}/>
                    ))}
                </ul>
                <div className="flex flex-row items-center gap-2 pl-2 font-bold py-6 ">
                    <BuildingsIcon/>
                    <h2 className="font-mini-title">{translate('logisticData')}</h2>
                </div>
                <ul>
                    <ProfilePersonalDataItem personalData={getData().logistic[0]} index={0}/>
                </ul>
            </div>
        </AppWrapper>
    )
}

export default EntityProfile
