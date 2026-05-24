// Market insight data shown on the Charts screen.
// In production this would come from LinkedIn/Greenhouse API scrapers.

export const CHART_CATEGORIES = ['Cloud', 'Security', 'Data', 'SWE']

// Top requested certs by category
export const TOP_CERTS_BY_CATEGORY = {
  Cloud: [
    { name: 'AWS Solutions Architect', postings: 4212, percent: 92 },
    { name: 'Azure Fundamentals (AZ-900)', postings: 3108, percent: 70 },
    { name: 'Google Cloud Associate', postings: 2541, percent: 56 },
    { name: 'CompTIA Cloud+', postings: 1679, percent: 38 },
    { name: 'Kubernetes CKA', postings: 1307, percent: 29 }
  ],
  Security: [
    { name: 'CompTIA Security+', postings: 7240, percent: 95 },
    { name: 'CISSP', postings: 5820, percent: 78 },
    { name: 'CEH', postings: 3940, percent: 54 },
    { name: 'CySA+', postings: 3140, percent: 43 },
    { name: 'CISM', postings: 2480, percent: 34 }
  ],
  Data: [
    { name: 'AWS Data Analytics', postings: 3210, percent: 88 },
    { name: 'Tableau Desktop Specialist', postings: 2840, percent: 78 },
    { name: 'Databricks Data Engineer', postings: 2120, percent: 58 },
    { name: 'Microsoft DP-203', postings: 1740, percent: 48 },
    { name: 'SAS Certified Specialist', postings: 940, percent: 26 }
  ],
  SWE: [
    { name: 'AWS Developer Associate', postings: 6420, percent: 95 },
    { name: 'Azure Developer (AZ-204)', postings: 4980, percent: 74 },
    { name: 'CKAD (Kubernetes)', postings: 2940, percent: 44 },
    { name: 'Oracle Java SE', postings: 3640, percent: 54 },
    { name: 'Scrum Master', postings: 3180, percent: 47 }
  ]
}

// Top hiring employers by category
export const TOP_EMPLOYERS_BY_CATEGORY = {
  Cloud: [
    { name: 'Amazon Web Services', initial: 'A', color: '#0866c2', tags: ['AWS SA', 'DevOps'], count: 847 },
    { name: 'Microsoft', initial: 'M', color: '#5e35b1', tags: ['AZ-104', 'AZ-900'], count: 612 },
    { name: 'Google', initial: 'G', color: '#4285f4', tags: ['GCP', 'CKA'], count: 438 },
    { name: 'Accenture', initial: 'A', color: '#e35d5d', tags: ['AWS', 'Azure'], count: 391 }
  ],
  Security: [
    { name: 'Lockheed Martin', initial: 'L', color: '#2d6dba', tags: ['Sec+', 'CISSP'], count: 612 },
    { name: 'Booz Allen Hamilton', initial: 'B', color: '#8b5cf6', tags: ['Sec+', 'CEH'], count: 480 },
    { name: 'CrowdStrike', initial: 'C', color: '#e35d5d', tags: ['CISSP', 'CEH'], count: 287 },
    { name: 'Deloitte', initial: 'D', color: '#2fa66b', tags: ['CISM'], count: 245 }
  ],
  Data: [
    { name: 'Snowflake', initial: 'S', color: '#0866c2', tags: ['SnowPro'], count: 412 },
    { name: 'Databricks', initial: 'D', color: '#e35d5d', tags: ['DBR DE'], count: 287 },
    { name: 'Meta', initial: 'M', color: '#4285f4', tags: ['Analytics'], count: 198 },
    { name: 'Airbnb', initial: 'A', color: '#8b5cf6', tags: ['DataEng'], count: 134 }
  ],
  SWE: [
    { name: 'Amazon', initial: 'A', color: '#0866c2', tags: ['AWS Dev'], count: 745 },
    { name: 'Microsoft', initial: 'M', color: '#5e35b1', tags: ['AZ-204'], count: 590 },
    { name: 'Netflix', initial: 'N', color: '#e35d5d', tags: ['AWS', 'Java'], count: 312 },
    { name: 'Spotify', initial: 'S', color: '#2fa66b', tags: ['Scrum'], count: 198 }
  ]
}

// 12-month trend data - paths for the SVG line chart
// Each path is a list of {x, y} for the 320x120 viewBox
export const TREND_LINES = [
  {
    name: 'AWS',
    color: '#4a90e2',
    dashed: false,
    pathArea: 'M0,75 L26,68 L53,60 L80,55 L106,48 L133,42 L160,38 L186,35 L213,28 L240,22 L266,18 L293,15 L320,10 L320,120 L0,120 Z',
    path: 'M0,75 L26,68 L53,60 L80,55 L106,48 L133,42 L160,38 L186,35 L213,28 L240,22 L266,18 L293,15 L320,10',
    endX: 320,
    endY: 10
  },
  {
    name: 'Azure',
    color: '#8b5cf6',
    dashed: false,
    path: 'M0,90 L26,85 L53,82 L80,76 L106,72 L133,68 L160,60 L186,55 L213,50 L240,48 L266,42 L293,38 L320,32',
    endX: 320,
    endY: 32
  },
  {
    name: 'GCP',
    color: '#2fa66b',
    dashed: true,
    path: 'M0,100 L26,98 L53,95 L80,92 L106,88 L133,85 L160,80 L186,76 L213,72 L240,66 L266,60 L293,56 L320,52',
    endX: 320,
    endY: 52
  }
]
