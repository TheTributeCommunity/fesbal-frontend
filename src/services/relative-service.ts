import { BoosterClient } from "./booster-service";
import { gql } from "@apollo/client";
import { Relative } from "../models/relative";

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

    public static async create(newRelative: Relative): Promise<boolean> {
        const result = await BoosterClient.mutate<{ CreateRelative: boolean }>({
            mutation: CREATE_RELATIVE,
            variables: this.relativeToCommandVariables(newRelative),
        })
        if (!result.data?.CreateRelative) {
            throw new Error('Error creating the RELATIVE')
        }
        return result.data?.CreateRelative
    }

    private static relativeToCommandVariables(relative: Partial<Relative>) {
        return {
            relative:
                {
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
      filter: { recipientUserId: {eq: $recipientUserId } }
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
    RelativeReadModel (id: $id) {
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
