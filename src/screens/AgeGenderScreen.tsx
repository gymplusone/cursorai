import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
import { BackSquare } from "../components/ui";

export function AgeGenderScreen() {
  const navigate = useNavigate();
  const { data, update } = useOnboarding();
  const [age, setAge] = useState(data.age);
  const [gender, setGender] = useState(data.gender || "Male");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!age) return;
    update({ age, gender });
    navigate("/onboarding/days");
  }

  return (
    <section className="screen gradient-bg" aria-label="Age and gender">
      <BackSquare to="/onboarding/experience" />
      <div className="spacer" />
      <form
        className="stack stack-lg"
        onSubmit={onSubmit}
        style={{ maxWidth: 320, width: "100%", margin: "0 auto" }}
      >
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
            placeholder="Type"
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
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
        <div className="spacer" />
        <button className="btn btn-black btn-block" type="submit">
          Next
        </button>
      </form>
    </section>
  );
}
