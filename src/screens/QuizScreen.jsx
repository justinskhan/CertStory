import { useState, useMemo } from 'react'
import TopBar from '../components/TopBar.jsx'
import { SearchIcon, CheckIcon, PlusIcon } from '../icons/Icons.jsx'
import generateRecommendations from '../utils/recommendationEngine.js'
import { getCertById } from '../data/certifications-expanded.js'

// Certification fields
const CERT_FIELDS = ['IT', 'Software Engineering', 'Cybersecurity', 'Cloud']

// Niche options per certification field
const NICHE_OPTIONS = {
  'IT': ['Help Desk', 'Network Administration', 'Systems Administration', 'IT Support', 'Hardware Support'],
  'Software Engineering': ['Frontend Development', 'Backend Development', 'Full Stack', 'Mobile Development', 'DevOps Engineering'],
  'Cybersecurity': ['Network Security', 'Application Security', 'Security Administration', 'Threat Analysis', 'Ethical Hacking'],
  'Cloud': ['AWS', 'Azure', 'Google Cloud', 'Multi-Cloud', 'Cloud Architecture']
}

// Education levels
const EDUCATION_OPTIONS = ['High School', 'Some College', 'Associate Degree', 'Bachelor Degree', 'Master Degree', 'PhD']

// Experience options
const EXPERIENCE_YEARS = ['0 years (Entry level)', '1-2 years', '3-5 years', '6-10 years', '10+ years']

// Time and budget options
const TIME_OPTIONS = ['None', '1-3 hrs/week', '4-7 hrs/week', '8-15 hrs/week', '15+ hrs/week']
const BUDGET_OPTIONS = ['None', 'Under $100', '$100-$300', '$300-$700', '$700+']

function ResultsPage({ answers, nav }) {
  const recommendations = useMemo(() => {
    return generateRecommendations(answers)
  }, [answers])

  if (!recommendations.primary) {
    return (
      <div className="quiz-result">
        <p>Unable to generate recommendations. Please try again.</p>
      </div>
    )
  }

  const primary = recommendations.primary
  const cert = primary.cert
  const nextCert = primary.reasoning?.nextSteps?.[0] || ''

  return (
    <div className="quiz-result">
      <div className="check-circle"><CheckIcon /></div>
      <h2>Your roadmap is ready!</h2>
      <p>
        Based on your goals and experience, we've picked the best certification path for you.
      </p>

      <div className="recommendation-card">
        <div className="reco-label">Recommended first (Match: {primary.score}%)</div>
        <h3>{cert.name}</h3>
        <div className="reco-desc">
          {primary.reasoning?.strengths?.[0] || 'A perfect fit for your goals.'}
        </div>
        <div className="reco-desc" style={{ fontSize: '0.85em', marginTop: '8px', opacity: 0.8 }}>
          {cert.duration} • ${cert.cost + (cert.examFee || 0)} • {cert.demandScore}% market demand
        </div>
      </div>

      {nextCert && (
        <div className="recommendation-card">
          <div className="reco-label">Next up</div>
          <h3>{nextCert.split('(')[0].trim()}</h3>
          <div className="reco-desc">Builds on {cert.name} to expand your expertise in {cert.subfield}.</div>
        </div>
      )}

      {recommendations.alternatives?.length > 0 && (
        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e0e0e0' }}>
          <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '8px' }}>
            <strong>Other strong options:</strong>
          </div>
          {recommendations.alternatives.slice(0, 2).map((alt, i) => (
            <div key={i} style={{ fontSize: '0.85em', marginBottom: '4px', color: '#666' }}>
              • {alt.cert.name} (Match: {alt.score}%)
            </div>
          ))}
        </div>
      )}

      <div className="quiz-actions">
        <button className="btn-secondary" onClick={nav.popScreen}>Close</button>
        <button className="btn-primary" onClick={() => {
          nav.setQuizResults({ answers, recommendations })
          nav.setQuizCompleted(true)
          nav.popScreen()
          nav.goToTab('roadmap')
        }}>
          View my Roadmap
        </button>
      </div>
    </div>
  )
}

export default function QuizScreen({ nav }) {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    certField: '',
    niche: [],
    education: '',
    yearsExperience: '',
    experience: [{ title: '', description: '' }],
    time: 'None',
    budget: 'None'
  })

  function toggle(field, value) {
    setAnswers(a => ({
      ...a,
      [field]: a[field].includes(value)
        ? a[field].filter(v => v !== value)
        : [...a[field], value]
    }))
  }

  function updateExperience(i, key, value) {
    setAnswers(a => {
      const exp = [...a.experience]
      exp[i] = { ...exp[i], [key]: value }
      return { ...a, experience: exp }
    })
  }

  function addExperience() {
    setAnswers(a => ({ ...a, experience: [...a.experience, { title: '', description: '' }] }))
  }

  const next = () => setStep(s => Math.min(7, s + 1))
  const back = () => step === 1 ? nav.popScreen() : setStep(s => s - 1)

  return (
    <div className="screen">
      <TopBar onBack={back} showAvatar={false} />

      {step <= 6 && (
        <div className="quiz-header">
          <div className="quiz-progress">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className={`seg ${i <= step ? 'done' : ''}`} />
            ))}
          </div>
          <div className="quiz-step-label">{step}/6 Questions</div>
        </div>
      )}

      {step === 1 && (
        <>
          <h2 className="quiz-question">What certification are you interested in?</h2>
          <div className="option-list">
            {CERT_FIELDS.map(field => (
              <button
                key={field}
                className={`option-row ${answers.certField === field ? 'selected' : ''}`}
                onClick={() => setAnswers(a => ({ ...a, certField: field, niche: [] }))}
              >
                {field}
                <div className="check"><CheckIcon /></div>
              </button>
            ))}
          </div>
          <div className="quiz-actions">
            <button className="btn-primary" onClick={next} disabled={!answers.certField}>Next</button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="quiz-question">Select the niche(s) within {answers.certField}:</h2>
          <div className="selected-count"><strong>{answers.niche.length}</strong> Selected</div>
          <div className="option-list">
            {NICHE_OPTIONS[answers.certField]?.map(niche => (
              <button
                key={niche}
                className={`option-row ${answers.niche.includes(niche) ? 'selected' : ''}`}
                onClick={() => toggle('niche', niche)}
              >
                {niche}
                <div className="check"><CheckIcon /></div>
              </button>
            ))}
          </div>
          <div className="quiz-actions">
            <button className="btn-primary" onClick={next} disabled={answers.niche.length === 0}>Next</button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="quiz-question">What is the highest education you have completed?</h2>
          <div className="option-list">
            {EDUCATION_OPTIONS.map(edu => (
              <button
                key={edu}
                className={`option-row ${answers.education === edu ? 'selected' : ''}`}
                onClick={() => setAnswers(a => ({ ...a, education: edu }))}
              >
                {edu}
                <div className="check"><CheckIcon /></div>
              </button>
            ))}
          </div>
          <div className="quiz-actions">
            <button className="btn-primary" onClick={next} disabled={!answers.education}>Next</button>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h2 className="quiz-question">How many years of experience do you have?</h2>
          <div className="option-list">
            {EXPERIENCE_YEARS.map(years => (
              <button
                key={years}
                className={`option-row ${answers.yearsExperience === years ? 'selected' : ''}`}
                onClick={() => setAnswers(a => ({ ...a, yearsExperience: years }))}
              >
                {years}
                <div className="check"><CheckIcon /></div>
              </button>
            ))}
          </div>
          <div className="quiz-actions">
            <button className="btn-primary" onClick={next} disabled={!answers.yearsExperience}>Next</button>
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <h2 className="quiz-question">Add in your career experience.</h2>
          {answers.experience.map((exp, i) => (
            <div key={i}>
              <label className="field-label">Job Title #{i + 1}</label>
              <input
                className="text-field"
                placeholder="e.g. Junior Help Desk Technician"
                value={exp.title}
                onChange={e => updateExperience(i, 'title', e.target.value)}
              />
              <textarea
                className="text-field"
                placeholder="Add a brief description of what you did..."
                value={exp.description}
                onChange={e => updateExperience(i, 'description', e.target.value)}
              />
            </div>
          ))}
          <button className="add-more-btn" onClick={addExperience}>
            <PlusIcon style={{ width: 14, height: 14 }} />
            Add another role
          </button>
          <div className="quiz-actions">
            <button className="btn-primary" onClick={next}>Next</button>
          </div>
        </>
      )}

      {step === 6 && (
        <>
          <h2 className="quiz-question">What's your availability and budget?</h2>
          <label className="field-label">Time commitment</label>
          <select
            className="dropdown-field"
            value={answers.time}
            onChange={e => setAnswers(a => ({ ...a, time: e.target.value }))}
          >
            {TIME_OPTIONS.map(o => <option key={o}>{o}</option>)}
          </select>

          <label className="field-label">Budget</label>
          <select
            className="dropdown-field"
            value={answers.budget}
            onChange={e => setAnswers(a => ({ ...a, budget: e.target.value }))}
          >
            {BUDGET_OPTIONS.map(o => <option key={o}>{o}</option>)}
          </select>

          <div className="quiz-actions">
            <button className="btn-primary" onClick={next}>Done</button>
          </div>
        </>
      )}

      {step === 7 && <ResultsPage answers={answers} nav={nav} />}
    </div>
  )
}
