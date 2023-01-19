import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import usersMock from "../mocks/users.mock";
import {namespaces} from "../i18n/i18n.constants";
import AppPopupAlert from "../components/atom/AppPopupAlert";

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
        if (isFormValid(email)) {
            AppPopupAlert({
                icon: 'success',
                title: t("sweetAlert.title") as string,
                text: t("sweetAlert.description") as string,
                confirmButtonText: t("sweetAlert.confirm") as string,
            }).fire().then(() => navigate('/login'));
        }
    }

    return {
        onChange,
        hasError,
        onSubmit,
        email
    }
}

export default useLoginPasswordRecovery;
