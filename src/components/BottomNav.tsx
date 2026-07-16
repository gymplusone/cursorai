import { Link, useLocation } from "react-router-dom";
import type { ComponentType } from "react";

type NavItem = {
  to: string;
  label: string;
  icon?: ComponentType<{ active?: boolean }>;
  variant?: "home" | "plus";
};

const items: NavItem[] = [
  { to: "/app/home", label: "Home", variant: "home" },
  { to: "/app/calendar", label: "Calendar", icon: CalendarIcon },
  { to: "/app/feed", label: "+1", variant: "plus" },
  { to: "/app/invites", label: "Invites", icon: InvitesIcon },
  { to: "/app/chat", label: "Chat", icon: ChatIcon },
];

export function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="bottom-nav" aria-label="Main">
      {items.map((item) => {
        const active = pathname === item.to;
        if (item.variant === "home") {
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-item${active ? " active home-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="home-bubble">1</span>
              <span>{item.label}</span>
            </Link>
          );
        }
        if (item.variant === "plus") {
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-item plus${active ? " active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="plus-bubble">+</span>
              <span>{item.label}</span>
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
            <Icon active={active} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
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
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-6.5-4.1-8.6-7.3C1.5 10.7 2.9 7.5 6.2 7.5c1.7 0 2.9.9 3.6 1.8.7-.9 1.9-1.8 3.6-1.8 3.3 0 4.7 3.2 2.8 6.2C18.5 16.9 12 21 12 21Z" />
      <path d="M19 8.5h2v2h-2v2h-2v-2h-2v-2h2v-2h2v2Z" />
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
