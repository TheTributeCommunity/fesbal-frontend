import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const CrossIcon = () => {
    return (
        <FontAwesomeIcon icon={faXmark} className="text-warning-color cursor-pointer" size="lg"/>
    )
}

export default CrossIcon;
