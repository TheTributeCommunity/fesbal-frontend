import AppNextButton from "../atom/AppNextButton";
import useUserBirthDateForm from "../../hooks/useUserBirthDateForm";
import { useTranslation } from "react-i18next";
import { namespaces } from "../../i18n/i18n.constants";

import { useState, useRef } from "react";
import { AppCalendar } from "../atom/AppCalendar";

const UserBirthDateForm = () => {
    const { userBirthDate, onBirthDateChange, onSubmit, validateBirthDate } =
        useUserBirthDateForm();
    const { t: translation } = useTranslation(
        namespaces.pages.registrationBirthDate
    );
    const [showCalendar, setShowCalendar] = useState(false);
    const calendarContainerRef = useRef<HTMLInputElement>(null);

    document.addEventListener("click", (e) => {
        if (!calendarContainerRef.current) return;

        if (e.target === calendarContainerRef.current) {
            e.stopPropagation();
            return;
        }

        if (calendarContainerRef.current?.contains(e.target as Node)) {
            setShowCalendar(true);
        } else {
            setShowCalendar(false);
        }
    });

    return (
        <form
            noValidate
            onSubmit={onSubmit}
            className="flex flex-col gap-4 h-full mt-6 self-center w-full md:w-1/2 lg:w-1/3 justify-between"
        >
            <div
                className="flex flex-col gap-4 mb-10"
                ref={calendarContainerRef}
            >
                <div className="flex flex-col gap-1.5 text-sm text-primary-color w-full">
                    <label
                        htmlFor="identityNumber"
                        className={userBirthDate ? "opacity-100" : "opacity-0"}
                    >
                        {translation("birthdate")}
                    </label>
                    <input
                        type="text"
                        placeholder={translation("birthdate") as string}
                        className="calendar-field text-secondary-color placeholder-primary-color rounded-md px-4 py-5 w-full"
                        value={userBirthDate?.toLocaleString()}
                        onChange={(e) => {
                            onBirthDateChange(new Date(e.target.value));
                            console.log(userBirthDate);
                        }}
                    />
                </div>

                <div
                    className={`${
                        showCalendar ? "flex" : "hidden"
                    } calendar-field flex-col gap-1.5 text-sm text-primary-color w-full`}
                >
                    <AppCalendar onChange={onBirthDateChange} />
                </div>
            </div>

            <AppNextButton
                disabled={!validateBirthDate()}
                title={translation("next")}
            />
        </form>
    );
};

export default UserBirthDateForm;
