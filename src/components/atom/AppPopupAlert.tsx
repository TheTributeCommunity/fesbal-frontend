import {widthSwalCalculation} from '../../helpers'
import Swal, {SweetAlertIcon} from 'sweetalert2'

interface PopupAlertProps {
    icon: SweetAlertIcon;
    title: string;
    confirmButtonText: string;
    text?: string;
    cancelButtonText?: string;
}

export default ({
    icon,
    title,
    text,
    confirmButtonText,
    cancelButtonText,
}: PopupAlertProps) => {

    const isWarning = icon === 'warning' || icon === 'error'
    const hasCancelButton = cancelButtonText !== undefined

    const oneButtonStyle = {
        confirmButton: `bg-primary-color hover-primary-color focus-primary-color text-white
                rounded-2xl font-button w-full focus:outline-none focus:ring-1 focus:ring-offset-1 h-16`,
        cancelButton: `bg-warning-color hover-warning-color focus-warning-color text-white
                rounded-2xl font-button w-full focus:outline-none focus:ring-1 focus:ring-offset-1 h-16`,
    }
    const twoButtonsStyle = {
        confirmButton: `bg-primary-color hover-primary-color focus-primary-color text-white
                rounded-2xl font-button w-full lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 h-16`,
        cancelButton: `bg-warning-color hover-warning-color focus-warning-color text-white
                rounded-2xl font-button w-full lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 h-16`,
    }
    const twoButtonsWarningStyle = {
        confirmButton: `bg-warning-color hover-warning-color focus-warning-color text-white
                rounded-2xl font-button w-full lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 h-16`,
        cancelButton: `bg-primary-color hover-primary-color focus-primary-color text-white
                rounded-2xl font-button w-full lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 h-16`,
    }
    const confirmButtonStyle = !hasCancelButton && isWarning
        ? oneButtonStyle.cancelButton
        : !hasCancelButton
            ? oneButtonStyle.confirmButton
            : isWarning
                ? twoButtonsWarningStyle.confirmButton
                : twoButtonsStyle.confirmButton


    return Swal.mixin({
        position: 'bottom',
        padding: '1rem',
        buttonsStyling: false,
        title,
        text,
        icon,
        iconColor: (isWarning ? '#EB5757' : '#2D7DB5'),
        showCancelButton: hasCancelButton,
        confirmButtonText,
        cancelButtonText,
        reverseButtons: isWarning,
        focusCancel: isWarning,
        customClass: {
            popup: 'rounded-2xl',
            actions: 'flex gap-2 w-full',
            title: 'font-big-title text-secondary-color',
            htmlContainer: 'font-text text-secondary-color',
            confirmButton: confirmButtonStyle,
            cancelButton: isWarning ? twoButtonsWarningStyle.cancelButton : twoButtonsStyle.cancelButton,
        },
        width: widthSwalCalculation(parent.innerWidth),
    })
}
