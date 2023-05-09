import ReferralNoFileUploadedProps from '../../types/ReferralNoFileUploadProps'
import AppNextButton from '../atom/AppNextButton'

const ReferralNoFileUploaded = ({
    handleFileChange,
    handleClick,
    inputRef,
    upload,
}: ReferralNoFileUploadedProps) => {
    return (
        <>
            <input type="file" accept="image/jpg,image/jpeg,image/png,.pdf" id="file" className="hidden" onChange={handleFileChange} ref={inputRef}/>
            <AppNextButton bgColor='bg-secondary-color'
                onClick={() => handleClick(inputRef)}>
                {upload}
            </AppNextButton>
        </>
    )
}

export default ReferralNoFileUploaded