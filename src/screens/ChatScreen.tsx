import { useNavigate } from "react-router-dom";
import { AppHeader } from "../components/AppHeader";
import { CHAT_THREADS } from "../data/demo";
import { SearchIcon } from "../components/icons";

export function ChatScreen() {
  const navigate = useNavigate();
  return (
    <div className="chat-screen">
      <AppHeader variant="plain" />
      <h1 className="section-title">Chat</h1>
      <div className="search-field solo">
        <SearchIcon />
        <input readOnly placeholder="Search messages" />
      </div>
      <div className="thread-list">
        {CHAT_THREADS.map((t) => (
          <button
            key={t.id}
            type="button"
            className="thread"
            onClick={() => navigate(`/app/chat/${t.id}`)}
          >
            <div
              className={`thread-avatar${t.online ? " online" : ""}`}
              style={{ backgroundImage: `url(${t.photo})` }}
            />
            <div className="thread-body">
              <div className="thread-top">
                <strong>{t.name}</strong>
                <span className="thread-time">{t.time}</span>
              </div>
              <div className="thread-bottom">
                <p>{t.message}</p>
                {t.unread > 0 && <span className="unread">{t.unread}</span>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
