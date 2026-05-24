import TopBar from '../components/TopBar.jsx'
import { FIELDS } from '../data/fields.js'
import { CURRENT_ROADMAP, getRoadmapStats } from '../data/roadmap.js'
import { SettingsIcon, CodeIcon, ShieldIcon, CloudIcon, QuestionIcon } from '../icons/Icons.jsx'

const fieldIcons = {
  settings: SettingsIcon,
  code: CodeIcon,
  shield: ShieldIcon,
  cloud: CloudIcon
}

export default function HomeScreen({ nav }) {
  const stats = getRoadmapStats()

  return (
    <div className="screen">
      <TopBar />

      <div className="greeting">
        <div className="hello">Sunday morning</div>
        <h2>Welcome back, <em>Jordan</em>.</h2>
      </div>

      {/* Active roadmap progress — clicking jumps to the roadmap tab */}
      <button
        className="progress-card"
        onClick={() => nav.goToTab('roadmap')}
        style={{ border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
      >
        <div className="label">Current Roadmap</div>
        <div className="roadmap-name">{CURRENT_ROADMAP.name}</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${stats.percent}%` }} />
        </div>
        <div className="progress-stats">
          <span><strong>{stats.done} of {stats.total}</strong> certifications complete</span>
          <span>{stats.percent}%</span>
        </div>
      </button>

      <div className="section-title">
        Explore Your Skills
        <button className="view-all">See all</button>
      </div>

      <div className="skill-grid">
        {FIELDS.map(field => {
          const Icon = fieldIcons[field.icon]
          return (
            <button
              key={field.id}
              className="skill-card"
              onClick={() => nav.pushScreen('fieldDetail', { fieldId: field.id })}
            >
              <div className={`skill-icon color-${field.color}`}>
                <Icon />
              </div>
              <div className="skill-name">{field.name}</div>
              <div className="skill-count">{field.certIds.length} certifications</div>
            </button>
          )
        })}
      </div>

      <button className="cta-card" onClick={() => nav.pushScreen('quiz')}>
        <div className="icon">
          <QuestionIcon />
        </div>
        <div className="text">
          <h4>Find your next cert</h4>
          <p>Take the recommendation quiz</p>
        </div>
      </button>
    </div>
  )
}
