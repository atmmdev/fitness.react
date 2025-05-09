import React, { useState } from "react";
// Components
import Header from "./components/Header";
import DaySelector from "./components/DaySelector";
import WeekSelector from "./components/WeekSelector";
import ExerciseCard from "./components/ExerciseCard";
// Hook
import { useWorkoutData } from "./hooks/useWorkoutData";

function App() {
  const [selectedWeek, setSelectedWeek] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const { weeks, days, exercises, group } = useWorkoutData(
    selectedWeek,
    selectedDay
  );

  return (
    <>
      <main className="container mt-5 text-center">
        <section className="my-4">
          <WeekSelector
            selectedWeek={selectedWeek}
            setSelectedWeek={setSelectedWeek}
            setSelectedDay={setSelectedDay}
            weeks={weeks}
          />
        </section>

        <Header groups={group} />

        <section className="my-4">
          <DaySelector
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            days={days}
          />
        </section>

        <section className="row">
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
