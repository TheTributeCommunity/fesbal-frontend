import {widthSwalCalculation} from "../../helpers";
import Swal, {SweetAlertIcon} from "sweetalert2";

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

    const isWarning = icon === "warning";
    const confirmButtonColor = isWarning ? 'warning-color' : 'primary-color';
    const cancelButtonColor = isWarning ? 'primary-color' : 'warning-color';
    const handleTwoButtons = {
        confirmButton: `bg-${confirmButtonColor} hover-${confirmButtonColor} focus-${confirmButtonColor} text-white
                rounded-2xl font-button w-full lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 h-16`,
        cancelButton: `bg-${cancelButtonColor} hover-${cancelButtonColor} focus-${cancelButtonColor} text-white
                rounded-2xl font-button w-full lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 h-16`,
    }
    const handleOneButton = {
        confirmButton: `bg-${confirmButtonColor} hover-${confirmButtonColor} focus-${confirmButtonColor} text-white
                rounded-2xl font-button w-full focus:outline-none focus:ring-1 focus:ring-offset-1 h-16`,
    }

    return Swal.mixin({
        position: 'bottom',
        padding: '1rem',
        buttonsStyling: false,
        title,
        text,
        icon,
        iconColor: (isWarning ? '#EB5757' : '#2D7DB5'),
        showCancelButton: !!cancelButtonText,
        confirmButtonText,
        cancelButtonText,
        reverseButtons: isWarning,
        focusCancel: isWarning,
        customClass: {
            popup: 'rounded-2xl',
            actions: 'flex gap-2 w-full',
            title: 'font-big-title text-secondary-color',
            htmlContainer: 'text-left font-text text-secondary-color',
            confirmButton: isWarning ? handleTwoButtons.confirmButton : handleOneButton.confirmButton,
            cancelButton: isWarning ? handleTwoButtons.cancelButton : handleOneButton.confirmButton,
        },
        width: widthSwalCalculation(parent.innerWidth),
    });
};
