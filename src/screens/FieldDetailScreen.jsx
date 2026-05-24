import TopBar from '../components/TopBar.jsx'
import { getFieldById } from '../data/fields.js'
import { getCertById } from '../data/certifications.js'
import { SettingsIcon, CodeIcon, ShieldIcon, CloudIcon, ClockIcon, DollarIcon } from '../icons/Icons.jsx'

const fieldIcons = {
  settings: SettingsIcon,
  code: CodeIcon,
  shield: ShieldIcon,
  cloud: CloudIcon
}

export default function FieldDetailScreen({ nav, fieldId }) {
  const field = getFieldById(fieldId)
  if (!field) {
    return (
      <div className="screen">
        <TopBar onBack={nav.popScreen} />
        <p>Field not found.</p>
      </div>
    )
  }

  const Icon = fieldIcons[field.icon]
  const certs = field.certIds.map(getCertById).filter(Boolean)

  return (
    <div className="screen">
      <TopBar onBack={nav.popScreen} />

      <div className={`field-hero bg-${field.color}`}>
        <div className="field-icon"><Icon /></div>
        <h2>{field.name}</h2>
        <p>{field.description}</p>
        <div className="field-stats">
          <div>
            <div className="field-stat-num">{field.openRoles}</div>
            <div className="field-stat-label">Open roles</div>
          </div>
          <div>
            <div className="field-stat-num">{field.avgSalary}</div>
            <div className="field-stat-label">Avg salary</div>
          </div>
          <div>
            <div className="field-stat-num">{certs.length}</div>
            <div className="field-stat-label">Certs</div>
          </div>
        </div>
      </div>

      <div className="section-title">All Certifications</div>

      <div className="cert-list">
        {certs.map(cert => (
          <button
            key={cert.id}
            className="cert-list-card"
            onClick={() => nav.pushScreen('certDetail', { certId: cert.id })}
          >
            <div className="card-top">
              <div>
                <div className="card-title">{cert.name}</div>
                <div className="card-provider">{cert.provider}</div>
              </div>
              <span className={`level-pill ${cert.level}`}>{cert.level}</span>
            </div>
            <div className="card-meta">
              <span><ClockIcon />{cert.duration}</span>
              <span><DollarIcon />${cert.cost}</span>
              <span className="demand-pill">{cert.demandScore}/100 demand</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
