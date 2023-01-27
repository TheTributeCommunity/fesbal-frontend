import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {RegistrationRequestService} from "../services/registration-request-service";
import { v4 as uuidv4 } from 'uuid';
import usersMock from "../mocks/users.mock";

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
            setFile(file);
        }
    };

    const handleClick = (ref: React.RefObject<HTMLInputElement>) => {
        if (ref.current) {
            ref.current.click();
        }
    };

    const handleOnClick = (href: string) => {
        if(usersMock[0].recipientUserId) {
            RegistrationRequestService.create({
                registrationRequestId: uuidv4(),
                recipientUserId: usersMock[0].recipientUserId
            })
                .then(() => navigate(href));
        }
    }

    return {file, setFile, inputRef, cameraRef, handleFileChange, handleClick, handleOnClick};
}

export default useUploadReferral;
