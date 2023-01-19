import UploadImageIcon from "../icons/UploadImageIcon";
import ReferralNoFileUploadedProps from "../../types/ReferralNoFileUploadProps";

export default ({
                    handleFileChange,
                    handleClick,
                    inputRef,
                    cameraRef,
                    title,
                    upload,
                    camera
                }: ReferralNoFileUploadedProps) => {
    return (
        <div>
            <div className="flex h-52 flex-col place-content-center gap-5 lg:h-96">
                <UploadImageIcon/>
                <p className="text-center font-text">{title}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <input type="file" id="file" className="hidden" onChange={handleFileChange} ref={inputRef}/>
                <button className="mt-4 rounded-2xl px-2 py-5 text-white font-button bg-secondary-color"
                        onClick={() => handleClick(inputRef)}>
                    {upload}
                </button>
                <input type="file" id="camera" accept="image/*" capture onChange={handleFileChange}
                       style={{display: "none"}} ref={cameraRef}/>
                <button className="mt-4 rounded-2xl px-2 py-5 text-white font-button bg-primary-color"
                        onClick={() => handleClick(cameraRef)}>
                    {camera}
                </button>
            </div>
        </div>
    )
}
