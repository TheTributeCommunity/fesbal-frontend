import {useTranslation} from 'react-i18next'
import {Link, useNavigate} from 'react-router-dom'
import {namespaces} from '../i18n/i18n.constants'
import AppNextButton from '../components/atom/AppNextButton'
import PlusAddIcon from '../components/icons/PlusAddIcon'
import useRegisterFamilyMembers from '../hooks/useRegisterFamilyMembers'
import AppPageHeader from '../components/molecules/AppPageHeader'
import AppWrapper from '../components/molecules/AppWrapper'
import FamilyMemberCard from '../components/atom/FamilyMemberCard'
import {AppRoute} from '../enums/app-route'
import Spinner from '../components/atom/Spinner'
import BlankStage from '../components/atom/BlankStage'
import { useState } from 'react'
import AppMessageDialog from '../components/molecules/AppMessageDialog'
import AlertIcon from '../components/icons/AlertIcon'

const RegisterFamilyMembers = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerFamilyMembers)
    const {user, familyMembers, handleNextWithFamilyMembers, disableNext} = useRegisterFamilyMembers()
    const [showNoRelativesDialog, setShowNoRelativesDialog] = useState(false)
    const navigate = useNavigate()

    const handleWithoutFamilyMembers = () => navigate(AppRoute.REGISTER_REFERRAL_SHEET)

    if (!user) return (
        <BlankStage>
            <Spinner />
        </BlankStage>
    )

    return (
        <AppWrapper  showBackButton title={translate('title')}>
            <div className="flex flex-col gap-4 w-full">
                <AppPageHeader
                    title={translate('pageHeading')} description={translate('description') as string}/>
                <span className="text-primary-color font-roboto-flex font-bold text-base leading-5">{translate('incumbent')}</span>
                {user && <FamilyMemberCard person={user} />}
                {familyMembers.map((familyMember, index) => 
                    <div key={`familyMember_${index}`} className="flex flex-col gap-4">
                        <span className="text-primary-color font-roboto-flex font-bold text-base leading-5">{translate('familyMember')} {index+1}</span>
                        <FamilyMemberCard person={familyMember} allowEdit={true} />
                    </div>)}
                <div className="flex flex-col gap-8">
                    <Link to={AppRoute.REGISTER_FAMILY_MEMBERS_ADD}
                        className="flex gap-2 bg-primary-color-light p-3.5 rounded-lg justify-center border border-white">
                        <PlusAddIcon/>
                        <p className="font-button text-primary-color">{translate('addMember')}</p>
                    </Link>
                    {familyMembers.length === 0 &&
                        <p className="cursor-pointer text-center underline font-big-link"
                            onClick={() => setShowNoRelativesDialog(true)}>{translate('nextWithoutMembers')}</p>
                    }
                    <AppNextButton title={translate('nextWithMembers')} disabled={disableNext}
                        onClick={handleNextWithFamilyMembers}/>
                </div>
            </div>
            <AppMessageDialog
                visible={showNoRelativesDialog}
                icon={<AlertIcon />}
                description={'Estás apunto de continuar sin agregar ningún familiar. Podrás agregarlo más adelante siempre que esté recogido en la hoja de derivación.'}
                title={'Ningún familiar añadido'}
                buttonText={'Continuar'}
                buttonOnClick={handleWithoutFamilyMembers}
                secondaryButtonText={'Cancelar'}
                secondaryButtonOnClick={() => setShowNoRelativesDialog(false)}
                secondaryButtonBgColor="bg-warning-color"
            />
        </AppWrapper>
    )
}

export default RegisterFamilyMembers
