// The user's current roadmap. Order is start -> goal (bottom-up in the UI).
// status: 'done' | 'active' | 'locked'

export const CURRENT_ROADMAP = {
  id: 'cloud-engineer-path',
  name: 'Cloud Engineer Path',
  description: 'A 5-step journey from networking fundamentals to senior cloud architecture.',
  steps: [
    { certId: 'comptia-network-plus', status: 'done',   earnedDate: 'Jan 2026' },
    { certId: 'aws-ccp',              status: 'done',   earnedDate: 'Mar 2026' },
    { certId: 'aws-saa',              status: 'active', progress: 62 },
    { certId: 'cka',                  status: 'locked' },
    { certId: 'aws-developer',        status: 'locked' }
  ]
}

export function getRoadmapStats(roadmap = CURRENT_ROADMAP) {
  const total = roadmap.steps.length
  const done = roadmap.steps.filter(s => s.status === 'done').length
  return {
    total,
    done,
    percent: Math.round((done / total) * 100)
  }
}
