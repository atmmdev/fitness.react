const GIF =
  "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0";

const ex = (exerciseName, path) => ({
  exerciseName,
  img: `${GIF}/${path}`,
});

export const WORKOUTS = [
  {
    week: "Semana 01 — Push / Pull / Legs",
    weekday: [
      {
        day: "Segunda",
        group: "Push A — Peito + Ombro + Tríceps",
        exercises: [
          ex("Supino Reto com Barra", "pectorals/barbell-bench-press.gif"),
          ex("Supino Inclinado com Halteres", "pectorals/dumbbell-incline-bench-press.gif"),
          ex("Desenvolvimento Militar com Halteres", "delts/dumbbell-seated-shoulder-press.gif"),
          ex("Elevação Lateral com Halteres", "delts/dumbbell-lateral-raise.gif"),
          ex("Crucifixo com Halteres", "pectorals/dumbbell-fly.gif"),
          ex("Tríceps na Polia com Corda", "triceps/cable-pushdown-with-rope-attachment.gif"),
          ex("Tríceps Overhead na Polia", "triceps/cable-overhead-triceps-extension-rope-attachment.gif"),
        ],
      },
      {
        day: "Terça",
        group: "Pull A — Costas + Bíceps + Posterior",
        exercises: [
          ex("Puxada Frente na Máquina", "lats/cable-bar-lateral-pulldown.gif"),
          ex("Remada Baixa no Cabo", "upper-back/cable-low-seated-row.gif"),
          ex("Remada Unilateral com Halter", "upper-back/dumbbell-one-arm-bent-over-row.gif"),
          ex("Face Pull / Remada Posterior Corda", "delts/cable-rear-delt-row-with-rope.gif"),
          ex("Pulldown Braço Reto", "lats/cable-straight-arm-pulldown-with-rope.gif"),
          ex("Rosca Direta com Barra", "biceps/barbell-curl.gif"),
          ex("Rosca Martelo com Corda", "biceps/cable-hammer-curl-with-rope.gif"),
        ],
      },
      {
        day: "Quarta",
        group: "Legs A — Quadríceps + Posterior + Panturrilha",
        exercises: [
          ex("Hack Squat", "glutes/sled-hack-squat.gif"),
          ex("Cadeira Extensora", "quads/lever-leg-extension.gif"),
          ex("Stiff / Romanian Deadlift", "glutes/barbell-romanian-deadlift.gif"),
          ex("Mesa Flexora", "hamstrings/lever-lying-leg-curl.gif"),
          ex("Panturrilha Sentado", "calves/lever-seated-calf-raise.gif"),
          ex("Cadeira Adutora", "adductors/lever-seated-hip-adduction.gif"),
          ex("Caminhada Inclinada 10–15 min", "cardio/walking-on-incline-treadmill.gif"),
        ],
      },
      {
        day: "Quinta",
        group: "Push B — Peito + Ombro + Tríceps",
        exercises: [
          ex("Supino Reto com Halteres", "pectorals/dumbbell-bench-press.gif"),
          ex("Máquina Supino Inclinada", "pectorals/lever-incline-chest-press.gif"),
          ex("Desenvolvimento na Máquina", "delts/lever-shoulder-press.gif"),
          ex("Elevação Lateral na Polia", "delts/cable-lateral-raise.gif"),
          ex("Crossover de Cabo", "pectorals/cable-standing-up-straight-crossovers.gif"),
          ex("Tríceps Sentado com Halter", "triceps/dumbbell-seated-triceps-extension.gif"),
          ex("Tríceps Unilateral na Polia", "triceps/cable-kickback.gif"),
        ],
      },
      {
        day: "Sexta",
        group: "Pull B — Costas + Bíceps + Core",
        exercises: [
          ex("Remada Alta na Máquina", "upper-back/lever-high-row.gif"),
          ex("Pulldown Barra V", "lats/cable-seated-high-row-v-bar.gif"),
          ex("Remada Sentada Aberta", "upper-back/cable-floor-seated-wide-grip-row.gif"),
          ex("Crucifixo Inverso / Posterior", "delts/dumbbell-rear-fly.gif"),
          ex("Rosca Scott", "biceps/barbell-preacher-curl.gif"),
          ex("Rosca EZ Bar", "biceps/ez-barbell-curl.gif"),
          ex("Prancha", "abs/power-point-plank.gif"),
        ],
      },
    ],
  },
  {
    week: "Semana 02 — Upper / Lower",
    weekday: [
      {
        day: "Segunda",
        group: "Upper A — Peito + Costas + Ombro + Braço",
        exercises: [
          ex("Supino Reto com Barra", "pectorals/barbell-bench-press.gif"),
          ex("Remada Baixa no Cabo", "upper-back/cable-low-seated-row.gif"),
          ex("Desenvolvimento Militar com Halteres", "delts/dumbbell-seated-shoulder-press.gif"),
          ex("Puxada Frente na Máquina", "lats/cable-bar-lateral-pulldown.gif"),
          ex("Elevação Lateral com Halteres", "delts/dumbbell-lateral-raise.gif"),
          ex("Rosca Direta com Barra", "biceps/barbell-curl.gif"),
          ex("Tríceps na Polia com Corda", "triceps/cable-pushdown-with-rope-attachment.gif"),
          ex("Face Pull / Remada Posterior Corda", "delts/cable-rear-delt-row-with-rope.gif"),
        ],
      },
      {
        day: "Terça",
        group: "Lower A — Quadríceps + Glúteo",
        exercises: [
          ex("Leg Press 45°", "glutes/sled-45-leg-press.gif"),
          ex("Cadeira Extensora", "quads/lever-leg-extension.gif"),
          ex("Mesa Flexora", "hamstrings/lever-lying-leg-curl.gif"),
          ex("Agachamento Goblet", "quads/dumbbell-goblet-squat.gif"),
          ex("Panturrilha Sentado", "calves/lever-seated-calf-raise.gif"),
          ex("Cadeira Adutora", "adductors/lever-seated-hip-adduction.gif"),
          ex("Caminhada Inclinada 10 min", "cardio/walking-on-incline-treadmill.gif"),
        ],
      },
      {
        day: "Quarta",
        group: "Upper B — Peito + Costas + Ombro + Braço",
        exercises: [
          ex("Supino Inclinado com Halteres", "pectorals/dumbbell-incline-bench-press.gif"),
          ex("Remada Unilateral com Halter", "upper-back/dumbbell-one-arm-bent-over-row.gif"),
          ex("Desenvolvimento na Máquina", "delts/lever-shoulder-press.gif"),
          ex("Pulldown Barra V", "lats/cable-seated-high-row-v-bar.gif"),
          ex("Crossover de Cabo", "pectorals/cable-standing-up-straight-crossovers.gif"),
          ex("Rosca Scott", "biceps/barbell-preacher-curl.gif"),
          ex("Tríceps Overhead na Polia", "triceps/cable-overhead-triceps-extension-rope-attachment.gif"),
          ex("Crucifixo Inverso / Posterior", "delts/dumbbell-rear-fly.gif"),
        ],
      },
      {
        day: "Quinta",
        group: "Lower B — Posterior + Glúteo",
        exercises: [
          ex("Stiff / Romanian Deadlift", "glutes/barbell-romanian-deadlift.gif"),
          ex("Hack Squat", "glutes/sled-hack-squat.gif"),
          ex("Cadeira Flexora Sentado", "hamstrings/lever-seated-leg-curl.gif"),
          ex("Cadeira Extensora (volume leve)", "quads/lever-leg-extension.gif"),
          ex("Panturrilha no Leg Press", "calves/lever-seated-calf-press.gif"),
          ex("Cadeira Abdutora", "abductors/lever-seated-hip-abduction.gif"),
          ex("Caminhada Inclinada 10–15 min", "cardio/walking-on-incline-treadmill.gif"),
        ],
      },
      {
        day: "Sexta",
        group: "Full Leve — Compostos + Core + Cardio",
        exercises: [
          ex("Supino Máquina (leve)", "pectorals/lever-incline-chest-press.gif"),
          ex("Remada Sentada (leve)", "upper-back/lever-seated-row.gif"),
          ex("Elevação Lateral com Halteres", "delts/dumbbell-lateral-raise.gif"),
          ex("Cadeira Extensora (leve)", "quads/lever-leg-extension.gif"),
          ex("Rosca Martelo com Corda", "biceps/cable-hammer-curl-with-rope.gif"),
          ex("Tríceps na Polia com Corda", "triceps/cable-pushdown-with-rope-attachment.gif"),
          ex("Abdominal Crunch", "abs/cable-kneeling-crunch.gif"),
          ex("Caminhada Inclinada 15–20 min", "cardio/walking-on-incline-treadmill.gif"),
        ],
      },
    ],
  },
];
