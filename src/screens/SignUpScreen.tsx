import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
import { Brand } from "../components/ui";

export function SignUpScreen() {
  const navigate = useNavigate();
  const { data, update } = useOnboarding();
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);
  const [confirm, setConfirm] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (password !== confirm) return;
    update({ name, email, password });
    navigate("/onboarding/experience");
  }

  return (
    <section className="screen gradient-bg auth-form" aria-label="Sign up">
      <div className="top-row">
        <span />
        <Link className="btn-ghost-dark" to="/login">
          Log in
        </Link>
      </div>
      <Brand />
      <h1 className="headline">Get Started with Your Fitness Journey</h1>
      <p className="form-label">Sign up</p>
      <form
        className="stack"
        onSubmit={onSubmit}
        style={{ maxWidth: 343, width: "100%", margin: "0 auto" }}
      >
        <div className="field">
          <input
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
        </div>
        <div className="field">
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="field">
          <input
            type="password"
            autoComplete="new-password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="field">
          <input
            type="password"
            autoComplete="new-password"
            required
            minLength={6}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Re-enter Password"
          />
        </div>
        <button className="btn btn-black btn-block" type="submit">
          Sign up
        </button>
      </form>
    </section>
  );
}
