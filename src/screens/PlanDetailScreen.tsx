import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackSquare } from "../components/ui";
import { BookmarkIcon, CheckIcon } from "../components/icons";
import { PLAN_DETAIL } from "../data/demo";

export function PlanDetailScreen() {
  const navigate = useNavigate();
  const plan = PLAN_DETAIL;
  const [saved, setSaved] = useState(false);
  const [modal, setModal] = useState<null | "preview" | "bought">(null);

  return (
    <div className="plan-screen">
      <BackSquare to="/app/home" />

      <div
        className="plan-hero"
        style={{ backgroundImage: `url(${plan.photo})` }}
      >
        <span className="plan-premium">Premium</span>
      </div>

      <div className="plan-head">
        <div>
          <h1>{plan.title}</h1>
          <p className="muted">{plan.subtitle}</p>
        </div>
        <button
          type="button"
          className={`plan-bookmark${saved ? " saved" : ""}`}
          aria-label="Save plan"
          aria-pressed={saved}
          onClick={() => setSaved((s) => !s)}
        >
          <BookmarkIcon />
        </button>
      </div>

      <p className="plan-desc">{plan.description}</p>

      <h3 className="plan-by-title">Plan By</h3>
      <div className="plan-author">
        <div
          className="plan-author-avatar online"
          style={{ backgroundImage: `url(${plan.authorAvatar})` }}
        />
        <div>
          <strong>{plan.author}</strong>
          <span>{plan.authorEmail}</span>
        </div>
      </div>

      <div className="plan-actions">
        <button
          type="button"
          className="btn btn-blue btn-block"
          onClick={() => setModal("preview")}
        >
          Preview
        </button>
        <button
          type="button"
          className="btn btn-blue btn-block"
          onClick={() => setModal("bought")}
        >
          Buy Now · {plan.price}
        </button>
      </div>

      {modal && (
        <div className="pay-overlay" onClick={() => setModal(null)}>
          <div className="upgrade-modal" onClick={(e) => e.stopPropagation()}>
            {modal === "bought" ? (
              <>
                <div className="success-badge">
                  <CheckIcon size={30} />
                </div>
                <h2>Plan purchased!</h2>
                <p>{plan.title} is now in your workout plans.</p>
                <button
                  type="button"
                  className="btn btn-blue btn-block"
                  onClick={() => navigate("/app/calendar")}
                >
                  Schedule a session
                </button>
              </>
            ) : (
              <>
                <h2>{plan.title}</h2>
                <p>
                  Preview: Week 1 focuses on foundational compound lifts —
                  squat, bench, deadlift — at moderate volume with full-body
                  warm-ups. Unlock the full 8-week programme by purchasing.
                </p>
                <button
                  type="button"
                  className="btn btn-blue btn-block"
                  onClick={() => setModal("bought")}
                >
                  Buy Now · {plan.price}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
