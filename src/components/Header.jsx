import React from "react";

function formatWeekTitle(week) {
  if (!week) return "TREINOS";
  const [label, split] = week.split(" — ");
  return split ? `${label} (${split})` : label;
}

export default function Header({
  week,
  day,
  focus,
  muscles,
  children,
}) {
  const weekTitle = formatWeekTitle(week);
  const dayTitle = day && focus ? `${day} - ${focus}` : day || null;

  return (
    <header className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
      <div className="space-y-1 sm:space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          {weekTitle}
        </h1>

        {dayTitle && (
          <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-widest">
            {dayTitle}
          </h2>
        )}

        {muscles && (
          <p className="text-sm sm:text-base font-normal text-yellow-400">
            {muscles}
          </p>
        )}

        {!week && (
          <p className="text-sm text-ink-muted">Selecione a semana</p>
        )}

        {week && !day && (
          <p className="text-sm text-ink-muted">Selecione um dia</p>
        )}
      </div>

      {children && <div className="pt-2">{children}</div>}
    </header>
  );
}
