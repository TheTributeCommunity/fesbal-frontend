import FamilyUnitAgesProps from '../types/FamilyUnitAgesProps'
import FoodItemProps from '../types/FoodItemProps'
import FoodNames from '../enums/food-names'
import {MeasurementUnit} from '../enums/measurement'

type AgeGroup = keyof FamilyUnitAgesProps;
type DefaultFoodItemsByAge = {
    [key in AgeGroup]: FoodItemProps[];
}
const getDefaultFoodItems = (familyAgeCount: FamilyUnitAgesProps): FoodItemProps[] => {
    const ageGroups = Object.keys(defaultFoodItemsByAge) as AgeGroup[]
    let defaultFoodItems: FoodItemProps[] = []
    ageGroups.forEach((ageGroup) => {
        const count = familyAgeCount[ageGroup]
        if (count > 0) {
            const defaultItems = defaultFoodItemsByAge[ageGroup]
            defaultItems.forEach((item) => {
                const {name, quantity, measurementUnit} = item
                const foodItem = {name, quantity: quantity * count, measurementUnit}
                defaultFoodItems = addOrUpdateFoodItem(foodItem, defaultFoodItems)
            })
        }
    })
    return defaultFoodItems
}

const addOrUpdateFoodItem = (foodItem: FoodItemProps, items: FoodItemProps[]) => {
    const existingFoodItemIndex = items.findIndex((item) => item.name === foodItem.name)
    if (existingFoodItemIndex !== -1) {
        const existingFoodItem = items[existingFoodItemIndex]
        const updatedFoodItem = {...existingFoodItem, quantity: existingFoodItem.quantity + foodItem.quantity}
        return [...items.slice(0, existingFoodItemIndex), updatedFoodItem, ...items.slice(existingFoodItemIndex + 1)]
    }
    return [...items, foodItem]
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
    over15: [
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
}

export default getDefaultFoodItems
