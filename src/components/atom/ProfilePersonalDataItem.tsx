import PersonalDataItemProps from '../../types/PersonalDataItemProps'
import AppEditProfileButton from './AppEditProfileButton'

interface ProfilePersonalDataItemProps {
    personalData: PersonalDataItemProps
    index: number
    itemClassName?: string
}

const ProfilePersonalDataItem = ({personalData, index, itemClassName}: ProfilePersonalDataItemProps) => {
    const {title, value, hasEditButton, goTo} = personalData
    const bgColor = index % 2 === 0 ? '' : 'bg-white'
    return (
        <>
            {hasEditButton ?
                <li className={`flex flex-row justify-between items-center ${bgColor} lg:rounded-md p-4  min-h-[4.5rem] ${itemClassName}`}>
                    <div className="flex flex-col gap-1">
                        <p className="text-primary-color font-label">{title}</p>
                        <p className="text-secondary-color font-input mt-1">{value}</p>
                    </div>
                    {goTo && <AppEditProfileButton goTo={goTo}/>}
                </li>
                :
                <li className={`${bgColor} lg:rounded-md p-4 min-h-[4.5rem] ${itemClassName}`}>
                    <p className="text-primary-color font-label">{title}</p>
                    <p className="text-secondary-color font-input mt-1">{value}</p>
                </li>
            }
        </>
    )
}

export default ProfilePersonalDataItem
