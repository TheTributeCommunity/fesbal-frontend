import { PickupItem } from "./PickupItem";

export interface Pickup {
  id: number;
  entityName: string;
  date: string;
  title: string;
  pickupItems: PickupItem[];
}

export const getPickupDescription = (pickup: Pickup) => { 
  const itemsStr = pickup.pickupItems.map(
    item => `${item.quantity} ${item.unit.unit.toLowerCase()} de ${item.food.name}`)
    .join(', ');
  return itemsStr;
}