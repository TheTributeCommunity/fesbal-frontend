import { useState } from 'react';
import './NewFamilyMember.scss';

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

  const disabled = (name === '') || (surname === '') || (date === '') || 
                   (documentText === '') || (documentType === DocumentType.type);

  return (
    <div className="NewFamilyMember">
        <div className="Header">
          <h2 className="Title">Añadir familiar</h2>
          <button className="back-button">x</button>
        </div>
        <div className="InputWrapper">
          <a className="InputName"
             style={{color: documentText === "" ? "rgba(15, 149, 206, 0)" : "rgba(15, 149, 206, 1)"}}>
            Nombre</a>
          <input type="text" id="Name" className="Input" placeholder="Nombre" 
            onChange={(event) => {
              setName(event.target.value)
            }}/>
        </div>
        <div className="InputWrapper">
          <a className="InputName"
             style={{color: documentText === "" ? "rgba(15, 149, 206, 0)" : "rgba(15, 149, 206, 1)"}}>
            Apellidos</a>
          <input type="text" id="Surname" className="Input" placeholder="Apellidos" 
            onChange={(event) => {
              setSurname(event.target.value)
            }}/>
        </div>
        <div className="InputWrapper">
          <a className="InputName"
             style={{color: documentText === "" ? "rgba(15, 149, 206, 0)" : "rgba(15, 149, 206, 1)"}}>
            Fecha de nacimiento</a>
          <input type="date" id="BirthDate" className="Input" placeholder="Fecha de nacimiento" 
            onChange={(event) => {
              setDate(event.target.value)
            }}/>
        </div>
        <div className="DocumentType">
          <div className="InputWrapper" id="Type">
            <a className="InputName"
               style={{color: documentText === "" ? "rgba(15, 149, 206, 0)" : "rgba(15, 149, 206, 1)"}}>
              Tipo</a>
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
              id="DocumentType" className="Input">
              <option value="Tipo" disabled selected hidden>Tipo</option>
              <option value="dni">DNI</option>
              <option value="nie">NIE</option>
              <option value="pasaporte">Pasaporte</option>
            </select>
          </div>
          <div className="InputWrapper" id="Number">
            <a className="InputName" 
               style={{color: documentText === "" ? "rgba(15, 149, 206, 0)" : "rgba(15, 149, 206, 1)"}}>
              Nº de documento</a>
            <input type="DocumentText" className="Input" placeholder="Nº de documento" 
              onChange={(event) => {
                setDocumentText(event.target.value)
              }}/>
          </div>
        </div>
        <button className="AddRelative" disabled={disabled}
        style={{ backgroundColor: disabled ? "rgba(0, 0, 0, 0)" : "#0F95CE",
                 color: disabled ? "#0F95CE" : "white"}}>Añadir familiar</button>
    </div>
  );
}

export default NewFamilyMember;