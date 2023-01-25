import {useState} from "react";

export default () => {

  interface FamilyMember {
    value: undefined | string | DocumentType;
    set: (value: any) => void | React.Dispatch<React.SetStateAction<any>>;
    isValid: (value: any) => boolean;
  }

  const nameAndSurnameRegex = /^([a-zA-ZÀ-ÿ\u00f1\u00d1]+ )*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/

  const newFamilyMember: { [key: string]: FamilyMember } = {
    name: {
      value: undefined,
      set: () => { },
      isValid: (value: string): boolean => {
        return value.length >= 2 && value.length <= 30 && !!value.match(nameAndSurnameRegex);
      }
    },
    surname: {
      value: undefined,
      set: () => { },
      isValid: (value: string): boolean => {
        return value.length >= 2 && value.length <= 30 && !!value.match(nameAndSurnameRegex);
      }
    },
    date: {
      value: undefined,
      set: () => { },
      isValid: (value: string): boolean => {
        const dateObject = new Date(value);
        return dateObject < new Date() && dateObject > new Date(1900, 0, 1);
      }
    },
  };

  [newFamilyMember.name.value, newFamilyMember.name.set] = useState<string>('');
  [newFamilyMember.surname.value, newFamilyMember.surname.set] = useState<string>('');
  [newFamilyMember.date.value, newFamilyMember.date.set] = useState<string>('');

  const isDisabled = (): boolean => {
    return Object.keys(newFamilyMember).some((key) => {
      return !newFamilyMember[key].isValid(newFamilyMember[key].value);
    });
  };
  
  return {
    newFamilyMember,
    isDisabled,
  }
}