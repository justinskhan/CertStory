import { HomeIcon, ChartIcon, ChatIcon, RoadmapIcon, ProfileIcon } from '../icons/Icons.jsx'

// Bottom nav with 5 items. The center "Discussion" button is visually elevated.
// When a sub-screen is active, no tab is highlighted (since we're "in" a subpage).

export default function BottomNav({ activeTab, onTabChange, hasSubScreen }) {
  const isActive = (name) => !hasSubScreen && activeTab === name

  return (
    <div className="bottom-nav">
      <button
        className={`nav-item ${isActive('home') ? 'active' : ''}`}
        onClick={() => onTabChange('home')}
      >
        <HomeIcon />
        Home
      </button>
      <button
        className={`nav-item ${isActive('charts') ? 'active' : ''}`}
        onClick={() => onTabChange('charts')}
      >
        <ChartIcon />
        Charts
      </button>
      <button
        className={`nav-item center ${isActive('discussion') ? 'active' : ''}`}
        onClick={() => onTabChange('discussion')}
      >
        <div className="center-circle">
          <ChatIcon />
        </div>
        <span className="center-label">Discuss</span>
      </button>
      <button
        className={`nav-item ${isActive('roadmap') ? 'active' : ''}`}
        onClick={() => onTabChange('roadmap')}
      >
        <RoadmapIcon />
        Roadmap
      </button>
      <button
        className={`nav-item ${isActive('profile') ? 'active' : ''}`}
        onClick={() => onTabChange('profile')}
      >
        <ProfileIcon />
        Profile
      </button>
    </div>
  )
}
