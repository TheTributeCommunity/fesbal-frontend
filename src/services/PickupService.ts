import { gql } from '@apollo/client'
import { deserializeFood } from '../helpers/foodHelper'
import { InflatedPickup, Pickup } from '../types/Pickup'
import { BoosterClient } from './booster-service'
import { EntityService } from './entity-service'
import { RecipientUserService } from './recipient-user-service'

class PickupService {
    public static async getRecipientPickupHistory(userId: string): Promise<Pickup[]> {
        const result = await BoosterClient.query<{
            ListPickUpReadModels: { items: Pickup[] }
        }>({
            query: GET_PICKUPS_BY_USER_ID,
            variables: { id: userId }
        })
        return result.data.ListPickUpReadModels.items
    }

    public static async getEntityPickupHistory(entityId: string): Promise<Pickup[]> {
        const result = await BoosterClient.query<{
            ListPickUpReadModels: { items: Pickup[] }
        }>({
            query: GET_PICKUPS_BY_ENTITY_ID,
            variables: { id: entityId }
        })
        return result.data.ListPickUpReadModels.items
    }

    public static async getPickupDetails(id: string): Promise<InflatedPickup> {
        const result = await BoosterClient.query<{
            PickupReadModel: InflatedPickup
        }>({
            query: GET_PICKUP_BY_ID,
            variables: { id: id }
        })
        return result.data.PickupReadModel
    }

    public static async inflatePickup(pickup: Pickup): Promise<InflatedPickup> {
        const [recipient, entity] = await Promise.all([RecipientUserService.getUserById(pickup.recipientId), EntityService.getById(pickup.entityId)])
        return {
            id: pickup.id,
            recipient,
            entity,
            startedAt: new Date(pickup.startedAt),
            endedAt: new Date(pickup.endedAt),
            signed: pickup.signed,
            signDate: new Date(pickup.signDate),
            pickupItems: pickup.items.map(deserializeFood)
        }
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
        ListPickUpReadModels(filter: { recipientId: {eq: $id}, signed: {eq: true}}) {
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

const GET_PICKUPS_BY_ENTITY_ID = gql`
    query ListPickUpReadModels ($id: ID!) {
        ListPickUpReadModels(filter: { entityId: {eq: $id}, signed: {eq: true}}) {
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
