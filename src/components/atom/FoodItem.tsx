import CrossIcon from '../icons/CloseIcon'
import FoodItemProps from '../../types/FoodItemProps'
import {Link} from 'react-router-dom'
import {AppRoute} from '../../enums/app-route'

interface FoodItemsComponent extends FoodItemProps {
    onRemove: () => void;
    onFoodClick: () => void;
}

const FoodItem = ({name, quantity, measurementUnit, onRemove, onFoodClick}: FoodItemsComponent) => {
    return (
        <li className="flex gap-4 items-center mb-2 justify-between">
            <div onClick={onFoodClick}
                className="text-secondary-color font-input w-7/12 bg-white rounded-lg p-4 cursor-pointer">
                <p>{name}</p>
            </div>
            <Link to={AppRoute.ENTITY_FOOD_SEARCH}
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
    )
}

export default FoodItem
