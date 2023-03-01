import { PickupItem } from "../types/PickupItem";
import { FoodMock } from "./food.mock";
import { QuantityUnitMock } from "./quantityUnit.mock";


export const PickupItemMock: PickupItem[] = [
    {
        food: FoodMock[0],
        unit: QuantityUnitMock[0],
        quantity: 1,
    },
    {
        food: FoodMock[1],
        unit: QuantityUnitMock[1],
        quantity: 2,
    },
    {
        food: FoodMock[2],
        unit: QuantityUnitMock[2],
        quantity: 3,
    },
    {
        food: FoodMock[3],
        unit: QuantityUnitMock[3],
        quantity: 4,
    },
    {
        food: FoodMock[4],
        unit: QuantityUnitMock[4],
        quantity: 5,
    }
]