import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = window.setTimeout(() => navigate("/auth"), 1800);
    return () => window.clearTimeout(id);
  }, [navigate]);

  return (
    <section className="screen splash" aria-label="Splash">
      <div className="brand-mark">
        Gym<span className="plus">+1</span>
      </div>
      <p className="tag">Train with someone</p>
    </section>
  );
}
