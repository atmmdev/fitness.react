import React from "react";

export default function ExerciseCard({ exercise }) {
  return (
    <div className="col-6 col-md-3 my-2 text-center">
      <img
        className="img-fluid rounded"
        src={exercise.img}
        alt={exercise.exerciseName}
      />
      <small className="my-2 text-uppercase d-block">
        {exercise.exerciseName}
      </small>
    </div>
  );
}
