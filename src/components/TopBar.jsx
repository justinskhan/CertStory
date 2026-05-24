import { MenuIcon, BackIcon } from '../icons/Icons.jsx'

// Top bar shown on most screens. If onBack is provided, shows a back button
// instead of a menu button. Hides the avatar when showAvatar is false.

export default function TopBar({ onBack, showAvatar = true, initials = 'JM' }) {
  return (
    <div className="top-bar">
      {onBack ? (
        <button className="back-btn" onClick={onBack} aria-label="Back">
          <BackIcon />
        </button>
      ) : (
        <button className="menu-btn" aria-label="Menu">
          <MenuIcon />
        </button>
      )}
      {showAvatar && <div className="avatar">{initials}</div>}
    </div>
  )
}
