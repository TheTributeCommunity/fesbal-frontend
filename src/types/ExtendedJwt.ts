import { JwtPayload } from 'jwt-decode'

export interface ExtendedJwt extends JwtPayload {
    role: string
}