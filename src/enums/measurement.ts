export enum MeasurementUnit {
    GRAMS = 'g',
    KILOGRAMS = 'kg',
    MILLILITERS = 'ml',
    CENTILITERS = 'cl',
    LITERS = 'l',
    UNITS = 'ud'
}

interface Measurement {
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
    MILLILITERS: {
        unit: MeasurementUnit.MILLILITERS,
        name: 'Mililitros'
    },
    CENTILITERS: {
        unit: MeasurementUnit.CENTILITERS,
        name: 'Centilitros'
    },
    LITERS: {
        unit: MeasurementUnit.LITERS,
        name: 'Litros'
    },
    UNITS: {
        unit: MeasurementUnit.UNITS,
        name: 'Unidades'
    }
};

