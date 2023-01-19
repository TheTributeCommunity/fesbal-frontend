import {ChangeEvent, FormEvent, useState} from "react";
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";

const useEditNewPassword = () => {
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);
    const {t: translate} = useTranslation(namespaces.pages.editNewPassword);

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
            title: translate('sweetAlert.title') as string,
            confirmButtonText: translate('sweetAlert.confirmButtonText') as string,
            cancelButtonText: translate('sweetAlert.cancelButtonText') as string,
            icon: 'warning',
            iconColor: '#EB5757',
            buttonsStyling: false,
            position: 'bottom',
            padding: '1rem',
            customClass: {
                popup: "rounded-md",
                actions: "flex gap-2 w-full",
                title: "text-2xl font-bold",
                confirmButton: "bg-warning-color hover-warning-color text-white rounded-xl font-medium w-full" +
                    " lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 focus-warning-color h-20",
                cancelButton: "bg-primary-color hover-primary-color text-white rounded-xl font-medium w-full" +
                    " lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 focus-primary-color h-20",
            },
            width: parent.innerWidth < 768 ? '95%' : parent.innerWidth < 1024 ? '48%' : '35%',

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: translate('sweetAlertSuccess.title') as string,
                    confirmButtonText: translate('sweetAlertSuccess.confirmButtonText') as string,
                    icon: 'success',
                    iconColor: '#3085d6',
                    buttonsStyling: false,
                    position: 'bottom',
                    padding: '1rem',
                    customClass: {
                        popup: "rounded-md",
                        actions: "w-full",
                        title: "text-2xl font-bold",
                        confirmButton: "bg-primary-color hover-primary-color text-white rounded-xl font-medium w-full" +
                            " focus:outline-none focus:ring-1 focus:ring-offset-1 focus-primary-color h-20",
                    },
                    width: parent.innerWidth < 768 ? '95%' : parent.innerWidth < 1024 ? '48%' : '35%',
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
export default useEditNewPassword;
