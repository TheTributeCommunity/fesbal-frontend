import ReferralNoFileUploadedProps from '../../types/ReferralNoFileUploadProps'

const ReferralNoFileUploaded = ({
    handleFileChange,
    handleClick,
    inputRef,
    upload,
}: ReferralNoFileUploadedProps) => {
    return (
        <div>
            <div className="flex flex-col place-content-center">
                <input type="file" accept="image/*,.pdf" id="file" className="hidden" onChange={handleFileChange} ref={inputRef}/>
                <button className="text-center font-text font-roboto-flex font-semibold text-sm underline"
                    onClick={() => handleClick(inputRef)}>
                    {upload}
                </button>
            </div>
        </div>
    )
}

export default ReferralNoFileUploaded