import { getAuth } from 'firebase/auth'

export default class RefreshTokenService {
    static currentTimeoutId?: NodeJS.Timeout
    static currentListenerFunc?: () => void
    static focusEvent = 'focus'

    static getMargin(issuedDate: Date, expiryDate: Date): number {
        return (expiryDate.getTime() - issuedDate.getTime()) / 12
    }

    static refreshTokenIfExpired(expiryTimestamp: number): void {
        (new Date().getTime() >= expiryTimestamp) && getAuth().currentUser?.getIdToken(true)
    }

    static refreshOnFocusAndAt(issuedDate: Date, expiryDate: Date): void {
        const margin = RefreshTokenService.getMargin(issuedDate, expiryDate)
        // remove previous callbacks
        RefreshTokenService.currentTimeoutId && clearTimeout(RefreshTokenService.currentTimeoutId)
        RefreshTokenService.currentListenerFunc && window.removeEventListener(RefreshTokenService.focusEvent, RefreshTokenService.currentListenerFunc)
        // set new ones
        const refresherFunc = () => this.refreshTokenIfExpired(expiryDate.getTime() - margin)
        const timeoutId = setTimeout(refresherFunc, expiryDate.getTime() - (new Date()).getTime())
        window.addEventListener(RefreshTokenService.focusEvent, refresherFunc)
        RefreshTokenService.currentTimeoutId = timeoutId
        RefreshTokenService.currentListenerFunc = refresherFunc
    }


}
