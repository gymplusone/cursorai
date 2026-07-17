import { useNavigate } from "react-router-dom";
import { useOnboarding, type Experience } from "../context/OnboardingContext";
import { BackSquare } from "../components/ui";

const options: { id: Experience; label: string }[] = [
  { id: "plus-one", label: "+1" },
  { id: "personal-trainer", label: "Personal Trainer" },
];

function DumbbellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 9h2v6H3V9zm16 0h2v6h-2V9zM7 10h10v4H7v-4zm-2-3h2v10H5V7zm14 0h2v10h-2V7z" />
    </svg>
  );
}

export function SelectExperienceScreen() {
  const navigate = useNavigate();
  const { data, update } = useOnboarding();

  function choose(id: Experience) {
    update({ experience: id });
    navigate("/onboarding/age-gender");
  }

  return (
    <section className="screen gradient-bg" aria-label="Select experience">
      <BackSquare to="/signup" />
      <div className="spacer" />
      <h1 className="subhead">Select your experience</h1>
      <div
        className="stack"
        style={{ maxWidth: 289, width: "100%", margin: "28px auto 0" }}
      >
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`choice${data.experience === opt.id ? " selected" : ""}`}
            onClick={() => choose(opt.id)}
          >
            <DumbbellIcon />
            {opt.label}
          </button>
        ))}
      </div>
      <div className="spacer" />
    </section>
  );
}
