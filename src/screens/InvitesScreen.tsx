import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppHeader } from "../components/AppHeader";
import { INVITES } from "../data/demo";
import { useOnboarding } from "../context/OnboardingContext";

export function InvitesScreen() {
  const navigate = useNavigate();
  const { data } = useOnboarding();
  const locked = !data.superPlusOne;
  const [promptFor, setPromptFor] = useState<string | null>(null);

  const promptCard = INVITES.find((i) => i.id === promptFor);

  function openCard(id: string) {
    if (locked) setPromptFor(id);
    else navigate(`/app/match?id=${id}`);
  }

  return (
    <div className="invites-screen">
      <AppHeader variant="plain" />
      <div className="invite-grid">
        {INVITES.map((inv) => (
          <button
            key={inv.id}
            type="button"
            className="invite-card"
            onClick={() => openCard(inv.id)}
          >
            <div
              className={`invite-photo${locked ? " blurred" : ""}`}
              style={{ backgroundImage: `url(${inv.photo})` }}
            />
            <div className="invite-meta">
              <strong>
                {inv.name}, {inv.age}
              </strong>
              <span>{inv.distance}</span>
            </div>
          </button>
        ))}
      </div>

      {promptCard && (
        <div className="pay-overlay" onClick={() => setPromptFor(null)}>
          <div className="upgrade-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Want to view this profile?</h2>
            <p>Upgrade to Super +1 or PT and start building stronger fitness connections.</p>
            <div
              className="upgrade-avatar blurred"
              style={{ backgroundImage: `url(${promptCard.photo})` }}
            />
            <button
              type="button"
              className="btn btn-blue btn-block"
              onClick={() => navigate("/app/super-plus-one")}
            >
              Upgrade Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
