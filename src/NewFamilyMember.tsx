import { useState } from 'react';
import './NewFamilyMember.scss';

function handleChangeName(name: string) {
  const  emailValid = name ? true : false;
}

enum DocumentType {
  type,
  dni,
  nie,
  pasaporte
};

function NewFamilyMember() {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [documentType, setDocumentType] = useState<DocumentType>(DocumentType.type);
  const [documentText, setDocumentText] = useState<string>('');

  let disabled: boolean;

  disabled = (name === '') || (surname === '') || (date === '') || 
             (documentText === '') || (documentType === DocumentType.type);
  
  if (disabled) {

  } else {

  }

  return (
    <div className="NewFamilyMember">
      <form className="Form">
        <div className="Header">
          <h2 className="Title">Añadir familiar</h2>
          <button className="back-button">x</button>
        </div>
        <input type="text" id="Name" className="Input" placeholder="Nombre" 
          onChange={(event) => {
            setName(event.target.value)
          }}/>
        <input type="text" id="Surname" className="Input" placeholder="Apellidos" 
          onChange={(event) => {
            setSurname(event.target.value)
          }}/>
        <input type="date" id="BirthDate" className="Input" placeholder="Fecha de nacimiento" 
          onChange={(event) => {
            setDate(event.target.value)
          }}/>
        <div className="DocumentType">
          <select  
            onChange={(event) => {
              switch (event.target.value) {
                case 'dni':
                  setDocumentType(DocumentType.dni);
                  break;
                case 'nie':
                  setDocumentType(DocumentType.nie);
                  break;
                case 'pasaporte':
                  setDocumentType(DocumentType.pasaporte);
                  break;
              }
            }} 
            id="DocumentType" className="Input" 
          >
            <option value="Tipo" disabled selected hidden>Tipo</option>
            <option value="dni">DNI</option>
            <option value="nie">NIE</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
          <input type="DocumentText" className="Input" placeholder="Número de documento" 
            onChange={(event) => {
              setDocumentText(event.target.value)
            }}/>
        </div>
        <button className="AddRelative" disabled={disabled}
        style={{ backgroundColor: disabled ? "rgba(0, 0, 0, 0)" : "#0F95CE",
                 color: disabled ? "#0F95CE" : "white"}}>Añadir familiar</button>
      </form>
    </div>
  );
}

export default NewFamilyMember;