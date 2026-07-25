import React from "react";
import Button from "./Button";

export default function DaySelector({ selectedDay, setSelectedDay, days }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {days.map((day) => (
        <Button
          key={day.day}
          variant="week"
          active={selectedDay === day.day}
          onClick={() => setSelectedDay(day.day)}
        >
          {day.day}
        </Button>
      ))}
    </div>
  );
}
