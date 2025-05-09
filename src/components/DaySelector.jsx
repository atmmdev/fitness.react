import React from "react";
// Components
import Button from "./Button";

export default function DaySelector({ selectedDay, setSelectedDay, days }) {
  return (
    <>
      {days.map((day, index) => (
        <Button
          key={index}
          onClick={() => setSelectedDay(day.day)}
          className={
            selectedDay === day.day
              ? "btn btn-outline-light active m-2"
              : "btn btn-outline-light m-2"
          }
        >
          {day.day}
        </Button>
      ))}
    </>
  );
}
