import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackSquare } from "../components/ui";
import {
  ShieldCheckIcon,
  AppleLogo,
  CardIcon,
  XIcon,
  CheckIcon,
} from "../components/icons";
import { SUPER_TIERS, SUPER_BENEFITS } from "../data/demo";
import { useOnboarding } from "../context/OnboardingContext";

export function SuperPlusOneScreen() {
  const navigate = useNavigate();
  const { update } = useOnboarding();
  const [selected, setSelected] = useState(
    SUPER_TIERS.find((t) => t.popular)?.id ?? SUPER_TIERS[0].id,
  );
  const [payOpen, setPayOpen] = useState(false);
  const [done, setDone] = useState(false);

  function completePurchase() {
    update({ superPlusOne: true });
    setPayOpen(false);
    setDone(true);
  }

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

      <ul className="benefit-list">
        {SUPER_BENEFITS.map((b) => (
          <li key={b}>
            <span className="benefit-tick">
              <CheckIcon size={14} />
            </span>
            {b}
          </li>
        ))}
      </ul>

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
            <button type="button" className="pay-apple" onClick={completePurchase}>
              <AppleLogo size={20} /> Pay
            </button>
            <div className="pay-divider">Or Pay Using</div>
            <button type="button" className="pay-card" onClick={completePurchase}>
              <CardIcon size={22} /> Card
            </button>
          </div>
        </div>
      )}

      {done && (
        <div className="pay-overlay" onClick={() => navigate("/app/invites")}>
          <div className="upgrade-modal" onClick={(e) => e.stopPropagation()}>
            <div className="success-badge">
              <CheckIcon size={30} />
            </div>
            <h2>You're a Super +1!</h2>
            <p>Invitations are now unlocked. View who wants to train with you.</p>
            <button
              type="button"
              className="btn btn-blue btn-block"
              onClick={() => navigate("/app/invites")}
            >
              View Invites
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
