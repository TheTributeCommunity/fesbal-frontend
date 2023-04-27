import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import AppWrapper from '../components/molecules/AppWrapper'
import BuildingsIcon from '../components/icons/BuildingsIcon'
import ContactIcon from '../components/icons/ContactIcon'
import EntityProfileProps from '../types/EntityProfileProps'
import ProfilePersonalDataItem from '../components/atom/ProfilePersonalDataItem'
import useEntityInfo from '../hooks/useEntityInfo'
import Spinner from '../components/atom/Spinner'


const EntityProfile = () => {
    const {t: translate} = useTranslation(namespaces.pages.entityProfile)
    const { entity } = useEntityInfo()

    const getData = (): EntityProfileProps => {
        return {
            entity: [
                {
                    title: translate('entityName'),
                    value: entity?.entityName,
                },
                {
                    title: translate('code'),
                    value: entity?.entityCode,
                },
                {
                    title: translate('province'),
                    value: entity?.region,
                },
                {
                    title: translate('nextDelivery'),
                    value: '12/05/2023',
                },
                {
                    title: translate('address'),
                    value: entity?.address,
                }
            ],
            contact: [
                {
                    title: translate('contactPerson'),
                    value: entity?.contactPerson,
                },
                {
                    title: translate('contactPhone'),
                    value: entity?.phone,
                },
                {
                    title: translate('contactEmail'),
                    value: entity?.email,
                },
            ],
            logistic: [
                {
                    title: translate('warehouseCapacity'),
                    value: entity?.storingCapacity.toString()+'m2',
                },
            ]
        }
    }

    return (
        <AppWrapper title={translate('title')}>
            {!entity ? <Spinner /> :
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
                </div>}
        </AppWrapper>
    )
}

export default EntityProfile
