import {FC} from 'react'
import ButtonProps from '../../types/ButtonProps'
import classNames from 'classnames'


const AppNextButton: FC<ButtonProps> = ({title, disabled = false, bgColor = 'bg-primary-color', onClick, id}) => {
    const btnClasses = classNames(
        'flex items-center justify-center rounded-2xl py-5 text-center font-button w-full',
        {
            'cursor-not-allowed border bg-transparent opacity-50 text-primary-color border-primary-color': disabled,
            'text-white border-transparent': !disabled,
            [bgColor]: bgColor
        }
    )
    const buttonType = onClick ? 'button' : 'submit'

    return (
        <button
            className={btnClasses} disabled={disabled} type={buttonType} onClick={onClick} id={id}>
            {title}
        </button>
    )
}

export default AppNextButton
