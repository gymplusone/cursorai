import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
import { DAYS, TIMES, YEARS } from "../data/demo";
import { BackButton, ProgressDots } from "../components/ui";

export function TrainingPrefsScreen() {
  const navigate = useNavigate();
  const { data, update, toggleDay } = useOnboarding();

  const canContinue =
    Boolean(data.trainingYears) &&
    data.trainingDays.length > 0 &&
    Boolean(data.trainingTime);

  function finish() {
    if (!canContinue) return;
    navigate("/app/home");
  }

  return (
    <section className="screen" aria-label="Training preferences">
      <BackButton to="/onboarding/age-gender" />
      <ProgressDots step={3} total={3} />
      <div className="stack stack-lg" style={{ overflow: "auto" }}>
        <div className="stack">
          <p className="eyebrow">Step 3</p>
          <h1>How you train</h1>
          <p className="lede">Years, days, and preferred time.</p>
        </div>

        <div className="stack">
          <p className="eyebrow">Training years</p>
          <div className="chip-grid">
            {YEARS.map((y) => (
              <button
                key={y}
                type="button"
                className={`chip${data.trainingYears === y ? " selected" : ""}`}
                onClick={() => update({ trainingYears: y })}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <div className="stack">
          <p className="eyebrow">Days</p>
          <div className="chip-grid">
            {DAYS.map((d) => (
              <button
                key={d}
                type="button"
                className={`chip${data.trainingDays.includes(d) ? " selected" : ""}`}
                onClick={() => toggleDay(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="stack">
          <p className="eyebrow">Preferred time</p>
          <div className="chip-grid">
            {TIMES.map((t) => (
              <button
                key={t}
                type="button"
                className={`chip${data.trainingTime === t ? " selected" : ""}`}
                onClick={() => update({ trainingTime: t })}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <button
          className="btn btn-primary btn-block"
          type="button"
          disabled={!canContinue}
          onClick={finish}
          style={{ opacity: canContinue ? 1 : 0.45 }}
        >
          Enter Gym+1
        </button>
      </div>
    </section>
  );
}
