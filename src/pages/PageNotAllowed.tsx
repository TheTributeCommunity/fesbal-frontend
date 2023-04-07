import { useNavigate } from 'react-router-dom'
import AppNextButton from '../components/atom/AppNextButton'
import BlankStage from '../components/atom/BlankStage'
import { AppRoute } from '../enums/app-route'

const PageNotAllowed = (): JSX.Element => {
    const navigate = useNavigate()
    
    const handleGoBack = () => {
        navigate(AppRoute.WELCOME)
    }

    return (
        <BlankStage topOffset={false}>
            <div className="flex flex-col justify-center mx-auto w-full md:w-1/2 lg:w-1/3 px-8 h-full gap-4 text-center">
                <p className="text-xl font-text text-secondary-color">No tiene permisos para ver esta página.</p>
                <AppNextButton title={'Volver'} onClick={handleGoBack}></AppNextButton>
            </div>
        </BlankStage>
    )
}

export default PageNotAllowed