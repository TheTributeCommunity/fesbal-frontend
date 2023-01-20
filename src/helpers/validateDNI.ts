const validateDNI = (dni: string): boolean => hasValidLength(dni) && hasValidLetter(dni);

const hasValidLength = (dni: string): boolean => dni.length === 9;
const hasValidLetter = (dni: string): boolean => {
    const dniNumber = dni.slice(0, 8);
    const dniLetter = dni.slice(8, 9);
    const dniNumberInt = Number(dniNumber);
    const letter = dniLetter.toUpperCase();
    const letterIndex = dniNumberInt % 23;
    const letterArray = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letterExpected = letterArray.charAt(letterIndex);
    return letter === letterExpected;
}
export default validateDNI;
