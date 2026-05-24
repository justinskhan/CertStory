import TopBar from '../components/TopBar.jsx'
import { getCertById } from '../data/certifications.js'
import { TrophyIcon } from '../icons/Icons.jsx'

export default function CertDetailScreen({ nav, certId }) {
  const cert = getCertById(certId)
  if (!cert) {
    return (
      <div className="screen">
        <TopBar onBack={nav.popScreen} />
        <p>Certification not found.</p>
      </div>
    )
  }

  return (
    <div className="screen">
      <TopBar onBack={nav.popScreen} />

      <div className="cert-hero">
        <div className="cert-hero-badge">
          <TrophyIcon />
        </div>
        <h2>{cert.name}</h2>
        <div className="provider">{cert.provider}</div>
        <div className="level-row">
          <span className={`level-pill ${cert.level}`}>{cert.level}</span>
          <span className="level-pill" style={{ background: 'var(--primary-softer)', color: 'var(--primary-deep)' }}>
            {cert.demandScore}/100 demand
          </span>
        </div>
      </div>

      <div className="cert-quick-stats">
        <div className="quick-stat">
          <div className="qs-label">Cost</div>
          <div className="qs-value">${cert.cost}</div>
        </div>
        <div className="quick-stat">
          <div className="qs-label">Study time</div>
          <div className="qs-value">{cert.duration}</div>
        </div>
        <div className="quick-stat">
          <div className="qs-label">Postings</div>
          <div className="qs-value">{cert.postings.toLocaleString()}</div>
        </div>
      </div>

      <div className="detail-section">
        <h3>About this cert</h3>
        <p>{cert.description}</p>
      </div>

      <div className="detail-section">
        <h3>Skills you'll learn</h3>
        <div className="skill-pills">
          {cert.skills.map((s, i) => (
            <span key={i} className="pill">{s}</span>
          ))}
        </div>
      </div>

      <div className="detail-section">
        <h3>Top employers asking for this</h3>
        <div className="employer-mini-list">
          {cert.topEmployers.map((e, i) => (
            <div key={i} className="employer-mini">
              <div className="logo">{e.name[0]}</div>
              <div className="name">{e.name}</div>
              <div className="count">{e.count} roles</div>
            </div>
          ))}
        </div>
      </div>

      <div className="action-row">
        <button className="btn-secondary" onClick={() => nav.goToTab('discussion')}>
          Discuss
        </button>
        <button className="btn-primary" onClick={() => {
          nav.goToTab('roadmap')
        }}>
          Add to Roadmap
        </button>
      </div>
    </div>
  )
}
