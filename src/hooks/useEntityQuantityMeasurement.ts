import {AppRoute} from '../enums/app-route'
import FoodItemProps from '../types/FoodItemProps'
import {MeasurementUnit} from '../enums/measurement'
import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router'

const useEntityFoodSearch = () => {
    const { state } = useLocation()
    const foodItems = state?.foodItems || []
    const foodItem = state?.foodItem || {}
    const [inputFoodItem, setInputFoodItem] = useState<FoodItemProps>(foodItem)
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
        const newFoodItems = foodItems.map((foodItem: FoodItemProps) => {
            if (foodItem.name === inputFoodItem.name) {
                return {
                    ...foodItem,
                    quantity: inputFoodItem.quantity,
                    measurementUnit: inputFoodItem.measurementUnit
                }
            }
            return foodItem
        })
        navigate(AppRoute.ENTITY_USER_SCANNED, { state: { foodItems: newFoodItems } })
    }

    return {
        inputQuantity: inputFoodItem.quantity,
        inputMeasurement: inputFoodItem.measurementUnit,
        handleQuantityChange,
        handleMeasurementUnitChange,
        updateFoodQuantityMeasurement,
        deleteQuantityInput
    }
}

export default useEntityFoodSearch
