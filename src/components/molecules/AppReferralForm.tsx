import useUploadReferral from "../../hooks/useUploadReferral";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";
import AppNextButton from "../atom/AppNextButton";
import ReferralFormProps from "../../types/ReferralFormProps";
import ReferralFileUploaded from "./ReferralFileUploaded";
import ReferralNoFileUploaded from "./ReferralNoFileUploaded";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../enums/app-route";

export default ({link, showSublink}: ReferralFormProps) => {
    const {
        file,
        setFile,
        inputRef,
        cameraRef,
        handleFileChange,
        handleClick,
        handleOnClick
    } = useUploadReferral();
    const {t: translate} = useTranslation(namespaces.pages.registerReferral);

    const navigate = useNavigate();

    return (
        <div className="flex w-full flex-col justify-between gap-4">
            <div className="flex flex-col gap-4 rounded-lg bg-white p-4">
                <div className="flex flex-col gap-1.5 text-primary-color">
                    {!file && <ReferralNoFileUploaded
                        title={translate("title")}
                        upload={translate("upload")}
                        camera={translate("camera")}
                        handleFileChange={handleFileChange}
                        handleClick={handleClick}
                        inputRef={inputRef}
                        cameraRef={cameraRef}
                    />}
                    {file && <ReferralFileUploaded file={file} setFile={setFile}/>}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {showSublink &&
                    <a className="text-center underline font-small-link" onClick={()=>{navigate(AppRoute.REGISTER_REFERRAL_SHEET_SEND_DATE)}}>{translate("link")}</a>}
                {/* TODO below, onClick should be handleOnClick, but it's been replaced for the demo */}
                <AppNextButton title={translate("next")} disabled={!file} onClick={() => navigate('/register/request-sent')}/>
            </div>
        </div>
    )
}
