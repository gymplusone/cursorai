import { BackSquare } from "../components/ui";
import { HeartIcon, ChatIcon, BoltIcon, ShieldCheckIcon } from "../components/icons";

const NOTIFS = [
  { id: "n1", icon: "match", title: "It's a match with Natasha!", time: "2 min ago" },
  { id: "n2", icon: "chat", title: "Selena sent you a message", time: "1 h ago" },
  { id: "n3", icon: "spotlight", title: "Your Spotlight boost is live", time: "3 h ago" },
  { id: "n4", icon: "super", title: "Hannah invited you to train", time: "Yesterday" },
];

function NIcon({ kind }: { kind: string }) {
  if (kind === "match") return <HeartIcon size={18} />;
  if (kind === "chat") return <ChatIcon size={18} />;
  if (kind === "spotlight") return <BoltIcon size={18} />;
  return <ShieldCheckIcon size={20} />;
}

export function NotificationsScreen() {
  return (
    <div className="list-screen">
      <header className="list-header">
        <BackSquare to="/app/home" />
        <h1>Notifications</h1>
      </header>
      <div className="notif-list">
        {NOTIFS.map((n) => (
          <div key={n.id} className="notif-item">
            <span className="notif-icon">
              <NIcon kind={n.icon} />
            </span>
            <div>
              <strong>{n.title}</strong>
              <span>{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
