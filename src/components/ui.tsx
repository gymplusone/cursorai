import { useNavigate } from "react-router-dom";

export function BackButton({ to }: { to?: string }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="back-btn"
      onClick={() => (to ? navigate(to) : navigate(-1))}
    >
      ← Back
    </button>
  );
}

export function ProgressDots({ step, total }: { step: number; total: number }) {
  return (
    <div className="progress-dots" aria-hidden>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={i < step ? "on" : undefined} />
      ))}
    </div>
  );
}
