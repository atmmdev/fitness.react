import React from "react";

export default function ExerciseCard({ exercise }) {
  return (
    <article className="flex flex-col items-center text-center">
      <img
        className="w-full rounded-xl object-cover aspect-square bg-surface-soft"
        src={exercise.img}
        alt={exercise.exerciseName}
        loading="lazy"
      />
      <p className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-ink-muted leading-snug">
        {exercise.exerciseName}
      </p>
    </article>
  );
}
