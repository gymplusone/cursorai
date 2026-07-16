import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
import { BackButton } from "../components/ui";

export function SignUpScreen() {
  const navigate = useNavigate();
  const { data, update } = useOnboarding();
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    update({ name, email, password });
    navigate("/onboarding/experience");
  }

  return (
    <section className="screen" aria-label="Sign up">
      <BackButton to="/auth" />
      <div className="stack stack-lg" style={{ marginTop: 12 }}>
        <div className="stack">
          <p className="eyebrow">Account</p>
          <h1>Create your account</h1>
          <p className="lede">A few details — then we tailor your matches.</p>
        </div>
        <form className="stack" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="signup-name">Name</label>
            <input
              id="signup-name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div className="field">
            <label htmlFor="signup-email">Email</label>
            <input
              id="signup-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
            />
          </div>
          <div className="field">
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              autoComplete="new-password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
            />
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Continue
          </button>
        </form>
        <p className="link-row">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </section>
  );
}
