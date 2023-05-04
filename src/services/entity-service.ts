import { gql } from '@apollo/client'
import { Entity, EntityMessages } from '../models/entity'
import { BoosterClient } from './booster-service'

export class EntityService {
    public static async getById(id: string): Promise<Entity> {
        const result = await BoosterClient.query<{ EntityReadModel: Entity }>({
            query: GET_ENTITY_BY_ID,
            variables: { id: id }
        })
        return result.data.EntityReadModel
    }

    public static async getEntityMessages(id: string): Promise<EntityMessages> {
        const result = await BoosterClient.query<{
            EntityReadModel: EntityMessages
        }>({
            query: GET_ENTITY_MESSAGES,
            variables: { id: id }
        })
        return result.data.EntityReadModel
    }
}

const GET_ENTITY_BY_ID = gql`
    query EntityReadModel($id: ID!) {
        EntityReadModel(id: $id) {
            id
            entityName
            entityCode
            region
            address
            contactPerson
            email
            phone
            storingCapacity
        }
    }
`

const GET_ENTITY_MESSAGES = gql`
    query EntityReadModel ($id: ID!) {
        EntityReadModel (id: $id) {
            notifications {
                id
                title
                body
                read
                createdAt
                readAt
                isDeleted
              }
        }
    }
`