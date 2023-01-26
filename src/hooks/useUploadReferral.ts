import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {RecipientUserService} from "../services/recipient-user-service";
import usersMock from "../mocks/users.mock";
import axios from "axios";

const useUploadReferral = () => {
    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const cameraRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const isValidFile = (file: File) => {
        const validFileExtensions = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];
        const maxFileSize = 5 * 1024 * 1024; // 5MB

        return validFileExtensions.includes(file.type) && file.size <= maxFileSize;
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.item(0);
        if (file && isValidFile(file)) {
            uploadReferralSheet(usersMock[0].recipientUserId, file).then(() => setFile(file))
        }
    };

    const uploadReferralSheet = (recipientUserId: string, file: File) => {
        return RecipientUserService.getReferralSheetUploadUrl(recipientUserId)
            .then((referralSheetUploadUrl) => uploadFileToReferralSheetUploadUrl(referralSheetUploadUrl, file))
            .then((referralSheetUrl)=> RecipientUserService.updateReferralSheetUrl(recipientUserId, referralSheetUrl))
    }

    const uploadFileToReferralSheetUploadUrl = (referralSheetUploadUrl: string, file: File) => {
        return axios.put(referralSheetUploadUrl, file)
            .then(()=> getReferralSheetUrlFromReferralSheetUploadUrl(referralSheetUploadUrl))
    }

    const getReferralSheetUrlFromReferralSheetUploadUrl = (referralSheetUploadUrl: string) => {
        return referralSheetUploadUrl
            .replace("https://", "")
            .split("/")[2]
            .split("?")[0];
    }
   
    const handleClick = (ref: React.RefObject<HTMLInputElement>) => {
        if (ref.current) {
            ref.current.click();
        }
    };

    const handleOnClick = (href: string) => {
        console.log(href);
        navigate(href);
    }

    return {file, setFile, inputRef, cameraRef, handleFileChange, handleClick, handleOnClick};
}

export default useUploadReferral;
