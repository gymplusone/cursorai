import { useCallback, useRef, useState, type PointerEvent } from "react";
import { useNavigate } from "react-router-dom";
import { MATCHES, type MatchProfile } from "../data/demo";
import { AppHeader } from "../components/AppHeader";
import {
  SearchIcon,
  FilterIcon,
  PinIcon,
  XIcon,
  HeartIcon,
  BoltIcon,
} from "../components/icons";

const SWIPE_THRESHOLD = 110;

export function PlusOneScreen() {
  const navigate = useNavigate();
  const [queue, setQueue] = useState<MatchProfile[]>(MATCHES);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const start = useRef<{ x: number; y: number } | null>(null);
  const current = queue[0];

  const dismiss = useCallback((dir: "left" | "right") => {
    setOffset({ x: dir === "right" ? 460 : -460, y: 40 });
    window.setTimeout(() => {
      setQueue((q) => q.slice(1));
      setOffset({ x: 0, y: 0 });
      setDragging(false);
    }, 240);
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
    <div className="plus-one-screen">
      <AppHeader variant="plain" showMessage />

      <div className="search-row">
        <div className="search-field">
          <SearchIcon />
          <input readOnly placeholder="Search you best match" />
        </div>
        <button type="button" className="search-filter" aria-label="Filters">
          <FilterIcon />
        </button>
      </div>

      <div className="deck">
        {!current ? (
          <div className="empty-deck">
            <p className="subhead" style={{ color: "#000" }}>
              You're all caught up
            </p>
            <p style={{ marginTop: 8 }}>New +1s near you will appear here.</p>
          </div>
        ) : (
          <article
            className="swipe-card"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotate}deg)`,
              transition: dragging ? "none" : "transform 0.28s ease",
            }}
            onClick={() => !dragging && navigate(`/app/match?id=${current.id}`)}
          >
            <div
              className="swipe-photo"
              style={{ backgroundImage: `url(${current.photo})` }}
            />
            <div className="swipe-info">
              <h2>
                {current.name}, {current.age}
              </h2>
              <p className="away">
                <PinIcon size={15} /> {current.distance}
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
            <XIcon />
          </button>
          <button
            type="button"
            className="swipe-btn like"
            aria-label="Like"
            onClick={() => dismiss("right")}
          >
            <HeartIcon size={30} />
          </button>
          <button
            type="button"
            className="swipe-btn boost"
            aria-label="Boost"
            onClick={() => navigate("/app/spotlight")}
          >
            <BoltIcon />
          </button>
        </div>
      )}
    </div>
  );
}
