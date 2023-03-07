export enum MeasurementUnit {
    GRAMS = 'g',
    KILOGRAMS = 'kg',
    MILLILITERS = 'ml',
    CENTILITERS = 'cl',
    LITERS = 'l',
    UNITS = 'ud'
}

export interface Measurement {
    unit: MeasurementUnit;
    name: string;
}

export const measurements: { [key: string]: Measurement } = {
    GRAMS: {
        unit: MeasurementUnit.GRAMS,
        name: 'Gramos'
    },
    KILOGRAMS: {
        unit: MeasurementUnit.KILOGRAMS,
        name: 'Kilogramos'
    },
    LITERS: {
        unit: MeasurementUnit.LITERS,
        name: 'Litros'
    },
    CENTILITERS: {
        unit: MeasurementUnit.CENTILITERS,
        name: 'Centilitros'
    },
    MILLILITERS: {
        unit: MeasurementUnit.MILLILITERS,
        name: 'Mililitros'
    },
    UNITS: {
        unit: MeasurementUnit.UNITS,
        name: 'Unidades'
    }
}
