import React from "react";
// Components
import Button from "./Button";
// Exercices
import { WORKOUTS } from "../data/workouts";

export default function DaySelector({
  selectedWeek,
  selectedDay,
  setSelectedDay,
}) {
  const week = WORKOUTS.find((w) => w.week === selectedWeek);
  if (!week) return;

  return (
    <>
      {week.weekday.map((day, index) => (
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
