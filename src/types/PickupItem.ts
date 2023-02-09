import { FoodType } from "./FoodType";
import { QuantityUnity } from "./QuantityUnity";

export interface PickupItem {
    foodId: FoodType;
    unityId: QuantityUnity;
    quantity: number;
}