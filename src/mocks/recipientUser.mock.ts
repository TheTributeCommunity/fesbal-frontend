import { RecipientUserWithLastPickup } from '../models/recipient-user'

const recipientUser: RecipientUserWithLastPickup = {
    id: '123',
    firstName: 'Pedro',
    lastName: 'García Salcedo',
    dateOfBirth: '01/01/1980',
    typeOfIdentityDocument: 'DNI',
    identityDocumentNumber: '53825739F',
    phone: '633-333-333',
    email: 'pedro@example.com',
    relativesIds: ['456', '789', '012', '345'],
    relatives: [
        {
            id: '456',
            recipientUserId: '123',
            firstName: 'Jane',
            lastName: 'García Pérez',
            dateOfBirth: '01/01/1998',
            typeOfIdentityDocument: 'DNI',
            identityDocumentNumber: '12345678A'
        },
        {
            id: '789',
            recipientUserId: '123',
            firstName: 'Bob',
            lastName: 'García Pérez',
            dateOfBirth: '01/01/2018',
            typeOfIdentityDocument: 'DNI',
            identityDocumentNumber: '87654321B'
        },
        {
            id: '012',
            recipientUserId: '123',
            firstName: 'Alice',
            lastName: 'García Pérez',
            dateOfBirth: '01/01/2022',
            typeOfIdentityDocument: 'DNI',
            identityDocumentNumber: '13579246C'
        },
        {
            id: '345',
            recipientUserId: '123',
            firstName: 'John',
            lastName: 'García Pérez',
            dateOfBirth: '01/01/1998',
            typeOfIdentityDocument: 'DNI',
            identityDocumentNumber: '24681357D'
        }
    ],
    referralSheetUrl: 'https://example.com/referral-sheet',
    lastPickupDate: '15/05/2022',
}

export default recipientUser
