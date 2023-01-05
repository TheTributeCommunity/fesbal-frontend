const validateNIE = (nie: string): boolean => hasValidLength(nie) && hasValidChar(nie) && hasValidLetter(nie);

interface controlDigit {
    [key: string]: string;
}

const controlDigit: controlDigit = {
    "X": "0",
    "Y": "1",
    "Z": "2"
}
const hasValidLength = (nie: string): boolean => nie.length === 9;
const hasValidChar = (nie: string): boolean => "XYZ".includes(nie.charAt(0));
const getControlDigit = (nie: string): string => controlDigit[nie.charAt(0)];
const hasValidLetter = (nie: string): boolean => {
    const nieControlDigit = getControlDigit(nie);
    const nieNumber = nie.slice(1, 8);
    const nieLetter = nie.slice(8, 9);
    const nieNumberInt = Number(nieControlDigit + nieNumber);
    const letter = nieLetter.toUpperCase();
    const letterIndex = nieNumberInt % 23;
    const letterArray = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letterExpected = letterArray.charAt(letterIndex);
    return letter === letterExpected;
}

export default validateNIE;
