import ReferralFileUploadedProps from '../../types/ReferralFileUploadProps'
import DeleteIcon from '../icons/DeleteIcon'

const ReferralFileUploaded = ({file, setFile}: ReferralFileUploadedProps) => {
    return (
        <div className="flex items-center justify-between rounded-md bg-white py-6 px-4 gap-2">
            <p className="underline text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap">{file?.name}</p>
            <div onClick={() => setFile(null)}>
                <DeleteIcon width={21} height={24}/>
            </div>
        </div>
    )
}

export default ReferralFileUploaded
