import { Calendar } from "primereact/calendar";
import { useState, FC } from "react";

interface AppCalendarProps {
    onChange: (date: Date) => void;
}

export const AppCalendar: FC<AppCalendarProps> = ({
    onChange,
}: AppCalendarProps) => {
    return (
        <Calendar
            inline
            onChange={(e) => {
                const newDate = new Date(e.value?.toString() || "");
                onChange(newDate);
            }}
            className="rounded-lg border-0"
        ></Calendar>
    );
};
