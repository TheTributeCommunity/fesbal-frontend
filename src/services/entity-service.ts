import { gql } from '@apollo/client'
import { Entity } from '../models/entity'
import { BoosterClient } from './booster-service'

export class EntityService {
    public static async getById(id: string): Promise<Entity> {
        const result = await BoosterClient.query<{ EntityReadModel: Entity }>({
            query: GET_ENTITY_BY_ID,
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
            email
            phone
        }
    }
`