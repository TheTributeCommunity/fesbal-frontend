import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import useRegisterReferralForm from "../../hooks/useRegisterReferralForm";
import {namespaces} from "../../i18n/i18n.constants";
import ReferralFileUploaded from "./ReferralFileUploaded";
import ReferralNoFileUploaded from "./ReferralNoFileUploaded";

const RegisterReferralForm = () => {
    const {
        file,
        setFile,
        inputRef,
        cameraRef,
        handleFileChange,
        handleClick,
        handleOnClick
    } = useRegisterReferralForm();
    const {t} = useTranslation(namespaces.pages.registerReferral);

    return (
        <div className="mt-8 flex h-full w-full flex-col justify-between gap-4 self-center md:w-1/2 lg:w-1/3">
            <div className="flex flex-col gap-4 rounded-lg bg-white p-4">
                <div className="flex flex-col gap-1.5 text-primary-color">
                    {!file &&
                        <ReferralNoFileUploaded
                            handleFileChange={handleFileChange}
                            handleClick={handleClick}
                            inputRef={inputRef}
                            cameraRef={cameraRef}
                            title={t("title")}
                            upload={t("upload")}
                            camera={t("camera")}
                        />
                    }
                    {file &&
                        <ReferralFileUploaded
                            file={file}
                            setFile={setFile}
                        />
                    }
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <a className="text-center underline font-small-link cursor-pointer">{t("link")}</a>
                <AppNextButton title={t("next")} disabled={!file} onClick={handleOnClick}/>
            </div>
        </div>
    )
}

export default RegisterReferralForm;
