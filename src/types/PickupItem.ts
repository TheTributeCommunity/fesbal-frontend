import { FoodType } from "./FoodType";
import { QuantityUnity } from "./QuantityUnity";

export interface PickupItem {
    food: FoodType;
    unity: QuantityUnity;
    quantity: number;
}