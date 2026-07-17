type IconProps = { size?: number; className?: string };

export function HomeIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.6 3.4c1.9-.6 3.1.3 3.7 1.5.5 1 .6 2.3.3 3.6-.3 1.4-1 2.7-2 3.6-1 .9-2.3 1.4-3.4 1.1-1.2-.3-1.9-1.4-2-2.8-.2-1.5.2-3.2 1-4.5.6-1 1.4-1.8 2.4-2.1Zm10.8 6.7c1.4-.2 2.4.6 2.8 1.8.3 1 .2 2.2-.3 3.3-.5 1.1-1.4 2.1-2.4 2.6-1 .5-2.2.6-3-.1-.8-.6-1-1.8-.8-3 .3-1.4 1.1-2.8 2.2-3.7.5-.4 1-.7 1.5-.9Z" />
    </svg>
  );
}

export function CalendarIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden>
      <rect x="3.5" y="5" width="17" height="15" rx="3" />
      <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
    </svg>
  );
}

export function PlusIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className={className} aria-hidden>
      <path d="M12 6v12M6 12h12" />
    </svg>
  );
}

export function InvitesIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M5 3h11l3 3v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm6.9 6.2c-.6-.8-1.6-1-2.4-.4-.8.6-.9 1.7-.3 2.5.5.7 1.9 1.9 2.7 2.5.9-.6 2.3-1.8 2.8-2.5.6-.8.5-1.9-.3-2.5-.8-.6-1.8-.4-2.4.4l-.1.2Z" />
    </svg>
  );
}

export function ChatIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M9 3h6a6 6 0 0 1 6 6v.5a6 6 0 0 1-6 6h-1l-3.4 2.9a.6.6 0 0 1-1-.46V15.5H9a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6Z" />
    </svg>
  );
}

export function BellIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-6V11a7 7 0 1 0-14 0v5l-2 2v1h18v-1l-2-2Z" />
    </svg>
  );
}

export function GearIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.1 7.1 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.59.24-1.13.55-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.84a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.14.24.43.34.68.22l2.39-.96c.5.39 1.04.7 1.63.94l.36 2.54c.05.24.26.42.5.42h3.84c.24 0 .45-.18.5-.42l.36-2.54c.59-.24 1.13-.55 1.63-.94l2.39.96c.25.1.54 0 .68-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z" />
    </svg>
  );
}

export function MessageIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4 4h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8l-4 3.2V5a1 1 0 0 1 1-1Zm4 6a1.3 1.3 0 1 0 0 2.6A1.3 1.3 0 0 0 8 10Zm4 0a1.3 1.3 0 1 0 0 2.6A1.3 1.3 0 0 0 12 10Zm4 0a1.3 1.3 0 1 0 0 2.6A1.3 1.3 0 0 0 16 10Z" />
    </svg>
  );
}

export function SearchIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}

export function FilterIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden>
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
      <circle cx="16" cy="7" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="8" cy="17" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}

export function XIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function HeartIcon({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 21s-7.2-4.6-9.5-8.2C.6 9.8 2.2 6 6 6c2 0 3.3 1.1 4 2.1C10.7 7.1 12 6 14 6c3.8 0 5.4 3.8 3.5 6.8C19.2 16.4 12 21 12 21Z" />
    </svg>
  );
}

export function BoltIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" />
    </svg>
  );
}

export function CheckIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export function BackArrowIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M19 12H5M11 6 5 12l6 6" />
    </svg>
  );
}

export function VerifiedBadge({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path fill="#0001FF" d="M12 2.2c.9-1 2.5-1 3.4 0l.5.5c.5.5 1.2.8 1.9.7l.7-.1c1.4-.2 2.6 1 2.4 2.4l-.1.7c-.1.7.2 1.4.7 1.9l.5.5c1 .9 1 2.5 0 3.4l-.5.5c-.5.5-.8 1.2-.7 1.9l.1.7c.2 1.4-1 2.6-2.4 2.4l-.7-.1c-.7-.1-1.4.2-1.9.7l-.5.5c-.9 1-2.5 1-3.4 0l-.5-.5c-.5-.5-1.2-.8-1.9-.7l-.7.1c-1.4.2-2.6-1-2.4-2.4l.1-.7c.1-.7-.2-1.4-.7-1.9l-.5-.5c-1-.9-1-2.5 0-3.4l.5-.5c.5-.5.8-1.2.7-1.9l-.1-.7c-.2-1.4 1-2.6 2.4-2.4l.7.1c.7.1 1.4-.2 1.9-.7l.5-.5Z" />
      <path fill="#fff" d="m8.5 12 2.2 2.2 4.8-4.8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldCheckIcon({ size = 40, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.6 6.3 5v6.2c0 3.6 2.4 6.9 5.7 8.1 3.3-1.2 5.7-4.5 5.7-8.1V5L12 2.6Z" />
      <path fill="#fff" d="m8.8 12 2.1 2.1 4.4-4.4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BookmarkIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M6 4h12v16l-6-4-6 4V4Z" />
    </svg>
  );
}

export function DumbbellIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M3 9h2v6H3V9zm16 0h2v6h-2V9zM7 10h10v4H7v-4zm-2-3h2v10H5V7zm14 0h2v10h-2V7z" />
    </svg>
  );
}

export function AppleLogo({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.4 12.8c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8s-1.7-.8-2.8-.8c-1.5 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.2 2.6 2.1 1-.04 1.5-.7 2.7-.7s1.6.7 2.8.6c1.1-.02 1.9-1 2.6-2 .8-1.2 1.2-2.3 1.2-2.4-.03-.01-2.3-.9-2.4-3.6ZM14.2 6.5c.6-.7 1-1.7.9-2.7-.9.04-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .08 2-.5 2.5-1.2Z" />
    </svg>
  );
}

export function CardIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <rect x="2.5" y="8" width="19" height="3" fill="#000" />
    </svg>
  );
}

export function ShareIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6" />
    </svg>
  );
}
