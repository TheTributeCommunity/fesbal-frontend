import { FoodPicking } from '../types/FoodPicking'
import { measurements, MeasurementUnit } from '../types/MeasurementUnit'

export const deserializeFood = (foodItem: string): FoodPicking => {
    const data = foodItem.split(',')
    return {
        food: { name: data[0] },
        unit: getMeasurementUnit(data[1]),
        quantity: Number(data[2])
    }
}

export const serializeFood = (foodItem: FoodPicking): string => {
    return [foodItem.food.name, foodItem.unit.abbreviation, foodItem.quantity].join(',')
}

export const getMeasurementUnit = (abbrev: string): MeasurementUnit => {
    const result = Object.values(measurements).filter(measurement => measurement.abbreviation === abbrev)
    return result ? result[0] : measurements.units
}