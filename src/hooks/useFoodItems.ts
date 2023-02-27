import {useState} from 'react'
import FoodItemProps from '../types/FoodItemProps'
import FoodNames from '../enums/food-names'
import {MeasurementUnit} from '../enums/measurement'
import {useNavigate} from 'react-router'
import {AppRoute} from '../enums/app-route'

const useFoodItems = (userFoodItems: FoodItemProps[] = []) => {
    const [foodItems, setFoodItems] = useState<FoodItemProps[]>(userFoodItems)
    const navigate = useNavigate()
    const removeFoodItem = (foodItem: FoodItemProps) => {
        setFoodItems(foodItems.filter(item => item.name !== foodItem.name))
    }
    const updateFoodItem = (foodName: FoodNames, oldFoodName: FoodNames) => {
        const foodNameAlreadyExists = foodItems.some(item => item.name === foodName)
        if (foodNameAlreadyExists) {
            const removedFoodItems = foodItems.filter(item => item.name !== oldFoodName)
            setFoodItems(removedFoodItems)
            navigate(AppRoute.ENTITY_USER_SCANNED, {state: {foodItems: removedFoodItems}})
            return
        }
        const updatedFoodItems = foodItems.map(item => {
            if (item.name === oldFoodName) return {...item, name: foodName}
            return item
        })
        setFoodItems(updatedFoodItems)
        navigate(AppRoute.ENTITY_USER_SCANNED, {state: {foodItems: updatedFoodItems}})
    }

    const addFoodItem = (foodName: FoodNames) => {
        if (foodItems.some(item => item.name === foodName)) {
            navigate(AppRoute.ENTITY_USER_SCANNED, {state: {foodItems: foodItems}})
            return
        }
        const newFoodItem: FoodItemProps = {
            name: foodName,
            quantity: 1,
            measurementUnit: MeasurementUnit.UNITS
        }
        const updatedFoodItems = [...foodItems, newFoodItem]
        setFoodItems(updatedFoodItems)
        navigate(AppRoute.ENTITY_USER_SCANNED, {state: {foodItems: updatedFoodItems}})
    }

    return {
        foodItems,
        addFoodItem,
        removeFoodItem,
        updateFoodItem,
    }
}

export default useFoodItems
