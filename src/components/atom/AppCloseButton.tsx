import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CloseIcon from "../icons/CloseIcon"
import CrossIcon from "../icons/CrossIcon"

interface AppCloseButtonProps {
    onClick: () => void
}

const AppCloseButton = ({onClick}: AppCloseButtonProps): JSX.Element => {
    return (
        <button className="rounded-full shadow-md w-12 h-12" onClick={onClick}>
            <CloseIcon />
        </button>
    )
}

export default AppCloseButton;