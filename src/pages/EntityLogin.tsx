import AppWrapper from '../components/molecules/AppWrapper'
import {AppRoute} from '../enums/app-route'
import PageHeader from '../components/molecules/AppPageHeader'
import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import {useNavigate} from 'react-router'
import EntityLoginForm from '../components/molecules/EntityLoginForm'

const EntityLogin = () => {
    const {t: translate} = useTranslation(namespaces.pages.entityLogin)
    const navigate = useNavigate()

    const handleSubmit = (success: boolean) => {
        if (success) {
            navigate(AppRoute.ENTITY_HOME)
        }
    }

    return (
        <AppWrapper>
            <div className="flex h-full w-full flex-col self-center">
                <PageHeader title={translate('title')} description={translate('description') as string}/>
                <EntityLoginForm onSubmit={handleSubmit}/>
            </div>
        </AppWrapper>
    )
}

export default EntityLogin
