import AppWrapper from '../components/molecules/AppWrapper'
import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import useEntityQuantityMeasurement from '../hooks/useEntityQuantityMeasurement'
import AppNextButton from '../components/atom/AppNextButton'
import EntityQuantityInput from '../components/atom/EntityQuantityInput'
import { measurements, MeasurementUnit } from '../types/MeasurementUnit'

const EntityQuantityMeasurement = () => {
    const {
        inputQuantity,
        handleQuantityChange,
        inputMeasurement,
        updateFoodQuantityMeasurement,
        handleMeasurementUnitChange,
        deleteQuantityInput
    } = useEntityQuantityMeasurement()
    const {t: translate} = useTranslation(namespaces.pages.entityQuantityMeasurement)
    const measurementsList: MeasurementUnit[] = Object.values(measurements)
    const activeMeasurementUnit = inputMeasurement

    return (
        <AppWrapper title={translate('title')} showBurger={true} containerClassName="px-0"
            bgColor="bg-tertiary-color">
            <div className="flex flex-col justify-between min-h-full">
                <div>
                    <EntityQuantityInput quantity={inputQuantity} measurementUnit={inputMeasurement.name} onChange={handleQuantityChange} onClear={deleteQuantityInput}/>
                    <ul className="flex flex-wrap gap-4 px-8 py-4">
                        {measurementsList.map((measurement: MeasurementUnit) => (
                            <li key={measurement.name}>
                                <button
                                    className={`flex bg-white px-4 py-5 gap-2 rounded-xl font-roboto-flex text-input text-secondary-color ${activeMeasurementUnit.name === measurement.name ? 'border border-primary-color' : ''}`}
                                    onClick={() => handleMeasurementUnitChange(measurement)}
                                >
                                    <span>{measurement.name}</span>
                                    <span>({measurement.abbreviation})</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=" px-8 py-4">
                    <AppNextButton title={translate('addQuantity')} onClick={updateFoodQuantityMeasurement}/>
                </div>
            </div>
        </AppWrapper>
    )
}

export default EntityQuantityMeasurement
