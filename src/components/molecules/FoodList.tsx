import { useTranslation } from "react-i18next";
import { namespaces } from "../../i18n/i18n.constants";
import { PickupItem } from "../../types/PickupItem";

interface FoodListProps {
    items: PickupItem[];
}

export const FoodList = ({items}:FoodListProps) => {

    const {t: translation} =  useTranslation(namespaces.pages.pickupDetails);

    return (
        <div className="flex flex-col py-6 bg-white rounded-2xl gap-6 shadow-table">
            <p className="text-2xl px-6 font-roboto-flex">{translation("foodList")}</p>
            <table>
                <thead>
                    <tr className="">
                        <th className="px-6 text-xs text-primary-color text-left pb-2">{translation("foodType")}</th>
                        <th className="px-6 text-xs text-primary-color text-right pb-2">{translation("quantity")}</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, idx) => (
                        <tr className="odd:bg-[#F9FDFF]" key={idx}>
                            <td className="px-6 text-left py-7">{item.food.name}</td>
                            <td className="px-6 text-right py-7">
                                {item.quantity}
                                <span className="text-[0.625rem] text-primary-color pl-[0.125rem]">{item.unity.abbreviation}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};