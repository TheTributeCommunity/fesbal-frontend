export default interface ReferralNoFileUploadedProps {
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleClick: (ref: React.MutableRefObject<HTMLInputElement>) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inputRef: any
    upload: string

}
