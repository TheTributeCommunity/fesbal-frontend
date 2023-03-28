import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import BellIcon from '../components/icons/BellIcon'
import ClockIcon from '../components/icons/ClockIcon'
import LogoFesbalIcon from '../components/icons/LogoFesbalIcon'
import SearchIcon from '../components/icons/SearchIcon'
import AppWrapper from '../components/molecules/AppWrapper'
import { AppRoute } from '../enums/app-route'
import { namespaces } from '../i18n/i18n.constants'

const EntityHome = () => {
    const {t: translate} = useTranslation(namespaces.pages.entityHome)
    const alerts = 2

    return (
        <>
            <AppWrapper showBurger showBackButton={false} title={translate('title')} containerClassName="px-0 pb-0">
                <div className="grid grid-rows-3 grid-cols-1 h-full w-full flex-col justify-between text-secondary-color text-center px-8">
                    <h1 className="mb-4 text-3xl lg:text-2xl leading-[2.375rem] font-bold text-secondary-color">{translate('address')}</h1>
                    <div className="row-start-2 mx-auto">
                        <LogoFesbalIcon/>
                    </div>
                </div>
                <div className="app-bottom-nav">
                    {/* TODO Fix routes when screens are done */}
                    <Link to={AppRoute.WELCOME}>
                        <ClockIcon/>
                    </Link>
                    <div className="w-1/3">
                        <Link to={AppRoute.WELCOME}>
                            <div className="app-bottom-nav--search-button">
                                <SearchIcon width={45} height={48} color={'white'}/>
                            </div>
                        </Link>
                    </div>
                    <Link to={AppRoute.WELCOME} className="relative">
                        <BellIcon/>
                        {alerts > 0 && (
                            <span className="absolute bottom-4 left-2.5 w-4 h-4 bg-warning-color rounded-full text-white text-xs flex items-center justify-center">
                                {alerts}
                            </span>
                        )}
                    </Link>
                </div>
            </AppWrapper>
        </>
    )
}

export default EntityHome