import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../enums/app-route'
import useUploadReferral from '../../hooks/useUploadReferral'
import { namespaces } from '../../i18n/i18n.constants'
import AppNextButton from '../atom/AppNextButton'
import ReferralFileUploaded from './ReferralFileUploaded'
import ReferralNoFileUploaded from './ReferralNoFileUploaded'

interface AppReferralFormProps {
    showSubLink: boolean
    onSubmit: (success: boolean) => void
}

const AppReferralForm = ({showSubLink, onSubmit: onParentSubmit}: AppReferralFormProps) => {
    const {
        file,
        setFile,
        inputRef,
        handleFileChange,
        handleClick,
        onSubmit,
    } = useUploadReferral()
    const {t: translate} = useTranslation(namespaces.pages.registerReferral)

    const navigate = useNavigate()

    const handleSubmit = () => {
        onSubmit().then(result => onParentSubmit(result))
    }

    return (
        <div className="flex w-full flex-col justify-between gap-10 mt-8">
            <div className="flex flex-col gap-4 bg-white px-6 py-7">
                <div className="flex flex-col gap-1.5 text-primary-color">
                    {!file && <ReferralNoFileUploaded
                        upload={translate('upload')}
                        handleFileChange={handleFileChange}
                        handleClick={handleClick}
                        inputRef={inputRef}
                    />}
                    {file && <ReferralFileUploaded file={file} setFile={setFile}/>}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {showSubLink &&
                    <a className="text-center underline font-small-link" onClick={()=>{navigate(AppRoute.REGISTER_REFERRAL_SHEET_SEND_DATE)}}>{translate('link')}</a>}
                <AppNextButton title={translate('next')} disabled={!file} onClick={handleSubmit}/>
            </div>
        </div>
    )
}

export default AppReferralForm