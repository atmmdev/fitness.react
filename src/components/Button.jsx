import React from "react";

export default function Button({
  children,
  className = "",
  active = false,
  variant = "default",
  ...props
}) {
  if (variant === "week") {
    const base =
      "inline-flex items-center justify-center rounded-md border px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium transition-colors";
    const idle =
      "border-white bg-transparent text-white hover:bg-white/10";
    const selected =
      "border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400/10";

    return (
      <button
        type="button"
        className={`${base} ${active ? selected : idle} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  const base =
    "inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition-colors";
  const idle =
    "border-gray-400/60 text-ink hover:bg-surface-soft hover:border-accent";
  const selected = "border-accent bg-surface-soft text-white shadow-sm";

  return (
    <button
      type="button"
      className={`${base} ${active ? selected : idle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
