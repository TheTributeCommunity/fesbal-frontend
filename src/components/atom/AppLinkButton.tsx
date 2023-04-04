import ButtonProps from '../../types/ButtonProps'
import {FC} from 'react'
import {Link} from 'react-router-dom'
interface AppLinkButtonProps extends ButtonProps {
    link: string
}
const AppLinkButton: FC<AppLinkButtonProps> = ({bgColor = 'bg-primary-color', title, link}) => {

    return (
        <Link to={link} className={`app-button ${bgColor}`}>
            <p>
                {title}
            </p>
        </Link>
    )
}

export default AppLinkButton
