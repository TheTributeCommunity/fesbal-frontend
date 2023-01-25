import {useTranslation} from "react-i18next";
import AppFormInput from "../atom/AppFormInput";
import useRegisterIDForm from "../../hooks/useRegisterIDForm";
import useRegisterNewFamilyMember from "../../hooks/useRegisterNewFamilyMember";
import UserIDSelect from "../atom/RegisterIDSelect";
import { namespaces } from "../../i18n/i18n.constants";
import AppNextButton from "../atom/AppNextButton";

const selectOptions: string[] = ['DNI', 'NIE', 'Pasaporte'];

export default () => {
  const { selectedOption, userID, onSubmit, validateUserID, onUserIDChange, onSelectedOptionChange } = useRegisterIDForm();
  const { newFamilyMember, isDisabled } = useRegisterNewFamilyMember();
  const { t: translate } = useTranslation(namespaces.pages.registerID);
  return (
    <form noValidate onSubmit={onSubmit} className="mt-6 flex w-full flex-col justify-between gap-4 self-center">
      <AppFormInput
        name="name"
        value={newFamilyMember.name.value as string}
        label="Nombre"
        placeholder="Nombre"
        onChange={(event) => {
          newFamilyMember.name.set(event.target.value);
        }}
      />
      <AppFormInput
        name="surname"
        value={newFamilyMember.surname.value as string}
        label="Apellidos"
        placeholder="Apellidos"
        onChange={(event) => {
          newFamilyMember.surname.set(event.target.value);
        }}
      />
      <AppFormInput
        name="date"
        value={newFamilyMember.date.value as string}
        label="Fecha de nacimiento"
        placeholder="Fecha de nacimiento"
        onChange={(event) => {
          newFamilyMember.date.set(event.target.value);
        }}
        type="date"
      />
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-1.5 text-primary-color">
          <label htmlFor="identityType"
            className={`app-label ${selectedOption ? '' : "app-label--hidden"}`}>{translate("type")}</label>
          <UserIDSelect options={selectOptions} value={selectedOption} onChange={onSelectedOptionChange} />
        </div>
        <div className="flex flex-col gap-1.5 text-primary-color w-full">
          <label htmlFor="identityNumber" className={`app-label ${userID ? '' : "app-label--hidden"}`}>{translate("id")}</label>
          <input type="text" placeholder={translate("id") as string}
            className="app-input"
            value={userID} onChange={(e) => onUserIDChange(e.target.value)} />
        </div>
      </div>
      <AppNextButton
        disabled={!validateUserID() || isDisabled()}
        title="Añadir familiar"
      />
    </form>
  );
};
