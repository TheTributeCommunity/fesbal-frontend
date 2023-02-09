import { PickupItem } from "../types/PickupItem";
import { FoodMock } from "./food.mock";
import { QuantityUnitMock } from "./quantityUnit.mock";


export const PickupItemMock: PickupItem[] = [
    {
        food: FoodMock[0],
        unity: QuantityUnitMock[0],
        quantity: 1,
    },
    {
        food: FoodMock[1],
        unity: QuantityUnitMock[1],
        quantity: 2,
    },
    {
        food: FoodMock[2],
        unity: QuantityUnitMock[2],
        quantity: 3,
    },
    {
        food: FoodMock[3],
        unity: QuantityUnitMock[3],
        quantity: 4,
    },
    {
        food: FoodMock[4],
        unity: QuantityUnitMock[4],
        quantity: 5,
    }
]