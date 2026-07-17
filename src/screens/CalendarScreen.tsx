import { AppHeader } from "../components/AppHeader";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const DAYS = Array.from({ length: 30 }, (_, i) => i + 1);
const SESSIONS = [
  { id: "e1", title: "Legs day with Natasha", time: "Today · 6:00 AM", place: "Gold's Gym, NY" },
  { id: "e2", title: "Boxing session", time: "Wed · 7:30 PM", place: "Rumble Studio" },
];

export function CalendarScreen() {
  const today = 14;
  return (
    <div className="calendar-screen">
      <AppHeader variant="plain" />
      <h1 className="section-title">Calendar</h1>

      <div className="cal-card">
        <div className="cal-month">July 2026</div>
        <div className="cal-grid">
          {WEEKDAYS.map((d, i) => (
            <span key={i} className="cal-dow">
              {d}
            </span>
          ))}
          {DAYS.map((d) => (
            <span
              key={d}
              className={`cal-day${d === today ? " today" : ""}${
                d === 16 || d === 22 ? " has-dot" : ""
              }`}
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      <h2 className="sub-title">Upcoming sessions</h2>
      <div className="session-list">
        {SESSIONS.map((s) => (
          <div key={s.id} className="session-card">
            <div className="session-dot" />
            <div>
              <strong>{s.title}</strong>
              <span>{s.time}</span>
              <span>{s.place}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
