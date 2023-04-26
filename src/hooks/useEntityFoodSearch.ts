import { FoodMock } from '../mocks/food.mock'
import { useLocation } from 'react-router-dom'
import useFoodItems from './useFoodItems'
import useAppInput from './useAppInput'
import { FoodType } from '../types/FoodType'

const useEntityFoodSearch = () => {
    const { state } = useLocation()
    const foodToUpdate = state?.foodName || null
    const { addFoodItem, updateFoodName } = useFoodItems()
    const { inputValue, deleteInputValue, handleInputChange } = useAppInput(foodToUpdate || '')
    const foodNames = FoodMock

    const handleOnClick = (selectedFoodItem: FoodType) => {
        if (foodToUpdate) {
            updateFoodName(selectedFoodItem.name, foodToUpdate)
        } else {
            addFoodItem(selectedFoodItem.name)
        }
    }

    const filteredFoodNames = foodNames.filter(
        foodItem => foodItem.name.toLowerCase().includes(inputValue.toLowerCase())
    )

    return { inputValue, deleteInputValue, handleInputChange, handleOnClick, filteredFoodNames, foodToUpdate }
}

export default useEntityFoodSearch
