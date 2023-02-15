/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../enums/app-route'
import useUploadReferral from '../../hooks/useUploadReferral'
import { namespaces } from '../../i18n/i18n.constants'
import ReferralFormProps from '../../types/ReferralFormProps'
import AppNextButton from '../atom/AppNextButton'
import ReferralFileUploaded from './ReferralFileUploaded'
import ReferralNoFileUploaded from './ReferralNoFileUploaded'

const AppReferralForm = ({link, showSublink}: ReferralFormProps) => {
    const {
        file,
        setFile,
        inputRef,
        cameraRef,
        handleFileChange,
        handleClick,
        handleOnClick
    } = useUploadReferral()
    const {t: translate} = useTranslation(namespaces.pages.registerReferral)

    const navigate = useNavigate()

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
                {showSublink &&
                    <a className="text-center underline font-small-link" onClick={()=>{navigate(AppRoute.REGISTER_REFERRAL_SHEET_SEND_DATE)}}>{translate('link')}</a>}
                {/* TODO below, onClick should be handleOnClick, but it's been replaced for the demo */}
                <AppNextButton title={translate('next')} disabled={!file} onClick={() => navigate('/register/request-sent')}/>
            </div>
        </div>
    )
}

export default AppReferralForm