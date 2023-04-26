import { InflatedPickup } from '../types/Pickup'

export const sortBySignDateDescending = (arr: InflatedPickup[]): InflatedPickup[] =>
    arr.sort((a, b) => b.signDate.getTime() - a.signDate.getTime())