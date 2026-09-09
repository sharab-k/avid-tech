import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} satisfies SVGProps<SVGSVGElement>;

export const icons = {
  code: (
    <svg {...base}>
      <path d="M8 4 4 12l4 8M16 4l4 8-4 8" />
    </svg>
  ),
  browser: (
    <svg {...base}>
      <path d="M3 5h18v13H3zM3 8h18M8 20h8" />
    </svg>
  ),
  phone: (
    <svg {...base}>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18.5h2" />
    </svg>
  ),
  sun: (
    <svg {...base}>
      <circle cx="12" cy="12" r="3" />
      <path d="M4 12h3M17 12h3M12 4v3M12 17v3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1" />
    </svg>
  ),
  window: (
    <svg {...base}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 4v5" />
    </svg>
  ),
  bulb: (
    <svg {...base}>
      <path d="M12 2a5 5 0 0 1 5 5c0 2-1 3-2 4v2H9v-2c-1-1-2-2-2-4a5 5 0 0 1 5-5z" />
      <path d="M9 20h6M10 22h4" />
    </svg>
  ),
  blocks: (
    <svg {...base}>
      <path d="M12 3l3 2v4l-3 2-3-2V5zM6 9l3 2v4l-3 2-3-2v-4zM18 9l3 2v4l-3 2-3-2v-4zM12 15l3 2v4l-3 2-3-2v-4z" />
    </svg>
  ),
  cloud: (
    <svg {...base}>
      <path d="M7 17a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A4.5 4.5 0 0 1 17 17H7z" />
    </svg>
  ),
  checkCircle: (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  mail: (
    <svg {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  clock: (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  shield: (
    <svg {...base}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  arrowRight: (
    <svg {...base} strokeWidth={2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowUpRight: (
    <svg {...base} strokeWidth={2}>
      <path d="M7 17L17 7M17 7H9M17 7v8" />
    </svg>
  ),
  calendar: (
    <svg {...base}>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  ),
  check: (
    <svg {...base} strokeWidth={2}>
      <path d="M5 12l4 4 10-10" />
    </svg>
  ),
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return <span className={className}>{icons[name]}</span>;
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 12L10 18L20 6"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" focusable="false">
      <path
        d="M10 1l2.6 5.9L19 8l-4.7 4.2L15.5 19 10 15.6 4.5 19l1.2-6.8L1 8l6.4-1.1z"
        fill="currentColor"
      />
    </svg>
  );
}
