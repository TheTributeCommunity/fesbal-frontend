import { useState } from 'react';
import './NewFamilyMember.scss';

function handleChangeName(name: string) {
  const  emailValid = name ? true : false;
}

// function ControlButton(object: props) {
//   const nameButton = document.getElementById('checkout-button');
//   const surnameButton = document.getElementById('checkout-button');
//   const button = document.getElementById('checkout-button');
//   const button = document.getElementById('checkout-button');
// }
enum DocumentType {
  dni,
  nie,
  pasaporte
};

function NewFamilyMember() {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [documentType, setDocumentType] = useState<DocumentType>();
  const [documentText, setDocumentText] = useState<string>('');

  let disabled: boolean;
  if ((name !== '') && (surname !== '') && (date !== '') && (documentText !== '') &&
      (documentType !== undefined)) {
    disabled = false;
  } else {
    disabled = true;
  }
  
  return (
    <div className="NewFamilyMember">
      <form className="Form">
        <div className="Header">
          <h2 className="Title">Añadir familiar</h2>
          <button className="back-button">x</button>
        </div>
        <input type="text" id="Name" className="Input" placeholder="Nombre" />
        <input type="text" id="Surname" className="Input" placeholder="Apellidos" />
        <input type="date" id="BirthDate" className="Input" placeholder="Fecha de nacimiento" />
        <div className="DocumentType">
          <select id="DocumentType" className="Input">
            <option value="Tipo" disabled selected hidden>Tipo</option>
            <option value="dni">DNI</option>
            <option value="nie">NIE</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
          <input type="DocumentText" className="Input" placeholder="Número de documento" />
        </div>
        <button className="AddRelative" disabled={disabled}>Añadir familiar</button>
      </form>
    </div>
  );
}

export default NewFamilyMember;