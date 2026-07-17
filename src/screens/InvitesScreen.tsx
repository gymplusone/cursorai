import { AppHeader } from "../components/AppHeader";
import { INVITES } from "../data/demo";

export function InvitesScreen() {
  return (
    <div className="invites-screen">
      <AppHeader variant="plain" />
      <div className="invite-grid">
        {INVITES.map((inv) => (
          <button key={inv.id} type="button" className="invite-card">
            <div
              className="invite-photo"
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
    </div>
  );
}
