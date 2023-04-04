import {ChangeEvent, FormEvent, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import AppPopupAlert from '../components/atom/AppPopupAlert'

const useProfileEditNewPassword = () => {
    const [password, setPassword] = useState<string>('')
    const [passwordConfirm, setPasswordConfirm] = useState<string>('')
    const [hasError, setHasError] = useState<boolean>(false)

    const {t: translate} = useTranslation(namespaces.pages.profileEditNewPassword)

    const navigate = useNavigate()

    const arePasswordsEqual = password === passwordConfirm
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        setHasError(false)
    }
    const onChangeConfirm = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(e.target.value)
        setHasError(false)
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setHasError(!arePasswordsEqual)
        if (arePasswordsEqual) {
            AppPopupAlert({
                icon: 'warning',
                title: translate('sweetAlert.title') as string,
                confirmButtonText: translate('sweetAlert.confirmButtonText') as string,
                cancelButtonText: translate('sweetAlert.cancelButtonText') as string,
            }).fire().then((result) => {
                if (result.isConfirmed) {
                    AppPopupAlert({
                        icon: 'success',
                        title: translate('sweetAlertSuccess.title') as string,
                        confirmButtonText: translate('sweetAlertSuccess.confirmButtonText') as string,
                    }).fire().then(() => navigate('/profile'))
                }
            })
        }
    }
    return {
        onChange,
        hasError,
        onSubmit,
        password,
        onChangeConfirm,
        passwordConfirm
    }
}
export default useProfileEditNewPassword
