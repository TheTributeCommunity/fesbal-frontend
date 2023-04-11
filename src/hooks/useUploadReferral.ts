import { useContext, useRef, useState } from 'react'
import { RecipientUserService } from '../services/recipient-user-service'
import axios from 'axios'
import { UsersContext } from '../contexts/usersContext'
import { ReferralSheetUploadUrl } from '../models/referral-sheet-upload-url'

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

    const uploadReferralSheet = (recipientUserId: string, file: File): Promise<boolean> => {
        return RecipientUserService.getReferralSheetUploadUrl(file.name)
            .then((referralSheetUploadUrl) => uploadFileToReferralSheetUploadUrl(referralSheetUploadUrl, file))
    }

    const uploadFileToReferralSheetUploadUrl = async (referralSheetUploadUrl: ReferralSheetUploadUrl, file: File) => {
        const form = new FormData()
        for (const key in referralSheetUploadUrl.fields) {
            form.append(key, referralSheetUploadUrl.fields[key])
        }
        form.append('file', file)
        const result = await axios.postForm(referralSheetUploadUrl.url, form).then(() => true).catch(e => {
            console.log(e)
            return false
        })
        return result
    }

    const handleClick = (ref: React.RefObject<HTMLInputElement>) => {
        if (ref.current) {
            ref.current.click()
        }
    }

    return { file, setFile, inputRef, handleFileChange, handleClick, onSubmit }
}

export default useUploadReferral
