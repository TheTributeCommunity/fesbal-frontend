import FamilyUnitAgesProps from "../types/FamilyUnitAgesProps";
import {useEffect, useState} from "react";
import FoodItemProps from "../types/FoodItemProps";
import getDefaultFoodItems from "../helpers/getDefaultFoodItems";

const useFoodItems = (familyAgeCount: FamilyUnitAgesProps, userFoodItems: FoodItemProps[] = []) => {
    const [foodItems, setFoodItems] = useState<FoodItemProps[]>(userFoodItems);

    useEffect(() => {
        if (userFoodItems.length === 0) {
            setFoodItems(getDefaultFoodItems(familyAgeCount));
        }
    }, []);

    const addFoodItem = (foodItem: FoodItemProps) => {
        setFoodItems((items) => [...items, foodItem]);
    };

    const removeFoodItem = (foodItem: FoodItemProps) => {
        setFoodItems(foodItems.filter((item) => item !== foodItem));
    };

    const updateFoodItem = (foodItem: FoodItemProps) => {
        setFoodItems(foodItems.map((item) => item === foodItem ? foodItem : item));
    }

    return {
        foodItems,
        addFoodItem,
        removeFoodItem,
        updateFoodItem,
    };
};

export default useFoodItems;
