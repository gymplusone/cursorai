import { Link, useLocation } from "react-router-dom";
import type { ComponentType } from "react";

type NavItem = {
  to: string;
  label: string;
  icon?: ComponentType;
  plus?: boolean;
};

const items: NavItem[] = [
  { to: "/app/home", label: "Home", icon: HomeIcon },
  { to: "/app/calendar", label: "Calendar", icon: CalendarIcon },
  { to: "/app/feed", label: "+1", plus: true },
  { to: "/app/invites", label: "Invites", icon: InvitesIcon },
  { to: "/app/chat", label: "Chat", icon: ChatIcon },
];

export function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="bottom-nav" aria-label="Main">
      {items.map((item) => {
        const active = pathname === item.to;
        if (item.plus) {
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-item plus${active ? " active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="plus-bubble">+1</span>
              <span className="label">{item.label}</span>
            </Link>
          );
        }
        const Icon = item.icon!;
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`nav-item${active ? " active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <Icon />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
    </svg>
  );
}

function InvitesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7.5 12 13l8-5.5" />
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 18.5 3.5 21V7.5A2.5 2.5 0 0 1 6 5h12a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 18 18H7.5L5 18.5Z" />
    </svg>
  );
}
