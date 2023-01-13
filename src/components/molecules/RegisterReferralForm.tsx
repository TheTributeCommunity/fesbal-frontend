import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import CrossIcon from "../icons/CrossIcon";
import UploadImageIcon from "../icons/UploadImageIcon";
import useRegisterReferralForm from "../../hooks/useRegisterReferralForm";
import {namespaces} from "../../i18n/i18n.constants";

const RegisterReferralForm = () => {
    const {file, setFile, inputRef, cameraRef, handleFileChange, handleClick, handleOnClick} = useRegisterReferralForm();
    const {t} = useTranslation(namespaces.pages.registerReferral);

    return (
        <div className="mt-8 flex h-full w-full flex-col justify-between gap-4 self-center md:w-1/2 lg:w-1/3">
            <div className="flex flex-col gap-4 rounded-lg bg-white p-4">
                <div className="flex flex-col gap-1.5 text-primary-color">
                    {!file && <div>
                        <div className="flex h-52 flex-col place-content-center gap-5 lg:h-96">
                            <UploadImageIcon/>
                            <p className="text-center font-text">{t("title")}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="file" id="file" className="hidden" onChange={handleFileChange} ref={inputRef}/>
                            <button className="mt-4 rounded-2xl px-2 py-5 text-white font-button bg-secondary-color"
                                    onClick={() => handleClick(inputRef)}>
                                {t("upload")}
                            </button>
                            <input type="file" id="camera" accept="image/*" capture onChange={handleFileChange}
                                   style={{display: "none"}} ref={cameraRef}/>
                            <button className="mt-4 rounded-2xl px-2 py-5 text-white font-button bg-primary-color"
                                    onClick={() => handleClick(cameraRef)}>
                                {t("camera")}
                            </button>
                        </div>
                    </div>}
                    {file && <div className="flex items-center justify-between">
                        <p className="underline font-small-link">{file.name}</p>
                        <div onClick={() => setFile(null)}>
                            <CrossIcon/>
                        </div>
                    </div>}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <a className="text-center underline font-small-link text-secondary-color">{t("link")}</a>
                <AppNextButton title={t("next")} disabled={!file} onClick={handleOnClick}/>
            </div>
        </div>
    )
}

export default RegisterReferralForm;
