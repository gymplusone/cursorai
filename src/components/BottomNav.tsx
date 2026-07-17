import { Link, useLocation } from "react-router-dom";
import type { ComponentType } from "react";
import {
  HomeIcon,
  CalendarIcon,
  PlusIcon,
  InvitesIcon,
  ChatIcon,
} from "./icons";

type NavItem = {
  to: string;
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  center?: boolean;
};

const items: NavItem[] = [
  { to: "/app/home", label: "Home", icon: HomeIcon },
  { to: "/app/calendar", label: "Calendar", icon: CalendarIcon },
  { to: "/app/plus-one", label: "+1", icon: PlusIcon, center: true },
  { to: "/app/invites", label: "Invites", icon: InvitesIcon },
  { to: "/app/chat", label: "Chat", icon: ChatIcon },
];

export function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="bottom-nav" aria-label="Main">
      {items.map((item) => {
        const active = pathname.startsWith(item.to);
        const Icon = item.icon;
        if (item.center) {
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-item nav-center${active ? " active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="center-bubble">
                <Icon size={26} />
              </span>
              <span className="nav-label">{item.label}</span>
            </Link>
          );
        }
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`nav-item${active ? " active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <Icon size={24} />
            <span className="nav-label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
