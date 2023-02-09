import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppPopupAlert from "../components/atom/AppPopupAlert";
import {AppRoute} from "../enums/app-route";
import {validateEmail} from "../helpers";
import {AuthService} from "../services/auth-service";


const useEntityLoginPasswordRecovery = () => {
    const [email, setEmail] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);

    const navigate = useNavigate();
    const {t: translate} = useTranslation(namespaces.pages.entityLoginPasswordRecovery);
    const isEmailValid = (): boolean => {
        return validateEmail(email);
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
        validateEmail: isEmailValid
    }
}

export default useEntityLoginPasswordRecovery;
