import {AppRoute} from '../../enums/app-route'
import SwipeButton from '../atom/SwipeButton'
import React from 'react'
import AppPopupAlert from '../atom/AppPopupAlert'
import {useNavigate} from 'react-router'

const EntityUserSignatureFooter = ({translate}: { translate: (key: string) => string }) => {

    const navigate = useNavigate()
    const onSignatureConfirm = () => {
        setTimeout(() => {
            AppPopupAlert({
                icon: 'success',
                title: translate('sweetAlertSuccess.title') as string,
                text: translate('sweetAlertSuccess.text') as string,
                confirmButtonText: translate('sweetAlertSuccess.confirmButtonText') as string,
            }).fire().then(() => navigate(AppRoute.ENTITY_HOME))
        }, 500)
    }

    const onSignatureReject = () => {
        AppPopupAlert({
            icon: 'error',
            title: translate('sweetAlertReject.title') as string,
            text: translate('sweetAlertReject.text') as string,
            confirmButtonText: translate('sweetAlertReject.confirmButtonText') as string,
        }).fire().then(() => navigate(AppRoute.ENTITY_USER_SCANNED))
    }

    return (
        <div
            className="flex h-44 flex-col items-center gap-6 rounded-t-3xl bg-white px-8 py-8 shadow-table drop-shadow">
            <p className="underline text-warning-color font-roboto-flex text-small-link"
                onClick={onSignatureReject}>{translate('rejectFoodList')}</p>
            <SwipeButton onConfirm={onSignatureConfirm}/>
        </div>
    )
}

export default EntityUserSignatureFooter
