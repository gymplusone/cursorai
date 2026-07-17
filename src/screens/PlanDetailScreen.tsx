import { BackSquare } from "../components/ui";
import { BookmarkIcon } from "../components/icons";
import { PLAN_DETAIL } from "../data/demo";

export function PlanDetailScreen() {
  const plan = PLAN_DETAIL;
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
        <button type="button" className="plan-bookmark" aria-label="Save plan">
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
        <button type="button" className="btn btn-blue btn-block">
          Preview
        </button>
        <button type="button" className="btn btn-blue btn-block">
          Buy Now
        </button>
      </div>
    </div>
  );
}
