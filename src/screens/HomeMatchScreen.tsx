import { useCallback, useRef, useState, type PointerEvent } from "react";
import { MATCHES, type MatchProfile } from "../data/demo";
import { useOnboarding } from "../context/OnboardingContext";

const SWIPE_THRESHOLD = 110;

export function HomeMatchScreen() {
  const { data } = useOnboarding();
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
  const likeOpacity = Math.min(1, Math.max(0, offset.x / 100));
  const nopeOpacity = Math.min(1, Math.max(0, -offset.x / 100));

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <header className="match-header">
        <div>
          <p className="eyebrow">Home</p>
          <h2 className="h2">
            {data.name ? `Hey ${data.name.split(" ")[0]}` : "Your matches"}
          </h2>
        </div>
        <div className="brand-mark" style={{ fontSize: "1.25rem" }}>
          Gym<span className="plus">+1</span>
        </div>
      </header>

      <div className="deck">
        {!current ? (
          <div className="empty-deck">
            <p className="h2">You’re caught up</p>
            <p style={{ marginTop: 8 }}>
              Check the +1 feed for people posting workouts near you.
            </p>
          </div>
        ) : (
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
            <div className="stamp like" style={{ opacity: likeOpacity }}>
              +1
            </div>
            <div className="stamp nope" style={{ opacity: nopeOpacity }}>
              Skip
            </div>
            <div className="meta">
              <h2>
                {current.name}, {current.age}
              </h2>
              <p>
                {current.gym} · {current.focus}
              </p>
            </div>
          </article>
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
            ✕
          </button>
          <button
            type="button"
            className="swipe-btn like"
            aria-label="Match"
            onClick={() => dismiss("right")}
          >
            +1
          </button>
        </div>
      )}
    </div>
  );
}
