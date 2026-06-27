type Props = {
  variant?: "dark" | "light";
  className?: string;
  showWordmark?: boolean;
};

/**
 * Forward Church Ministries — placeholder logo.
 * Circular outline with double chevron arrow (forward motion) + wordmark.
 * Swap with official SVG when uploaded.
 */
export function Logo({ variant = "dark", className, showWordmark = true }: Props) {
  const wordmarkColor = variant === "light" ? "#ffffff" : "var(--brand-dark)";
  const subColor = variant === "light" ? "rgba(255,255,255,0.75)" : "var(--brand)";

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-9 w-9 shrink-0"
      >
        <circle cx="24" cy="24" r="22" fill="none" stroke="var(--brand)" strokeWidth="2.5" />
        <path
          d="M14 17 L22 24 L14 31"
          fill="none"
          stroke="var(--brand-accent)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 17 L31 24 L23 31"
          fill="none"
          stroke="var(--brand)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className="font-display font-extrabold tracking-tight text-[15px]"
            style={{ color: wordmarkColor }}
          >
            FORWARD
          </span>
          <span
            className="text-[9px] font-semibold tracking-[0.18em] uppercase mt-0.5"
            style={{ color: subColor }}
          >
            Church Ministries
          </span>
        </div>
      )}
    </div>
  );
}
