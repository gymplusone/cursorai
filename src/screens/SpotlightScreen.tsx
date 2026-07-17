import { useState } from "react";
import { BackSquare } from "../components/ui";
import { ShieldCheckIcon } from "../components/icons";
import { SPOTLIGHT_TIERS } from "../data/demo";

export function SpotlightScreen() {
  const [selected, setSelected] = useState(
    SPOTLIGHT_TIERS.find((t) => t.popular)?.id ?? SPOTLIGHT_TIERS[0].id,
  );

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
              <span className="tier-cta">Upgrade Now</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
