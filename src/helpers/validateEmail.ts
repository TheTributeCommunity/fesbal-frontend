export default (email: string) => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}
