import { FoodPicking } from '../../types/FoodPicking'

interface EntityUserSignatureFoodListProps {
    foodItems: FoodPicking[];
    translate: (key: string) => string;
}


const UserSignatureFoodList = ({ foodItems, translate }: EntityUserSignatureFoodListProps) => {
    return (
        <div className="flex flex-col gap-2 rounded-2xl bg-white py-6">
            <h3 className="mb-6 px-6 font-roboto-flex text-medium-title text-secondary-color">
                {translate('foodList')}
            </h3>
            <div className="flex flex-row items-center justify-between px-6 font-roboto-flex text-label text-primary-color">
                <label>{translate('foodType')}</label>
                <label>{translate('foodQuantity')}</label>
            </div>
            <ul className="flex flex-col gap-2">
                {foodItems.map((foodItem, index) => {
                    const bgColor = index % 2 === 0 ? 'bg-ghost-white' : ''
                    return (
                        <li
                            key={foodItem.food.name}
                            className={`flex flex-row justify-between items-center w-full h-16 px-6 font-roboto-flex text-input text-secondary-color ${bgColor}`}
                        >
                            <p>{foodItem.food.name}</p>
                            <p>{foodItem.quantity}<span className="text-small-label text-primary-color"> {foodItem.unit.abbreviation}</span></p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UserSignatureFoodList
