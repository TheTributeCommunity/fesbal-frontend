import { useState } from 'react'
import { useNavigate } from 'react-router'
import { AppRoute } from '../enums/app-route'
import { FoodPicking } from '../types/FoodPicking'
import { measurements, MeasurementUnit } from '../types/MeasurementUnit'

const useFoodItems = (userFoodItems: FoodPicking[] = []) => {
    const [foodItems, setFoodItems] = useState<FoodPicking[]>(userFoodItems)
    const navigate = useNavigate()

    const removeFoodItem = (foodItem: FoodPicking) => {
        setFoodItems(foodItems.filter(item => item.food.name !== foodItem.food.name))
    }
    const updateFoodName = (foodName: string, oldFoodName: string) => {
        const foodNameAlreadyExists = foodItems.some(item => item.food.name === foodName)
        if (foodNameAlreadyExists) {
            const removedFoodItems = foodItems.filter(item => item.food.name !== oldFoodName)
            setFoodItems(removedFoodItems)
            navigate(AppRoute.ENTITY_USER_SCANNED, { state: { foodItems: removedFoodItems } })
            return
        }
        const updatedFoodItems = foodItems.map(item => {
            if (item.food.name === oldFoodName) return { ...item, name: foodName }
            return item
        })
        setFoodItems(updatedFoodItems)
        navigate(AppRoute.ENTITY_USER_SCANNED, { state: { foodItems: updatedFoodItems } })
    }

    const updateFoodQuantity = (foodName: string, quantity: number, measurementUnit: MeasurementUnit) => {
        const updatedFoodItems = foodItems.map(item => {
            if (item.food.name === foodName) return { ...item, quantity, measurementUnit }
            return item
        })
        setFoodItems(updatedFoodItems)
        navigate(AppRoute.ENTITY_USER_SCANNED, { state: { foodItems: updatedFoodItems } })
    }

    const addFoodItem = (foodName: string) => {
        if (foodItems.some(item => item.food.name === foodName)) {
            navigate(AppRoute.ENTITY_USER_SCANNED, { state: { foodItems: foodItems } })
            return
        }
        const newFoodItem: FoodPicking = {
            food: { name: foodName },
            quantity: 1,
            unit: measurements.units
        }
        const updatedFoodItems = [...foodItems, newFoodItem]
        setFoodItems(updatedFoodItems)
        navigate(AppRoute.ENTITY_USER_SCANNED, { state: { foodItems: updatedFoodItems } })
    }

    return {
        foodItems,
        addFoodItem,
        removeFoodItem,
        updateFoodName,
        updateFoodQuantity
    }
}

export default useFoodItems
