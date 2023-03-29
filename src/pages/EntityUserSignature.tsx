import React from 'react'
import AppWrapper from '../components/molecules/AppWrapper'
import getDefaultFoodItems from '../helpers/getDefaultFoodItems'
import getFamilyUnitAges from '../helpers/getFamilyUnitAges'
import useFoodItems from '../hooks/useFoodItems'
import recipientUserMock from '../mocks/recipientUser.mock'
import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import EntityUserSignatureHeader from '../components/atom/EntityUserSignatureHeader'
import EntityUserSignatureFoodList from '../components/atom/EntityUserSignatureFoodList'
import EntityUserSignatureFooter from '../components/molecules/EntityUserSignatureFooter'

const recipientUser = recipientUserMock
const familyUnitAges = getFamilyUnitAges(recipientUser)
const defaultFoodItems = getDefaultFoodItems(familyUnitAges)

const EntityUserSignature = () => {
    const {foodItems} = useFoodItems(defaultFoodItems)
    const {t: translate} = useTranslation(namespaces.pages.entityUserSignature)

    return (
        <AppWrapper title={translate('title')} showBackButton={false} containerClassName="px-0">
            <div className="h-full px-8">
                <EntityUserSignatureHeader
                    firstName={recipientUser.firstName}
                    lastName={recipientUser.lastName}
                    identityDocumentNumber={recipientUser.identityDocumentNumber}
                />
                <EntityUserSignatureFoodList foodItems={foodItems} translate={translate}/>
            </div>
            <EntityUserSignatureFooter translate={translate}/>
        </AppWrapper>
    )
}

export default EntityUserSignature
