import AppWrapper from "../components/molecules/AppWrapper";
import {Link} from "react-router-dom";
import PlusAddIcon from "../components/icons/PlusAddIcon";
import AppNextButton from "../components/atom/AppNextButton";
import {useFamilyUnitAges} from "../hooks/useFamilyUnitAges";
import recipientUserMock from "../mocks/recipientUser.mock";
import AgeGroupItem from "../components/atom/AgeGroupItem";
import FoodItem from "../components/atom/FoodItem";
import useFoodItems from "../hooks/useFoodItems";
import {AppRoute} from "../enums/app-route";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";

const recipientUser = recipientUserMock;

const EntityUserScanned = () => {
    const {familyUnitAges} = useFamilyUnitAges(recipientUser);
    const {foodItems, removeFoodItem, addFoodItem} = useFoodItems(familyUnitAges);
    const {t: translate} = useTranslation(namespaces.pages.entityUserScanned);

    return (
        <AppWrapper title={translate('title')}>
            <div className="flex flex-col bg-white px-8 py-4 gap-2">
                <h1 className="font-big-title text-secondary-color">{recipientUser.firstName} {recipientUser.lastName}</h1>
                <h2 className="font-medium-title text-primary-color">{recipientUser.identityDocumentNumber}</h2>
            </div>
            <div className="flex flex-col bg-ghost-white px-8 py-4 gap-2">
                <h3 className="font-label text-primary-color">{translate('familyUnitAges')}</h3>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    <AgeGroupItem description={translate('under3')} count={familyUnitAges.under3}/>
                    <AgeGroupItem description={translate('between3and15')} count={familyUnitAges.between3and15}/>
                    <AgeGroupItem description={translate('over16')} count={familyUnitAges.over16}/>
                </ul>
            </div>
            <div className="flex flex-col px-8 py-4 gap-2">
                <h3 className="font-label text-primary-color">{translate('lastPickup')}</h3>
                <p className="text-secondary-color font-input">{recipientUser.lastPickupDate}</p>
            </div>
            <div className="flex flex-col px-8 py-4 gap-6">
                <h2 className="font-mini-title text-secondary-color">{translate('foodList')}</h2>
                <ul className="flex flex-col gap-2">
                    {foodItems.length > 0 && (
                        <li className="flex gap-4 w-full justify-between">
                            <p className="text-primary-color font-label w-7/12">{translate('foodType')}</p>
                            <p className="text-primary-color font-label w-4/12">{translate('quantity')}</p>
                        </li>
                    )}
                    {foodItems.map((food) => (
                        <FoodItem
                            key={food.name}
                            name={food.name}
                            quantity={food.quantity}
                            measurementUnit={food.measurementUnit}
                            onRemove={() => removeFoodItem(food)}
                        />
                    ))}
                    <li>
                        <Link to={AppRoute.ENTITY_LOGIN}>
                            <div
                                className="bg-tertiary-color rounded-lg flex justify-center items-center py-4 gap-2 border border-white">
                                <PlusAddIcon/>
                                <p className="text-primary-color font-button">{translate('addFood')}</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex px-8 py-4">
                <AppNextButton title={translate('sendFoodList')}/>
            </div>
        </AppWrapper>
    );
};

export default EntityUserScanned;
