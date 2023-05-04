import { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../contexts/usersContext'
import { Entity } from '../models/entity'
import { EntityService } from '../services/entity-service'
import { useUserStore } from '../store/logged-user'

const useEntityInfo = () => {
    const [entity, setEntity] = useState<Entity>()
    const userId = useUserStore(state => state.userId)

    useEffect(() => {
        if (userId) {
            EntityService.getById(userId)
                .then((entity) => {
                    setEntity(entity)
                })
                .catch((e) => console.log(e))
        }
    }, [userId])

    return {
        entity
    }
}

export default useEntityInfo
