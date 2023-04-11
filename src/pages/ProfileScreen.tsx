import { useTranslation } from 'react-i18next'
import BlankStage from '../components/atom/BlankStage'
import FamilyMemberCard from '../components/atom/FamilyMemberCard'
import ProfilePersonalDataItem from '../components/atom/ProfilePersonalDataItem'
import Spinner from '../components/atom/Spinner'
import FamilyMembersIcon from '../components/icons/FamilyMembersIcon'
import AppWrapper from '../components/molecules/AppWrapper'
import { AppRoute } from '../enums/app-route'
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
                hasEditButton: true,
                goTo: AppRoute.PROFILE_EDIT_EMAIL,
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

    if (!user) return (
        <BlankStage>
            <Spinner />
        </BlankStage>
    )

    return (
        <AppWrapper showBackButton title={translate('title')} containerClassName="px-0" showBurger>
            <div className="flex w-full flex-col gap-4 mb-2">
                <ul className='border-b-[1px] border-b-primary-color'>
                    {getPersonalData().map((personalData, index) => (
                        <ProfilePersonalDataItem key={index} personalData={personalData} index={index} itemClassName="px-8"/>
                    ))}
                </ul>
                <div className="flex flex-row items-center gap-2 px-8 font-bold my-3">
                    <FamilyMembersIcon/>
                    <h2 className="font-mini-title text-secondary-color">{translate('familyMembers')}</h2>
                    <div className="ml-auto"></div>
                </div>
                <div className="flex flex-col justify-center mx-auto w-full md:w-1/2 lg:w-1/3 px-8 h-full">
                    {familyMembers.map((familyMember, index) => 
                        <div className="flex flex-col gap-4 pb-2" key={index}>
                            <span className="text-primary-color font-roboto-flex font-bold text-base leading-5">{translate('familyMember', {ns: 'pages.registerFamilyMembers'})} {index+1}</span>
                            <FamilyMemberCard person={familyMember} />
                        </div>)}
                </div>
            </div>
        </AppWrapper>
    )
}

export default ProfileScreen
