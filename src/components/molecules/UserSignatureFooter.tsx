import {AppRoute} from '../../enums/app-route'
import SwipeButton from '../atom/SwipeButton'
import AppPopupAlert from '../atom/AppPopupAlert'

interface UserSignatureFooterProps {
    translate: (key: string) => string
    onConfirm: () => void
    onReject: () => void
}

const UserSignatureFooter = ({translate, onConfirm, onReject}: UserSignatureFooterProps) => {

    return (
        <div
            className="flex h-44 flex-col items-center gap-6 rounded-t-3xl bg-white px-8 py-8 shadow-table drop-shadow">
            <p className="underline text-warning-color font-roboto-flex text-small-link"
                onClick={onReject}>{translate('rejectFoodList')}</p>
            <SwipeButton onConfirm={onConfirm}/>
        </div>
    )
}

export default UserSignatureFooter
