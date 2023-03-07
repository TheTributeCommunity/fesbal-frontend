import AppWrapper from '../components/molecules/AppWrapper'
import EntityFoodInput from '../components/atom/EntityFoodInput'
import EntityFoodNamesList from '../components/atom/EntityFoodNamesList'
import useEntityFoodSearch from '../hooks/useEntityFoodSearch'
import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'

const EntityFoodSearch = () => {
    const {inputValue, deleteInputValue, handleInputChange, handleOnClick, filteredFoodNames, foodToUpdate} = useEntityFoodSearch()
    const {t: translate} = useTranslation(namespaces.pages.entityFoodSearch)

    return (
        <AppWrapper title={translate('title')} showBurger={true} containerClassName="px-0"
            bgColor="bg-tertiary-color">
            <EntityFoodInput value={inputValue} placeholder={translate('placeholder') as string} onChange={handleInputChange}
                onClear={deleteInputValue}/>
            {inputValue.length > 0 && (
                <div className="w-full h-96 overflow-y-scroll">
                    <EntityFoodNamesList filteredFoodNames={filteredFoodNames} handleOnClick={handleOnClick}
                        foodToUpdate={foodToUpdate}/>
                </div>
            )}
        </AppWrapper>
    )
}

export default EntityFoodSearch
