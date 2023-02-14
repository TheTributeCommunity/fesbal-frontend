import CopyClipboardIcon from '../icons/CopyClipboardIcon'

const AppCopyClipboardButton = ({text}: { text: string }) => {
    return (
        <div className="flex flex-row justify-between">
            <p className="font-input text-secondary-color pr-1">{text}</p>
            <button onClick={() => navigator.clipboard.writeText(text)}>
                <CopyClipboardIcon/>
            </button>
        </div>
    )
}

export default AppCopyClipboardButton
