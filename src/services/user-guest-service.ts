import { formatDate } from '../helpers/dateHelper'
import { UserGuest } from '../models/user-guest'
import { v4 as uuidv4 } from 'uuid'

export class UserGuestService {
  private static USER_GUEST_KEY = 'userGuest'

  public static create(
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    typeOfIdentityDocument: string,
    identityDocumentNumber: string
  ) {
    return {
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
            dateOfBirth: formatDate(dateOfBirth),
      typeOfIdentityDocument: typeOfIdentityDocument,
      identityDocumentNumber: identityDocumentNumber,
    }
  }

  public static save(userGuest: UserGuest) {
    localStorage.setItem(this.USER_GUEST_KEY, this.toString(userGuest))
  }

  public static get(): UserGuest {
    const userGuestSaved = localStorage.getItem(this.USER_GUEST_KEY)

    if (!userGuestSaved) {
      throw new Error('UserGuest not found')
    }
    return this.toObject(userGuestSaved)
  }

  public static setPhone(phone: string) {
    let userGuest = this.get()

    userGuest = { ...userGuest, phone: phone }

    this.save(userGuest)
  }

  private static toString(userNotRegistered: object): string {
    return JSON.stringify(userNotRegistered)
  }

  private static toObject(userGuest: string): UserGuest {
    return JSON.parse(userGuest)
  }
}
