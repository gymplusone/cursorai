import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
import { EXERCISE_DAYS } from "../data/demo";
import { BackSquare } from "../components/ui";

export function ExerciseDaysScreen() {
  const navigate = useNavigate();
  const { data, update } = useOnboarding();

  return (
    <section className="screen gradient-bg" aria-label="Exercise days">
      <BackSquare to="/onboarding/age-gender" />
      <div className="spacer" />
      <h1 className="subhead">
        How many days per
        <br />
        week do you exercise?
      </h1>
      <div
        className="stack"
        style={{ maxWidth: 320, width: "100%", margin: "28px auto 0" }}
      >
        {EXERCISE_DAYS.map((day) => (
          <button
            key={day}
            type="button"
            className={`choice left-text${data.exerciseDays === day ? " selected" : ""}`}
            onClick={() => update({ exerciseDays: day })}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="spacer" />
      <button
        className="btn btn-black btn-block"
        type="button"
        disabled={!data.exerciseDays}
        style={{ opacity: data.exerciseDays ? 1 : 0.45 }}
        onClick={() => navigate("/onboarding/goals")}
      >
        Next
      </button>
    </section>
  );
}
