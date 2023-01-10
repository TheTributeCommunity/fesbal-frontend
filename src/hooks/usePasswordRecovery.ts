import {ChangeEvent, FormEvent, useState} from "react";
import usersMock from "../mocks/users.mock";
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";

const usePasswordRecovery = <T extends string>(initialState: T) => {
    const [email, setEmail] = useState<T>(initialState);
    const [hasError, setHasError] = useState<boolean>(false);

    const navigate = useNavigate();
    const {t} = useTranslation(namespaces.pages.passwordRecovery);
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
                popup: "rounded-md",
                title: "text-2xl font-bold",
                actions: "w-full",
                htmlContainer: "text-left",
                confirmButton: "bg-[#3085d6] hover:bg-[#2D7DB5] text-white rounded-xl font-medium w-full" +
                    " focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#3085d6] h-20",
            },
            width: parent.innerWidth < 768 ? '95%' : parent.innerWidth < 1024 ? '48%' : '35%',
        }).then(() => navigate('/login'));
    }

    return {
        onChange,
        hasError,
        onSubmit,
        email
    }
}

export default usePasswordRecovery;
