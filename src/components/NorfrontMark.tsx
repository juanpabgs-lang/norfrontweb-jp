interface NorfrontMarkProps {
  className?: string;
  /** Stroke/fill color; defaults to currentColor so text color drives it */
  color?: string;
}

// The Norfront mark: bold chevron with the grounding dot at its foot.
// Drawn to match the brand logo — sharp miter tip, squared stroke ends.
export function NorfrontMark({ className, color = "currentColor" }: NorfrontMarkProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M12 4 L33 19.5 L12 35"
        fill="none"
        stroke={color}
        strokeWidth="8.5"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeLinecap="butt"
      />
      <circle cx="6.5" cy="35.5" r="3.6" fill={color} />
    </svg>
  );
}
