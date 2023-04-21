import { BoosterClient } from './booster-service'
import { gql } from '@apollo/client'
import { Relative, RelativeMutate } from '../models/relative'

export class RelativeService {
    public static async getAllByRecipientUserId(recipientUserId: string): Promise<Relative[]> {
        const result = await BoosterClient.query<{ ListRelativeReadModels: { items: Relative[] } }>({
            query: GET_ALL_RELATIVES_BY_RECIPIENT_USER,
            variables: { recipientUserId },
        })
        return result.data.ListRelativeReadModels.items
    }

    public static async getById(id: string): Promise<Relative> {
        const result = await BoosterClient.query<{ RelativeReadModel: Relative }>({
            query: GET_RELATIVE,
            variables: { id },
        })
        return result.data.RelativeReadModel
    }

    public static async create(newRelative: Partial<Relative>): Promise<boolean> {
        const result = await BoosterClient.mutate<{ CreateRelative: boolean }>({
            mutation: CREATE_RELATIVE,
            variables: { relative: { ...newRelative } }
        })
        if (!result.data?.CreateRelative) {
            throw new Error('Error creating the RELATIVE')
        }
        return result.data?.CreateRelative
    }

    public static async update(relativeUpdate: Partial<RelativeMutate>): Promise<boolean> {
        const result = await BoosterClient.mutate<{ UpdateRelative: boolean }>({
            mutation: UPDATE_RELATIVE,
            variables: { updatedRelative: relativeUpdate }
        })
        if (!result.data?.UpdateRelative) {
            throw new Error('Error updating the RELATIVE')
        }
        return result.data?.UpdateRelative
    }

    public static async delete(id: string): Promise<boolean> {
        const result = await BoosterClient.mutate<{ DeleteRelative: boolean }>({
            mutation: DELETE_RELATIVE,
            variables: { id },
        })
        if (!result.data?.DeleteRelative) {
            throw new Error('Error deleting the relative')
        }
        return result.data?.DeleteRelative
    }

    private static relativeToCommandVariables(relative: Partial<Relative>) {
        return {
            relative: {
                relativeId: relative.id,
                recipientUserId: relative.recipientUserId,
                firstName: relative.firstName,
                lastName: relative.lastName,
                dateOfBirth: relative.dateOfBirth,
                typeOfIdentityDocument: relative.typeOfIdentityDocument,
                identityDocumentNumber: relative.identityDocumentNumber,
            }
        }
    }
}

const GET_ALL_RELATIVES_BY_RECIPIENT_USER = gql`
  query ListRelativeReadModels ($recipientUserId: ID!) {
    ListRelativeReadModels(
      filter: { recipientUserId: {eq: $recipientUserId }, isDeleted: {eq: false} }
      sortBy: {}
  )  {
      items {
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

const GET_RELATIVE = gql`
  query RelativeReadModel ($id: ID!) {
    RelativeReadModel (id: $id, isDeleted: false) {
      id
      recipientUserId
      firstName
      lastName
      dateOfBirth
      typeOfIdentityDocument
      identityDocumentNumber
    }
  }
`
const CREATE_RELATIVE = gql`
  mutation ($relative: CreateRelativeInput!) {
    CreateRelative(input: $relative)
  }
`

const UPDATE_RELATIVE = gql`
    mutation($updatedRelative: UpdateRelativeInput!) {
        UpdateRelative(input: $updatedRelative)
    }
`

const DELETE_RELATIVE = gql`
    mutation ($id: ID!) {
        DeleteRelative(input: { relativeId: $id})
    }
`

export const SUBSCRIBE_TO_RELATIVES_BY_UID = gql`
    subscription relativeReadModels($id: ID!) {
        RelativeReadModels(filter: { recipientUserId: { eq: $id } }) {
        id
        recipientUserId
        firstName
        lastName
        isDeleted
        dateOfBirth
        typeOfIdentityDocument
        identityDocumentNumber
        }
    }
`