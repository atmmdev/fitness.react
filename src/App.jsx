import React, { useState } from "react";
// Components
import Header from "./components/Header";
import WeekSelector from "./components/WeekSelector";
import DaySelector from "./components/DaySelector";
import ExerciseCard from "./components/ExerciseCard";
// Hook
import { useWorkoutData } from "./hooks/useWorkoutData";
import { WORKOUTS } from "./data/workouts";

function App() {
  const [selectedWeek, setSelectedWeek] = useState(WORKOUTS[0]?.week ?? "");
  const [selectedDay, setSelectedDay] = useState("Segunda");

  const { weeks, days, exercises, header } = useWorkoutData(
    selectedWeek,
    selectedDay
  );

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 text-center">
      <Header
        week={header.week}
        day={header.day}
        focus={header.focus}
        muscles={header.muscles}
      >
        <WeekSelector
          selectedWeek={selectedWeek}
          setSelectedWeek={setSelectedWeek}
          setSelectedDay={setSelectedDay}
          weeks={weeks}
        />
      </Header>

      {selectedWeek && (
        <section className="mt-6 sm:mt-8">
          <DaySelector
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            days={days}
          />
        </section>
      )}

      <section className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.exerciseName} exercise={exercise} />
        ))}
      </section>
    </main>
  );
}

export default App;
