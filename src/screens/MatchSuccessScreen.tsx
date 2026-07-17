import { useNavigate, useSearchParams } from "react-router-dom";
import { MATCHES, USER_AVATAR } from "../data/demo";
import { BackSquare } from "../components/ui";
import { ShieldCheckIcon, SendIcon } from "../components/icons";

export function MatchSuccessScreen() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get("id");
  const profile = MATCHES.find((m) => m.id === id) ?? MATCHES[0];

  return (
    <div className="match-success">
      <div className="ms-top">
        <BackSquare to="/app/plus-one" />
      </div>

      <div className="ms-cards">
        <div className="ms-photo" style={{ backgroundImage: `url(${USER_AVATAR})` }} />
        <div className="ms-photo tilt" style={{ backgroundImage: `url(${profile.photo})` }} />
        <span className="ms-badge">
          <ShieldCheckIcon size={30} />
        </span>
      </div>

      <h1 className="ms-title">It's A Match!</h1>
      <p className="ms-sub">Now, you have 24 hours to start chatting</p>

      <div className="spacer" />

      <button
        type="button"
        className="ms-message"
        onClick={() => navigate(`/app/chat/${profile.id}`)}
      >
        <span>Send a Message.....</span>
        <SendIcon />
      </button>
    </div>
  );
}
