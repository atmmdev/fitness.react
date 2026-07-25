import React from "react";
import Button from "./Button";

export default function WeekSelector({
  selectedWeek,
  setSelectedWeek,
  setSelectedDay,
  weeks,
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {weeks.map((week) => (
        <Button
          key={week}
          variant="week"
          active={selectedWeek === week}
          onClick={() => {
            setSelectedWeek(week);
            setSelectedDay((current) => current || "Segunda");
          }}
        >
          {week}
        </Button>
      ))}
    </div>
  );
}
