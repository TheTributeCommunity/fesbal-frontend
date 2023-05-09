import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

interface PlusIconProps {
    colorClass?: string
}

const PlusIcon = ({colorClass = 'text-primary-color'}: PlusIconProps) => {
    return (
        <FontAwesomeIcon icon={faPlus} className={`font-button ${colorClass}`}/>
    )
}

export default PlusIcon
