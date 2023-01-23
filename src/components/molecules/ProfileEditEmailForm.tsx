import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import useProfileEditEmail from "../../hooks/useProfileEditEmail";
import {namespaces} from "../../i18n/i18n.constants";
import AppFormInput from "../atom/AppFormInput";

const ProfileEditEmailForm = () => {
    const {email, onChange, hasError, onSubmit} = useProfileEditEmail("");
    const buttonDisabled = email.length < 6 || hasError;
    const {t: translate} = useTranslation(namespaces.pages.profileEditEmail);

    return (
        <form noValidate onSubmit={onSubmit} className="flex w-full flex-col justify-between gap-4 self-center">
            <AppFormInput name="email"
                        value={email}
                        onChange={onChange}
                        hasError={hasError}
                        placeholder={translate('email')}
                        type="email"
                        label={translate('email')}
                        error={translate('error') as string}
            />
            <AppNextButton disabled={buttonDisabled} title={translate('next')}/>
        </form>
    );
}

export default ProfileEditEmailForm;
