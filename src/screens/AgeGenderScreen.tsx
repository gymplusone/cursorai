import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
import { BackButton, ProgressDots } from "../components/ui";

export function AgeGenderScreen() {
  const navigate = useNavigate();
  const { data, update } = useOnboarding();
  const [age, setAge] = useState(data.age);
  const [gender, setGender] = useState(data.gender);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    update({ age, gender });
    navigate("/onboarding/training");
  }

  return (
    <section className="screen" aria-label="Age and gender">
      <BackButton to="/onboarding/experience" />
      <ProgressDots step={2} total={3} />
      <div className="stack stack-lg">
        <div className="stack">
          <p className="eyebrow">Step 2</p>
          <h1>About you</h1>
          <p className="lede">Helps us show better matches nearby.</p>
        </div>
        <form className="stack" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              inputMode="numeric"
              min={16}
              max={99}
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="26"
            />
          </div>
          <div className="field">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="woman">Woman</option>
              <option value="man">Man</option>
              <option value="nonbinary">Non-binary</option>
              <option value="prefer-not">Prefer not to say</option>
            </select>
          </div>
          <div className="spacer" />
          <button className="btn btn-primary btn-block" type="submit">
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}
