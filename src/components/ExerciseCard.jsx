import React from "react";

export default function ExerciseCard({ exercise }) {
  const { exerciseName, img, sets, now, goal, how } = exercise;

  return (
    <article className="flex flex-col text-left rounded-xl bg-surface-soft/40 p-2 sm:p-3">
      <img
        className="w-full rounded-lg object-cover aspect-square bg-surface-soft"
        src={img}
        alt={exerciseName}
        loading="lazy"
      />
      <p className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-ink">
        {exerciseName}
      </p>
      {sets && (
        <>
          <dl className="flex mt-2 space-y-1 text-[11px] sm:text-xs text-ink-muted leading-snug">
            <div className="flex flex-col w-1/3 text-center gap-1.5">
              <dt className="shrink-0 text-ink/70">Séries</dt>
              <dd className="text-ink">{sets}</dd>
            </div>
            <div className="flex flex-col w-1/3 text-center gap-1.5">
              <dt className="shrink-0 text-ink/70">Agora</dt>
              <dd className="text-ink">{now}</dd>
            </div>
            <div className="flex flex-col w-1/3 text-center gap-1.5">
              <dt className="shrink-0 text-ink/70">Meta</dt>
              <dd className="text-ink">{goal}</dd>
            </div>
          </dl>
            {how && (
              <p className="pt-1 border-t border-ink-muted/20 text-[10px] sm:text-[11px] text-ink-muted">
                {how}
              </p>
            )}
        </>
      )}
    </article>
  );
}
