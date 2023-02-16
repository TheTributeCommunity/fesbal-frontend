import CrossIcon from "../icons/CrossIcon";
import FoodItemProps from "../../types/FoodItemProps";
import {Link} from "react-router-dom";
import {AppRoute} from "../../enums/app-route";

interface FoodItemsComponent extends FoodItemProps {
    onRemove: () => void;
}

const FoodItem = ({name, quantity, measurementUnit, onRemove}: FoodItemsComponent) => {
    return (
        <li className="flex gap-4 items-center mb-2 justify-between">
            <Link to={AppRoute.ENTITY_LOGIN} className="text-secondary-color font-input w-7/12 bg-white rounded-lg p-4">
                <p>{name}</p>
            </Link>
            <Link to={AppRoute.ENTITY_LOGIN}
                  className="text-secondary-color font-input w-3/12 bg-white rounded-lg p-4">
                <p className="flex justify-center items-baseline gap-1">
                    {quantity}
                    <span className="text-primary-color font-label">{measurementUnit}</span>
                </p>
            </Link>
            <button onClick={onRemove}>
                <CrossIcon/>
            </button>
        </li>
    );
};

export default FoodItem;
