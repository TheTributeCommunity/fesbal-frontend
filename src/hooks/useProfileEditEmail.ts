import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import usersMock from "../mocks/users.mock";
import {namespaces} from "../i18n/i18n.constants";
import AppPopupAlert from "../components/atom/AppPopupAlert";
import {validateEmail as isAnEmail} from "../helpers";


const useProfileEditEmail = <T extends string>(initialState: T) => {
    const [email, setEmail] = useState<T>(initialState);
    const [hasError, setHasError] = useState<boolean>(false);
    const {t: translate} = useTranslation(namespaces.pages.profileEditEmail);

    const navigate = useNavigate();
    const emailAlreadyExists = (email: string): boolean => {
        return usersMock.some(user => user.email === email);
    }
    const validateEmail = (email: string): boolean => {
        return isAnEmail(email) && !emailAlreadyExists(email);
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value as T);
        setHasError(false);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasError(!validateEmail(email));
        if (validateEmail(email)) {
            AppPopupAlert({
                icon: 'warning',
                title: translate("sweetAlert.title") as string,
                confirmButtonText: translate("sweetAlert.confirmButtonText") as string,
                cancelButtonText: translate("sweetAlert.cancelButtonText") as string,
            }).fire().then((result) => {
                if (result.isConfirmed) {
                    AppPopupAlert({
                        icon: 'success',
                        title: translate("sweetAlertSuccess.title") as string,
                        confirmButtonText: translate("sweetAlertSuccess.confirmButtonText") as string,
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
