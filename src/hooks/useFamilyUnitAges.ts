import {useMemo} from 'react';
import getFamilyUnitAges from "../helpers/getFamilyUnitAges";
import {RecipientUserWithLastPickup} from "../models/recipient-user";
import FamilyUnitAgesProps from "../types/FamilyUnitAgesProps";

export function useFamilyUnitAges(user: RecipientUserWithLastPickup): { familyUnitAges: FamilyUnitAgesProps } {
    const familyUnitAges = useMemo(() => getFamilyUnitAges(user), [user]);

    return {familyUnitAges};
}
