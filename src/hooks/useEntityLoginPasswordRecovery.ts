import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppPopupAlert from "../components/atom/AppPopupAlert";
import {AppRoute} from "../enums/app-route";
import ValidateEmail from "../helpers/validateEmail";
import {AuthService} from "../services/auth-service";


const useEntityLoginPasswordRecovery = () => {
    const [email, setEmail] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);

    const navigate = useNavigate();
    const {t: translate} = useTranslation(namespaces.pages.entityLoginPasswordRecovery);
    const validateEmail = (): boolean => {
        return ValidateEmail(email);
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setHasError(false);
    }
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await AuthService.sendPasswordRecoveryEmail(email);
            AppPopupAlert({
                icon: 'success',
                title: translate("sweetAlert.title") as string,
                text: translate("sweetAlert.description") as string,
                confirmButtonText: translate("sweetAlert.confirm") as string,
            }).fire().then(() => navigate(AppRoute.ENTITY_LOGIN));
            return true;
        } catch (error) {
            console.log(error);
            setHasError(true);
            return false;
        }
    }

    return {
        onChange,
        hasError,
        onSubmit,
        email,
        validateEmail
    }
}

export default useEntityLoginPasswordRecovery;
