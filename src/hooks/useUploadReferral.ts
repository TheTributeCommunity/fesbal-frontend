import { useContext, useRef, useState } from 'react'
import { RecipientUserService } from '../services/recipient-user-service'
import axios from 'axios'
import { UsersContext } from '../contexts/usersContext'

const useUploadReferral = () => {
    const [file, setFile] = useState<File | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const { firebaseUser } = useContext(UsersContext)

    const isValidFile = (file: File) => {
        const validFileExtensions = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
        const maxFileSize = 5 * 1024 * 1024 // 5MB

        return validFileExtensions.includes(file.type) && file.size <= maxFileSize
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.item(0)
        if (file && isValidFile(file) && firebaseUser?.uid) {
            setFile(file)
        }
    }

    const onSubmit = async (): Promise<boolean> => {
        if (file && isValidFile(file) && firebaseUser?.uid) {
            const result = await uploadReferralSheet(firebaseUser.uid, file).catch(e => {
                console.log(e)
                return false
            })
            return result
        } return false
    }

    const uploadReferralSheet = (recipientUserId: string, file: File) => {
        return RecipientUserService.getReferralSheetUploadUrl(file.name)
            .then((referralSheetUploadUrl) => uploadFileToReferralSheetUploadUrl(referralSheetUploadUrl, file))
            .then((referralSheetUrl) => RecipientUserService.updateReferralSheetUrl(recipientUserId, referralSheetUrl))
    }

    const uploadFileToReferralSheetUploadUrl = (referralSheetUploadUrl: string, file: File) => {
        return axios.put(referralSheetUploadUrl, file)
            .then(() => getReferralSheetUrlFromReferralSheetUploadUrl(referralSheetUploadUrl))
    }

    const getReferralSheetUrlFromReferralSheetUploadUrl = (referralSheetUploadUrl: string) => {
        return referralSheetUploadUrl
            .replace('https://', '')
            .split('/')[2]
            .split('?')[0]
    }

    const handleClick = (ref: React.RefObject<HTMLInputElement>) => {
        if (ref.current) {
            ref.current.click()
        }
    }

    return { file, setFile, inputRef, handleFileChange, handleClick, onSubmit }
}

export default useUploadReferral
