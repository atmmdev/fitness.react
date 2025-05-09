import React from "react";
// Components
import Button from "./Button";

export default function WeekSelector({
  selectedWeek,
  setSelectedWeek,
  setSelectedDay,
  weeks,
}) {
  return (
    <>
      {weeks.map((week, index) => (
        <Button
          key={index}
          onClick={() => {
            setSelectedWeek(week);
            setSelectedDay("");
          }}
          className={
            selectedWeek === week
              ? "btn btn-outline-light active m-2"
              : "btn btn-outline-light m-2"
          }
        >
          {week}
        </Button>
      ))}
    </>
  );
}
