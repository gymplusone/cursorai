import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
import { Brand, Legal } from "../components/ui";

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
    <section className="screen gradient-bg auth-form" aria-label="Log in">
      <div className="top-row">
        <span />
        <Link className="btn-ghost-dark" to="/signup">
          Sign up
        </Link>
      </div>
      <Brand />
      <h1 className="headline">Get Started with Your Fitness Journey</h1>
      <form
        className="stack"
        onSubmit={onSubmit}
        style={{ maxWidth: 343, width: "100%", margin: "0 auto" }}
      >
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
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button className="btn btn-black btn-block" type="submit">
          Log in
        </button>
        <div className="divider">or</div>
        <button type="button" className="social-btn">
          <span className="social-dot fb" style={{ width: 22, height: 22, fontSize: 12 }}>
            f
          </span>
          continue with facebook
        </button>
        <button type="button" className="social-btn">
          <span className="social-dot" style={{ width: 22, height: 22, fontSize: 12 }}>
            G
          </span>
          continue with Google
        </button>
        <button type="button" className="social-btn">
          <span className="social-dot apple" style={{ width: 22, height: 22, fontSize: 12 }}>
            ⌘
          </span>
          continue with Apple
        </button>
      </form>
      <div className="spacer" />
      <Legal />
    </section>
  );
}
