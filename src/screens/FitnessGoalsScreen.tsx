import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
import { FITNESS_GOALS } from "../data/demo";
import { BackSquare } from "../components/ui";

export function FitnessGoalsScreen() {
  const navigate = useNavigate();
  const { data, toggleGoal } = useOnboarding();

  return (
    <section className="screen gradient-bg" aria-label="Fitness goals">
      <BackSquare to="/onboarding/days" />
      <div className="spacer" />
      <h1 className="subhead">What are your main fitness goals?</h1>
      <div
        className="pill-grid"
        style={{ maxWidth: 340, width: "100%", margin: "28px auto 0" }}
      >
        {FITNESS_GOALS.map((goal) => (
          <button
            key={goal}
            type="button"
            className={`pill${data.goals.includes(goal) ? " selected" : ""}`}
            onClick={() => toggleGoal(goal)}
          >
            {goal}
          </button>
        ))}
      </div>
      <div className="spacer" />
      <button
        className="btn btn-black btn-block"
        type="button"
        disabled={data.goals.length === 0}
        style={{ opacity: data.goals.length ? 1 : 0.45 }}
        onClick={() => navigate("/onboarding/time")}
      >
        Next
      </button>
    </section>
  );
}
