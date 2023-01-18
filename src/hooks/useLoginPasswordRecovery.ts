import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Swal from 'sweetalert2'
import usersMock from "../mocks/users.mock";
import {namespaces} from "../i18n/i18n.constants";
import {widthSwalCalculation} from "../helpers";

const useLoginPasswordRecovery = <T extends string>(initialState: T) => {
    const [email, setEmail] = useState<T>(initialState);
    const [hasError, setHasError] = useState<boolean>(false);

    const navigate = useNavigate();
    const {t} = useTranslation(namespaces.pages.loginPasswordRecovery);
    const isFormValid = (email: string): boolean => {
        return usersMock.some((user) => user.email === email);
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(email => e.target.value as T);
        setHasError(false);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasError(!isFormValid(email));
        if (isFormValid(email)) Swal.fire({
            title: t("sweetAlert.title") as string,
            text: t("sweetAlert.description") as string,
            icon: 'success',
            iconColor: '#0F95CE',
            confirmButtonText: t("sweetAlert.confirm") as string,
            buttonsStyling: false,
            position: 'bottom',
            padding: '1rem',
            customClass: {
                popup: "rounded-2xl",
                title: "font-big-title text-secondary-color",
                actions: "w-full",
                htmlContainer: "text-left font-text text-secondary-color",
                confirmButton: "bg-primary-color hover-primary-color text-white rounded-xl font-button w-full" +
                    " focus:outline-none focus:ring-1 focus:ring-offset-1 focus-primary-color h-16",
            },
            width: widthSwalCalculation(parent.innerWidth),
        }).then(() => navigate('/login'));
    }

    return {
        onChange,
        hasError,
        onSubmit,
        email
    }
}

export default useLoginPasswordRecovery;
