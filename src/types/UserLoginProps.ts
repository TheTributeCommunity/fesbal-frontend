interface UserLoginProps {
    id: string;
    password: string;
    email?: UserEmail;

}

export type UserEmail = string;

export default UserLoginProps;
