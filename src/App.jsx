import React, { useState } from "react";
// Components
import Header from "./components/Header";
import DaySelector from "./components/DaySelector";
import ExerciseCard from "./components/ExerciseCard";
// Hook
import { useWorkoutData } from "./hooks/useWorkoutData";

function App() {
  const [selectedDay, setSelectedDay] = useState("");

  const { days, exercises, message } = useWorkoutData(selectedDay);

  return (
    <main className="container mt-5 text-center">
      <Header subtitle={message} />

      <section className="my-4">
        <DaySelector
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          days={days}
        />
      </section>

      <section className="row">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.exerciseName} exercise={exercise} />
        ))}
      </section>
    </main>
  );
}

export default App;
