import React from "react";

export default function ExerciseCard({ exercise }) {
  return (
    <>
      <div className="col-6 col-md-3 my-2">
        <img className="img-fluid rounded" src={exercise.img} alt={exercise.exerciceName} />
        <div className="my-2">{exercise.exerciceName}</div>
      </div>
    </>
  );
}
