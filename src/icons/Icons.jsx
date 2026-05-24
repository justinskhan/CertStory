// Reusable SVG icons. All take className/size as props for flexibility.
// Stroked icons inherit currentColor so you can color them via CSS.

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const filledProps = { fill: 'currentColor' }

export const HomeIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

export const ChartIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)

export const ChatIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

export const RoadmapIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <polyline points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
    <line x1="8" y1="2" x2="8" y2="18"/>
    <line x1="16" y1="6" x2="16" y2="22"/>
  </svg>
)

export const ProfileIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

export const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} strokeWidth="2.2" {...p}>
    <line x1="4" y1="7" x2="20" y2="7"/>
    <line x1="4" y1="12" x2="20" y2="12"/>
    <line x1="4" y1="17" x2="14" y2="17"/>
  </svg>
)

export const BackIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} strokeWidth="2.3" {...p}>
    <polyline points="15 18 9 12 15 6"/>
  </svg>
)

export const ChevronRightIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} strokeWidth="2.5" {...p}>
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)

export const CheckIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} strokeWidth="3" {...p}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

export const LockIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} strokeWidth="2.5" {...p}>
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

export const StarIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} strokeWidth="2.5" {...p}>
    <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/>
  </svg>
)

export const SearchIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)

export const SettingsIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
)

export const CodeIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
)

export const ShieldIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

export const CloudIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
)

export const QuestionIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} strokeWidth="2.2" {...p}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

export const TrophyIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <circle cx="12" cy="8" r="6"/>
    <polyline points="8 14 8 22 12 19 16 22 16 14"/>
  </svg>
)

export const ClockIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

export const DollarIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
)

export const ThumbsUpIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
  </svg>
)

export const CommentIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

export const PlusIcon = (p) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...p}>
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
)

// iOS-style status bar icons (filled)
export const SignalIcon = (p) => (
  <svg viewBox="0 0 24 24" {...filledProps} {...p}>
    <path d="M2 22h2v-8H2v8zm5 0h2V8H7v14zm5 0h2V2h-2v20zm5 0h2v-6h-2v6zm5 0h2v-12h-2v12z"/>
  </svg>
)

export const WifiIcon = (p) => (
  <svg viewBox="0 0 24 24" {...filledProps} {...p}>
    <path d="M12 3C7 3 2.7 5.5 0 9.4L12 21 24 9.4C21.3 5.5 17 3 12 3z"/>
  </svg>
)

export const BatteryIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <rect x="2" y="7" width="18" height="10" rx="2"/>
    <path d="M22 11v2" strokeLinecap="round"/>
    <rect x="4" y="9" width="13" height="6" fill="currentColor"/>
  </svg>
)
