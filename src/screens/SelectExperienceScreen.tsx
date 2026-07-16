import { useNavigate } from "react-router-dom";
import { useOnboarding, type Experience } from "../context/OnboardingContext";
import { BackButton, ProgressDots } from "../components/ui";

const options: { id: Experience; title: string; desc: string }[] = [
  {
    id: "find-partner",
    title: "Find a partner",
    desc: "Match with people to train with",
  },
  {
    id: "coach",
    title: "I’m a coach",
    desc: "Connect with athletes who need guidance",
  },
];

export function SelectExperienceScreen() {
  const navigate = useNavigate();
  const { data, update } = useOnboarding();

  function choose(id: Experience) {
    update({ experience: id });
    navigate("/onboarding/age-gender");
  }

  return (
    <section className="screen" aria-label="Select experience">
      <BackButton to="/signup" />
      <ProgressDots step={1} total={3} />
      <div className="stack stack-lg">
        <div className="stack">
          <p className="eyebrow">Step 1</p>
          <h1>What brings you here?</h1>
          <p className="lede">Pick how you want to use Gym+1.</p>
        </div>
        <div className="choice-grid">
          {options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`choice${data.experience === opt.id ? " selected" : ""}`}
              onClick={() => choose(opt.id)}
            >
              <strong>{opt.title}</strong>
              <span>{opt.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
