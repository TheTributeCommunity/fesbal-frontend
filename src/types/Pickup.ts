import { PickupItem } from "./PickupItem";

export interface Pickup {
  id: number;
  date: string;
  title: string;
  description: string;
  pickupItems?: PickupItem[];
}
