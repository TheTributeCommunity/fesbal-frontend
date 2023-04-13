import { BoosterClient } from './booster-service'
import { gql } from '@apollo/client'
import { Recipient } from '../models/recipient-user'
import { AuthService } from './auth-service'
import { ReferralSheetUploadUrl } from '../models/referral-sheet-upload-url'

export class RecipientUserService {
    public static async getAll(): Promise<Recipient[]> {
        const result = await BoosterClient.query<{ ListRecipientReadModels: { items: Recipient[] } }>({
            query: GET_ALL_RECIPIENTS,
            variables: {},
        })
        return result.data.ListRecipientReadModels.items
    }

    public static async getAuth(): Promise<Recipient> {
        if (!AuthService.currentUser || !AuthService.currentUser.phone) {
            throw new Error('Authenticated user not found')
        }
        return RecipientUserService.getByPhone(AuthService.currentUser.phone)
    }

    public static async getUserById(id: string): Promise<Recipient> {
        const result = await BoosterClient.query<{
            RecipientReadModel: Recipient
        }>({
            query: GET_RECIPIENT_BY_ID,
            variables: { id: id }
        })
        return result.data.RecipientReadModel
    }

    private static async getByPhone(phone: string): Promise<Recipient> {
        const result = await BoosterClient.query<{ ListRecipientReadModels: { items: Recipient[] } }>({
            query: GET_RECIPIENT_BY_PHONE,
            variables: { phone },
        })
        return result.data.ListRecipientReadModels.items[0]
    }

    public static async getReferralSheetUploadUrl(filename: string): Promise<ReferralSheetUploadUrl> {
        const result = await BoosterClient.mutate<{ ReferralSheetUploadUrl: ReferralSheetUploadUrl }>({
            mutation: REFERRAL_SHEET_UPLOAD_URL,
            variables: { filename },
        })
        if (!result.data?.ReferralSheetUploadUrl) {
            throw new Error('Error getting the URL to upload the referral sheet')
        }
        return result.data.ReferralSheetUploadUrl
    }

    public static async create(newRecipient: Partial<Recipient>): Promise<boolean> {
        const result = await BoosterClient.mutate<{ CreateRecipient: boolean }>({
            mutation: CREATE_RECIPIENT,
            variables: this.recipientToCommandVariables(newRecipient),
        })
        if (!result.data?.CreateRecipient) {
            throw new Error('Error creating the recipient')
        }
        return result.data?.CreateRecipient
    }

    public static async updateEmail(recipientId: string, email: string): Promise<boolean> {
        const result = await BoosterClient.mutate<{ UpdateRecipientEmail: boolean }>({
            mutation: UPDATE_RECIPIENT_EMAIL,
            variables: { updatedUser: { recipientId: recipientId, email } },
        })
        if (!result.data?.UpdateRecipientEmail) {
            throw new Error('Error updating the USER email')
        }
        return result.data?.UpdateRecipientEmail
    }

    public static async updateReferralSheetUrl(recipientUserId: string, referralSheetUrl: string): Promise<boolean> {
        const result = await BoosterClient.mutate<{ UpdateRecipientUserReferralSheetUrl: boolean }>({
            mutation: UPDATE_RECIPIENT_REFERRAL_SHEET_URL,
            variables: { updatedUser: { recipientUserId, referralSheetUrl } },
        })
        if (!result.data?.UpdateRecipientUserReferralSheetUrl) {
            throw new Error('Error updating the USER referralSheetUrl')
        }
        return result.data?.UpdateRecipientUserReferralSheetUrl
    }

    public static async delete(recipientUserId: string): Promise<boolean> {
        const result = await BoosterClient.mutate<{ DeleteRecipientUser: boolean }>({
            mutation: DELETE_RECIPIENT_USER,
            variables: { userToDelete: { recipientUserId } },
        })
        if (!result.data?.DeleteRecipientUser) {
            throw new Error('Error deleting the USER')
        }
        return result.data?.DeleteRecipientUser
    }

    private static recipientToCommandVariables(recipient: Partial<Recipient>) {
        return {
            recipient:
            {
                firstName: recipient.firstName,
                lastName: recipient.lastName,
                dateOfBirth: recipient.dateOfBirth,
                typeOfIdentityDocument: recipient.typeOfIdentityDocument,
                identityDocumentNumber: recipient.identityDocumentNumber,
                phone: recipient.phone,
                email: 'test.email@gmail.com',
            }
        }
    }
}

const GET_ALL_RECIPIENTS = gql`
  query ListRecipientReadModels  {
    ListRecipientReadModels  {
      items {
        id
        firstName
        lastName
        dateOfBirth
        typeOfIdentityDocument
        identityDocumentNumber
        phone
        phoneVerified
        email
        relativesIds
        referralSheetUrl
        role
      }
    }
  }
`

const GET_RECIPIENT_BY_PHONE = gql`
  query ListRecipientReadModels ($phone: String!) {
    ListRecipientReadModels(
      filter: { phone: {eq: $phone } }
      sortBy: {}
  )  {
      items {
        id
        firstName
        lastName
        dateOfBirth
        typeOfIdentityDocument
        identityDocumentNumber
        phone
        email
        relativesIds
        relatives{
          id
          firstName
          lastName
          dateOfBirth
          typeOfIdentityDocument
          identityDocumentNumber
        }
        referralSheetUrl
      }
    }
  }
`

const REFERRAL_SHEET_UPLOAD_URL = gql`
  mutation ReferralSheetUploadUrl($filename: String!) {
    ReferralSheetUploadUrl(
      input: { filename: $filename }
    ) {
      url,
      fields
    }
  }
`

const GET_RECIPIENT_BY_ID = gql`
    query RecipientReadModel ($id: ID!) {
        RecipientReadModel (id: $id) {
            id
            firstName
            lastName
            dateOfBirth
            typeOfIdentityDocument
            identityDocumentNumber
            phone
            phoneVerified
            email
            relativesIds
            referralSheetUrl
            deleted
            relatives {
            id
            recipientUserId
            firstName
            lastName
            dateOfBirth
            typeOfIdentityDocument
            identityDocumentNumber
            }
        }
    }
`


const CREATE_RECIPIENT = gql`
  mutation CreateRecipient ($recipient: CreateRecipientInput!) {
    CreateRecipient(input: $recipient)
  }
`

const UPDATE_RECIPIENT_EMAIL = gql`
  mutation ($updatedUser: UpdateRecipientEmailInput!) {
    UpdateRecipientEmail(input: $updatedUser)
  }
`

const UPDATE_RECIPIENT_REFERRAL_SHEET_URL = gql`
  mutation ($updatedUser: UpdateRecipientUserReferralSheetUrlInput!) {
    UpdateRecipientUserReferralSheetUrl(input: $updatedUser)
  }
`

const DELETE_RECIPIENT_USER = gql`
  mutation ($userToDelete: DeleteRecipientUserInput!) {
    DeleteRecipientUser(input: $userToDelete)
  }
`

export const SUBSCRIBE_TO_RECIPIENT_USER = gql`
    subscription ($id: ID!) {
        RecipientReadModel(id: $id) {
            relativesIds
        }
    }
`