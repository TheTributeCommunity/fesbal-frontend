export const isLettersOnly = (text: string) => {
    const onlyLettersText = text.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ~^´` ]*$/ig) || [];
    return onlyLettersText.length == 1;
}