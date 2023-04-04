export const isLettersOnly = (text: string) => {
    const onlyLettersText = text.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ~^´` ]*$/ig) || []
    return onlyLettersText.length == 1
}

export const dateToDdMmYyyy = (date: Date) => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
}

export const dateToHoursMinutes = (date: Date) => {
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    
    return `${hours}:${minutes} ${ampm}`
}