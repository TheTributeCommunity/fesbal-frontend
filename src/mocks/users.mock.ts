import UserProps from "../types/UserProps";

const users: UserProps[] = [
    {
        id: "12345678A",
        password: "password1",
        email: "test1@gmail.com",
        fullName: "Test User 1",
        birthDate: "01/01/2000",
        phone: "666666666",
        familyMembers: [
            {
                fullName: "Test User 2",
                id: "12345678B",
                birthDate: "01/01/2001"
            },
            {
                fullName: "Test User 3",
                id: "X2345678X",
                birthDate: "01/01/2000"
            }
        ]

    },
    {
        id: "12345678B",
        password: "password2",
        email: "test2@gmail.com",
        fullName: "Test User 2",
        birthDate: "01/01/2000",
        phone: "666666666",
        familyMembers: [
            {
                fullName: "Test User 1",
                id: "12345678A",
                birthDate: "01/01/2000"
            },
            {
                fullName: "Test User 3",
                id: "X2345678X",
                birthDate: "01/01/2000"
            },
        ]
    },
    {
        id: "X2345678X",
        password: "password3",
        email: "test3@gmail.com",
        fullName: "Test User 3",
        birthDate: "01/01/2000",
        phone: "666666666",
        familyMembers: [
            {
                fullName: "Test User 1",
                id: "12345678A",
                birthDate: "01/01/2000"
            },
            {
                fullName: "Test User 2",
                id: "12345678B",
                birthDate: "01/01/2000"
            }
        ]
    },
    {
        id: "Z2345678Z",
        password: "password4",
        email: "test4@gmail.com",
        fullName: "Test User 4",
        birthDate: "01/01/2000",
        phone: "666666666",
        familyMembers: [
            {
                fullName: "Test User 5",
                id: "Z2345678Z",
                birthDate: "01/01/2000"
            }
        ]
    },
    {
        id: "12345678L",
        password: "password5",
        email: "test5@gmail.com",
        fullName: "Test User 5",
        birthDate: "01/01/2000",
        phone: "666666666",
        familyMembers: [
            {
                fullName: "Test User 4",
                id: "Z2345678Z",
                birthDate: "01/01/2000"
            }
        ]
    }
];

export default users;
