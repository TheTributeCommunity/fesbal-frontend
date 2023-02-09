import { PickupItem } from "./PickupItem";

export interface Pickup {
  id: number;
  date: string;
  title: string;
  pickupItems: PickupItem[];
}

export const getPickupDescription = (pickup: Pickup) => { 
  const itemsStr = pickup.pickupItems.map(item => `${item.quantity} ${item.unity.unity.toLowerCase()} de ${item.food.name}`).join(', ');
  
  return `${itemsStr}`;
}