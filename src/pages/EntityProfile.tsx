import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import AppWrapper from '../components/molecules/AppWrapper'
import BuildingsIcon from '../components/icons/BuildingsIcon'
import ContactIcon from '../components/icons/ContactIcon'
import EntityProfileProps from '../types/EntityProfileProps'
import ProfilePersonalDataItem from '../components/atom/ProfilePersonalDataItem'
import useEntityInfo from '../hooks/useEntityInfo'
import Spinner from '../components/atom/Spinner'
import BlankStage from '../components/atom/BlankStage'


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

    if (!entity) return (
        <BlankStage>
            <Spinner />
        </BlankStage>
    )

    return (
        <AppWrapper title={translate('title')} containerClassName="px-0">
            <div className="flex w-full flex-col">
                <ul>
                    {getData().entity.map((personalData, index) => (
                        <ProfilePersonalDataItem key={index} personalData={personalData} index={index}/>
                    ))}
                </ul>
                
                <div className="flex flex-row items-center font-bold px-7 py-5 bg-white border-t border-t-primary-color">
                    <ContactIcon/>
                    <h2 className="font-mini-title ml-2">{translate('contact')}</h2>
                </div>
                <ul>
                    {getData().contact.map((personalData, index) => (
                        <ProfilePersonalDataItem key={index} personalData={personalData} index={index}/>
                    ))}
                </ul>
                <div className="flex flex-row items-center font-bold px-7 py-5 bg-white border-t border-t-primary-color mt-3">
                    <BuildingsIcon/>
                    <h2 className="font-mini-title ml-2">{translate('logisticData')}</h2>
                </div>
                <ul>
                    <ProfilePersonalDataItem personalData={getData().logistic[0]} index={0}/>
                </ul>
            </div>
        </AppWrapper>
    )
}

export default EntityProfile
