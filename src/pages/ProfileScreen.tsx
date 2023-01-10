import AppBackButton from "../components/atom/AppBackButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import AppWatchButton from "../components/atom/AppWatchButton";
import AppLocationButton from "../components/atom/AppLocationButton";
import AppBellButton from "../components/atom/AppBellButton";
import PersonalDataItem from "../components/atom/PersonalDataItem";
import usersMock from "../mocks/users.mock";
import users from "../mocks/users.mock";
import PersonalDataItemProps from "../types/PersonalDataItemProps";
import FamilyMembersIcon from "../components/icons/FamilyMembersIcon";

const user = usersMock[0];
const getPersonalData = (): PersonalDataItemProps[] => {
    return [
        {
            title: "Nombre y apellidos",
            value: user.fullName,
        },
        {
            title: "Documento de identidad",
            value: user.id
        },
        {
            title: "Fecha de nacimiento",
            value: user.birthDate,
        },
        {
            title: "Correo electrónico",
            value: user.email,
            hasEditButton: true,
            goTo: `/profile/edit-email`,
        },
        {
            title: "Teléfono",
            value: user.phone,
        },
        {
            title: "Contraseña",
            value: "********",
            hasEditButton: true,
            goTo: `/profile/edit-prev-password`,
        }
    ];
}
const getFamilyMembers = (id: string) => {
    const user = users.find(user => user.id === id);
    return user?.familyMembers;
}

const ProfileScreen = () => {
    return (
        <div className="h-screen flex flex-col page-bg text-secondary-color p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <div className="flex flex-row justify-between items-center text-primary-color text-base font-bold">
                    <AppBackButton goTo="/login"/>
                    <h1>Datos personales</h1>
                    <AppBurgerMenuButton/>
                </div>
                <ul>
                    {getPersonalData().map((personalData, index) => (
                        <PersonalDataItem key={index} personalData={personalData} index={index}/>
                    ))}
                </ul>
                <div className="flex flex-row gap-2 items-center font-bold pl-2">
                    <FamilyMembersIcon/>
                    Miembros de la unidad familiar
                </div>
                <ul className="flex flex-col gap-2 pl-2 bg-white rounded-md p-4">
                    {getFamilyMembers(user.id) ? getFamilyMembers(user.id)?.map((familyMember, index) => (
                        <li key={index}>{familyMember.FullName}</li>
                    )) : <li>No hay miembros de la unidad familiar</li>}
                </ul>
            </div>
            <nav
                className="flex flex-row justify-between items-center self-center w-full md:w-1/2 lg:w-1/3 bg-white rounded-xl p-4 sticky bottom-0">
                <AppWatchButton/>
                <AppLocationButton/>
                <AppBellButton/>
            </nav>
        </div>
    );
}

export default ProfileScreen;
