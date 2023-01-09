import EditProfileIcon from "../icons/EditProfileIcon";
import {Link} from "react-router-dom";

const AppEditProfileButton = ({goTo}: { goTo: string }) => {
    return (
        <Link to={goTo}>
            <EditProfileIcon/>
        </Link>
    );
};

export default AppEditProfileButton;
