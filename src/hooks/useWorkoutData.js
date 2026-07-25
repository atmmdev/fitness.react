import { useMemo } from "react";
import { WORKOUTS } from "../data/workouts";

const WEEKDAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

function parseGroup(group = "") {
  const [focus, muscles] = group.split(" — ").map((part) => part.trim());
  return {
    focus: focus || "",
    muscles: muscles || "",
  };
}

export function useWorkoutData(selectedWeek, selectedDay) {
  const weekData = useMemo(
    () => WORKOUTS.find((w) => w.week === selectedWeek),
    [selectedWeek]
  );

  const dayData = useMemo(
    () => weekData?.weekday.find((d) => d.day === selectedDay),
    [weekData, selectedDay]
  );

  const { focus, muscles } = parseGroup(dayData?.group);

  return {
    weeks: WORKOUTS.map((w) => w.week),
    days: WEEKDAYS.map((day) => ({ day })),
    exercises: dayData?.exercises ?? [],
    header: {
      week: selectedWeek,
      day: selectedDay || "",
      focus,
      muscles,
    },
  };
}
