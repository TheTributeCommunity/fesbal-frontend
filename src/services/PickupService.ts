import { gql, useMutation, useQuery } from '@apollo/client'
import { deserializeFood } from '../helpers/foodHelper'
import { InflatedPickup, Pickup } from '../types/Pickup'
import { BoosterClient } from './booster-service'
import { EntityService } from './entity-service'
import { RecipientUserService } from './recipient-user-service'

class PickupService {
  public static async startPickup(recipientId: string): Promise<string> {
    const [startPickup] = useMutation(START_PICKUP, {
      variables: { recipientId },
    })

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

  public static async getRecipientPickupHistory(
    userId: string
  ): Promise<Pickup[]> {
    const { data, error } = useQuery(GET_PICKUPS_BY_USER_ID, {
      variables: { id: userId },
    })

    if (error) {
      throw new Error(`Pickup history could not be retrieved: ${error}`)
    }

    return data.ListPickUpReadModels.items
  }

  public static async getEntityPickupHistory(
    entityId: string
  ): Promise<Pickup[]> {
    const { data, error } = useQuery(GET_PICKUPS_BY_ENTITY_ID, {
      variables: { id: entityId },
    })

    if (error) {
      throw new Error(`Pickup history could not be retrieved: ${error}`)
    }

    return data.ListPickUpReadModels.items
  }

  public static async getPickupDetails(id: string): Promise<InflatedPickup> {
    const result = await BoosterClient.query<{
      PickupReadModel: InflatedPickup
    }>({
      query: GET_PICKUP_BY_ID,
      variables: { id: id },
    })
    return result.data.PickupReadModel
  }

  public static async inflatePickup(pickup: Pickup): Promise<InflatedPickup> {
    const [recipient, entity] = await Promise.all([
      RecipientUserService.getUserById(pickup.recipientId),
      EntityService.getById(pickup.entityId),
    ])
    return {
      id: pickup.id,
      recipient,
      entity,
      startedAt: new Date(pickup.startedAt),
      endedAt: new Date(pickup.endedAt),
      signed: pickup.signed,
      signDate: new Date(pickup.signDate),
    }
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
    recipientId
    entityId
    startedAt
    endedAt
    signed
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
