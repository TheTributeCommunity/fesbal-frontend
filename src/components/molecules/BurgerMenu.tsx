import { getAuth, signOut } from 'firebase/auth'
import { Sidebar } from 'primereact/sidebar'
import { ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { AppRoute } from '../../enums/app-route'
import { namespaces } from '../../i18n/i18n.constants'
import AppCloseButton from '../atom/AppCloseButton'
import AlertIcon from '../icons/AlertIcon'
import ClockIcon from '../icons/ClockIcon'
import DeleteAccountIcon from '../icons/DeleteAccountIcon'
import DocumentIcon from '../icons/DocumentIcon'
import HelpIcon from '../icons/HelpIcon'
import NotificationsIcon from '../icons/NotificationsIcon'
import PersonIcon from '../icons/PersonIcon'
import PickupIcon from '../icons/PickupIcon'
import PowerIcon from '../icons/PowerIcon'
import AppMessageDialog from './AppMessageDialog'

interface BurgerMenuProps {
    visible: boolean,
    userType?: 'recipient' | 'entity'
    onHide: () => void
}

interface MenuItemProps {
    icon: ReactNode,
    title: string,
    onClick: () => void
}

const MenuItem = ({icon, title, onClick}: MenuItemProps) => {
    return (
        <div className="cursor-pointer w-full bg-[#F2FBFF] flex flex-row justify-start items-center gap-4 px-4 py-5" onClick={onClick}>
            {icon}
            <span className="text-center font-roboto-flex text-secondary-color font-normal text-base leading-5">{title}</span>
        </div>
    )
}

const BurgerMenu = ({visible, onHide, userType = 'recipient'}: BurgerMenuProps): JSX.Element => {
    const [showLogoutDialog, setShowLogoutDialog] = useState(false)
    const [showAccountDeletionDialog, setShowAccountDeletionDialog] = useState(false)
    const navigate = useNavigate()
    const {t: translate} = useTranslation(namespaces.components.burgerMenu)

    const RecipientMenuItems = () => {
        return (
            <div className="flex flex-col gap-[1px]">
                <MenuItem icon={<PersonIcon />} title={translate('profile', '')} onClick={() => {navigate(AppRoute.PROFILE)}} />
                {/* <MenuItem icon={<NotificationsIcon />} title={translate('notifications', '')} onClick={() => {navigate(AppRoute.NOTIFICATIONS)}} />
                <MenuItem icon={<ClockIcon />} title={translate('history', '')} onClick={() => {navigate(AppRoute.PICKUP_HISTORY)}} />
                <MenuItem icon={<PickupIcon />} title={translate('pickup', '')} onClick={() => {navigate(AppRoute.PICKUP_POINT)}} />
                <MenuItem icon={<DocumentIcon />} title={translate('sheet', '')} onClick={() => {navigate(AppRoute.REFERRAL)}} /> */}
                <MenuItem icon={<HelpIcon />} title={translate('help', '')} onClick={() => {window.open('https://www.fesbal.org.es/faqs', '_blank', 'noreferrer')}} />
                <MenuItem icon={<DeleteAccountIcon />} title={translate('deleteAccount', '')} onClick={() => setShowAccountDeletionDialog(true)} />
            </div>
        )
    }
    
    const EntityMenuItems = () => {
        return (
            <div className="flex flex-col gap-[1px]">
                <MenuItem icon={<PersonIcon />} title={translate('profile', '')} onClick={() => {navigate(AppRoute.ENTITY_PROFILE)}} />
                <MenuItem icon={<NotificationsIcon />} title={translate('notifications', '')} onClick={() => {navigate(AppRoute.ENTITY_NOTIFICATIONS)}} />
                <MenuItem icon={<ClockIcon />} title={translate('entityDeliveryHistory', '')} onClick={() => {navigate(AppRoute.ENTITY_DELIVERY_HISTORY)}} />
                <MenuItem icon={<HelpIcon />} title={translate('help', '')} onClick={() => {window.open('https://www.fesbal.org.es/faqs', '_blank', 'noreferrer')}} />
                <MenuItem icon={<DeleteAccountIcon />} title={translate('deleteAccount', '')} onClick={() => setShowAccountDeletionDialog(true)} />
            </div>
        )
    }

    const handleLogout = () => {
        signOut(getAuth()).then(() => navigate(AppRoute.WELCOME))
    }

    const handleLogoutCancel = () => setShowLogoutDialog(false)

    const handleAccountDeletionAcknowledgement = () => setShowAccountDeletionDialog(false)

    if (showLogoutDialog) return (
        <AppMessageDialog
            visible={showLogoutDialog}
            icon={<AlertIcon />}
            description={'¿Quieres cerrar la sesión actual?'}
            title={'Cerrar sesión'}
            buttonText={'Sí'}
            buttonOnClick={handleLogout}
            secondaryButtonText={'No'}
            secondaryButtonOnClick={handleLogoutCancel}
            secondaryButtonBgColor="bg-warning-color"
        />
    )

    if (showAccountDeletionDialog) return (
        <AppMessageDialog
            visible={showAccountDeletionDialog}
            icon={<DeleteAccountIcon color={'#EB5757'} width={70} height={60} />}
            description={userType === 'entity' ? 'Para poder eliminar tu cuenta y darte de baja como entidad colaboradora debes ponerte en contacto con FESBAL.' : 'Para poder eliminar tu cuenta y darte de baja como beneficiario debes ponerte en contacto con FESBAL.'}
            title={'Eliminar cuenta'}
            buttonText={'Ok'}
            buttonOnClick={handleAccountDeletionAcknowledgement}
            buttonBgColor="bg-warning-color"
        />
    )

    return (
        <Sidebar
            visible={visible} position="right" onHide={onHide}
            className="bg-white rounded-md border border-white shadow-md py-2"
            maskClassName="bg-mask-opaque w-full h-full"
            closeOnEscape blockScroll
            showCloseIcon={false}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-end px-8">
                    <div className="w-3/5 flex justify-center items-center">
                        <span className="text-primary-color font-bold text-2xl leading-7">{translate('title')}</span>
                    </div>
                    <div className="w-1/5 flex justify-end items-center">
                        <AppCloseButton onClick={onHide}/>
                    </div>
                </div>
                {userType === 'recipient' ? <RecipientMenuItems /> : <EntityMenuItems />}
                <div className="cursor-pointer w-full flex flex-row justify-start items-center gap-5 px-5 pb-5" onClick={() => setShowLogoutDialog(true)}>
                    {<PowerIcon />}
                    <span className="text-center font-roboto-flex text-focus-warning-color font-normal text-base leading-5">{translate('logOut', '')}</span>
                </div>
            </div>
        </Sidebar>
    )
}

export default BurgerMenu