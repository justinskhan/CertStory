import { getCertsByField, getCertById } from '../data/certifications-expanded.js'

// Level progression for experience matching
const LEVEL_ORDER = { foundational: 0, intermediate: 1, advanced: 2 }

// Map education levels to numeric value (0-5)
const EDUCATION_LEVELS = {
  'High School': 0,
  'Some College': 1,
  'Associate Degree': 2,
  'Bachelor Degree': 3,
  'Master Degree': 4,
  'PhD': 5
}

// Map years of experience to numeric value
const EXPERIENCE_LEVELS = {
  '0 years (Entry level)': 0,
  '1-2 years': 1,
  '3-5 years': 2,
  '6-10 years': 3,
  '10+ years': 4
}

// Time mapping
const TIME_LEVELS = {
  'None': 0,
  '1-3 hrs/week': 1,
  '4-7 hrs/week': 2,
  '8-15 hrs/week': 3,
  '15+ hrs/week': 4
}

// Budget mapping
const BUDGET_LEVELS = {
  'None': 0,
  'Under $100': 1,
  '$100-$300': 2,
  '$300-$700': 3,
  '$700+': 4
}

function scoreFieldAlignment(cert, userField) {
  const normalizedUserField = userField.toLowerCase().replace(/ /g, '-')
  if (cert.field === normalizedUserField) return 100
  // Related field gets partial credit
  if (isRelatedField(cert.field, normalizedUserField)) return 70
  return 30
}

function isRelatedField(certField, userField) {
  const relationships = {
    'it': ['software-engineering', 'cloud'],
    'software-engineering': ['it', 'cloud'],
    'cybersecurity': ['it', 'cloud'],
    'cloud': ['it', 'software-engineering']
  }
  const normalized = userField.toLowerCase().replace(/ /g, '-')
  return relationships[normalized]?.includes(certField.toLowerCase().replace(/ /g, '-')) || false
}

function scoreNicheAlignment(cert, userNiches) {
  if (!userNiches || userNiches.length === 0) return 50

  const certSubfield = (cert.subfield || '').toLowerCase()
  const matchCount = userNiches.filter(niche => {
    const niches = [
      'help-desk', 'network-administration', 'systems-administration', 'it-support', 'hardware-support',
      'frontend-development', 'backend-development', 'full-stack', 'mobile-development', 'devops-engineering',
      'network-security', 'application-security', 'security-administration', 'threat-analysis', 'ethical-hacking',
      'aws', 'azure', 'google-cloud', 'multi-cloud', 'cloud-architecture'
    ]
    const normalizedNiche = niche.toLowerCase().replace(/ /g, '-')
    return niches.includes(normalizedNiche) && certSubfield.includes(normalizedNiche.split('-')[0])
  }).length

  if (matchCount === userNiches.length) return 100
  if (matchCount > 0) return 50 + (matchCount / userNiches.length) * 50
  return 40
}

function scoreExperienceLevelFit(cert, userExperience, userEducation, userYearsExperience) {
  const expLevel = EXPERIENCE_LEVELS[userYearsExperience] ?? 0
  const eduLevel = EDUCATION_LEVELS[userEducation] ?? 0
  const certLevel = LEVEL_ORDER[cert.level] ?? 0

  let score = 50

  // Years of experience matching
  if (cert.level === 'foundational' && expLevel <= 1) score = 100
  else if (cert.level === 'foundational' && expLevel <= 2) score = 85
  else if (cert.level === 'foundational') score = 60

  if (cert.level === 'intermediate' && expLevel >= 1 && expLevel <= 3) score = 100
  else if (cert.level === 'intermediate' && expLevel >= 1) score = 85
  else if (cert.level === 'intermediate' && expLevel === 0) score = 50

  if (cert.level === 'advanced' && expLevel >= 3) score = 100
  else if (cert.level === 'advanced' && expLevel >= 2) score = 75
  else if (cert.level === 'advanced') score = 40

  // Education boost: each education level gives +5 to adjacent cert levels
  const eduBoost = Math.min(20, eduLevel * 5)
  score = Math.min(100, score + eduBoost * 0.3)

  return Math.round(score)
}

function scoreMarketDemand(cert) {
  const demand = cert.demandScore || 50
  if (demand >= 80) return 100
  if (demand >= 60) return 75
  return 50
}

function scoreFeasibility(cert, userTime, userBudget) {
  const timeLevel = TIME_LEVELS[userTime] || 0
  const budgetLevel = BUDGET_LEVELS[userBudget] || 0

  // Parse cert cost (estimate from cost + examFee)
  const certCost = (cert.cost || 0) + (cert.examFee || 0)

  let feasibilityScore = 50

  // Time feasibility (generous scoring)
  if (userTime === 'None') feasibilityScore = 40
  else if (userTime === '1-3 hrs/week') feasibilityScore = 70
  else feasibilityScore = 100

  // Budget feasibility
  if (userBudget === 'None' && certCost > 0) feasibilityScore = Math.max(40, feasibilityScore - 20)
  else if (budgetLevel === 1 && certCost > 100) feasibilityScore = Math.max(50, feasibilityScore - 15)
  else if (budgetLevel === 2 && certCost > 400) feasibilityScore = Math.max(60, feasibilityScore - 10)

  return Math.round(feasibilityScore)
}

function scoreJobExperienceAlignment(userExperience, cert) {
  if (!userExperience || userExperience.length === 0) return 0

  let alignmentScore = 0
  const relevantTitles = ['Cloud', 'AWS', 'Azure', 'DevOps', 'Developer', 'Engineer', 'Admin', 'Security', 'Network']

  userExperience.forEach(exp => {
    const title = (exp.title || '').toLowerCase()
    const desc = (exp.description || '').toLowerCase()

    relevantTitles.forEach(keyword => {
      if (title.includes(keyword.toLowerCase())) alignmentScore += 15
      if (desc.includes(keyword.toLowerCase())) alignmentScore += 10
    })
  })

  return Math.min(25, alignmentScore)
}

function scorePrerequisites(cert, completedCerts = []) {
  if (!cert.prerequisites || cert.prerequisites.length === 0) return 20

  const metPrereqs = cert.prerequisites.filter(prereq =>
    completedCerts.some(c => c.id === prereq)
  ).length

  const ratio = metPrereqs / cert.prerequisites.length
  return Math.round(20 * ratio)
}

export function generateRecommendations(userProfile, allCerts = null) {
  // Import certs if not provided
  const certs = allCerts || getCertsByField(userProfile.certField)

  if (!certs || certs.length === 0) {
    return {
      primary: null,
      alternatives: [],
      notRecommended: []
    }
  }

  // Score all certifications
  const scored = certs.map(cert => {
    const fieldScore = scoreFieldAlignment(cert, userProfile.certField) * 0.4
    const nicheScore = scoreNicheAlignment(cert, userProfile.niche) * 0.25
    const expScore = scoreExperienceLevelFit(cert, userProfile.experience, userProfile.education, userProfile.yearsExperience) * 0.2
    const demandScore = scoreMarketDemand(cert) * 0.1
    const feasScore = scoreFeasibility(cert, userProfile.time, userProfile.budget) * 0.05
    const jobScore = scoreJobExperienceAlignment(userProfile.experience, cert)

    const totalScore = fieldScore + nicheScore + expScore + demandScore + feasScore + jobScore

    return {
      cert,
      score: Math.min(100, Math.round(totalScore))
    }
  })

  // Sort by score
  scored.sort((a, b) => b.score - a.score)

  // Find best starting point (top foundational or top overall if none foundational)
  const foundationalCerts = scored.filter(s => s.cert.level === 'foundational').slice(0, 5)
  const topCerts = scored.slice(0, 10)

  const primaryCandidate = foundationalCerts.length > 0 ? foundationalCerts[0] : topCerts[0]

  // Build recommended path
  const recommendedPath = buildRecommendedPath(
    primaryCandidate.cert,
    scored,
    userProfile.yearsExperience,
    userProfile.education
  )

  // Generate reasoning for primary
  const primaryReasoning = generateReasoning(primaryCandidate.cert, userProfile, scored)

  // Get alternatives (top 3 others)
  const alternatives = topCerts
    .filter(s => s.cert.id !== primaryCandidate.cert.id)
    .slice(0, 3)
    .map(s => ({
      cert: s.cert,
      score: s.score,
      reasoning: {
        strengths: [`Alternative path in ${s.cert.subfield}`],
        rationale: `${s.cert.name} is another strong option with a demand score of ${s.cert.demandScore} and typical ${s.cert.cost || 100}-${(s.cert.cost || 100) + (s.cert.examFee || 100)} cost.`,
        estimatedPath: []
      }
    }))

  // Get not recommended (low scorers with explanation)
  const notRecommended = scored
    .filter(s => s.score < 45)
    .slice(0, 2)
    .map(s => ({
      cert: s.cert,
      score: s.score,
      reason: generateNotRecommendedReason(s.cert, userProfile)
    }))

  return {
    primary: {
      cert: primaryCandidate.cert,
      score: primaryCandidate.score,
      reasoning: primaryReasoning,
      recommendedPath
    },
    alternatives,
    notRecommended
  }
}

function buildRecommendedPath(startCert, allScored, yearsExp, education) {
  const path = [startCert.id]
  const expLevel = EXPERIENCE_LEVELS[yearsExp] ?? 0

  // Filter certifications for path building
  const candidates = allScored
    .filter(s => !path.includes(s.cert.id) && s.cert.field === startCert.field)
    .sort((a, b) => {
      // Prefer next level up
      if (a.cert.level !== b.cert.level) {
        return LEVEL_ORDER[a.cert.level] - LEVEL_ORDER[b.cert.level]
      }
      return b.score - a.score
    })

  // Build path: aim for 5 certs
  while (path.length < 5 && candidates.length > 0) {
    const next = candidates.shift()
    if (next && !path.includes(next.cert.id)) {
      path.push(next.cert.id)
    }
  }

  return path
}

function generateReasoning(cert, userProfile, allScored) {
  const strengths = []
  const expertise = (userProfile.yearsExperience || '').split(' ')[0]

  // Build strength statements based on profile
  if (userProfile.niche && userProfile.niche.length > 0) {
    strengths.push(`Your interest in ${userProfile.niche.join(' and ')} aligns perfectly with this certification.`)
  }

  if (expertise && expertise !== '0') {
    strengths.push(`With ${expertise}+ years of experience, you have the foundation needed for this credential.`)
  }

  if (cert.demandScore >= 80) {
    strengths.push(`${cert.name} is in high demand with ${cert.jobPostings || 4000}+ open roles.`)
  }

  // Rationale
  const rationale = `${cert.name} is the ideal starting point on your certification path. ` +
    `It requires ${cert.duration || '2-3 months'} of study and costs around $${cert.cost || 100}. ` +
    `Professionals with this cert earn an average of $${cert.avgSalary || 80000} annually.`

  // Next steps
  const nextCerts = allScored
    .filter(s => s.cert.field === cert.field && s.cert.id !== cert.id)
    .slice(0, 2)
    .map(s => `${s.cert.name} (${s.cert.duration})`)

  return {
    strengths,
    rationale,
    nextSteps: nextCerts,
    estimatedPath: [] // Populated by buildRecommendedPath
  }
}

function generateNotRecommendedReason(cert, userProfile) {
  const reasons = []

  if (cert.level === 'advanced' && EXPERIENCE_LEVELS[userProfile.yearsExperience] < 2) {
    reasons.push(`${cert.name} is an advanced certification that typically requires 3+ years of experience.`)
  }

  if (cert.demandScore < 50) {
    reasons.push(`While valuable, ${cert.name} has lower market demand compared to alternatives.`)
  }

  return reasons.length > 0 ? reasons.join(' ') : `${cert.name} may not be the best fit for your current goals.`
}

export default generateRecommendations
