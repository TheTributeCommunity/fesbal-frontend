export default interface ReferralNoFileUploadedProps {
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (ref: React.MutableRefObject<HTMLInputElement>) => void;
    inputRef: any;
    cameraRef: any;
    title: string;
    upload: string;
    camera: string;

}
