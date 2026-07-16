import { useCallback, useRef, useState, type PointerEvent } from "react";
import { MATCHES, type MatchProfile } from "../data/demo";
import { useOnboarding } from "../context/OnboardingContext";

const SWIPE_THRESHOLD = 110;

export function HomeMatchScreen() {
  const { data } = useOnboarding();
  const firstName = data.name?.split(" ")[0] || "Jennie";
  const [queue, setQueue] = useState<MatchProfile[]>(MATCHES);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const start = useRef<{ x: number; y: number } | null>(null);
  const current = queue[0];

  const dismiss = useCallback((dir: "left" | "right") => {
    setOffset({ x: dir === "right" ? 420 : -420, y: 30 });
    window.setTimeout(() => {
      setQueue((q) => q.slice(1));
      setOffset({ x: 0, y: 0 });
      setDragging(false);
    }, 220);
  }, []);

  function onPointerDown(e: PointerEvent<HTMLElement>) {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    start.current = { x: e.clientX, y: e.clientY };
    setDragging(true);
  }

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    if (!start.current || !dragging) return;
    setOffset({
      x: e.clientX - start.current.x,
      y: (e.clientY - start.current.y) * 0.35,
    });
  }

  function onPointerUp() {
    if (!start.current) return;
    if (offset.x > SWIPE_THRESHOLD) dismiss("right");
    else if (offset.x < -SWIPE_THRESHOLD) dismiss("left");
    else {
      setOffset({ x: 0, y: 0 });
      setDragging(false);
    }
    start.current = null;
  }

  const rotate = offset.x * 0.04;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <header className="app-header">
        <div className="hello">
          <div
            className="avatar"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80)",
              backgroundSize: "cover",
            }}
          />
          <div>
            <strong>Hello {firstName}</strong>
            <span>Good Morning</span>
          </div>
        </div>
        <div className="brand-center">
          <div className="brand-mark">Gym+1</div>
          <div className="brand-tag">Match your workout vibe</div>
        </div>
        <div className="actions">
          <button type="button" className="icon-sq" aria-label="Notifications">
            <BellIcon />
            <span className="badge">20</span>
          </button>
          <button type="button" className="icon-sq" aria-label="Settings">
            <GearIcon />
          </button>
        </div>
      </header>

      <div className="chip-row">
        <span className="btn btn-pill btn-blue">Spotlight</span>
        <span className="btn btn-pill btn-blue">Super PT</span>
      </div>

      <div className="deck">
        {!current ? (
          <div className="empty-deck">
            <p className="subhead" style={{ color: "#000" }}>
              You're caught up
            </p>
            <p style={{ marginTop: 8 }}>Check the +1 feed for new workouts.</p>
          </div>
        ) : (
          <>
            <article
              className="match-card"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotate}deg)`,
                transition: dragging ? "none" : "transform 0.25s ease",
              }}
            >
              <div
                className="photo"
                style={{ backgroundImage: `url(${current.photo})` }}
              />
              <div className="match-plus">+1</div>
            </article>
            <div className="match-meta">
              <div className="loc">
                <PinIcon /> {current.location}
              </div>
              <h2>
                {current.name}, {current.age}
              </h2>
              <p className="away">{current.distance}</p>
              <div className="tag-row">
                {current.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {current && (
        <div className="swipe-actions">
          <button
            type="button"
            className="swipe-btn nope"
            aria-label="Skip"
            onClick={() => dismiss("left")}
          >
            <XIcon />
          </button>
          <button
            type="button"
            className="swipe-btn like"
            aria-label="Like"
            onClick={() => dismiss("right")}
          >
            <HeartIcon />
          </button>
          <button type="button" className="swipe-btn boost" aria-label="Boost">
            <BoltIcon />
          </button>
        </div>
      )}
    </div>
  );
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-6V11a7 7 0 1 0-14 0v5l-2 2v1h18v-1l-2-2Z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.1 7.1 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.59.24-1.13.55-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.84a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.14.24.43.34.68.22l2.39-.96c.5.39 1.04.7 1.63.94l.36 2.54c.05.24.26.42.5.42h3.84c.24 0 .45-.18.5-.42l.36-2.54c.59-.24 1.13-.55 1.63-.94l2.39.96c.25.1.54 0 .68-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7.2-4.6-9.5-8.2C.6 9.8 2.2 6 6 6c2 0 3.3 1.1 4 2.1C10.7 7.1 12 6 14 6c3.8 0 5.4 3.8 3.5 6.8C19.2 16.4 12 21 12 21Z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" />
    </svg>
  );
}
