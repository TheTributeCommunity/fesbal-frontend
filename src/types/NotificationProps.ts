interface Notification {
    id: string;
    title: string;
    message: string;
    date: string;

    hasBeenRead?: boolean;
}

export default Notification;
