import FoodNames from '../enums/food-names'
import {useLocation} from 'react-router-dom'
import useFoodItems from './useFoodItems'
import useAppInput from './useAppInput'

const useEntityFoodSearch = () => {
    const { state } = useLocation()
    const foodItems = state?.foodItems || []
    const foodToUpdate = state?.foodName || null
    const { addFoodItem, updateFoodItem } = useFoodItems(foodItems)
    const {inputValue, deleteInputValue, handleInputChange} = useAppInput(foodToUpdate || '')
    const foodNames = Object.values(FoodNames)

    const handleOnClick = (selectedFoodName: FoodNames) => {
        if (foodToUpdate) {
            updateFoodItem(selectedFoodName, foodToUpdate)
        } else {
            addFoodItem(selectedFoodName)
        }
    }

    const filteredFoodNames = foodNames.filter(
        (foodName) => foodName.toLowerCase().includes(inputValue.toLowerCase())
    )

    return { inputValue, deleteInputValue, handleInputChange, handleOnClick, filteredFoodNames, foodToUpdate }
}

export default useEntityFoodSearch
