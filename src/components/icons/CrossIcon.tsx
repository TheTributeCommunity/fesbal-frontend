import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {SizeProp} from '@fortawesome/fontawesome-svg-core'

type CloseIconProps = {
    color?: string;
    size?: SizeProp;
};

const CloseIcon = ({color = 'text-warning-color', size = 'lg'}: CloseIconProps) => {
    return (
        <FontAwesomeIcon icon={faTimes} className={color} size={size}/>
    )
}

export default CloseIcon
