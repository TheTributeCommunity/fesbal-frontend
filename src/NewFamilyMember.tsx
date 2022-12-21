import { useState } from 'react';
import './NewFamilyMember.scss';

function handleChangeName(name: string) {
  const  emailValid = name ? true : false;
}

function NewFamilyMember() {
  return (
    <div className="NewFamilyMember">
      <form className="Form">
        <h2 className="Title">Añadir familiar</h2>
        <input type="text" className="Input" placeholder="Nombre" />
        <input type="text" className="Input" placeholder="Apellidos" />
        <input type="date" className="Input" placeholder="Fecha de nacimiento" />
        <div className="DocumentType">
          <select className="Input">
            <option value="Tipo" disabled selected hidden>Tipo</option>
            <option value="dni">DNI</option>
            <option value="nie">NIE</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
          <input type="text" className="Input" placeholder="Número de documento" />
        </div>
        <button className="AddRelative">Añadir familiar</button>
      </form>
    </div>
  );
}

export default NewFamilyMember;