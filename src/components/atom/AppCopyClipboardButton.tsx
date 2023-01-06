import CopyClipboardIcon from "../icons/CopyClipboardIcon";

const AppCopyClipboardButton = ({text}: { text: string }) => {
    return (
        <div className="flex flex-row gap-4">
            <p>{text}</p>
            <button onClick={() => navigator.clipboard.writeText(text)}>
                <CopyClipboardIcon/>
            </button>
        </div>
    );
}

export default AppCopyClipboardButton;
