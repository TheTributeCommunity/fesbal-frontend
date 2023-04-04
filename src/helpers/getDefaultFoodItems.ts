import FamilyUnitAges from '../types/FamilyUnitAges'
import { FoodPicking } from '../types/FoodPicking'
import { measurements } from '../types/MeasurementUnit'

type AgeGroup = keyof FamilyUnitAges;
type DefaultFoodItemsByAge = {
    [key in AgeGroup]: FoodPicking[];
};
const getDefaultFoodItems = (familyAgeCount: FamilyUnitAges): FoodPicking[] => {
    const ageGroups = Object.keys(defaultFoodItemsByAge) as AgeGroup[]
    let defaultFoodItems: FoodPicking[] = []
    ageGroups.forEach((ageGroup) => {
        const count = familyAgeCount[ageGroup]
        if (count > 0) {
            const defaultItems = defaultFoodItemsByAge[ageGroup]
            defaultItems.forEach((item) => {
                const { food: { name }, quantity, unit
                } = item
                const foodItem = { food: { name }, quantity: quantity * count, unit }
                defaultFoodItems = addOrUpdateFoodItem(foodItem, defaultFoodItems)
            })
        }
    })
    return defaultFoodItems
}

const addOrUpdateFoodItem = (foodItem: FoodPicking, items: FoodPicking[]) => {
    const existingFoodItemIndex = items.findIndex((item) => item.food.name === foodItem.food.name)
    if (existingFoodItemIndex !== -1) {
        const existingFoodItem = items[existingFoodItemIndex]
        const updatedFoodItem = { ...existingFoodItem, quantity: existingFoodItem.quantity + foodItem.quantity }
        return [...items.slice(0, existingFoodItemIndex), updatedFoodItem, ...items.slice(existingFoodItemIndex + 1)]
    }
    return [...items, foodItem]
}

const defaultFoodItemsByAge: DefaultFoodItemsByAge = {
    under3: [
        {
            food: { name: 'Galletas' },
            quantity: 2,
            unit: measurements.units,
        },
        {
            food: { name: 'Leche' },
            quantity: 2,
            unit: measurements.liters,
        },
    ],
    between3and15: [
        {
            food: { name: 'Aceite' },
            quantity: 750,
            unit: measurements.milliliters,
        },
        {
            food: { name: 'Garbanzos' },
            quantity: 2,
            unit: measurements.kilograms,
        },
    ],
    over15: [
        {
            food: { name: 'Arroz' },
            quantity: 2,
            unit: measurements.kilograms,
        },
        {
            food: { name: 'Leche' },
            quantity: 2,
            unit: measurements.liters,
        },
    ],
}

export default getDefaultFoodItems
