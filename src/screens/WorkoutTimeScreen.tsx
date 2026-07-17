import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
import { WORKOUT_TIMES } from "../data/demo";
import { BackSquare } from "../components/ui";

export function WorkoutTimeScreen() {
  const navigate = useNavigate();
  const { data, update } = useOnboarding();

  return (
    <section className="screen gradient-bg" aria-label="Workout time">
      <BackSquare to="/onboarding/goals" />
      <div className="spacer" />
      <h1 className="subhead">
        What time of day do you prefer to work out?
      </h1>
      <div
        className="stack"
        style={{ maxWidth: 320, width: "100%", margin: "28px auto 0" }}
      >
        {WORKOUT_TIMES.map((time) => (
          <button
            key={time}
            type="button"
            className={`choice left-text${data.workoutTime === time ? " selected" : ""}`}
            onClick={() => update({ workoutTime: time })}
          >
            {time}
          </button>
        ))}
      </div>
      <div className="spacer" />
      <button
        className="btn btn-black btn-block"
        type="button"
        disabled={!data.workoutTime}
        style={{ opacity: data.workoutTime ? 1 : 0.45 }}
        onClick={() => navigate("/app/home")}
      >
        Next
      </button>
    </section>
  );
}
