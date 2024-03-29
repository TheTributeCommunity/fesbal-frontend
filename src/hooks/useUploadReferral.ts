import { useContext, useRef, useState } from 'react'
import { RecipientUserService } from '../services/recipient-user-service'
import axios from 'axios'
import { UsersContext } from '../contexts/usersContext'
import { ReferralSheetUpload } from '../models/referral-sheet-upload-url'
import { RegistrationRequest } from '../models/registration-request'
import { RegistrationRequestService } from '../services/registration-request-service'
import { v4 as uuidv4 } from 'uuid'
import { useUserStore } from '../store/logged-user'

const useUploadReferral = () => {
    const [file, setFile] = useState<File | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const userId = useUserStore(state => state.userId)

    const isValidFile = (file: File) => {
        const validFileExtensions = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
        const maxFileSize = 5 * 1024 * 1024 // 5MB

        return validFileExtensions.includes(file.type) && file.size <= maxFileSize
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.item(0)
        if (file && isValidFile(file) && userId) {
            setFile(file)
        }
    }

    const onSubmit = async (entityId: string, endDate: Date): Promise<boolean> => {
        if (file && isValidFile(file) && userId) {
            const result = await uploadReferralSheet(file, entityId, endDate).catch(e => {
                console.log(e)
                return false
            }).then( () => submitRegistrationRequest(file)).catch(e => {
                console.log(e)
                return false
            })
            return result
        } return false
    }

    const uploadReferralSheet = (file: File, entityId: string, endDate: Date): Promise<boolean> => {
        const payload = {
            filename: file.name,
            entityId,
            endDate: endDate.getTime()
        }
        return RecipientUserService.getReferralSheetUploadUrl(payload)
            .then((referralSheetUploadUrl) => uploadFileToReferralSheetUploadUrl(referralSheetUploadUrl, file))
    }

    const uploadFileToReferralSheetUploadUrl = async (referralSheetUploadUrl: ReferralSheetUpload, file: File) => {
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

    const submitRegistrationRequest = async (file: File): Promise<boolean> => {
        if (userId) {
            const payload: RegistrationRequest = {
                registrationRequestId: uuidv4(),
                referralSheet: file.name
            }
            const result = await RegistrationRequestService.send(payload)
                .then(result => result)
                .catch(e => {
                    console.log(e)
                    return false
                })
            return result
        } else return false
    }

    const handleClick = (ref: React.RefObject<HTMLInputElement>) => {
        if (ref.current) {
            ref.current.click()
        }
    }

    return { file, setFile, inputRef, handleFileChange, handleClick, onSubmit }
}

export default useUploadReferral
