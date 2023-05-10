import { useEffect, useState } from "react"
import { Entity, mapEntityToOptionLabel } from "../models/entity"
import { EntityService } from "../services/entity-service"
import { Option } from '../types/Option'

export const useEntities = () => {
    const [entities, setEntities] = useState<Entity[]>([])
    const [entityOptions, setEntityOptions] = useState<Option[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        EntityService.getEntities().then(entities => {
          const entityOptions = entities.map(entity => {
            return {label: mapEntityToOptionLabel(entity), value: entity.id}
          })
          setEntities(entities)
          setEntityOptions(entityOptions)
          setLoading(false)
        })
      }, [])

    return { entities, entityOptions, loading }
}