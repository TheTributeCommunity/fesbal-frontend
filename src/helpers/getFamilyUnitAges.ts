import { RecipientUser } from '../models/recipient-user'
import FamilyUnitAges from '../types/FamilyUnitAges'

const getAge = (dateOfBirth: string): number => {
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    return today.getFullYear() - birthDate.getFullYear()
}

const getFamilyAges = (user: RecipientUser): number[] => {
    const userAge = getAge(user.dateOfBirth)
    const relativesAges = user.relatives?.map(rel => getAge(rel.dateOfBirth)) ?? []
    return [userAge, ...relativesAges]
}

const getFamilyUnitAges = (user: RecipientUser): FamilyUnitAges => {
    const ages = getFamilyAges(user)
    const under3 = ages.filter(age => age < 3).length
    const between3and15 = ages.filter(age => age >= 3 && age <= 15).length
    const over16 = ages.filter(age => age >= 16).length
    return { under3: under3, between3and15, over15: over16 }
}

export default getFamilyUnitAges
