import { Pickup } from '../types/Pickup'

export const sortBySignDateDescending = (arr: Pickup[]): Pickup[] =>
    arr.sort((a, b) => b.signDate - a.signDate)