import { FoodType } from '../../types/FoodType'

interface FoodNamesListProps {
    filteredFoodNames: FoodType[]
    handleOnClick: (foodName: FoodType, foodToUpdate: FoodType) => void
    foodToUpdate: FoodType
}

const EntityFoodNamesList = ({filteredFoodNames, handleOnClick, foodToUpdate}: FoodNamesListProps) => {
    const foodItems = filteredFoodNames.map((food, index) => {
        const backgroundClass = index % 2 === 0 ? '' : 'bg-white'
        return (
            <div
                key={food.name}
                className={`w-full h-16 px-8 flex items-center ${backgroundClass}`}
                onClick={() => handleOnClick(food, foodToUpdate)}
            >
                <p className="font-input text-secondary-color">{food.name}</p>
            </div>
        )
    })

    return <>{foodItems}</>
}

export default EntityFoodNamesList
