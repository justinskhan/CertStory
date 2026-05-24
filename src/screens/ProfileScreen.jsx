import TopBar from '../components/TopBar.jsx'
import { ProfileIcon, CheckIcon, RoadmapIcon, SettingsIcon, ChevronRightIcon } from '../icons/Icons.jsx'

export default function ProfileScreen({ nav }) {
  return (
    <div className="screen">
      <TopBar showAvatar={false} />

      <div className="profile-header">
        <div className="profile-avatar">J</div>
        <div className="profile-name">Jordan Mitchell</div>
        <div className="profile-role">Aspiring Cloud Engineer</div>
      </div>

      <div className="profile-stats">
        <div className="stat-box">
          <div className="stat-value">2</div>
          <div className="stat-label">Earned</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">147</div>
          <div className="stat-label">Study hrs</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">14</div>
          <div className="stat-label">Day streak</div>
        </div>
      </div>

      <div className="profile-menu">
        <button className="menu-item">
          <div className="menu-icon"><ProfileIcon /></div>
          <div className="menu-label">My Profile</div>
          <div className="menu-arrow"><ChevronRightIcon /></div>
        </button>
        <button className="menu-item">
          <div className="menu-icon"><CheckIcon /></div>
          <div className="menu-label">My Skills</div>
          <div className="menu-arrow"><ChevronRightIcon /></div>
        </button>
        <button className="menu-item" onClick={() => nav.goToTab('roadmap')}>
          <div className="menu-icon"><RoadmapIcon /></div>
          <div className="menu-label">My Roadmaps</div>
          <div className="menu-arrow"><ChevronRightIcon /></div>
        </button>
        <button className="menu-item">
          <div className="menu-icon"><SettingsIcon /></div>
          <div className="menu-label">Settings</div>
          <div className="menu-arrow"><ChevronRightIcon /></div>
        </button>
      </div>
    </div>
  )
}
