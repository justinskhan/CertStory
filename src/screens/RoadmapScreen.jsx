import TopBar from '../components/TopBar.jsx'
import { CURRENT_ROADMAP, getRoadmapStats } from '../data/roadmap.js'
import { getCertById } from '../data/certifications.js'
import { getCertById as getCertByIdExpanded } from '../data/certifications-expanded.js'
import { TrophyIcon, CheckIcon, StarIcon, LockIcon } from '../icons/Icons.jsx'

export default function RoadmapScreen({ nav, quizResults, completedCerts }) {
  // Use quiz results if available, otherwise use default roadmap
  const isQuizGenerated = !!quizResults
  const stats = isQuizGenerated ? null : getRoadmapStats()

  const handleCertClick = (certId) => {
    const newCompleted = completedCerts.includes(certId)
      ? completedCerts.filter(id => id !== certId)
      : [...completedCerts, certId]
    nav.setCompletedCerts(newCompleted)
  }

  // Build roadmap from quiz results or use default
  let roadmapName = CURRENT_ROADMAP.name
  let roadmapSteps = CURRENT_ROADMAP.steps
  let displayStats = stats

  if (isQuizGenerated && quizResults.recommendations?.primary) {
    const { answers, recommendations } = quizResults
    roadmapName = `${answers.niche?.[0] || answers.certField} Certification Path`

    // Build steps from recommended path
    const pathCertIds = recommendations.primary.recommendedPath || []
    roadmapSteps = pathCertIds.map((certId, idx) => ({
      certId,
      status: idx === 0 ? 'active' : 'locked',
      progress: idx === 0 ? 0 : undefined,
      earnedDate: undefined
    }))

    displayStats = {
      total: roadmapSteps.length,
      done: 0
    }
  }

  // Render the steps in reverse so "start" is at the bottom and "goal" is at top
  const reversedSteps = [...roadmapSteps].reverse()

  return (
    <div className="screen">
      <TopBar />

      <div className="roadmap-header">
        <div className="roadmap-badge">
          <TrophyIcon />
        </div>
        <h2>{roadmapName}</h2>
        <p>{displayStats.total} certifications · {displayStats.done || 0} of {displayStats.total} complete</p>
      </div>

      <div className="roadmap-track">
        <div className="track-endpoint-wrap">
          <div className="track-endpoint">🏁 Goal</div>
        </div>

        {reversedSteps.map((step, i) => {
          const cert = isQuizGenerated ? getCertByIdExpanded(step.certId) : getCertById(step.certId)
          if (!cert) return null
          const side = i % 2 === 0 ? 'left' : 'right'
          const isCompleted = completedCerts.includes(cert.id)
          const displayStatus = isCompleted ? 'done' : step.status
          return (
            <div key={cert.id} className={`cert-node ${side}`} data-quiz-roadmap={isQuizGenerated}>
              <button
                className={`cert-bubble ${displayStatus} ${isQuizGenerated && isCompleted ? 'quiz-done' : ''}`}
                onClick={() => {
                  if (isQuizGenerated) {
                    handleCertClick(cert.id)
                  } else {
                    nav.pushScreen('certDetail', { certId: cert.id })
                  }
                }}
              >
                <div className="status-row">
                  <span className={`status-pill ${displayStatus}`}>
                    {displayStatus === 'done' && 'Complete'}
                    {displayStatus === 'active' && 'In progress'}
                    {displayStatus === 'locked' && 'Locked'}
                  </span>
                </div>
                <div className="cert-title">{cert.name}</div>
                <div className="cert-meta">
                  {displayStatus === 'done' && `Earned ${step.earnedDate || 'recently'}`}
                  {displayStatus === 'active' && `${step.progress}% studied · $${cert.cost}`}
                  {displayStatus === 'locked' && `~ ${cert.duration} · $${cert.cost}`}
                </div>
              </button>

              <div className={`cert-marker ${isQuizGenerated && isCompleted ? 'quiz-done' : displayStatus}`}>
                {displayStatus === 'done' && <CheckIcon />}
                {displayStatus === 'active' && <StarIcon />}
                {displayStatus === 'locked' && <LockIcon />}
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
