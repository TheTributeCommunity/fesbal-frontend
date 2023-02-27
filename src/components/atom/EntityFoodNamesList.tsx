import React from 'react'
import FoodNames from '../../enums/food-names'

interface FoodNamesListProps {
    filteredFoodNames: FoodNames[]
    handleOnClick: (foodName: FoodNames, foodToUpdate: FoodNames) => void
    foodToUpdate: FoodNames
}

const EntityFoodNamesList = ({filteredFoodNames, handleOnClick, foodToUpdate}: FoodNamesListProps) => {
    const foodItems = filteredFoodNames.map((foodName, index) => {
        const backgroundClass = index % 2 === 0 ? '' : 'bg-white'
        return (
            <div
                key={foodName}
                className={`w-full h-16 px-8 flex items-center ${backgroundClass}`}
                onClick={() => handleOnClick(foodName, foodToUpdate)}
            >
                <p className="font-input text-secondary-color">{foodName}</p>
            </div>
        )
    })

    return <>{foodItems}</>
}

export default EntityFoodNamesList
