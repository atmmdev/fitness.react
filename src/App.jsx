import React, { useState } from "react";
// Components
import Header from "./components/Header";
import DaySelector from "./components/DaySelector";
import WeekSelector from "./components/WeekSelector";
import ExerciseCard from "./components/ExerciseCard";
// Exercises
import { WORKOUTS } from "./data/workouts";

function App() {
  const [selectedWeek, setSelectedWeek] = useState(WORKOUTS[0].week);
  const [selectedDay, setSelectedDay] = useState("Segunda");

  const selectedDayObject = WORKOUTS.find(
    (w) => w.week === selectedWeek
  )?.weekday.find((d) => d.day === selectedDay);

  return (
    <>
      <main className="container mt-5 text-center">
        <section className="my-4">
          <WeekSelector
            selectedWeek={selectedWeek}
            setSelectedWeek={setSelectedWeek}
            setSelectedDay={setSelectedDay}
          />
        </section>

        <Header groups={selectedDayObject?.group || "Selecione um dia"} />

        <section className="my-4">
          <DaySelector
            selectedWeek={selectedWeek}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        </section>

        <section className="row">
          {selectedDayObject?.exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
