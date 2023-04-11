import CloseIcon from '../icons/CloseIcon'
import ReferralFileUploadedProps from '../../types/ReferralFileUploadProps'
import DeleteIcon from '../icons/DeleteIcon'

const ReferralFileUploaded = ({file, setFile}: ReferralFileUploadedProps) => {
    return (
        <div className="flex items-center justify-between">
            <p className="underline font-small-link font-roboto-flex">{file?.name}</p>
            <div onClick={() => setFile(null)}>
                <DeleteIcon width={21} height={24}/>
            </div>
        </div>
    )
}

export default ReferralFileUploaded
