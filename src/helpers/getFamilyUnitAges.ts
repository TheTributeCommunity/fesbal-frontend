import { Recipient } from '../models/recipient-user'
import FamilyUnitAges from '../types/FamilyUnitAges'
import { backendDateToDate, getAge } from './dateHelper'

const getFamilyAges = (user: Recipient): number[] => {
    const userAge = getAge(backendDateToDate(user.dateOfBirth))
    const relativesAges = user.relatives?.map(rel => getAge(backendDateToDate(rel.dateOfBirth))) ?? []
    return [userAge, ...relativesAges]
}

const getFamilyUnitAges = (user: Recipient): FamilyUnitAges => {
    const ages = getFamilyAges(user)
    const under3 = ages.filter(age => age < 3).length
    const between3and15 = ages.filter(age => age >= 3 && age <= 15).length
    const over15 = ages.filter(age => age >= 16).length
    return { under3, between3and15, over15 }
}

export default getFamilyUnitAges
