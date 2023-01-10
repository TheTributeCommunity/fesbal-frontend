import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-regular-svg-icons";

const AppCopyClipboardButton = ({text}: { text: string }) => {
    return (
        <div className="flex flex-row gap-4">
            <p>{text}</p>
            <button onClick={() => navigator.clipboard.writeText(text)}>
                <FontAwesomeIcon icon={faCopy}/>
            </button>
        </div>
    );
}

export default AppCopyClipboardButton;
