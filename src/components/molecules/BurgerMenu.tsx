import { Sidebar } from "primereact/sidebar"
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { namespaces } from "../../i18n/i18n.constants";
import AppCloseButton from "../atom/AppCloseButton";
import ClockIcon from "../icons/ClockIcon";
import DeleteAccountIcon from "../icons/DeleteAccountIcon";
import DocumentIcon from "../icons/DocumentIcon";
import HelpIcon from "../icons/HelpIcon";
import NotificationsIcon from "../icons/NotificationsIcon";
import PersonIcon from "../icons/PersonIcon";
import PickupIcon from "../icons/PickupIcon";
import PowerIcon from "../icons/PowerIcon";

interface BurgerMenuProps {
    visible: boolean,
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

const BurgerMenu = ({visible, onHide}: BurgerMenuProps): JSX.Element => {
    const navigate = useNavigate()
    const {t: translate} = useTranslation(namespaces.components.burgerMenu);
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
                        <span className="text-primary-color font-bold text-2xl leading-7">BALPA</span>
                    </div>
                    <div className="w-1/5 flex justify-end items-center">
                        <AppCloseButton onClick={onHide}/>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <MenuItem icon={<PersonIcon />} title={translate('profile', '')} onClick={() => {navigate('/profile')}} />
                    <MenuItem icon={<NotificationsIcon />} title={translate('notifications', '')} onClick={() => {navigate('/notifications')}} />
                    <MenuItem icon={<ClockIcon />} title={translate('history', '')} onClick={() => {navigate('/pickup-history')}} />
                    <MenuItem icon={<PickupIcon />} title={translate('pickup', '')} onClick={() => {navigate('/pickup-point')}} />
                    <MenuItem icon={<DocumentIcon />} title={translate('sheet', '')} onClick={() => {navigate('/referral')}} />
                    <MenuItem icon={<HelpIcon />} title={translate('help', '')} onClick={() => {window.location.replace('https://www.fesbal.org.es/faqs')}} />
                    <MenuItem icon={<DeleteAccountIcon />} title={translate('deleteAccount', '')} onClick={() => {}} />
                </div>
                <div className="cursor-pointer w-full flex flex-row justify-start items-center gap-5 px-5 pb-5" onClick={() => navigate('/login')}>
                    {<PowerIcon />}
                    <span className="text-center font-roboto-flex text-focus-warning-color font-normal text-base leading-5">{translate('logOut', '')}</span>
                </div>
            </div>
        </Sidebar>
    )
}

export default BurgerMenu;