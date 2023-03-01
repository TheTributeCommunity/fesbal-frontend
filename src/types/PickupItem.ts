import { FoodType } from "./FoodType";
import { QuantityUnit } from "./QuantityUnit";

export interface PickupItem {
    food: FoodType;
    unit: QuantityUnit;
    quantity: number;
}