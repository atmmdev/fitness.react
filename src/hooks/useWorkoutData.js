import { useMemo } from "react";
import { WORKOUTS } from "../data/workouts";

export function useWorkoutData(selectedWeek, selectedDay) {
  const weekData = useMemo(
    () => WORKOUTS.find((w) => w.week === selectedWeek),
    [selectedWeek]
  );

  const dayData = useMemo(
    () => weekData?.weekday.find((d) => d.day === selectedDay),
    [weekData, selectedDay]
  );

  return {
    weeks: WORKOUTS.map((w) => w.week) || [],
    days: weekData?.weekday || [],
    exercises: dayData?.exercises || [],
    group: dayData?.group || "Selecione um dia",
  };
}
