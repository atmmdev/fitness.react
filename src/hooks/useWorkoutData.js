import { useMemo } from "react";
import { WORKOUT_DAYS } from "../data/workouts";

const WEEKDAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

export function useWorkoutData(selectedDay) {
  const dayData = useMemo(
    () => WORKOUT_DAYS.find((d) => d.day === selectedDay),
    [selectedDay]
  );

  return {
    days: WEEKDAYS.map((day) => ({ day })),
    exercises: dayData?.exercises ?? [],
    message: selectedDay ? `Treino — ${selectedDay}` : "Selecione um dia",
  };
}
