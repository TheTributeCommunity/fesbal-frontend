import { AppRoute } from '../enums/app-route'

export const getCurrentRoute = (): string => {
    const currentPath = window.location.pathname

    for (const route of Object.values(AppRoute)) {
        if (typeof route === 'string' && currentPath.startsWith(route)) {
            return route
        }
    }

    return ''
}