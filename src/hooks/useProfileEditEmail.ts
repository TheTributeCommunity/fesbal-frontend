import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import usersMock from "../mocks/users.mock";
import {namespaces} from "../i18n/i18n.constants";
import AppPopupAlert from "../components/atom/AppPopupAlert";

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
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasError(!validateEmail(email));
        if (validateEmail(email)) {
            AppPopupAlert({
                icon: 'warning',
                title: t("sweetAlert.title") as string,
                confirmButtonText: t("sweetAlert.confirmButtonText") as string,
                cancelButtonText: t("sweetAlert.cancelButtonText") as string,
            }).fire().then((result) => {
                if (result.isConfirmed) {
                    AppPopupAlert({
                        icon: 'success',
                        title: t("sweetAlertSuccess.title") as string,
                        confirmButtonText: t("sweetAlertSuccess.confirmButtonText") as string,
                    }).fire().then(() => navigate('/profile'))
                }
            })
        }
    }

    return {
        onChange,
        hasError,
        onSubmit,
        email
    }
}
export default useProfileEditEmail;
