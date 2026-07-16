import { Link } from "react-router-dom";

export function AuthGatewayScreen() {
  return (
    <section className="screen auth-gateway" aria-label="Welcome">
      <div className="brand-mark" style={{ fontSize: "2rem" }}>
        Gym<span className="plus">+1</span>
      </div>
      <div className="hero-copy stack">
        <p className="eyebrow">Welcome</p>
        <h1>Find your next workout partner.</h1>
        <p className="lede">
          Match with people who train when you train — then show up together.
        </p>
      </div>
      <div className="actions">
        <Link className="btn btn-primary btn-block" to="/login">
          Log in
        </Link>
        <Link className="btn btn-ghost btn-block" to="/signup">
          Sign up
        </Link>
      </div>
    </section>
  );
}
