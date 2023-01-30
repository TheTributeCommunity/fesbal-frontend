export interface AuthUser {
    phone: string | null
    email: string | null
    emailVerified: boolean
    getToken(): Promise<string> | undefined
}