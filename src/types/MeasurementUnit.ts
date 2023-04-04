export interface MeasurementUnit {
    id: number
    name: string
    abbreviation: string
}

export const measurements: { [key: string]: MeasurementUnit } = {
    grams: {
        id: 0,
        abbreviation: 'g',
        name: 'Gramos'
    },
    kilograms: {
        id: 1,
        abbreviation: 'kg',
        name: 'Kilogramos'
    },
    liters: {
        id: 2,
        abbreviation: 'l',
        name: 'Litros'
    },
    centileters: {
        id: 3,
        abbreviation: 'cl',
        name: 'Centilitros'
    },
    milliliters: {
        id: 4,
        abbreviation: 'ml',
        name: 'Mililitros'
    },
    units: {
        id: 5,
        abbreviation: 'ud',
        name: 'Unidades'
    }
}