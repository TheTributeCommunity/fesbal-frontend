import AppWrapper from '../components/molecules/AppWrapper'
import getDefaultFoodItems from '../helpers/getDefaultFoodItems'
import getFamilyUnitAges from '../helpers/getFamilyUnitAges'
import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import EntityUserSignatureHeader from '../components/atom/EntityUserSignatureHeader'
import UserSignatureFoodList from '../components/atom/EntityUserSignatureFoodList'
import UserSignatureFooter from '../components/molecules/UserSignatureFooter'
import useRegisterFamilyMembers from '../hooks/useRegisterFamilyMembers'
import Spinner from '../components/atom/Spinner'
import { FoodPicking } from '../types/FoodPicking'
import { useEffect, useState } from 'react'
import AppMessageDialog from '../components/molecules/AppMessageDialog'
import SuccessIcon from '../components/icons/SuccessIcon'
import { useNavigate } from 'react-router-dom'
import UnsuccessIcon from '../components/icons/UnsuccessIcon'
import { AppRoute } from '../enums/app-route'

const UserSignature = () => {
    const {t: translate} = useTranslation(namespaces.pages.entityUserSignature)
    const { user, loading } = useRegisterFamilyMembers()
    const [foodItems, setFoodItems] = useState<FoodPicking[]>([])
    const [showConfirmed, setShowConfirmed] = useState(false)
    const [showRejected, setShowRejected] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && user) {
            const ages = getFamilyUnitAges(user)
            setFoodItems(getDefaultFoodItems(ages))
        }
    }, [loading])

    const onConfirm = () => {
        setTimeout(() => setShowConfirmed(true), 500)
    }

    const onReject = () => {
        setShowRejected(true)
    }

    const handleContinue = () => navigate(AppRoute.RECIPIENT_HOME)

    return (
        <AppWrapper title={translate('title')} showBackButton={false} containerClassName="px-0">
            {loading ? <Spinner /> : 
                <>
                    <div className="h-full px-8">
                        <EntityUserSignatureHeader
                            firstName={user?.firstName ?? ''}
                            lastName={user?.lastName ?? ''}
                            identityDocumentNumber={user?.identityDocumentNumber ?? ''}
                        />
                        <UserSignatureFoodList foodItems={foodItems} translate={translate}/>
                    </div>
                    <UserSignatureFooter onConfirm={onConfirm} onReject={onReject} translate={translate}/>
                </>}
            <AppMessageDialog
                visible={showConfirmed}
                icon={<SuccessIcon />}
                description="La recogida se ha confirmado. ¡Muchas gracias!"
                title="Recogida confirmada"
                buttonText="Continuar"
                buttonOnClick={handleContinue}
            />
            <AppMessageDialog
                visible={showRejected}
                icon={<UnsuccessIcon />}
                description="Haz rechazado la lista de alimentos."
                title="Rechazada"
                buttonText="Continuar"
                buttonOnClick={handleContinue}
                buttonBgColor="bg-warning-color"
            />
        </AppWrapper>
    )
}

export default UserSignature
