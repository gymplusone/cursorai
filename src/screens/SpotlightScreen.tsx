import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackSquare } from "../components/ui";
import { ShieldCheckIcon, CheckIcon } from "../components/icons";
import { SPOTLIGHT_TIERS } from "../data/demo";
import { useOnboarding } from "../context/OnboardingContext";

export function SpotlightScreen() {
  const navigate = useNavigate();
  const { update } = useOnboarding();
  const [selected, setSelected] = useState(
    SPOTLIGHT_TIERS.find((t) => t.popular)?.id ?? SPOTLIGHT_TIERS[0].id,
  );
  const [done, setDone] = useState(false);

  function upgrade(id: string) {
    setSelected(id);
    update({ spotlightActive: true });
    setDone(true);
  }

  return (
    <div className="sub-screen">
      <BackSquare to="/app/home" />

      <div className="sub-badge">
        <ShieldCheckIcon size={46} />
      </div>
      <h1 className="sub-headline">Step into the Spotlight</h1>
      <p className="sub-copy">
        Your profile will be shown to more users in your area
      </p>

      <div className="tier-row">
        {SPOTLIGHT_TIERS.map((t) => {
          const active = t.id === selected;
          return (
            <button
              key={t.id}
              type="button"
              className={`tier-card${active ? " active" : ""}`}
              onClick={() => setSelected(t.id)}
            >
              {t.popular && <span className="tier-tag">MOST POPULAR</span>}
              <span className="tier-label">{t.label}</span>
              <span className="tier-price">{t.price}</span>
              <span
                className="tier-cta"
                onClick={(e) => {
                  e.stopPropagation();
                  upgrade(t.id);
                }}
              >
                Upgrade Now
              </span>
            </button>
          );
        })}
      </div>

      {done && (
        <div className="pay-overlay" onClick={() => navigate("/app/plus-one")}>
          <div className="upgrade-modal" onClick={(e) => e.stopPropagation()}>
            <div className="success-badge">
              <CheckIcon size={30} />
            </div>
            <h2>You're in the Spotlight!</h2>
            <p>Your profile is now boosted to more +1s in your area.</p>
            <button
              type="button"
              className="btn btn-blue btn-block"
              onClick={() => navigate("/app/plus-one")}
            >
              Start matching
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
