import {MeasurementUnit} from "../enums/measurement";
import FoodNames from "../enums/food-names";

export default interface FoodItemProps {
    name: FoodNames;
    quantity: number;
    measurementUnit: MeasurementUnit;
}
