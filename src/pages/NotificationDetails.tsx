import {useTranslation} from 'react-i18next'
import useNotification from '../hooks/useNotification'
import {namespaces} from '../i18n/i18n.constants'
import AppWrapper from '../components/molecules/AppWrapper'

const NotificationDetails = () => {
    const { title, body, date} = useNotification()
    const {t: translate} = useTranslation(namespaces.pages.notifications)

    return (
        <AppWrapper title={translate('title')} showBackButton showBurger>
            <div className="flex w-full flex-col justify-start gap-4 mb-2">
                <p className="text-primary-color font-label">{date.toLocaleString()}</p>
                <h2 className="font-mini-title">{title}</h2>
                <p className="whitespace-pre-line font-text">{body}</p>
            </div>
        </AppWrapper>
    )
}

export default NotificationDetails
