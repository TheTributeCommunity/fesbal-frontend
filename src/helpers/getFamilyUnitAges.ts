import { Recipient } from '../models/recipient-user'
import { Relative } from '../models/relative'
import FamilyUnitAges from '../types/FamilyUnitAges'
import { getAge } from './dateHelper'

const getFamilyAges = (recipient: Recipient, relatives: Relative[]): number[] => {
    const userAge = getAge(new Date(recipient.dateOfBirth))
    const relativesAges = relatives?.map(rel => getAge(new Date(rel.dateOfBirth))) ?? []
    return [userAge, ...relativesAges]
}

const getFamilyUnitAges = (recipient: Recipient, relatives: Relative[]): FamilyUnitAges => {
    const ages = getFamilyAges(recipient, relatives)
    const under3 = ages.filter(age => age < 3).length
    const between3and15 = ages.filter(age => age >= 3 && age <= 15).length
    const over15 = ages.filter(age => age >= 16).length
    return { under3, between3and15, over15 }
}

export default getFamilyUnitAges
