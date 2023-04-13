import { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../contexts/usersContext'
import { Entity } from '../models/entity'
import { EntityService } from '../services/entity-service'

const useEntityInfo = () => {
    const [entity, setEntity] = useState<Entity>()
    const { firebaseUser } = useContext(UsersContext)

    useEffect(() => {
        if (firebaseUser) {
            EntityService.getById(firebaseUser.uid)
                .then((entity) => {
                    setEntity(entity)
                })
                .catch((e) => console.log(e))
        }
    }, [firebaseUser])

    return {
        entity
    }
}

export default useEntityInfo
