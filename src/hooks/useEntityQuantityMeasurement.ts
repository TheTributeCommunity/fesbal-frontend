import { AppRoute } from '../enums/app-route'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { FoodPicking } from '../types/FoodPicking'
import { MeasurementUnit } from '../types/MeasurementUnit'

const useEntityFoodSearch = () => {
    const { state } = useLocation()
    const foodItems = state?.foodItems || []
    const foodItem = state?.foodItem || {}
    const [inputFoodItem, setInputFoodItem] = useState<FoodPicking>(foodItem)
    const navigate = useNavigate()

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputFoodItem(prevFoodItem => ({
            ...prevFoodItem,
            quantity: Number(event.target.value)
        }))
    }

    const handleMeasurementUnitChange = (measurementUnit: MeasurementUnit) => {
        setInputFoodItem(prevFoodItem => ({
            ...prevFoodItem,
            measurementUnit
        }))
    }

    const deleteQuantityInput = () => {
        setInputFoodItem(prevFoodItem => ({
            ...prevFoodItem,
            quantity: 0,
        }))
    }

    const updateFoodQuantityMeasurement = () => {
        const newFoodItems = foodItems.map((foodItem: FoodPicking) => {
            if (foodItem.food.name === inputFoodItem.food.name) {
                return {
                    ...foodItem,
                    quantity: inputFoodItem.quantity,
                    measurementUnit: inputFoodItem.unit
                }
            }
            return foodItem
        })
        navigate(AppRoute.ENTITY_USER_SCANNED, { state: { foodItems: newFoodItems } })
    }

    return {
        inputQuantity: inputFoodItem.quantity,
        inputMeasurement: inputFoodItem.unit,
        handleQuantityChange,
        handleMeasurementUnitChange,
        updateFoodQuantityMeasurement,
        deleteQuantityInput
    }
}

export default useEntityFoodSearch
