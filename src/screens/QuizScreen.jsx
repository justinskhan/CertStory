import { useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import { SearchIcon, CheckIcon, PlusIcon } from '../icons/Icons.jsx'

// Static options for the quiz steps
const SKILL_OPTIONS = ['Python', 'Java', 'SQL', 'AWS', 'JavaScript', 'Linux', 'Docker', 'Git', 'C++', 'Excel']
const FIELD_OPTIONS = ['AI', 'Data Analysis', 'Cloud Computing', 'Cybersecurity', 'DevOps', 'Mobile Dev', 'Web Dev', 'Game Dev']
const TIME_OPTIONS = ['None', '1-3 hrs/week', '4-7 hrs/week', '8-15 hrs/week', '15+ hrs/week']
const BUDGET_OPTIONS = ['None', 'Under $100', '$100-$300', '$300-$700', '$700+']

export default function QuizScreen({ nav }) {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    skills: [],
    fields: [],
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

  const next = () => setStep(s => Math.min(5, s + 1))
  const back = () => step === 1 ? nav.popScreen() : setStep(s => s - 1)

  return (
    <div className="screen">
      <TopBar onBack={back} showAvatar={false} />

      {step <= 4 && (
        <div className="quiz-header">
          <div className="quiz-progress">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`seg ${i <= step ? 'done' : ''}`} />
            ))}
          </div>
          <div className="quiz-step-label">{step}/4 Questions</div>
        </div>
      )}

      {step === 1 && (
        <>
          <h2 className="quiz-question">Please select the skills that apply to your current skillset:</h2>
          <div className="search-field">
            <SearchIcon />
            <input placeholder="Search skills..." />
          </div>
          <div className="selected-count"><strong>{answers.skills.length}</strong> Selected</div>
          <div className="option-list">
            {SKILL_OPTIONS.map(skill => (
              <button
                key={skill}
                className={`option-row ${answers.skills.includes(skill) ? 'selected' : ''}`}
                onClick={() => toggle('skills', skill)}
              >
                {skill}
                <div className="check"><CheckIcon /></div>
              </button>
            ))}
          </div>
          <div className="quiz-actions">
            <button className="btn-primary" onClick={next}>Next</button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="quiz-question">What career field(s) are you interested in?</h2>
          <div className="search-field">
            <SearchIcon />
            <input placeholder="Search fields..." />
          </div>
          <div className="selected-count"><strong>{answers.fields.length}</strong> Selected</div>
          <div className="option-list">
            {FIELD_OPTIONS.map(field => (
              <button
                key={field}
                className={`option-row ${answers.fields.includes(field) ? 'selected' : ''}`}
                onClick={() => toggle('fields', field)}
              >
                {field}
                <div className="check"><CheckIcon /></div>
              </button>
            ))}
          </div>
          <div className="quiz-actions">
            <button className="btn-primary" onClick={next}>Next</button>
          </div>
        </>
      )}

      {step === 3 && (
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

      {step === 4 && (
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

      {step === 5 && (
        <div className="quiz-result">
          <div className="check-circle"><CheckIcon /></div>
          <h2>Your roadmap is ready!</h2>
          <p>
            Based on your skills and goals, we've picked these certs to build your custom path.
          </p>

          <div className="recommendation-card">
            <div className="reco-label">Recommended first</div>
            <h3>AWS Cloud Practitioner</h3>
            <div className="reco-desc">A perfect entry point given your existing AWS familiarity. ~1-2 months, $100.</div>
          </div>

          <div className="recommendation-card">
            <div className="reco-label">Next up</div>
            <h3>AWS Solutions Architect Associate</h3>
            <div className="reco-desc">The most in-demand cloud cert. 8,420 employers asking for it right now.</div>
          </div>

          <div className="quiz-actions">
            <button className="btn-secondary" onClick={nav.popScreen}>Close</button>
            <button className="btn-primary" onClick={() => { nav.popScreen(); nav.goToTab('roadmap'); }}>
              View my Roadmap
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
