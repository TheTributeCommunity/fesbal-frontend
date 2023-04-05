import { BoosterClient } from './booster-service'
import { gql } from '@apollo/client'
import { RecipientUser } from '../models/recipient-user'
import { AuthService } from './auth-service'

export class RecipientUserService {
    public static async getAll(): Promise<RecipientUser[]> {
        const result = await BoosterClient.query<{ ListRecipientUserReadModels: { items: RecipientUser[] } }>({
            query: GET_ALL_RECIPIENTS_USERS,
            variables: {},
        })
        return result.data.ListRecipientUserReadModels.items
    }

    public static async getAuth(): Promise<RecipientUser> {
        if (!AuthService.currentUser || !AuthService.currentUser.phone) {
            throw new Error('Authenticated user not found')
        }
        return RecipientUserService.getByPhone(AuthService.currentUser.phone)
    }

    public static async getUserById(id: string): Promise<RecipientUser> {
        const result = await BoosterClient.query<{
            RecipientUserReadModel: RecipientUser
        }>({
            query: GET_RECIPIENT_USER_BY_ID,
            variables: { id: id }
        })
        return result.data.RecipientUserReadModel
    }

    private static async getByPhone(phone: string): Promise<RecipientUser> {
        const result = await BoosterClient.query<{ ListRecipientUserReadModels: { items: RecipientUser[] } }>({
            query: GET_RECIPIENT_USER_BY_PHONE,
            variables: { phone },
        })
        return result.data.ListRecipientUserReadModels.items[0]
    }

    public static async getReferralSheetUploadUrl(recipientUserId: string): Promise<string> {
        const result = await BoosterClient.mutate<{ GetRecipientUserReferralSheetUploadUrl: string }>({
            mutation: GET_RECIPIENT_USER_REFERRAL_SHEET_UPLOAD_URL,
            variables: { id: { recipientUserId } },
        })
        if (!result.data?.GetRecipientUserReferralSheetUploadUrl) {
            throw new Error('Error getting the URL to upload the referral sheet')
        }
        return result.data.GetRecipientUserReferralSheetUploadUrl
    }

    public static async create(newRecipientUser: Partial<RecipientUser>): Promise<boolean> {
        const result = await BoosterClient.mutate<{ CreateRecipientUser: boolean }>({
            mutation: CREATE_RECIPIENT_USER,
            variables: this.recipientUserToCommandVariables(newRecipientUser),
        })
        if (!result.data?.CreateRecipientUser) {
            throw new Error('Error creating the USER')
        }
        return result.data?.CreateRecipientUser
    }

    public static async updateEmail(recipientUserId: string, email: string): Promise<boolean> {
        const result = await BoosterClient.mutate<{ UpdateRecipientUserEmail: boolean }>({
            mutation: UPDATE_RECIPIENT_USER_EMAIL,
            variables: { updatedUser: { recipientUserId, email } },
        })
        if (!result.data?.UpdateRecipientUserEmail) {
            throw new Error('Error updating the USER email')
        }
        return result.data?.UpdateRecipientUserEmail
    }

    public static async updateReferralSheetUrl(recipientUserId: string, referralSheetUrl: string): Promise<boolean> {
        const result = await BoosterClient.mutate<{ UpdateRecipientUserReferralSheetUrl: boolean }>({
            mutation: UPDATE_RECIPIENT_USER_REFERRAL_SHEET_URL,
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

    private static recipientUserToCommandVariables(recipientUser: Partial<RecipientUser>) {
        return {
            recipientUser:
            {
                firstName: recipientUser.firstName,
                lastName: recipientUser.lastName,
                dateOfBirth: recipientUser.dateOfBirth,
                typeOfIdentityDocument: recipientUser.typeOfIdentityDocument,
                identityDocumentNumber: recipientUser.identityDocumentNumber,
                phone: recipientUser.phone,
                email: 'test.email@gmail.com',
            }
        }
    }
}

const GET_ALL_RECIPIENTS_USERS = gql`
  query ListRecipientUserReadModels  {
    ListRecipientUserReadModels  {
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

const GET_RECIPIENT_USER_BY_PHONE = gql`
  query ListRecipientUserReadModels ($phone: String!) {
    ListRecipientUserReadModels(
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
const GET_RECIPIENT_USER_BY_ID = gql`
    query RecipientUserReadModel ($id: ID!) {
        RecipientUserReadModel (id: $id) {
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

const GET_RECIPIENT_USER_REFERRAL_SHEET_UPLOAD_URL = gql`
  mutation ($id: GetRecipientUserReferralSheetUploadUrlInput!) {
    GetRecipientUserReferralSheetUploadUrl(input: $id)
  }
`
const CREATE_RECIPIENT_USER = gql`
  mutation ($recipientUser: CreateRecipientUserInput!) {
    CreateRecipientUser(input: $recipientUser)
  }
`

const UPDATE_RECIPIENT_USER_EMAIL = gql`
  mutation ($updatedUser: UpdateRecipientUserEmailInput!) {
    UpdateRecipientUserEmail(input: $updatedUser)
  }
`

const UPDATE_RECIPIENT_USER_REFERRAL_SHEET_URL = gql`
  mutation ($updatedUser: UpdateRecipientUserReferralSheetUrlInput!) {
    UpdateRecipientUserReferralSheetUrl(input: $updatedUser)
  }
`

const DELETE_RECIPIENT_USER = gql`
  mutation ($userToDelete: DeleteRecipientUserInput!) {
    DeleteRecipientUser(input: $userToDelete)
  }
`
