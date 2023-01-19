import { BoosterClient } from './booster-service'
import { gql } from '@apollo/client'
import { RecipientUser } from '../models/user'

export class RecipientUserService {
  static async getAll(): Promise<RecipientUser[]> {
    const result = await BoosterClient.query<{ ListRecipientUserReadModels: { items: RecipientUser[] } }>({
      query: GET_ALL_RECIPIENTS_USERS,
      variables: {},
    })
    return result.data.ListRecipientUserReadModels.items
  }

  static async getById(id: string): Promise<RecipientUser> {
    const result = await BoosterClient.query<{ RecipientUserReadModel: RecipientUser }>({
      query: GET_RECIPIENT_USER,
      variables: { id },
    })
    return result.data.RecipientUserReadModel
  }

  static async create(newUser: Partial<RecipientUser>): Promise<boolean> {
    const result = await BoosterClient.mutate<{ CreateRecipientUser: boolean }>({
      mutation: CREATE_RECIPIENT_USER,
      variables: { newUser },
    })
    if (!result.data?.CreateRecipientUser) {
      throw new Error('Error creating the USER')
    }
    return result.data?.CreateRecipientUser
  }

  static async updateEmail(recipientUserId: string, email: string): Promise<boolean> {
    const result = await BoosterClient.mutate<{ UpdateRecipientUserEmail: boolean }>({
      mutation: UPDATE_RECIPIENT_USER,
      variables: { updatedUser: { email, recipientUserId } },
    })
    if (!result.data?.UpdateRecipientUserEmail) {
      throw new Error('Error updating the USER')
    }
    return result.data?.UpdateRecipientUserEmail
  }

  static async delete(recipientUserId: string): Promise<boolean> {
    const result = await BoosterClient.mutate<{ DeleteRecipientUser: boolean }>({
      mutation: DELETE_RECIPIENT_USER,
      variables: { userToDelete: { recipientUserId } },
    })
    if (!result.data?.DeleteRecipientUser) {
      throw new Error('Error deleting the USER')
    }
    return result.data?.DeleteRecipientUser
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
        referralSheetUrl
        role
      }
    }
  }
`

const GET_RECIPIENT_USER = gql`
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
      referralSheetUrl
      role
      deleted          
    }
  }
`
const CREATE_RECIPIENT_USER = gql`
  mutation ($newUser: CreateRecipientUserInput!) {
    CreateRecipientUser(input: $newUser)
  }
`

const UPDATE_RECIPIENT_USER = gql`
  mutation ($updatedUser: UpdateRecipientUserEmailInput!) {
    UpdateRecipientUserEmail(input: $updatedUser)
  }
`

const DELETE_RECIPIENT_USER = gql`
  mutation ($userToDelete: DeleteRecipientUserInput!) {
    DeleteRecipientUser(input: $userToDelete)
  }
`
