import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
import { USER_AVATAR } from "../data/demo";
import { BellIcon, GearIcon, MessageIcon } from "./icons";

type Props = {
  variant?: "brand" | "plain";
  showMessage?: boolean;
};

export function AppHeader({ variant = "brand", showMessage = false }: Props) {
  const navigate = useNavigate();
  const { data } = useOnboarding();
  const firstName = data.name?.split(" ")[0] || "Jennie";

  return (
    <header className={`app-header${variant === "plain" ? " plain" : ""}`}>
      <div className="hello">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${USER_AVATAR})` }}
        />
        <div>
          <strong>Hello {firstName}</strong>
          <span>
            Good Morning <span aria-hidden>🌤️</span>
          </span>
        </div>
      </div>
      {variant === "brand" && (
        <div className="brand-center">
          <div className="brand-mark">Gym+1</div>
          <div className="brand-tag">Match your workout vibe</div>
        </div>
      )}
      <div className="actions">
        {showMessage && (
          <button
            type="button"
            className="icon-sq"
            aria-label="Messages"
            onClick={() => navigate("/app/chat")}
          >
            <MessageIcon />
            <span className="badge">3</span>
          </button>
        )}
        <button
          type="button"
          className="icon-sq"
          aria-label="Notifications"
          onClick={() => navigate("/app/notifications")}
        >
          <BellIcon />
          <span className="badge">20</span>
        </button>
        <button
          type="button"
          className="icon-sq"
          aria-label="Settings"
          onClick={() => navigate("/app/settings")}
        >
          <GearIcon />
        </button>
      </div>
    </header>
  );
}

export function SubChips() {
  const navigate = useNavigate();
  return (
    <div className="chip-row">
      <button
        type="button"
        className="chip-btn"
        onClick={() => navigate("/app/spotlight")}
      >
        Spotlight
      </button>
      <button
        type="button"
        className="chip-btn"
        onClick={() => navigate("/app/super-plus-one")}
      >
        Super +1
      </button>
    </div>
  );
}
