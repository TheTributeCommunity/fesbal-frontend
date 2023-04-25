import { gql } from '@apollo/client'
import { PickupWithItems } from '../types/Pickup'
import { BoosterClient } from './booster-service'

class PickupService {
    public static async getPickupHistory(userId: string): Promise<PickupWithItems[]> {
        const result = await BoosterClient.query<{
            ListPickUpReadModels: { items: PickupWithItems[] }
        }>({
            query: GET_PICKUPS_BY_USER_ID,
            variables: { id: userId }
        })
        return result.data.ListPickUpReadModels.items
    }

    public static async getPickupDetails(id: string): Promise<PickupWithItems> {
        const result = await BoosterClient.query<{
            PickupReadModel: PickupWithItems
        }>({
            query: GET_PICKUP_BY_ID,
            variables: { id: id }
        })
        return result.data.PickupReadModel
    }
}

const GET_PICKUP_BY_ID = gql`
    query PickupReadModel ($id: ID!) {
        PickUpReadModel(id: $id) {
        id
        recipientId
        entityId
        items
        startedAt
        endedAt
        signed
        signDate
        }
    }
`

const GET_PICKUPS_BY_USER_ID = gql`
    query ListPickUpReadModels ($id: ID!) {
        ListPickUpReadModels(filter: { recipientId: {eq: $id}}) {
        items {
            id
            recipientId
            entityId
            items
            startedAt
            endedAt
            signed
            signDate
        }
        }
    }
`

export default PickupService
