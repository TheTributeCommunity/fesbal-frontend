import { useTranslation } from 'react-i18next'
import FamilyMemberCard from '../components/atom/FamilyMemberCard'
import ProfilePersonalDataItem from '../components/atom/ProfilePersonalDataItem'
import FamilyMembersIcon from '../components/icons/FamilyMembersIcon'
import AppWrapper from '../components/molecules/AppWrapper'
import useRegisterFamilyMembers from '../hooks/useRegisterFamilyMembers'
import { namespaces } from '../i18n/i18n.constants'
import PersonalDataItemProps from '../types/PersonalDataItemProps'


const ProfileScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.profileScreen)
    const {user, familyMembers} = useRegisterFamilyMembers()
    const getPersonalData = (): PersonalDataItemProps[] => {
        return [
            {
                title: translate('fullName'),
                value: `${user?.firstName} ${user?.lastName}`,
            },
            {
                title: translate('id'),
                value: user?.identityDocumentNumber
            },
            {
                title: translate('birthDate'),
                value: user?.dateOfBirth,
            },
            {
                title: translate('email'),
                value: user?.email,
                goTo: '/profile/edit-email',
            },
            {
                title: translate('phone'),
                value: user?.phone,
            },
            {
                title: translate('password'),
                value: '********',
                goTo: '/profile/edit-prev-password',
            }
        ]
    }

    return (
        <AppWrapper showBackButton title={translate('title')} containerClassName="px-0" showBurger>
            <div className="flex w-full flex-col gap-4 mb-2">
                <ul className='border-b-[1px] border-b-primary-color'>
                    {getPersonalData().map((personalData, index) => (
                        <ProfilePersonalDataItem key={index} personalData={personalData} index={index} itemClassName="px-8"/>
                    ))}
                </ul>
                <div className="flex flex-row items-center gap-2 px-8 font-bold mt-3">
                    <FamilyMembersIcon/>
                    <h2 className="font-mini-title">{translate('familyMembers')}</h2>
                    <div className="ml-auto"></div>
                </div>
                {familyMembers.map((familyMember, index) => 
                    <div className="flex flex-col gap-4 pb-2" key={index}>
                        <span className="text-primary-color font-roboto-flex font-bold text-base leading-5">{translate('familyMember', {ns: 'pages.registerFamilyMembers'})} {index+1}</span>
                        <FamilyMemberCard person={familyMember} />
                    </div>)}
            </div>
        </AppWrapper>
    )
}

export default ProfileScreen
