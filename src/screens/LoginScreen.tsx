import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
import { BackButton } from "../components/ui";

export function LoginScreen() {
  const navigate = useNavigate();
  const { data, update } = useOnboarding();
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    update({ email, password });
    navigate("/app/home");
  }

  return (
    <section className="screen" aria-label="Log in">
      <BackButton to="/auth" />
      <div className="stack stack-lg" style={{ marginTop: 12 }}>
        <div className="stack">
          <p className="eyebrow">Account</p>
          <h1>Welcome back</h1>
          <p className="lede">Log in to keep matching and training.</p>
        </div>
        <form className="stack" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
            />
          </div>
          <div className="field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Log in
          </button>
        </form>
        <p className="link-row">
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </section>
  );
}
