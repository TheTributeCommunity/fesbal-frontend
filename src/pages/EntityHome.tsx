import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import BellIcon from '../components/icons/BellIcon'
import ClockIcon from '../components/icons/ClockIcon'
import LogoFesbalIcon from '../components/icons/LogoFesbalIcon'
import SearchIcon from '../components/icons/SearchIcon'
import AppWrapper from '../components/molecules/AppWrapper'
import { AppRoute } from '../enums/app-route'
import { namespaces } from '../i18n/i18n.constants'
import useEntityInfo from '../hooks/useEntityInfo'
import Spinner from '../components/atom/Spinner'

const EntityHome = () => {
    const {t: translate} = useTranslation(namespaces.pages.entityHome)
    const { entity } = useEntityInfo()
    const alerts = 2

    return (
        <>
            <AppWrapper showBurger showBackButton={false} title={translate('title')} containerClassName="px-0 pb-0">
                { !entity ? <Spinner /> : <><div className="grid grid-rows-3 grid-cols-1 h-full w-full flex-col justify-between text-secondary-color text-center px-8">
                    <h1 className="mb-4 text-3xl lg:text-2xl leading-[2.375rem] font-bold text-secondary-color">{entity?.entityName}</h1>
                    <div className="row-start-2 mx-auto">
                        <LogoFesbalIcon/>
                    </div>
                </div>
                <div className="app-bottom-nav">
                    <Link to={AppRoute.ENTITY_DELIVERY_HISTORY}>
                        <ClockIcon/>
                    </Link>
                    <div className="w-1/3">
                        <Link to={AppRoute.ENTITY_USER_SEARCH}>
                            <div className="app-bottom-nav--search-button">
                                <SearchIcon width={45} height={48} color={'white'}/>
                            </div>
                        </Link>
                    </div>
                    <Link to={AppRoute.ENTITY_NOTIFICATIONS} className="relative">
                        <BellIcon/>
                        {alerts > 0 && (
                            <span className="absolute bottom-4 left-2.5 w-4 h-4 bg-warning-color rounded-full text-white text-xs flex items-center justify-center">
                                {alerts}
                            </span>
                        )}
                    </Link>
                </div>
                </>}
            </AppWrapper>
        </>
    )
}

export default EntityHome
