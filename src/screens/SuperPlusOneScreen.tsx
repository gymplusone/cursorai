import { useState } from "react";
import { BackSquare } from "../components/ui";
import { ShieldCheckIcon, AppleLogo, CardIcon, XIcon } from "../components/icons";
import { SUPER_TIERS } from "../data/demo";

export function SuperPlusOneScreen() {
  const [selected, setSelected] = useState(
    SUPER_TIERS.find((t) => t.popular)?.id ?? SUPER_TIERS[0].id,
  );
  const [payOpen, setPayOpen] = useState(false);

  return (
    <div className="sub-screen">
      <BackSquare to="/app/home" />

      <div className="sub-badge">
        <ShieldCheckIcon size={46} />
      </div>
      <h1 className="sub-headline">Become a Super +1</h1>
      <p className="sub-copy">
        Unlimited likes, 1 hour spotlight a month, view invitations (see
        invitees biography)
      </p>

      <div className="tier-row">
        {SUPER_TIERS.map((t) => {
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
                  setSelected(t.id);
                  setPayOpen(true);
                }}
              >
                Upgrade Now
              </span>
            </button>
          );
        })}
      </div>

      {payOpen && (
        <div className="pay-overlay" onClick={() => setPayOpen(false)}>
          <div className="pay-sheet" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="pay-close"
              aria-label="Close"
              onClick={() => setPayOpen(false)}
            >
              <XIcon size={18} />
            </button>
            <button type="button" className="pay-apple">
              <AppleLogo size={20} /> Pay
            </button>
            <div className="pay-divider">Or Pay Using</div>
            <button type="button" className="pay-card">
              <CardIcon size={22} /> Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
