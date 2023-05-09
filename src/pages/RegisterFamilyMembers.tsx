import {useTranslation} from 'react-i18next'
import {Link, useNavigate} from 'react-router-dom'
import {namespaces} from '../i18n/i18n.constants'
import AppNextButton from '../components/atom/AppNextButton'
import PlusIcon from '../components/icons/PlusIcon'
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
import { RelativeService } from '../services/relative-service'
import { Relative } from '../models/relative'
import { useRecipient } from '../hooks/useRecipient'

const RegisterFamilyMembers = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerFamilyMembers)
    const {familyMembers, handleNextWithFamilyMembers, disableNext} = useRegisterFamilyMembers()
    const [showNoRelativesDialog, setShowNoRelativesDialog] = useState(false)
    const [showConfirmDeleteDialog, setShowConfirmDeleteDialog] = useState(false)
    const [memberToDelete, setMemberToDelete] = useState('')
    const [showDeleteErrorDialog, setShowDeleteErrorDialog] = useState(false)
    const navigate = useNavigate()
    const { data, loading } = useRecipient()

    const handleWithoutFamilyMembers = () => navigate(AppRoute.REGISTER_REFERRAL_SHEET)

    const handleConfirmDeleteRelative = (id: string) => {
        setMemberToDelete(id)
        setShowConfirmDeleteDialog(true)
    }

    const handleDeleteRelative = async () => {
        const success = await RelativeService.delete(memberToDelete)
        setShowConfirmDeleteDialog(false)
        if (!success) setShowDeleteErrorDialog(true) 
    }

    const handleEditRelative = (relative: Relative) => {
        navigate(AppRoute.REGISTER_FAMILY_MEMBERS_ADD, { state: { relative: relative }})
    }

    if (loading) return (
        <BlankStage>
            <Spinner />
        </BlankStage>
    )

    return (
        <AppWrapper  showBackButton title={translate('title')}>
            <div className="flex flex-col gap-4 w-full">
                <AppPageHeader
                    title={translate('pageHeading')} description={translate('description') as string}/>
                <div className="flex flex-col gap-8">
                    <Link to={AppRoute.REGISTER_FAMILY_MEMBERS_ADD}
                        className="flex gap-2 bg-secondary-color p-3.5 rounded-lg justify-center border border-white">
                        <PlusIcon colorClass="text-white"/>
                        <p className="font-button text-white">{translate('addMember')}</p>
                    </Link>
                    {familyMembers.length === 0 &&
                        <p className="cursor-pointer text-center underline font-big-link"
                            onClick={() => setShowNoRelativesDialog(true)}>{translate('nextWithoutMembers')}</p>
                    }
                    <AppNextButton title={translate('nextWithMembers')} disabled={disableNext}
                        onClick={handleNextWithFamilyMembers}/>
                </div>
                <span className="text-primary-color font-roboto-flex font-bold text-base leading-5">{translate('incumbent')}</span>
                {data && <FamilyMemberCard person={data} />}
                {familyMembers.map((familyMember, index) => 
                    <div key={`familyMember_${index}`} className="flex flex-col gap-4">
                        <span className="text-primary-color font-roboto-flex font-bold text-base leading-5">{translate('familyMember')} {index+1}</span>
                        <FamilyMemberCard person={familyMember} allowEdit={true} deleteRelative={handleConfirmDeleteRelative} editRelative={handleEditRelative} />
                    </div>)}
                
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
            <AppMessageDialog
                visible={showConfirmDeleteDialog}
                icon={<AlertIcon />}
                description={'¿Quieres eliminar a este familiar?.'}
                title={'Eliminar familiar'}
                buttonText={'Continuar'}
                buttonOnClick={handleDeleteRelative}
                secondaryButtonText={'Cancelar'}
                secondaryButtonOnClick={() => setShowConfirmDeleteDialog(false)}
                secondaryButtonBgColor="bg-warning-color"
            />
            <AppMessageDialog
                visible={showDeleteErrorDialog}
                icon={<AlertIcon />}
                description={'Ha ocurrido un error al intentar borra el familiar, puede intentarlo de nuevo.'}
                title={'Error al eliminar'}
                buttonText={'Continuar'}
                buttonOnClick={() => setShowDeleteErrorDialog(false)}
                buttonBgColor="bg-warning-color"
            />
        </AppWrapper>
    )
}

export default RegisterFamilyMembers
