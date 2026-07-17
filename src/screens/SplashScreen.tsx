import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = window.setTimeout(() => navigate("/auth"), 1800);
    return () => window.clearTimeout(id);
  }, [navigate]);

  return (
    <section className="screen gradient-bg splash" aria-label="Splash">
      <div className="brand-mark">Gym+1</div>
      <p className="brand-tag">Match your workout vibe</p>
    </section>
  );
}
