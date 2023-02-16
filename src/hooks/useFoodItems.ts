import FoodNames from "../enums/food-names";
import {MeasurementUnit} from "../enums/measurement";
import FamilyUnitAgesProps from "../types/FamilyUnitAgesProps";
import {useEffect, useState} from "react";
import FoodItemProps from "../types/FoodItemProps";

type AgeGroup = keyof FamilyUnitAgesProps;
type DefaultFoodItemsByAge = {
    [key in AgeGroup]: FoodItemProps[];
}

const defaultFoodItemsByAge: DefaultFoodItemsByAge = {
    under3: [
        {
            name: FoodNames.COOKIES,
            quantity: 2,
            measurementUnit: MeasurementUnit.UNITS,
        },
        {
            name: FoodNames.MILK,
            quantity: 2,
            measurementUnit: MeasurementUnit.LITERS,
        },
    ],
    between3and15: [
        {
            name: FoodNames.RICE,
            quantity: 2,
            measurementUnit: MeasurementUnit.KILOGRAMS,
        },
        {
            name: FoodNames.MILK,
            quantity: 2,
            measurementUnit: MeasurementUnit.LITERS,
        },
    ],
    over16: [
        {
            name: FoodNames.OIL,
            quantity: 750,
            measurementUnit: MeasurementUnit.MILLILITERS,
        },
        {
            name: FoodNames.CHICKPEAS,
            quantity: 2,
            measurementUnit: MeasurementUnit.KILOGRAMS,
        },
    ],
};

const useFoodItems = (familyAgeCount: FamilyUnitAgesProps) => {
    const [foodItems, setFoodItems] = useState<FoodItemProps[]>([]);

    const addOrUpdateFood = (foodItem: FoodItemProps, items: FoodItemProps[]) => {
        const existingFoodItem = items.find((item) => item.name === foodItem.name);
        if (existingFoodItem) {
            const updatedFoodItem = {...existingFoodItem, quantity: existingFoodItem.quantity + foodItem.quantity};
            return items.map((item) => (item.name === updatedFoodItem.name ? updatedFoodItem : item));
        }
        return [...items, foodItem];
    };

    useEffect(() => {
        let newFoodItems: FoodItemProps[] = [];
        (Object.keys(defaultFoodItemsByAge) as AgeGroup[]).forEach((ageGroup) => {
            const count = familyAgeCount[ageGroup];
            if (count > 0) {
                const defaultItems = defaultFoodItemsByAge[ageGroup];
                defaultItems.forEach((item) => {
                    const {name, quantity, measurementUnit} = item;
                    newFoodItems = addOrUpdateFood({name, quantity: quantity * count, measurementUnit}, newFoodItems);
                });
            }
        });
        setFoodItems(newFoodItems);
    }, [familyAgeCount]);

    const addFoodItem = (foodItem: FoodItemProps) => {
        setFoodItems((items) => [...items, foodItem]);
    };
    const removeFoodItem = (foodItem: FoodItemProps) => {
        setFoodItems(foodItems.filter((item) => item !== foodItem));
    };

    return {
        foodItems,
        addFoodItem,
        removeFoodItem
    };
};

export default useFoodItems;
