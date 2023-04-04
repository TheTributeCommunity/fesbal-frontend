const ENV_APP_PREFIX = 'VITE_'

export const APP_CONFIG = import.meta.env ?? {}

export function getEnvVar(name: string): string {
    const value = APP_CONFIG[ENV_APP_PREFIX + name]
    if (value === undefined) {
        return ''
    }
    return value
}