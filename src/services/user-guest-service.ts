import {UserGuest} from "../models/user-guest";
import { v4 as uuidv4 } from 'uuid';

export class UserGuestService {
    public static create(firstName: string, lastName: string, dateOfBirth: Date, typeOfIdentityDocument: string, identityDocumentNumber: string) {
        return {
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth.toLocaleDateString('es-ES'),
            typeOfIdentityDocument: typeOfIdentityDocument,
            identityDocumentNumber: identityDocumentNumber
        }
    }

    public static save(userGuest: UserGuest) {
        localStorage.setItem("userGuest", this.toString(userGuest))
    }

    private static toString(userNotRegistered: object) {
        return JSON.stringify(userNotRegistered)
    }
}