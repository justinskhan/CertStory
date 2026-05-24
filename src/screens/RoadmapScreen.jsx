import TopBar from '../components/TopBar.jsx'
import { CURRENT_ROADMAP, getRoadmapStats } from '../data/roadmap.js'
import { getCertById } from '../data/certifications.js'
import { TrophyIcon, CheckIcon, StarIcon, LockIcon } from '../icons/Icons.jsx'

export default function RoadmapScreen({ nav }) {
  const stats = getRoadmapStats()

  // Render the steps in reverse so "start" is at the bottom and "goal" is at top
  const reversedSteps = [...CURRENT_ROADMAP.steps].reverse()

  return (
    <div className="screen">
      <TopBar />

      <div className="roadmap-header">
        <div className="roadmap-badge">
          <TrophyIcon />
        </div>
        <h2>{CURRENT_ROADMAP.name}</h2>
        <p>{stats.total} certifications · {stats.done} of {stats.total} complete</p>
      </div>

      <div className="roadmap-track">
        <div className="track-endpoint-wrap">
          <div className="track-endpoint">🏁 Goal</div>
        </div>

        {reversedSteps.map((step, i) => {
          const cert = getCertById(step.certId)
          if (!cert) return null
          const side = i % 2 === 0 ? 'left' : 'right'
          return (
            <div key={cert.id} className={`cert-node ${side}`}>
              <button
                className={`cert-bubble ${step.status}`}
                onClick={() => nav.pushScreen('certDetail', { certId: cert.id })}
              >
                <div className="status-row">
                  <span className={`status-pill ${step.status}`}>
                    {step.status === 'done' && 'Complete'}
                    {step.status === 'active' && 'In progress'}
                    {step.status === 'locked' && 'Locked'}
                  </span>
                </div>
                <div className="cert-title">{cert.name}</div>
                <div className="cert-meta">
                  {step.status === 'done' && `Earned ${step.earnedDate}`}
                  {step.status === 'active' && `${step.progress}% studied · $${cert.cost}`}
                  {step.status === 'locked' && `~ ${cert.duration} · $${cert.cost}`}
                </div>
              </button>

              <div className={`cert-marker ${step.status}`}>
                {step.status === 'done' && <CheckIcon />}
                {step.status === 'active' && <StarIcon />}
                {step.status === 'locked' && <LockIcon />}
              </div>
            </div>
          )
        })}

        <div className="track-endpoint-wrap">
          <div className="track-endpoint">▶ Start</div>
        </div>
      </div>
    </div>
  )
}
