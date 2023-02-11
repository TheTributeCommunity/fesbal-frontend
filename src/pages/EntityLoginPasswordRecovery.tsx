import {namespaces} from '../i18n/i18n.constants'
import EntityLoginPasswordRecoveryForm from '../components/molecules/EntityLoginPasswordRecoveryForm'
import AppPageHeader from '../components/molecules/AppPageHeader'
import {useTranslation} from 'react-i18next'
import AppWrapper from '../components/molecules/AppWrapper'


const EntityLoginPasswordRecovery = () => {
    const {t: translate} = useTranslation(namespaces.pages.entityLoginPasswordRecovery)

    return (
        <AppWrapper>
            <div className="flex w-full flex-col self-center justify-start">
                <AppPageHeader title={translate('title')} description={translate('description') as string}/>
                <EntityLoginPasswordRecoveryForm/>
            </div>
        </AppWrapper>
    )
}

export default EntityLoginPasswordRecovery
