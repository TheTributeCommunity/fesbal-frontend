import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import Swal from 'sweetalert2'
import usersMock from "../mocks/users.mock";
import {namespaces} from "../i18n/i18n.constants";

const useProfileEditEmail = <T extends string>(initialState: T) => {
    const [email, setEmail] = useState<T>(initialState);
    const [hasError, setHasError] = useState<boolean>(false);
    const {t} = useTranslation(namespaces.pages.profileEditEmail);


    const navigate = useNavigate();
    const isAnEmail = (email: string): boolean => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
    const emailAlreadyExists = (email: string): boolean => {
        return usersMock.some(user => user.email === email);
    }
    const validateEmail = (email: string): boolean => {
        return isAnEmail(email) && !emailAlreadyExists(email);
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(email => e.target.value as T);
        setHasError(false);
    }
    const sweetAlert = {
        title: t("sweetAlert.title"),
        confirmButtonText: t("sweetAlert.confirmButtonText"),
        cancelButtonText: t("sweetAlert.cancelButtonText"),
    }
    const sweetAlertSuccess = {
        title: t("sweetAlertSuccess.title"),
        confirmButtonText: t("sweetAlertSuccess.confirmButtonText"),
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasError(!validateEmail(email));
        if (validateEmail(email)) Swal.fire({
            showCancelButton: true,
            title: sweetAlert.title,
            confirmButtonText: sweetAlert.confirmButtonText,
            cancelButtonText: sweetAlert.cancelButtonText,
            icon: 'warning',
            iconColor: '#EB5757',
            buttonsStyling: false,
            position: 'bottom',
            padding: '1rem',
            customClass: {
                popup: "rounded-md",
                actions: "flex gap-2 w-full",
                title: "font-big-title",
                confirmButton: "bg-warning-color hover-warning-color text-white rounded-xl font-button w-full" +
                    " lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 focus-warning-color h-20",
                cancelButton: "bg-primary-color hover-primary-color text-white rounded-xl font-button w-full" +
                    " lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 focus-primary-color h-20",
            },
            width: parent.innerWidth < 768 ? '95%' : parent.innerWidth < 1024 ? '48%' : '35%',

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: sweetAlertSuccess.title,
                    confirmButtonText: sweetAlertSuccess.confirmButtonText,
                    icon: 'success',
                    iconColor: '#3085d6',
                    buttonsStyling: false,
                    position: 'bottom',
                    padding: '1rem',
                    customClass: {
                        popup: "rounded-md",
                        actions: "w-full",
                        title: "text-big-title",
                        confirmButton: "bg-primary-color hover-primary-color text-white rounded-xl font-button w-full" +
                            " lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 focus-primary-color h-20",
                    },
                    width: parent.innerWidth < 768 ? '95%' : parent.innerWidth < 1024 ? '48%' : '35%',
                }).then(() => navigate('/profile'))
            }
        })
    }

    return {
        onChange,
        hasError,
        onSubmit,
        email
    }
}
export default useProfileEditEmail;
