import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Swal from 'sweetalert2'
import {namespaces} from "../i18n/i18n.constants";
import {widthSwalCalculation} from "../helpers";

const useProfileEditNewPassword = () => {
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);
    const {t} = useTranslation(namespaces.pages.profileEditNewPassword);

    const navigate = useNavigate();

    const arePasswordsEqual = password === passwordConfirm;
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setHasError(false);
    }
    const onChangeConfirm = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(e.target.value);
        setHasError(false);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasError(!arePasswordsEqual);
        if (arePasswordsEqual) Swal.fire({
            showCancelButton: true,
            title: t('sweetAlert.title') as string,
            confirmButtonText: t('sweetAlert.confirmButtonText') as string,
            cancelButtonText: t('sweetAlert.cancelButtonText') as string,
            icon: 'warning',
            iconColor: '#EB5757',
            buttonsStyling: false,
            position: 'bottom',
            reverseButtons: true,
            padding: '1rem',
            focusCancel: true,
            customClass: {
                popup: "rounded-2xl",
                actions: "flex gap-2 w-full",
                title: "font-big-title text-secondary-color",
                confirmButton: "bg-warning-color hover-warning-color text-white rounded-xl font-button w-full" +
                    " lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 focus-warning-color h-16",
                cancelButton: "bg-primary-color hover-primary-color text-white rounded-xl font-button w-full" +
                    " lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 focus-primary-color h-16",
            },
            width: widthSwalCalculation(parent.innerWidth),

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: t('sweetAlertSuccess.title') as string,
                    confirmButtonText: t('sweetAlertSuccess.confirmButtonText') as string,
                    icon: 'success',
                    iconColor: '#3085d6',
                    buttonsStyling: false,
                    position: 'bottom',
                    padding: '1rem',
                    customClass: {
                        popup: "rounded-2xl",
                        actions: "w-full",
                        title: "font-big-title text-secondary-color",
                        confirmButton: "bg-primary-color hover-primary-color text-white rounded-xl font-button w-full" +
                            " focus:outline-none focus:ring-1 focus:ring-offset-1 focus-primary-color h-16",
                    },
                    width: widthSwalCalculation(parent.innerWidth),
                }).then(() => navigate('/profile'));
            }
        })
    }

    return {
        onChange,
        hasError,
        onSubmit,
        password,
        onChangeConfirm,
        passwordConfirm
    }
}
export default useProfileEditNewPassword;
