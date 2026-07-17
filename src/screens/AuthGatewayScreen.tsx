import { Link } from "react-router-dom";
import { Brand, Legal } from "../components/ui";

export function AuthGatewayScreen() {
  return (
    <section className="screen gradient-bg auth-gateway" aria-label="Welcome">
      <Brand />
      <h1 className="headline">Get Started with Your Fitness Journey</h1>
      <div className="stack" style={{ maxWidth: 343, width: "100%", margin: "0 auto" }}>
        <Link className="btn btn-black btn-block" to="/login">
          Log in
        </Link>
        <Link className="btn btn-black btn-block" to="/signup">
          Sign up
        </Link>
      </div>
      <div className="spacer" />
      <div className="stack" style={{ alignItems: "center" }}>
        <div className="divider" style={{ width: "100%" }}>
          or use one of these options
        </div>
        <div className="social-row">
          <span className="social-dot fb" aria-hidden>
            f
          </span>
          <span className="social-dot apple" aria-hidden>
            ⌘
          </span>
          <span className="social-dot" aria-hidden>
            G
          </span>
        </div>
        <Legal />
      </div>
    </section>
  );
}
