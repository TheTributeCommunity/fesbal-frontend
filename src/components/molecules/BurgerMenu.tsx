import classNames from 'classnames'
import { getAuth, signOut } from 'firebase/auth'
import { Sidebar } from 'primereact/sidebar'
import { ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { AppRoute } from '../../enums/app-route'
import { getCurrentRoute } from '../../helpers/getCurrentRoute'
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
    selected?: boolean,
    onClick: () => void
}

const MenuItem = ({icon, title, onClick, selected = false}: MenuItemProps) => {
    return (
        <div className={classNames('cursor-pointer w-full flex flex-row justify-start items-center gap-4 px-4 py-5', {'bg-[#F2FBFF]': !selected, 'bg-white' : selected})} onClick={onClick}>
            <div className="flex justify-end w-[1.75rem]">{icon}</div>
            <span className={classNames('text-center font-roboto-flex font-normal text-base leading-5', {'text-secondary-color': !selected, 'text-primary-color': selected})}>{title}</span>
        </div>
    )
}

const BurgerMenu = ({visible, onHide, userType = 'recipient'}: BurgerMenuProps): JSX.Element => {
    const [showLogoutDialog, setShowLogoutDialog] = useState(false)
    const [showAccountDeletionDialog, setShowAccountDeletionDialog] = useState(false)
    const navigate = useNavigate()
    const {t: translate} = useTranslation(namespaces.components.burgerMenu)
    const currentRoute = getCurrentRoute()

    const recipientMmenuItems = [
        {
            icon: <PersonIcon />,
            title: translate('profile', ''),
            navigateTo: AppRoute.PROFILE,
        },
        {
            icon: <NotificationsIcon />,
            title: translate('notifications', ''),
            navigateTo: AppRoute.NOTIFICATIONS,
        },
        {
            icon: <ClockIcon />,
            title: translate('history', ''),
            navigateTo: AppRoute.PICKUP_HISTORY,
        },
        {
            icon: <PickupIcon />,
            title: translate('pickup', ''),
            navigateTo: AppRoute.PICKUP_POINT,
        },
        {
            icon: <DocumentIcon />,
            title: translate('sheet', ''),
            navigateTo: AppRoute.REFERRAL,
        },
        {
            icon: <HelpIcon />,
            title: translate('help', ''),
            onClick: () => {
                window.open('https://www.fesbal.org.es/faqs', '_blank', 'noreferrer')
            },
        },
        {
            icon: <DeleteAccountIcon />,
            title: translate('deleteAccount', ''),
            onClick: () => {
                setShowAccountDeletionDialog(true)
            },
        },
    ]
    
    const entityMenuItems = [
        {
            icon: <PersonIcon />,
            title: translate('profile', ''),
            navigateTo: AppRoute.ENTITY_PROFILE,
        },
        {
            icon: <NotificationsIcon />,
            title: translate('notifications', ''),
            navigateTo: AppRoute.ENTITY_NOTIFICATIONS,
        },
        {
            icon: <ClockIcon />,
            title: translate('entityDeliveryHistory', ''),
            navigateTo: AppRoute.ENTITY_DELIVERY_HISTORY,
        },
        {
            icon: <HelpIcon />,
            title: translate('help', ''),
            onClick: () => {
                window.open('https://www.fesbal.org.es/faqs', '_blank', 'noreferrer')
            },
        },
        {
            icon: <DeleteAccountIcon />,
            title: translate('deleteAccount', ''),
            onClick: () => {
                setShowAccountDeletionDialog(true)
            },
        },
    ]

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
                <div className="flex flex-col gap-[1px]">
                    {(userType === 'recipient' ? recipientMmenuItems : entityMenuItems).map((menuItem, index) => (
                        <MenuItem key={index} selected={menuItem?.navigateTo === currentRoute ?? false} icon={menuItem.icon} title={menuItem.title} onClick={menuItem.onClick ? menuItem.onClick : () => navigate(menuItem.navigateTo)} />
                    ))}
                </div>
                <div className="cursor-pointer w-full bg-white flex flex-row justify-start items-center gap-4 px-4 py-5" onClick={() => setShowLogoutDialog(true)}>
                    <div className="flex justify-end w-[1.75rem]">{<PowerIcon />}</div>
                    <span className="text-center font-roboto-flex text-focus-warning-color font-normal text-base leading-5">{translate('logOut', '')}</span>
                </div>
            </div>
        </Sidebar>
    )
}

export default BurgerMenu