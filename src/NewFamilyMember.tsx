import { useState } from "react";
import "./NewFamilyMember.scss";

enum DocumentType {
  Type = 0,
  IDCard = 1,
  FIN = 2,
  Passport = 3,
}

const documentValidation: {[key: string]: RegExp} = {
  [DocumentType.IDCard]: /\w{8}[A-Z]/,
  [DocumentType.FIN]: /[A-Z]\w{8}[A-Z]/,
  [DocumentType.Passport]: /[A-Z]{3}\w{6}/,
}

function NewFamilyMember() {
  interface FamilyMember {
    value: undefined | string | DocumentType;
    set: (value: any) => void | React.Dispatch<React.SetStateAction<any>>;
    isValid: (value: any) => boolean;
  }
  const newFamilyMember: { [key: string]: FamilyMember } = {
    name: {
      value: undefined,
      set: () => {},
      isValid: (value: string): boolean => {
        return value.length >= 2 && value.length <= 30 && !!value.match(/^([a-zA-ZÀ-ÿ\u00f1\u00d1]+ )*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/);
      }
    },
    surname: {
      value: undefined,
      set: () => {},
      isValid: (value: string): boolean => {
        return value.length >= 2 && value.length <= 30 && !!value.match(/^([a-zA-ZÀ-ÿ\u00f1\u00d1]+ )*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/);
      }
    },
    date: {
      value: undefined,
      set: () => {},
      isValid: (value: string): boolean => {
        const dateObject = new Date(value);
        return dateObject < new Date() && dateObject > new Date(1900, 0, 1);
      }
    },
    documentType: {
      value: undefined,
      set: () => {},
      isValid: (value: DocumentType): boolean => {
        return value !== DocumentType.Type;
      }
    },
    documentText: {
      value: undefined,
      set: () => {},
      isValid: (value: string): boolean => {
        return newFamilyMember.documentType.value != DocumentType.Type &&
          newFamilyMember.documentType.value != undefined &&
          !!documentValidation[newFamilyMember.documentType.value].test(value);
      }
    }
  };

  [newFamilyMember.name.value, newFamilyMember.name.set] = useState<string>('');
  [newFamilyMember.surname.value, newFamilyMember.surname.set] = useState<string>('');
  [newFamilyMember.date.value, newFamilyMember.date.set] = useState<string>('');
  [newFamilyMember.documentType.value, newFamilyMember.documentType.set] = useState<DocumentType | undefined>(undefined);
  [newFamilyMember.documentText.value, newFamilyMember.documentText.set] = useState<string>('');

  const handleDocumentTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    switch (event.target.value) {
      case "dni":
        newFamilyMember.documentType.set(DocumentType.IDCard);
        break;
      case "nie":
        newFamilyMember.documentType.set(DocumentType.FIN);
        break;
      case "pasaporte":
        newFamilyMember.documentType.set(DocumentType.Passport);
        break;
    }
  };

  const isDisabled = (): boolean => {
    return Object.keys(newFamilyMember).some((key) => {
      return !newFamilyMember[key].isValid(newFamilyMember[key].value);
    });
  };

  return (
    <div className="new-family-member">
      <div className="header">
        <h2 className="title">Añadir familiar</h2>
        <button className="back-button">x</button>
      </div>
      <div className="input-wrapper">
        <a
          className="input-name"
          style={{
            color:
              !newFamilyMember.name.value
                ? "rgba(15, 149, 206, 0)"
                : "rgba(15, 149, 206, 1)",
          }}
        >
          Nombre
        </a>
        <input
          type="text"
          id="name"
          className="input"
          placeholder="Nombre"
          onChange={(event) => {
            newFamilyMember.name.set(event.target.value);
          }}
        />
      </div>
      <div className="input-wrapper">
        <a
          className="input-name"
          style={{
            color:
              !newFamilyMember.surname.value
                ? "rgba(15, 149, 206, 0)"
                : "rgba(15, 149, 206, 1)",
          }}
        >
          Apellidos
        </a>
        <input
          type="text"
          id="surname"
          className="input"
          placeholder="Apellidos"
          onChange={(event) => {
            newFamilyMember.surname.set(event.target.value);
          }}
        />
      </div>
      <div className="input-wrapper">
        <a
          className="input-name"
          style={{
            color:
              !newFamilyMember.date.value
                ? "rgba(15, 149, 206, 0)"
                : "rgba(15, 149, 206, 1)",
          }}
        >
          Fecha de nacimiento
        </a>
        <input
          type="date"
          id="birth-date"
          className="input"
          placeholder="Fecha de nacimiento"
          onChange={(event) => {
            newFamilyMember.date.set(event.target.value);
          }}
        />
      </div>
      <div className="DocumentType">
        <div className="input-wrapper" id="type">
          <a
            className="input-name"
            style={{
              color:
                newFamilyMember.documentType.value === DocumentType.Type
                  ? "rgba(15, 149, 206, 0)"
                  : "rgba(15, 149, 206, 1)",
            }}
          >
            Tipo
          </a>
          <select
            onChange={handleDocumentTypeChange}
            id="document-type"
            className="input"
          >
            <option value="Tipo" disabled selected hidden>
              Tipo
            </option>
            <option value="dni">DNI</option>
            <option value="nie">NIE</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
        </div>
        <div className="input-wrapper" id="number">
          <a
            className="input-name"
            style={{
              color:
                !newFamilyMember.documentText.value
                  ? "rgba(15, 149, 206, 0)"
                  : "rgba(15, 149, 206, 1)",
            }}
          >
            Nº de documento
          </a>
          <input
            type="DocumentText"
            className="input"
            placeholder="Nº de documento"
            onChange={(event) => {
              newFamilyMember.documentText.set(event.target.value);
            }}
          />
        </div>
      </div>
      <form action="/">
        <button
          type="submit"
          className="add-relative"
          disabled={isDisabled()}
          style={{
            backgroundColor: isDisabled() ? "rgba(0, 0, 0, 0)" : "#0F95CE",
            color: isDisabled() ? "#0F95CE" : "white",
          }}
        >
          Añadir familiar
        </button>
      </form>
    </div>
  );
}

export default NewFamilyMember;
