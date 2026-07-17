import { useNavigate } from "react-router-dom";
import { BackSquare } from "../components/ui";
import { useOnboarding } from "../context/OnboardingContext";
import { USER_AVATAR } from "../data/demo";
import { ShieldCheckIcon, BoltIcon, BookmarkIcon, GearIcon } from "../components/icons";

export function SettingsScreen() {
  const navigate = useNavigate();
  const { data, reset } = useOnboarding();
  const name = data.name || "Jennie";

  function logout() {
    reset();
    navigate("/");
  }

  return (
    <div className="list-screen">
      <header className="list-header">
        <BackSquare to="/app/home" />
        <h1>Settings &amp; Profile</h1>
      </header>

      <div className="settings-profile">
        <div className="avatar" style={{ backgroundImage: `url(${USER_AVATAR})` }} />
        <div>
          <strong>{name}</strong>
          <span>
            {data.experience === "personal-trainer" ? "Personal Trainer" : "+1 Member"}
            {data.superPlusOne ? " · Super +1" : ""}
          </span>
        </div>
      </div>

      <div className="settings-group">
        <button type="button" className="settings-row" onClick={() => navigate("/app/super-plus-one")}>
          <span className="settings-ic"><ShieldCheckIcon size={20} /></span>
          Become a Super +1
          <span className="settings-chev">›</span>
        </button>
        <button type="button" className="settings-row" onClick={() => navigate("/app/spotlight")}>
          <span className="settings-ic"><BoltIcon size={18} /></span>
          Get Spotlight
          <span className="settings-chev">›</span>
        </button>
        <button type="button" className="settings-row" onClick={() => navigate("/app/plan/muscle-building")}>
          <span className="settings-ic"><BookmarkIcon size={18} /></span>
          My Workout Plans
          <span className="settings-chev">›</span>
        </button>
        <button type="button" className="settings-row" onClick={() => navigate("/app/notifications")}>
          <span className="settings-ic"><GearIcon size={18} /></span>
          Notifications
          <span className="settings-chev">›</span>
        </button>
      </div>

      <button type="button" className="btn btn-black btn-block logout-btn" onClick={logout}>
        Log out
      </button>
    </div>
  );
}
