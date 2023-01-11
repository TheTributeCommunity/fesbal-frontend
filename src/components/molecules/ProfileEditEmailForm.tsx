import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import useProfileEditEmail from "../../hooks/useProfileEditEmail";
import {namespaces} from "../../i18n/i18n.constants";

const ProfileEditEmailForm = () => {
    const {email, onChange, hasError, onSubmit} = useProfileEditEmail("");
    const buttonDisabled = email.length < 6 || hasError;
    const {t} = useTranslation(namespaces.pages.profileEditEmail);

    return (
        <form noValidate onSubmit={onSubmit}
              className="mt-8 flex h-full w-full flex-col justify-between self-center md:w-1/2 lg:w-1/3">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    {email.length > 0 &&
                        <label htmlFor="email" className="text-primary-color font-label">{t('email')}</label>}
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder={t('email') as string}
                        className={`${hasError ? 'text-warning-color' : ''} rounded-md w-full px-4 py-5 placeholder-primary-color font-input`}
                    />
                    {hasError &&
                        <p className="text-warning-color font-label">{t('error')}</p>}
                </div>
            </div>
            <AppNextButton disabled={buttonDisabled} title={t('next')}/>
        </form>
    );
}

export default ProfileEditEmailForm;
