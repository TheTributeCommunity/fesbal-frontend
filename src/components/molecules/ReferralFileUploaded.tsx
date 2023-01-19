import CrossIcon from "../icons/CrossIcon";
import ReferralFileUploadedProps from "../../types/ReferralFileUploadProps";

export default ({file, setFile}: ReferralFileUploadedProps) => {
    return (
        <div className="flex items-center justify-between">
            <p className="underline font-small-link">{file!.name}</p>
            <div onClick={() => setFile(null)}>
                <CrossIcon/>
            </div>
        </div>
    )
}
