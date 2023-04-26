interface Notification {
    id: string
    title: string
    body: string
    dateCreated: string
    dateRead: string
    read: boolean
    isDeleted: boolean
}

export default Notification
