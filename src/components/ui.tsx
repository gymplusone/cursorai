import { useNavigate } from "react-router-dom";
import { BackArrowIcon } from "./icons";

export function BackSquare({ to }: { to?: string }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="back-sq"
      aria-label="Back"
      onClick={() => (to ? navigate(to) : navigate(-1))}
    >
      <BackArrowIcon />
    </button>
  );
}

export function Brand({ light = true }: { light?: boolean }) {
  return (
    <div className="brand-block" style={light ? undefined : { color: "#000" }}>
      <div className="brand-mark">Gym+1</div>
      <div className="brand-tag">Match your workout vibe</div>
    </div>
  );
}

export function Legal() {
  return (
    <div className="legal">
      <div>By continuing, you agree to our</div>
      <div className="links">
        <span>Term of Service</span>
        <span>Privacy Policy</span>
        <span>Content Policies</span>
      </div>
    </div>
  );
}
