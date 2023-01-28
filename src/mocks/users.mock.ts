import UserProps from "../types/UserProps";

const users: UserProps[] = [
    {
        recipientUserId: "680381d0-43d7-46c3-966a-eec00593f0e7",
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
        recipientUserId: "954f0389-2699-4963-b973-01fd11f16377",
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
        recipientUserId: "87a4a581-8fea-457c-ad98-6b8aae9a0d91",
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
        recipientUserId: "bbcd1a9e-da49-4bd6-8320-f7e2787f8438",
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
        recipientUserId: "5ac1a155-0809-4904-9255-b5660da83771"
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
