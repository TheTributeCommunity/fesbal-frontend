import {Link} from 'react-router-dom'
import {AppRoute} from '../../enums/app-route'
import SwipeButton from '../atom/SwipeButton'
import React from 'react'

const EntityUserSignatureFooter = ({ translate }: { translate: (key: string) => string }) => {
    return (
        <div className="flex h-44 flex-col items-center gap-6 rounded-t-3xl bg-white px-8 py-8 shadow-table drop-shadow">
            <Link to={AppRoute.ENTITY_USER_SCANNED}>
                <p className="underline text-warning-color font-roboto-flex text-small-link">{translate('rejectFoodList')}</p>
            </Link>
            <SwipeButton onConfirm={() => console.log('signature confirmed')} />
        </div>
    )
}

export default EntityUserSignatureFooter
