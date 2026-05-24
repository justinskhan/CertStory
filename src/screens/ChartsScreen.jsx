import { useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import {
  CHART_CATEGORIES,
  TOP_CERTS_BY_CATEGORY,
  TOP_EMPLOYERS_BY_CATEGORY,
  TREND_LINES
} from '../data/chartsData.js'

export default function ChartsScreen({ nav }) {
  const [activeCategory, setActiveCategory] = useState('Cloud')

  const certs = TOP_CERTS_BY_CATEGORY[activeCategory] || []
  const employers = TOP_EMPLOYERS_BY_CATEGORY[activeCategory] || []
  const totalPostings = certs.reduce((sum, c) => sum + c.postings, 0).toLocaleString()

  return (
    <div className="screen">
      <TopBar />

      <div className="charts-intro">
        <h2>Market Insights</h2>
        <p>
          Live demand from LinkedIn & Greenhouse
          <span className="live-pill">Live</span>
        </p>
      </div>

      <div className="filter-tabs">
        {CHART_CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Top certifications */}
      <div className="chart-card">
        <div className="chart-card-header">
          <div>
            <h3>Most Requested Certifications</h3>
            <div className="subtitle">Past 30 days · US job postings</div>
          </div>
          <div className="source">Σ {totalPostings}</div>
        </div>

        {certs.map((c, i) => (
          <div key={i} className="bar-row">
            <div className="bar-row-header">
              <span className="cert-name">{c.name}</span>
              <span className="cert-postings"><strong>{c.postings.toLocaleString()}</strong></span>
            </div>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ width: `${c.percent}%`, transitionDelay: `${i * 80}ms` }}
                key={`${activeCategory}-${i}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Top employers */}
      <div className="chart-card">
        <div className="chart-card-header">
          <div>
            <h3>Top Hiring Employers</h3>
            <div className="subtitle">Asking for {activeCategory.toLowerCase()} certifications</div>
          </div>
        </div>

        <div className="employer-list">
          {employers.map((e, i) => (
            <div key={i} className="employer-row">
              <div className="employer-logo" style={{ color: e.color }}>{e.initial}</div>
              <div className="employer-info">
                <div className="name">{e.name}</div>
                <div className="tags">
                  {e.tags.map((t, j) => (
                    <span key={j} className="employer-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="employer-count">
                {e.count}
                <small>open roles</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trend chart */}
      <div className="chart-card">
        <div className="chart-card-header">
          <div>
            <h3>Demand Trend</h3>
            <div className="subtitle">12-month posting volume</div>
          </div>
        </div>

        <svg className="trend-chart" viewBox="0 0 320 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradPrimary" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4a90e2" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#4a90e2" stopOpacity="0"/>
            </linearGradient>
          </defs>

          <line x1="0" y1="30" x2="320" y2="30" stroke="#eef2f7" strokeWidth="1"/>
          <line x1="0" y1="60" x2="320" y2="60" stroke="#eef2f7" strokeWidth="1"/>
          <line x1="0" y1="90" x2="320" y2="90" stroke="#eef2f7" strokeWidth="1"/>

          {/* AWS gets a filled area */}
          {TREND_LINES[0].pathArea && (
            <path d={TREND_LINES[0].pathArea} fill="url(#gradPrimary)" />
          )}

          {TREND_LINES.map((line, i) => (
            <g key={i}>
              <path
                d={line.path}
                fill="none"
                stroke={line.color}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={line.dashed ? '4 3' : 'none'}
              />
              <circle cx={line.endX} cy={line.endY} r="3" fill={line.color} />
            </g>
          ))}
        </svg>

        <div className="trend-legend">
          {TREND_LINES.map((line, i) => (
            <div key={i} className="trend-legend-item">
              <span className="trend-legend-dot" style={{ background: line.color }}></span>
              {line.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
