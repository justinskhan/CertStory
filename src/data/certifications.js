// Database of certifications. Each cert has rich metadata so the cert detail
// screen and the recommendation engine have something real to show.
//
// Demand score is 0-100. Cost is USD. Duration is human-readable.

export const CERTIFICATIONS = [
  // === INFORMATION TECHNOLOGY ===
  {
    id: 'comptia-a-plus',
    name: 'CompTIA A+',
    provider: 'CompTIA',
    field: 'it',
    level: 'beginner',
    cost: 246,
    duration: '2-3 months',
    description: 'The industry standard for launching an IT career. Validates skills in hardware, networking, operating systems, security, and troubleshooting across devices.',
    skills: ['Hardware', 'Networking', 'Windows', 'Linux', 'Security', 'Troubleshooting'],
    demandScore: 78,
    postings: 4180,
    topEmployers: [
      { name: 'Geek Squad', count: 412 },
      { name: 'Dell', count: 287 },
      { name: 'IBM', count: 201 }
    ]
  },
  {
    id: 'comptia-network-plus',
    name: 'CompTIA Network+',
    provider: 'CompTIA',
    field: 'it',
    level: 'intermediate',
    cost: 358,
    duration: '3 months',
    description: 'Vendor-neutral networking certification covering TCP/IP, routing, switching, and network security. A foundation for both networking and cybersecurity careers.',
    skills: ['TCP/IP', 'Routing', 'Switching', 'Subnetting', 'Network Security', 'Cloud Networking'],
    demandScore: 82,
    postings: 5240,
    topEmployers: [
      { name: 'Cisco', count: 547 },
      { name: 'Comcast', count: 312 },
      { name: 'Verizon', count: 290 }
    ]
  },
  {
    id: 'comptia-server-plus',
    name: 'CompTIA Server+',
    provider: 'CompTIA',
    field: 'it',
    level: 'intermediate',
    cost: 369,
    duration: '3 months',
    description: 'Covers server hardware, software, storage, security, and disaster recovery for on-premises and hybrid environments.',
    skills: ['Server Hardware', 'Virtualization', 'Storage', 'Disaster Recovery'],
    demandScore: 64,
    postings: 1820,
    topEmployers: [
      { name: 'HP Enterprise', count: 198 },
      { name: 'Lenovo', count: 142 }
    ]
  },
  {
    id: 'ms-900',
    name: 'Microsoft 365 Fundamentals',
    provider: 'Microsoft',
    field: 'it',
    level: 'beginner',
    cost: 99,
    duration: '4-6 weeks',
    description: 'Entry-level certification covering Microsoft 365 services, security, compliance, and pricing. Ideal for IT support and helpdesk roles.',
    skills: ['Microsoft 365', 'Teams', 'Compliance', 'Identity Management'],
    demandScore: 71,
    postings: 3120,
    topEmployers: [
      { name: 'Microsoft', count: 380 },
      { name: 'Accenture', count: 245 }
    ]
  },
  {
    id: 'google-it-support',
    name: 'Google IT Support Professional',
    provider: 'Google (Coursera)',
    field: 'it',
    level: 'beginner',
    cost: 234,
    duration: '3-6 months',
    description: 'A self-paced Coursera program designed to prepare beginners for entry-level IT support roles. Includes hands-on labs and a capstone project.',
    skills: ['IT Support', 'Customer Service', 'Troubleshooting', 'System Admin Basics'],
    demandScore: 73,
    postings: 2890,
    topEmployers: [
      { name: 'Google', count: 178 },
      { name: 'Bank of America', count: 134 }
    ]
  },
  {
    id: 'itil-foundation',
    name: 'ITIL 4 Foundation',
    provider: 'Axelos',
    field: 'it',
    level: 'beginner',
    cost: 416,
    duration: '4-8 weeks',
    description: 'Globally recognized framework for IT service management. Useful for anyone working in IT operations, support, or service delivery.',
    skills: ['Service Management', 'Incident Management', 'Change Management'],
    demandScore: 68,
    postings: 2340,
    topEmployers: [
      { name: 'Accenture', count: 287 },
      { name: 'Deloitte', count: 198 }
    ]
  },

  // === SOFTWARE ENGINEERING ===
  {
    id: 'aws-developer',
    name: 'AWS Certified Developer',
    provider: 'Amazon Web Services',
    field: 'swe',
    level: 'intermediate',
    cost: 150,
    duration: '3-4 months',
    description: 'Validates expertise in developing, deploying, and debugging cloud-based applications on AWS. Covers core services and modern application patterns.',
    skills: ['Lambda', 'DynamoDB', 'S3', 'API Gateway', 'CI/CD', 'Cognito'],
    demandScore: 89,
    postings: 6420,
    topEmployers: [
      { name: 'Amazon', count: 745 },
      { name: 'Netflix', count: 312 },
      { name: 'Stripe', count: 198 }
    ]
  },
  {
    id: 'az-204',
    name: 'Azure Developer Associate',
    provider: 'Microsoft',
    field: 'swe',
    level: 'intermediate',
    cost: 165,
    duration: '3-4 months',
    description: 'Microsoft\'s developer certification covering Azure compute, storage, security, and integration services. Strong fit for .NET and modern app developers.',
    skills: ['App Services', 'Azure Functions', 'Cosmos DB', 'Service Bus'],
    demandScore: 84,
    postings: 4980,
    topEmployers: [
      { name: 'Microsoft', count: 590 },
      { name: 'Accenture', count: 287 }
    ]
  },
  {
    id: 'oracle-java-se',
    name: 'Oracle Certified Professional: Java SE',
    provider: 'Oracle',
    field: 'swe',
    level: 'intermediate',
    cost: 245,
    duration: '4-6 months',
    description: 'Validates deep Java expertise covering language fundamentals, generics, streams, modules, and concurrency. Highly respected in enterprise Java shops.',
    skills: ['Java', 'OOP', 'Generics', 'Streams', 'Concurrency'],
    demandScore: 76,
    postings: 3640,
    topEmployers: [
      { name: 'Oracle', count: 287 },
      { name: 'JPMorgan Chase', count: 234 }
    ]
  },
  {
    id: 'ckad',
    name: 'Certified Kubernetes App Developer',
    provider: 'CNCF',
    field: 'swe',
    level: 'advanced',
    cost: 395,
    duration: '3-5 months',
    description: 'Hands-on certification for developers building applications on Kubernetes. The exam is performance-based — you solve real problems in a live cluster.',
    skills: ['Kubernetes', 'Containers', 'YAML', 'Helm', 'Pod Design'],
    demandScore: 85,
    postings: 2940,
    topEmployers: [
      { name: 'Google', count: 412 },
      { name: 'Red Hat', count: 287 }
    ]
  },
  {
    id: 'meta-frontend',
    name: 'Meta Front-End Developer',
    provider: 'Meta (Coursera)',
    field: 'swe',
    level: 'beginner',
    cost: 234,
    duration: '5-7 months',
    description: 'A self-paced program covering HTML, CSS, JavaScript, and React. Includes a portfolio capstone for showing your work to employers.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Version Control'],
    demandScore: 79,
    postings: 4120,
    topEmployers: [
      { name: 'Meta', count: 245 },
      { name: 'Shopify', count: 187 }
    ]
  },
  {
    id: 'scrum-master',
    name: 'Certified ScrumMaster (CSM)',
    provider: 'Scrum Alliance',
    field: 'swe',
    level: 'beginner',
    cost: 1095,
    duration: '2-day course',
    description: 'Industry-recognized credential for Scrum practitioners, focused on facilitating effective agile teams.',
    skills: ['Scrum', 'Agile', 'Facilitation', 'Sprint Planning'],
    demandScore: 70,
    postings: 3180,
    topEmployers: [
      { name: 'Spotify', count: 134 },
      { name: 'Atlassian', count: 112 }
    ]
  },

  // === CYBERSECURITY ===
  {
    id: 'security-plus',
    name: 'CompTIA Security+',
    provider: 'CompTIA',
    field: 'sec',
    level: 'beginner',
    cost: 392,
    duration: '3-4 months',
    description: 'The most popular entry-level cybersecurity certification. DoD-approved (8570) and required for many federal contractor roles.',
    skills: ['Threat Analysis', 'Cryptography', 'Identity Management', 'Risk Mgmt', 'Incident Response'],
    demandScore: 91,
    postings: 7240,
    topEmployers: [
      { name: 'Lockheed Martin', count: 612 },
      { name: 'Booz Allen', count: 480 },
      { name: 'Raytheon', count: 387 }
    ]
  },
  {
    id: 'ceh',
    name: 'Certified Ethical Hacker (CEH)',
    provider: 'EC-Council',
    field: 'sec',
    level: 'intermediate',
    cost: 1199,
    duration: '4-5 months',
    description: 'Covers offensive security techniques used by penetration testers and red teams. DoD-approved for many cybersecurity roles.',
    skills: ['Penetration Testing', 'Network Scanning', 'SQL Injection', 'Social Engineering'],
    demandScore: 82,
    postings: 3940,
    topEmployers: [
      { name: 'Mandiant', count: 187 },
      { name: 'CrowdStrike', count: 165 }
    ]
  },
  {
    id: 'cissp',
    name: 'CISSP',
    provider: '(ISC)²',
    field: 'sec',
    level: 'advanced',
    cost: 749,
    duration: '6-9 months',
    description: 'The gold-standard certification for senior cybersecurity professionals. Requires 5+ years of paid work experience in the field.',
    skills: ['Security Architecture', 'Risk Management', 'Cryptography', 'Governance'],
    demandScore: 94,
    postings: 5820,
    topEmployers: [
      { name: 'Cisco', count: 412 },
      { name: 'IBM', count: 387 },
      { name: 'AWS', count: 312 }
    ]
  },
  {
    id: 'cism',
    name: 'CISM',
    provider: 'ISACA',
    field: 'sec',
    level: 'advanced',
    cost: 760,
    duration: '4-6 months',
    description: 'Certified Information Security Manager — management-focused certification for security leaders and aspiring CISOs.',
    skills: ['Security Governance', 'Risk Management', 'Program Development', 'Incident Mgmt'],
    demandScore: 85,
    postings: 2480,
    topEmployers: [
      { name: 'Deloitte', count: 245 },
      { name: 'PwC', count: 198 }
    ]
  },
  {
    id: 'cysa-plus',
    name: 'CompTIA CySA+',
    provider: 'CompTIA',
    field: 'sec',
    level: 'intermediate',
    cost: 392,
    duration: '3-4 months',
    description: 'Hands-on certification for cybersecurity analysts working in SOCs. Covers threat detection, vulnerability management, and incident response.',
    skills: ['Threat Hunting', 'SIEM', 'Vulnerability Mgmt', 'Forensics'],
    demandScore: 81,
    postings: 3140,
    topEmployers: [
      { name: 'Booz Allen', count: 287 },
      { name: 'SAIC', count: 187 }
    ]
  },
  {
    id: 'gsec',
    name: 'GIAC Security Essentials (GSEC)',
    provider: 'SANS',
    field: 'sec',
    level: 'intermediate',
    cost: 949,
    duration: '4-5 months',
    description: 'Vendor-neutral certification proving you can apply security concepts hands-on, beyond just memorizing terminology.',
    skills: ['Defense in Depth', 'Network Security', 'Cryptography', 'Active Defense'],
    demandScore: 74,
    postings: 1820,
    topEmployers: [
      { name: 'Northrop Grumman', count: 142 }
    ]
  },

  // === CLOUD ===
  {
    id: 'aws-ccp',
    name: 'AWS Cloud Practitioner',
    provider: 'Amazon Web Services',
    field: 'cloud',
    level: 'beginner',
    cost: 100,
    duration: '1-2 months',
    description: 'Foundational AWS certification covering core services, billing, security, and architectural concepts. The ideal first cloud cert.',
    skills: ['AWS Basics', 'Cloud Concepts', 'Billing', 'Shared Responsibility'],
    demandScore: 80,
    postings: 4310,
    topEmployers: [
      { name: 'Amazon', count: 540 },
      { name: 'Capital One', count: 287 }
    ]
  },
  {
    id: 'aws-saa',
    name: 'AWS Solutions Architect Associate',
    provider: 'Amazon Web Services',
    field: 'cloud',
    level: 'intermediate',
    cost: 150,
    duration: '3-5 months',
    description: 'The most in-demand cloud certification. Validates your ability to design resilient, cost-optimized AWS architectures.',
    skills: ['VPC', 'EC2', 'S3', 'RDS', 'IAM', 'Architecture Patterns'],
    demandScore: 96,
    postings: 8420,
    topEmployers: [
      { name: 'Amazon', count: 847 },
      { name: 'Netflix', count: 412 },
      { name: 'Capital One', count: 387 }
    ]
  },
  {
    id: 'az-900',
    name: 'Azure Fundamentals (AZ-900)',
    provider: 'Microsoft',
    field: 'cloud',
    level: 'beginner',
    cost: 99,
    duration: '1-2 months',
    description: 'Entry-level Azure certification covering core cloud concepts, Azure services, pricing, and SLAs. Great companion to AWS CCP.',
    skills: ['Azure Basics', 'Cloud Concepts', 'Identity Services', 'Pricing'],
    demandScore: 78,
    postings: 3940,
    topEmployers: [
      { name: 'Microsoft', count: 612 },
      { name: 'Accenture', count: 312 }
    ]
  },
  {
    id: 'az-104',
    name: 'Azure Administrator (AZ-104)',
    provider: 'Microsoft',
    field: 'cloud',
    level: 'intermediate',
    cost: 165,
    duration: '3-4 months',
    description: 'Mid-level Azure certification focused on implementing and managing Azure infrastructure: identity, storage, compute, and networking.',
    skills: ['Azure AD', 'VNet', 'Storage', 'Compute', 'Monitoring'],
    demandScore: 87,
    postings: 5240,
    topEmployers: [
      { name: 'Microsoft', count: 540 },
      { name: 'Deloitte', count: 287 }
    ]
  },
  {
    id: 'gcp-associate',
    name: 'GCP Associate Cloud Engineer',
    provider: 'Google Cloud',
    field: 'cloud',
    level: 'intermediate',
    cost: 125,
    duration: '3-4 months',
    description: 'Foundational Google Cloud certification covering deployment, monitoring, and operations of cloud solutions on GCP.',
    skills: ['GCP', 'Compute Engine', 'Kubernetes Engine', 'Cloud Storage'],
    demandScore: 82,
    postings: 3420,
    topEmployers: [
      { name: 'Google', count: 480 },
      { name: 'Spotify', count: 187 }
    ]
  },
  {
    id: 'cka',
    name: 'Certified Kubernetes Administrator (CKA)',
    provider: 'CNCF',
    field: 'cloud',
    level: 'advanced',
    cost: 395,
    duration: '4-5 months',
    description: 'Performance-based exam where you administer real Kubernetes clusters. Highly respected in DevOps and platform engineering roles.',
    skills: ['Kubernetes', 'Cluster Admin', 'Networking', 'Storage', 'Security'],
    demandScore: 88,
    postings: 3240,
    topEmployers: [
      { name: 'Red Hat', count: 312 },
      { name: 'VMware', count: 287 }
    ]
  }
]

export function getCertById(id) {
  return CERTIFICATIONS.find(c => c.id === id)
}

export function getCertsByField(fieldId) {
  return CERTIFICATIONS.filter(c => c.field === fieldId)
}
