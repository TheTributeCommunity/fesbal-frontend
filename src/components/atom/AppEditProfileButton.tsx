import {Link} from 'react-router-dom'
import EditProfileIcon from '../icons/EditProfileIcon'

const AppEditProfileButton = ({goTo}: { goTo: string }) => {
    return (
        <Link to={goTo}>
            <EditProfileIcon/>
        </Link>
    )
}

export default AppEditProfileButton
