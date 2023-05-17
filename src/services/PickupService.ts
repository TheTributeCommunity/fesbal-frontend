import { gql } from '@apollo/client'
import { Pickup } from '../types/Pickup'
import { BoosterClient } from './booster-service'

class PickupService {
  public static async startPickup(recipientId: string): Promise<string> {
    const result = await BoosterClient.mutate<{ StartPickUp: string }>({
      mutation: START_PICKUP,
      variables: { recipientId },
    })

    if (!result.data?.StartPickUp) {
      throw new Error('Pickup could not be started')
    }
    return result.data?.StartPickUp
  }

  public static async submitPickUp(pickUpId: string): Promise<void> {
    const result = await BoosterClient.mutate<{ SubmitPickUp: boolean }>({
      mutation: SUBMIT_PICKUP,
      variables: { pickUpId },
    })

    if (!result.data?.SubmitPickUp) {
      throw new Error(`Pickup ${pickUpId} could not be submitted`)
    }
  }

  public static async getRecipientPickupHistory(userId: string): Promise<Pickup[]> {
    const result = await BoosterClient.query<{
        ListPickUpReadModels: { items: Pickup[] }
    }>({
        query: GET_PICKUPS_BY_USER_ID,
        variables: { id: userId }
    })
    if (result.error) {
        throw new Error(`Pickups for recipient ${userId} could not be retrieved`)
    }
    return result.data.ListPickUpReadModels.items
}

  public static async getEntityPickupHistory(
    entityId: string
  ): Promise<Pickup[]> {
    const result = await BoosterClient.query<{
        ListPickUpReadModels: { items: Pickup[] }
    }>({
        query: GET_PICKUPS_BY_ENTITY_ID,
        variables: { id: entityId }
    })
    if (result.error) {
        throw new Error(`Pickups for entity ${entityId} could not be retrieved`)
    }
    return result.data.ListPickUpReadModels.items
  }

  public static async getPickupDetails(id: string): Promise<Pickup> {
    const result = await BoosterClient.query<{
      PickupReadModel: Pickup
    }>({
      query: GET_PICKUP_BY_ID,
      variables: { id: id },
    })
    if (!result.data.PickupReadModel) {
        throw new Error(`Could not retrieve pickup ${id}`)
    }
    return result.data.PickupReadModel
  }
}

export const START_PICKUP = gql`
  mutation StartPickUp($recipientId: ID!) {
    StartPickUp(input: { recipientId: $recipientId })
  }
`

const SUBMIT_PICKUP = gql`
  mutation SubmitPickUp($pickUpId: ID!) {
    SubmitPickUp(input: { pickUpId: $pickUpId })
  }
`

const PICK_UP_DETAILS_FRAGMENT = gql`
  fragment PickUpDetails on PickUpReadModel {
    id
    entityId
    recipientId
    recipientFirstName
    recipientLastName
    recipientIdentityDocumentNumber
    recipientNumberOfRelatives
    startedAt
    submittedAt
    endedAt
    signed
    declined
    signDate
  }
`

const GET_PICKUP_BY_ID = gql`
  query PickupReadModel($id: ID!) {
    PickUpReadModel(id: $id) {
      ...PickUpDetails
    }
  }

  ${PICK_UP_DETAILS_FRAGMENT}
`

const GET_PICKUPS_BY_USER_ID = gql`
  query ListPickUpReadModels($id: ID!) {
    ListPickUpReadModels(
      filter: { recipientId: { eq: $id }, signed: { eq: true } }
    ) {
      items {
        ...PickUpDetails
      }
    }
  }

  ${PICK_UP_DETAILS_FRAGMENT}
`

const GET_PICKUPS_BY_ENTITY_ID = gql`
  query ListPickUpReadModels($id: ID!) {
    ListPickUpReadModels(
      filter: { entityId: { eq: $id }, signed: { eq: true } }
    ) {
      items {
        ...PickUpDetails
      }
    }
  }

  ${PICK_UP_DETAILS_FRAGMENT}
`

export default PickupService
