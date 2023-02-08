export default (email: string) => {
    const MAX_EMAIL_LENGTH = 320;
    const VALID_EMAIL_CHARS = /^[^@\s.](?:\.?[^@\s])*$/

    const atSignIndex = email.indexOf('@');
    const localPart = email.slice(0, atSignIndex);
    const domainPart = email.slice(atSignIndex + 1);

    const atSignValid = atSignIndex !== -1 && atSignIndex !== 0 && atSignIndex !== email.length - 1;
    const localPartValid = VALID_EMAIL_CHARS.test(localPart) && localPart.length > 0 && !localPart.endsWith('.');
    const domainPartValid = VALID_EMAIL_CHARS.test(domainPart) && domainPart.length > 0 && !domainPart.endsWith('.') && domainPart.includes('.');

    return (email.length <= MAX_EMAIL_LENGTH) && atSignValid && localPartValid && domainPartValid;
};
