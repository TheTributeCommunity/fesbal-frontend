import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import useProfileEditEmail from "../../hooks/useProfileEditEmail";
import {namespaces} from "../../i18n/i18n.constants";

const ProfileEditEmailForm = () => {
    const {email, onChange, hasError, onSubmit} = useProfileEditEmail("");
    const buttonDisabled = email.length < 6 || hasError;
    const {t: translate} = useTranslation(namespaces.pages.profileEditEmail);

    return (
        <form noValidate onSubmit={onSubmit} className="app-form">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className={`app-label ${email ? '' : "app-label--hidden"}`}>{translate("email")}</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder={translate('email') as string}
                        className={`app-input ${hasError ? 'app-input--error' : ''}`}
                    />
                    {hasError && <p className="text-warning-color font-label">{translate('error')}</p>}
                </div>
            </div>
            <AppNextButton disabled={buttonDisabled} title={translate('next')}/>
        </form>
    );
}

export default ProfileEditEmailForm;
