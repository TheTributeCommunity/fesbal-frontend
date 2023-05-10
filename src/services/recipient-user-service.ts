import { BoosterClient } from './booster-service'
import { Recipient, RecipientMessages } from '../models/recipient-user'
import { AuthService } from './auth-service'
import { ReferralSheetUpload } from '../models/referral-sheet-upload-url'
import {
  CREATE_RECIPIENT,
  DELETE_RECIPIENT_USER,
  GET_ALL_RECIPIENTS,
  GET_RECIPIENTS_BY_ID_DOCUMENT_NUMBER,
  GET_RECIPIENT_BY_ID,
  GET_RECIPIENT_BY_PHONE,
  GET_RECIPIENT_MESSAGES,
  REFERRAL_SHEET_UPLOAD_URL,
  UPDATE_RECIPIENT,
  UPDATE_RECIPIENT_EMAIL,
  UPDATE_RECIPIENT_REFERRAL_SHEET_URL,
} from '../graphql/recipient-queries'
import { ReferralSheetUploadInput } from '../models/referral-sheet-upload-input'

export class RecipientUserService {
  public static async getAll(): Promise<Recipient[]> {
    const result = await BoosterClient.query<{
      ListRecipientReadModels: { items: Recipient[] }
    }>({
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
      variables: { id: id },
    })
    return result.data.RecipientReadModel
  }

  public static async getUserMessages(id: string): Promise<RecipientMessages> {
    const result = await BoosterClient.query<{
      RecipientReadModel: RecipientMessages
    }>({
      query: GET_RECIPIENT_MESSAGES,
      variables: { id: id },
    })
    return result.data.RecipientReadModel
  }

  private static async getByPhone(phone: string): Promise<Recipient> {
    const result = await BoosterClient.query<{
      ListRecipientReadModels: { items: Recipient[] }
    }>({
      query: GET_RECIPIENT_BY_PHONE,
      variables: { phone },
    })
    return result.data.ListRecipientReadModels.items[0]
  }

  public static async getByDocumentId(
    id: string
  ): Promise<Partial<Recipient>[]> {
    const result = await BoosterClient.query<{
      ListRecipientReadModels: { items: Partial<Recipient>[] }
    }>({
      query: GET_RECIPIENTS_BY_ID_DOCUMENT_NUMBER,
      variables: { id },
    })
    if (!result.data?.ListRecipientReadModels) {
      throw new Error('Error getting recipients by document ID')
    }
    return result.data.ListRecipientReadModels.items
  }

  public static async getReferralSheetUploadUrl(
    referralSheetUploadInput: ReferralSheetUploadInput
  ): Promise<ReferralSheetUpload> {
    const result = await BoosterClient.mutate<{
      ReferralSheetUploadUrl: ReferralSheetUpload
    }>({
      mutation: REFERRAL_SHEET_UPLOAD_URL,
      variables: { referralSheetUploadInput: referralSheetUploadInput },
    })
    if (!result.data?.ReferralSheetUploadUrl) {
      throw new Error('Error getting the URL to upload the referral sheet')
    }
    return result.data.ReferralSheetUploadUrl
  }

  public static async create(
    newRecipient: Partial<Recipient>
  ): Promise<boolean> {
    const result = await BoosterClient.mutate<{ CreateRecipient: boolean }>({
      mutation: CREATE_RECIPIENT,
      variables: this.recipientToCommandVariables(newRecipient),
    })
    if (!result.data?.CreateRecipient) {
      throw new Error('Error creating the recipient')
    }
    return result.data?.CreateRecipient
  }

  public static async update(
    recipientUpdates: Partial<Recipient>
  ): Promise<boolean> {
    const result = await BoosterClient.mutate<{ UpdateRecipient: boolean }>({
      mutation: UPDATE_RECIPIENT,
      variables: { updatedUser: recipientUpdates },
    })
    if (!result.data?.UpdateRecipient) {
      throw new Error('Error updating the USER')
    }
    return result.data?.UpdateRecipient
  }

  public static async updateEmail(
    recipientId: string,
    email: string
  ): Promise<boolean> {
    const result = await BoosterClient.mutate<{
      UpdateRecipientEmail: boolean
    }>({
      mutation: UPDATE_RECIPIENT_EMAIL,
      variables: { updatedUser: { recipientId: recipientId, email } },
    })
    if (!result.data?.UpdateRecipientEmail) {
      throw new Error('Error updating the USER email')
    }
    return result.data?.UpdateRecipientEmail
  }

  public static async updateReferralSheetUrl(
    recipientUserId: string,
    referralSheetUrl: string
  ): Promise<boolean> {
    const result = await BoosterClient.mutate<{
      UpdateRecipientUserReferralSheetUrl: boolean
    }>({
      mutation: UPDATE_RECIPIENT_REFERRAL_SHEET_URL,
      variables: { updatedUser: { recipientUserId, referralSheetUrl } },
    })
    if (!result.data?.UpdateRecipientUserReferralSheetUrl) {
      throw new Error('Error updating the USER referralSheetUrl')
    }
    return result.data?.UpdateRecipientUserReferralSheetUrl
  }

  public static async delete(recipientUserId: string): Promise<boolean> {
    const result = await BoosterClient.mutate<{ DeleteRecipientUser: boolean }>(
      {
        mutation: DELETE_RECIPIENT_USER,
        variables: { userToDelete: { recipientUserId } },
      }
    )
    if (!result.data?.DeleteRecipientUser) {
      throw new Error('Error deleting the USER')
    }
    return result.data?.DeleteRecipientUser
  }

  private static recipientToCommandVariables(recipient: Partial<Recipient>) {
    return {
      recipient: {
        firstName: recipient.firstName,
        lastName: recipient.lastName,
        dateOfBirth: recipient.dateOfBirth,
        typeOfIdentityDocument: recipient.typeOfIdentityDocument,
        identityDocumentNumber: recipient.identityDocumentNumber,
        phone: recipient.phone,
        email: 'test.email@gmail.com',
      },
    }
  }
}
