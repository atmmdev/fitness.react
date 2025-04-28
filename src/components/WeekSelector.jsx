import React from "react";
// Components
import Button from "./Button";
// Exercices
import { WORKOUTS } from "../data/workouts";

export default function WeekSelector({
  selectedWeek,
  setSelectedWeek,
  setSelectedDay,
}) {
  return (
    <>
      {WORKOUTS.map((w, index) => (
        <Button
          key={index}
          onClick={() => {
            setSelectedWeek(w.week);
            setSelectedDay("");
          }}
          className={
            selectedWeek === w.week
              ? "btn btn-outline-light active m-2"
              : "btn btn-outline-light m-2"
          }
        >
          {w.week}
        </Button>
      ))}
    </>
  );
}
