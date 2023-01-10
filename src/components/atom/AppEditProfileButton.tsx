import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";

const AppEditProfileButton = ({goTo}: { goTo: string }) => {
    return (
        <Link to={goTo}>
            <FontAwesomeIcon icon={faPen} className="text-secondary-color"/>
        </Link>
    );
};

export default AppEditProfileButton;
