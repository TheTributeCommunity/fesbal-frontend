import { FoodPicking } from '../types/FoodPicking'
import { measurements } from '../types/MeasurementUnit'

export const PickupItemMock: FoodPicking[] = [
    {
        food: { name: 'Leche' },
        unit: measurements.liters,
        quantity: 4,
    },
    {
        food: { name: 'Galletas' },
        unit: measurements.units,
        quantity: 24,
    },
    {
        food: { name: 'Arroz' },
        unit: measurements.kilograms,
        quantity: 2,
    },
    {
        food: { name: 'Garbanzos' },
        unit: measurements.kilograms,
        quantity: 0.5,
    },
    {
        food: { name: 'Pollo' },
        unit: measurements.kilograms,
        quantity: 2,
    }
]