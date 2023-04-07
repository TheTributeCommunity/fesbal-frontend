import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UsersContext } from '../../contexts/usersContext'
import { AppRoute } from '../../enums/app-route'
import PageNotAllowed from '../../pages/PageNotAllowed'

interface ProtectedLayoutProps {
    allowedRoles: string[]
}

const ProtectedLayout = ({ allowedRoles }:ProtectedLayoutProps): JSX.Element => {
    const { loggedUserType } = useContext(UsersContext)

    if (localStorage.getItem('token') === null) return <Navigate to={AppRoute.WELCOME} />
    else if (loggedUserType && allowedRoles.includes(loggedUserType)) return <Outlet />
    else return <PageNotAllowed />
}

export default ProtectedLayout