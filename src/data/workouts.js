const GIF =
  "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0";

/**
 * @param {string} exerciseName
 * @param {string} path
 * @param {{
 *   sets: string,
 *   now: string,
 *   goal: string,
 *   how: string,
 * }} prescription
 */
const ex = (exerciseName, path, { sets, now, goal, how }) => ({
  exerciseName,
  img: `${GIF}/${path}`,
  sets,
  now,
  goal,
  how,
});

export const WORKOUTS = [
  {
    week: "Semana 01 — Push / Pull / Legs",
    weekday: [
      {
        day: "Segunda",
        group: "Push A — Peito + Ombro + Tríceps",
        exercises: [
          ex("Supino Reto com Barra", "pectorals/barbell-bench-press.gif", {
            sets: "4 × 6–8",
            now: "65–70 kg",
            goal: "70–95 kg",
            how: "Total (barra ~20 kg + anilhas). Hoje ≈ 25 kg/lado",
          }),
          ex("Supino Inclinado com Halteres", "pectorals/dumbbell-incline-bench-press.gif", {
            sets: "3–4 × 8–10",
            now: "20–26 kg",
            goal: "28–36 kg",
            how: "Cada halter",
          }),
          ex("Crucifixo com Halteres", "pectorals/dumbbell-fly.gif", {
            sets: "3 × 10–12",
            now: "10–14 kg",
            goal: "14–20 kg",
            how: "Cada halter · amplitude controlada",
          }),
          ex("Desenvolvimento Militar com Halteres", "delts/dumbbell-seated-shoulder-press.gif", {
            sets: "3–4 × 8–10",
            now: "16–22 kg",
            goal: "22–30 kg",
            how: "Cada halter",
          }),
          ex("Elevação Lateral com Halteres", "delts/dumbbell-lateral-raise.gif", {
            sets: "3 × 12–15",
            now: "8–12 kg",
            goal: "10–16 kg",
            how: "Cada halter · forma > carga",
          }),
          ex("Tríceps na Polia com Corda", "triceps/cable-pushdown-with-rope-attachment.gif", {
            sets: "3 × 10–15",
            now: "25–35 kg",
            goal: "30–45 kg",
            how: "Peso do stack (total na máquina)",
          }),
          ex("Tríceps Overhead na Polia", "triceps/cable-overhead-triceps-extension-rope-attachment.gif", {
            sets: "3 × 10–12",
            now: "20–30 kg",
            goal: "25–40 kg",
            how: "Peso do stack (total na máquina)",
          }),
        ],
      },
      {
        day: "Terça",
        group: "Pull A — Costas + Bíceps + Posterior",
        exercises: [
          ex("Puxada Frente na Máquina", "lats/cable-bar-lateral-pulldown.gif", {
            sets: "4 × 8–10",
            now: "55–70 kg",
            goal: "70–90 kg",
            how: "Peso do stack / pin (total)",
          }),
          ex("Remada Baixa no Cabo", "upper-back/cable-low-seated-row.gif", {
            sets: "4 × 8–10",
            now: "55–70 kg",
            goal: "70–90 kg",
            how: "Peso do stack / pin (total)",
          }),
          ex("Remada Unilateral com Halter", "upper-back/dumbbell-one-arm-bent-over-row.gif", {
            sets: "3–4 × 8–10",
            now: "22–30 kg",
            goal: "28–40 kg",
            how: "Um halter · um lado por vez",
          }),
          ex("Face Pull / Remada Posterior Corda", "delts/cable-rear-delt-row-with-rope.gif", {
            sets: "3 × 12–15",
            now: "20–30 kg",
            goal: "25–40 kg",
            how: "Peso do stack · foco em posterior",
          }),
          ex("Pulldown Braço Reto", "lats/cable-straight-arm-pulldown-with-rope.gif", {
            sets: "3 × 10–12",
            now: "25–35 kg",
            goal: "30–45 kg",
            how: "Peso do stack (total na máquina)",
          }),
          ex("Rosca Direta com Barra", "biceps/barbell-curl.gif", {
            sets: "3 × 8–12",
            now: "25–35 kg",
            goal: "30–40 kg",
            how: "Total (barra + anilhas). EZ ~10–15 kg",
          }),
          ex("Rosca Martelo com Corda", "biceps/cable-hammer-curl-with-rope.gif", {
            sets: "3 × 10–12",
            now: "20–30 kg",
            goal: "25–40 kg",
            how: "Peso do stack (total na máquina)",
          }),
        ],
      },
      {
        day: "Quarta",
        group: "Legs A — Quadríceps + Posterior + Panturrilha",
        exercises: [
          ex("Hack Squat", "glutes/sled-hack-squat.gif", {
            sets: "4 × 8–10",
            now: "80–120 kg",
            goal: "120–180 kg",
            how: "Total das anilhas / número da máquina",
          }),
          ex("Cadeira Extensora", "quads/lever-leg-extension.gif", {
            sets: "3 × 10–15",
            now: "40–60 kg",
            goal: "50–80 kg",
            how: "Peso da máquina",
          }),
          ex("Mesa Flexora", "hamstrings/lever-lying-leg-curl.gif", {
            sets: "3 × 10–15",
            now: "40–60 kg",
            goal: "50–80 kg",
            how: "Peso da máquina",
          }),
          ex("Stiff / Romanian Deadlift", "glutes/barbell-romanian-deadlift.gif", {
            sets: "3–4 × 8–10",
            now: "60–80 kg",
            goal: "80–110 kg",
            how: "Total. 80 kg ≈ 30 kg/lado · 100 kg ≈ 40 kg/lado",
          }),
          ex("Panturrilha Sentado", "calves/lever-seated-calf-raise.gif", {
            sets: "3–4 × 12–15",
            now: "40–60 kg",
            goal: "50–80 kg",
            how: "Peso da máquina",
          }),
          ex("Cadeira Adutora", "adductors/lever-seated-hip-adduction.gif", {
            sets: "3 × 12–15",
            now: "40–55 kg",
            goal: "50–70 kg",
            how: "Peso da máquina",
          }),
          ex("Caminhada Inclinada 10–15 min", "cardio/walking-on-incline-treadmill.gif", {
            sets: "10–15 min",
            now: "inclinação 8–12%",
            goal: "inclinação 10–15%",
            how: "Ritmo conversável · definição sem roubar recuperação",
          }),
        ],
      },
      {
        day: "Quinta",
        group: "Push B — Peito + Ombro + Tríceps",
        exercises: [
          ex("Supino Reto com Halteres", "pectorals/dumbbell-bench-press.gif", {
            sets: "3–4 × 8–10",
            now: "22–28 kg",
            goal: "28–36 kg",
            how: "Cada halter",
          }),
          ex("Máquina Supino Inclinada", "pectorals/lever-incline-chest-press.gif", {
            sets: "3–4 × 8–10",
            now: "50–70 kg",
            goal: "70–95 kg",
            how: "Peso da máquina (total no pin)",
          }),
          ex("Crossover de Cabo", "pectorals/cable-standing-up-straight-crossovers.gif", {
            sets: "3 × 10–12",
            now: "10–15 kg/lado",
            goal: "12–20 kg/lado",
            how: "Cada lado do cabo (stack por coluna)",
          }),
          ex("Desenvolvimento na Máquina", "delts/lever-military-press.gif", {
            sets: "3–4 × 8–10",
            now: "40–55 kg",
            goal: "50–70 kg",
            how: "Peso da máquina (total no pin)",
          }),
          ex("Elevação Lateral na Polia", "delts/cable-lateral-raise.gif", {
            sets: "3 × 12–15",
            now: "8–12 kg",
            goal: "10–16 kg",
            how: "Peso do stack · um braço por vez se unilateral",
          }),
          ex("Tríceps Sentado com Halter", "triceps/dumbbell-seated-triceps-extension.gif", {
            sets: "3 × 10–12",
            now: "14–20 kg",
            goal: "18–28 kg",
            how: "Um halter (duas mãos no cabo do peso)",
          }),
          ex("Tríceps Unilateral na Polia", "triceps/cable-kickback.gif", {
            sets: "3 × 10–12",
            now: "10–15 kg",
            goal: "12–20 kg",
            how: "Peso do stack · cada braço",
          }),
        ],
      },
      {
        day: "Sexta",
        group: "Pull B — Costas + Bíceps + Core",
        exercises: [
          ex("Remada Alta na Máquina", "upper-back/lever-high-row.gif", {
            sets: "4 × 8–10",
            now: "50–70 kg",
            goal: "70–90 kg",
            how: "Peso da máquina (total no pin)",
          }),
          ex("Pulldown Barra V", "lats/cable-seated-high-row-v-bar.gif", {
            sets: "3–4 × 8–10",
            now: "55–70 kg",
            goal: "70–90 kg",
            how: "Peso do stack / pin (total)",
          }),
          ex("Remada Sentada Aberta", "upper-back/cable-floor-seated-wide-grip-row.gif", {
            sets: "3–4 × 8–10",
            now: "50–65 kg",
            goal: "65–85 kg",
            how: "Peso do stack / pin (total)",
          }),
          ex("Crucifixo Inverso / Posterior", "delts/dumbbell-rear-fly.gif", {
            sets: "3 × 12–15",
            now: "6–10 kg",
            goal: "8–14 kg",
            how: "Cada halter",
          }),
          ex("Rosca Scott", "biceps/barbell-preacher-curl.gif", {
            sets: "3 × 8–12",
            now: "20–30 kg",
            goal: "25–35 kg",
            how: "Total (barra/EZ + anilhas)",
          }),
          ex("Rosca EZ Bar", "biceps/ez-barbell-curl.gif", {
            sets: "3 × 8–12",
            now: "25–35 kg",
            goal: "30–40 kg",
            how: "Total. EZ ~10–15 kg + anilhas",
          }),
          ex("Prancha", "abs/power-point-plank.gif", {
            sets: "3 × 30–60 s",
            now: "30–40 s",
            goal: "45–60 s",
            how: "Peso corporal · core firme",
          }),
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
          ex("Supino Reto com Barra", "pectorals/barbell-bench-press.gif", {
            sets: "4 × 6–8",
            now: "65–70 kg",
            goal: "70–95 kg",
            how: "Total (barra ~20 kg + anilhas). Hoje ≈ 25 kg/lado",
          }),
          ex("Remada Baixa no Cabo", "upper-back/cable-low-seated-row.gif", {
            sets: "4 × 8–10",
            now: "55–70 kg",
            goal: "70–90 kg",
            how: "Peso do stack / pin (total)",
          }),
          ex("Puxada Frente na Máquina", "lats/cable-bar-lateral-pulldown.gif", {
            sets: "4 × 8–10",
            now: "55–70 kg",
            goal: "70–90 kg",
            how: "Peso do stack / pin (total)",
          }),
          ex("Desenvolvimento Militar com Halteres", "delts/dumbbell-seated-shoulder-press.gif", {
            sets: "3–4 × 8–10",
            now: "16–22 kg",
            goal: "22–30 kg",
            how: "Cada halter",
          }),
          ex("Elevação Lateral com Halteres", "delts/dumbbell-lateral-raise.gif", {
            sets: "3 × 12–15",
            now: "8–12 kg",
            goal: "10–16 kg",
            how: "Cada halter · forma > carga",
          }),
          ex("Rosca Direta com Barra", "biceps/barbell-curl.gif", {
            sets: "3 × 8–12",
            now: "25–35 kg",
            goal: "30–40 kg",
            how: "Total (barra + anilhas). EZ ~10–15 kg",
          }),
          ex("Tríceps na Polia com Corda", "triceps/cable-pushdown-with-rope-attachment.gif", {
            sets: "3 × 10–15",
            now: "25–35 kg",
            goal: "30–45 kg",
            how: "Peso do stack (total na máquina)",
          }),
          ex("Face Pull / Remada Posterior Corda", "delts/cable-rear-delt-row-with-rope.gif", {
            sets: "3 × 12–15",
            now: "20–30 kg",
            goal: "25–40 kg",
            how: "Peso do stack · foco em posterior",
          }),
        ],
      },
      {
        day: "Terça",
        group: "Lower A — Quadríceps + Glúteo",
        exercises: [
          ex("Leg Press 45°", "glutes/sled-45-leg-press.gif", {
            sets: "4 × 8–10",
            now: "140–200 kg",
            goal: "180–280 kg",
            how: "Total das anilhas. 200 kg ≈ 100 kg/lado",
          }),
          ex("Cadeira Extensora", "quads/lever-leg-extension.gif", {
            sets: "3 × 10–15",
            now: "40–60 kg",
            goal: "50–80 kg",
            how: "Peso da máquina",
          }),
          ex("Mesa Flexora", "hamstrings/lever-lying-leg-curl.gif", {
            sets: "3 × 10–15",
            now: "40–60 kg",
            goal: "50–80 kg",
            how: "Peso da máquina",
          }),
          ex("Cadeira Adutora", "adductors/lever-seated-hip-adduction.gif", {
            sets: "3 × 12–15",
            now: "40–55 kg",
            goal: "50–70 kg",
            how: "Peso da máquina",
          }),
          ex("Agachamento Goblet", "quads/dumbbell-goblet-squat.gif", {
            sets: "3 × 10–12",
            now: "20–28 kg",
            goal: "28–40 kg",
            how: "Um halter / kettlebell (total nas mãos)",
          }),
          ex("Panturrilha Sentado", "calves/lever-seated-calf-raise.gif", {
            sets: "3–4 × 12–15",
            now: "40–60 kg",
            goal: "50–80 kg",
            how: "Peso da máquina",
          }),
          ex("Caminhada Inclinada 10 min", "cardio/walking-on-incline-treadmill.gif", {
            sets: "10 min",
            now: "inclinação 8–12%",
            goal: "inclinação 10–15%",
            how: "Ritmo conversável · definição sem roubar recuperação",
          }),
        ],
      },
      {
        day: "Quarta",
        group: "Upper B — Peito + Costas + Ombro + Braço",
        exercises: [
          ex("Supino Inclinado com Halteres", "pectorals/dumbbell-incline-bench-press.gif", {
            sets: "3–4 × 8–10",
            now: "20–26 kg",
            goal: "28–36 kg",
            how: "Cada halter",
          }),
          ex("Crossover de Cabo", "pectorals/cable-standing-up-straight-crossovers.gif", {
            sets: "3 × 10–12",
            now: "10–15 kg/lado",
            goal: "12–20 kg/lado",
            how: "Cada lado do cabo (stack por coluna)",
          }),
          ex("Remada Unilateral com Halter", "upper-back/dumbbell-one-arm-bent-over-row.gif", {
            sets: "3–4 × 8–10",
            now: "22–30 kg",
            goal: "28–40 kg",
            how: "Um halter · um lado por vez",
          }),
          ex("Desenvolvimento na Máquina", "delts/lever-military-press.gif", {
            sets: "3–4 × 8–10",
            now: "40–55 kg",
            goal: "50–70 kg",
            how: "Peso da máquina (total no pin)",
          }),
          ex("Crucifixo Inverso / Posterior", "delts/dumbbell-rear-fly.gif", {
            sets: "3 × 12–15",
            now: "6–10 kg",
            goal: "8–14 kg",
            how: "Cada halter",
          }),
          ex("Pulldown Barra V", "lats/cable-seated-high-row-v-bar.gif", {
            sets: "3–4 × 8–10",
            now: "55–70 kg",
            goal: "70–90 kg",
            how: "Peso do stack / pin (total)",
          }),
          ex("Rosca Scott", "biceps/barbell-preacher-curl.gif", {
            sets: "3 × 8–12",
            now: "20–30 kg",
            goal: "25–35 kg",
            how: "Total (barra/EZ + anilhas)",
          }),
          ex("Tríceps Overhead na Polia", "triceps/cable-overhead-triceps-extension-rope-attachment.gif", {
            sets: "3 × 10–12",
            now: "20–30 kg",
            goal: "25–40 kg",
            how: "Peso do stack (total na máquina)",
          }),
        ],
      },
      {
        day: "Quinta",
        group: "Lower B — Posterior + Glúteo",
        exercises: [
          ex("Stiff / Romanian Deadlift", "glutes/barbell-romanian-deadlift.gif", {
            sets: "3–4 × 8–10",
            now: "60–80 kg",
            goal: "80–110 kg",
            how: "Total. 80 kg ≈ 30 kg/lado · 100 kg ≈ 40 kg/lado",
          }),
          ex("Hack Squat", "glutes/sled-hack-squat.gif", {
            sets: "4 × 8–10",
            now: "80–120 kg",
            goal: "120–180 kg",
            how: "Total das anilhas / número da máquina",
          }),
          ex("Cadeira Flexora Sentado", "hamstrings/lever-seated-leg-curl.gif", {
            sets: "3 × 10–15",
            now: "40–60 kg",
            goal: "50–80 kg",
            how: "Peso da máquina",
          }),
          ex("Cadeira Extensora (volume leve)", "quads/lever-leg-extension.gif", {
            sets: "3 × 12–15",
            now: "35–50 kg",
            goal: "45–65 kg",
            how: "Peso da máquina · volume leve",
          }),
          ex("Panturrilha no Leg Press", "calves/lever-seated-calf-press.gif", {
            sets: "3–4 × 12–15",
            now: "80–120 kg",
            goal: "100–160 kg",
            how: "Total das anilhas no leg press",
          }),
          ex("Cadeira Abdutora", "abductors/lever-seated-hip-abduction.gif", {
            sets: "3 × 12–15",
            now: "40–55 kg",
            goal: "50–70 kg",
            how: "Peso da máquina",
          }),
          ex("Caminhada Inclinada 10–15 min", "cardio/walking-on-incline-treadmill.gif", {
            sets: "10–15 min",
            now: "inclinação 8–12%",
            goal: "inclinação 10–15%",
            how: "Ritmo conversável · definição sem roubar recuperação",
          }),
        ],
      },
      {
        day: "Sexta",
        group: "Full Leve — Compostos + Core + Cardio",
        exercises: [
          ex("Supino Máquina (leve)", "pectorals/lever-incline-chest-press.gif", {
            sets: "3 × 10–12",
            now: "40–55 kg",
            goal: "50–70 kg",
            how: "Peso da máquina · sessão leve",
          }),
          ex("Remada Sentada (leve)", "upper-back/lever-seated-row.gif", {
            sets: "3 × 10–12",
            now: "45–60 kg",
            goal: "55–75 kg",
            how: "Peso da máquina · sessão leve",
          }),
          ex("Elevação Lateral com Halteres", "delts/dumbbell-lateral-raise.gif", {
            sets: "3 × 12–15",
            now: "6–10 kg",
            goal: "8–12 kg",
            how: "Cada halter · volume leve",
          }),
          ex("Cadeira Extensora (leve)", "quads/lever-leg-extension.gif", {
            sets: "3 × 12–15",
            now: "30–45 kg",
            goal: "40–55 kg",
            how: "Peso da máquina · sessão leve",
          }),
          ex("Rosca Martelo com Corda", "biceps/cable-hammer-curl-with-rope.gif", {
            sets: "3 × 10–12",
            now: "15–25 kg",
            goal: "20–30 kg",
            how: "Peso do stack · sessão leve",
          }),
          ex("Tríceps na Polia com Corda", "triceps/cable-pushdown-with-rope-attachment.gif", {
            sets: "3 × 10–12",
            now: "20–30 kg",
            goal: "25–35 kg",
            how: "Peso do stack · sessão leve",
          }),
          ex("Abdominal Crunch", "abs/cable-kneeling-crunch.gif", {
            sets: "3 × 12–15",
            now: "20–30 kg",
            goal: "25–40 kg",
            how: "Peso do stack / cabo",
          }),
          ex("Caminhada Inclinada 15–20 min", "cardio/walking-on-incline-treadmill.gif", {
            sets: "15–20 min",
            now: "inclinação 8–12%",
            goal: "inclinação 10–15%",
            how: "Ritmo conversável · definição sem roubar recuperação",
          }),
        ],
      },
    ],
  },
];
