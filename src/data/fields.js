// The 4 main career fields shown on the Home page
// Each field's certIds reference entries in certifications.js

export const FIELDS = [
  {
    id: 'it',
    name: 'Information Tech',
    shortName: 'IT',
    icon: 'settings',
    color: 'it',
    description: 'Foundational certs for IT support, networking, and systems administration. A common entry point into tech.',
    avgSalary: '$62k',
    openRoles: '8,420',
    certIds: ['comptia-a-plus', 'comptia-network-plus', 'comptia-server-plus', 'ms-900', 'google-it-support', 'itil-foundation']
  },
  {
    id: 'swe',
    name: 'Software Eng.',
    shortName: 'SWE',
    icon: 'code',
    color: 'swe',
    description: 'Certifications for developers — covering cloud development, modern frameworks, and DevOps practices.',
    avgSalary: '$112k',
    openRoles: '12,160',
    certIds: ['aws-developer', 'az-204', 'oracle-java-se', 'ckad', 'meta-frontend', 'scrum-master']
  },
  {
    id: 'sec',
    name: 'Cybersecurity',
    shortName: 'Security',
    icon: 'shield',
    color: 'sec',
    description: 'High-demand security certifications, from entry-level analysts to senior architects defending modern systems.',
    avgSalary: '$103k',
    openRoles: '6,890',
    certIds: ['security-plus', 'ceh', 'cissp', 'cism', 'cysa-plus', 'gsec']
  },
  {
    id: 'cloud',
    name: 'Cloud',
    shortName: 'Cloud',
    icon: 'cloud',
    color: 'cloud',
    description: 'Cloud platform certifications — the fastest-growing area in tech hiring across AWS, Azure, and GCP.',
    avgSalary: '$128k',
    openRoles: '10,540',
    certIds: ['aws-ccp', 'aws-saa', 'az-900', 'az-104', 'gcp-associate', 'cka']
  }
]

export function getFieldById(id) {
  return FIELDS.find(f => f.id === id)
}
