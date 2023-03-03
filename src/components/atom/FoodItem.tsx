import CrossIcon from '../icons/CloseIcon'
import FoodItemProps from '../../types/FoodItemProps'

interface FoodItemsComponent extends FoodItemProps {
    onRemove: () => void;
    onFoodClick: () => void;
    onQuantityClick: () => void;
}

const FoodItem = ({name, quantity, measurementUnit, onRemove, onFoodClick, onQuantityClick}: FoodItemsComponent) => {
    return (
        <li className="flex gap-4 items-center mb-2 justify-between">
            <div onClick={onFoodClick}
                className="text-secondary-color font-input w-7/12 bg-white rounded-lg p-4 cursor-pointer">
                <p>{name}</p>
            </div>
            <div onClick={onQuantityClick}
                className="text-secondary-color font-input w-3/12 bg-white rounded-lg p-4 cursor-pointer">
                <p className="flex justify-center items-baseline gap-1">
                    {quantity}
                    <span className="text-primary-color font-label">{measurementUnit}</span>
                </p>
            </div>
            <button onClick={onRemove}>
                <CrossIcon/>
            </button>
        </li>
    )
}

export default FoodItem
