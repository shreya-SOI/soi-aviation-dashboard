import { useState } from 'react'
import { decisionQueue, projects, people, calendarEvents } from '../data/mockData'
import { SectionHeader, StatusBadge, Card, ProgressBar, fmt$ } from './UI'

// ── Decision Queue ────────────────────────────────────────────────────────────
export function DecisionQueue() {
  const urgencyColor = { High: '#E05252', Medium: '#E8A030', Low: '#8FA3BC' }

  return (
    <div className="page">
      <SectionHeader title="Decision Queue" count={decisionQueue.length} />
      <p className="page-sub">Items requiring approval or action</p>
      <div className="decision-list">
        {decisionQueue.map(d => (
          <Card key={d.id} className="decision-card">
            <div className="decision-top">
              <div>
                <span className="decision-type" style={{ color: urgencyColor[d.urgency] }}>{d.type}</span>
                <span className="decision-id mono"> · {d.id}</span>
              </div>
              <span className="urgency-badge" style={{ background: urgencyColor[d.urgency] + '22', color: urgencyColor[d.urgency] }}>
                {d.urgency}
              </span>
            </div>
            <p className="decision-subject">{d.subject}</p>
            <div className="decision-meta">
              <span>Assignee: <strong>{d.assignee}</strong></span>
              <span className="mono">Due: {new Date(d.due).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</span>
              {d.value > 0 && <span className="mono">{fmt$(d.value)}</span>}
            </div>
            <div className="decision-actions">
              <button className="action-btn primary">Approve</button>
              <button className="action-btn">Review</button>
              <button className="action-btn danger">Reject</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

// ── Projects ──────────────────────────────────────────────────────────────────
export function Projects() {
  const phaseColor = { Execution: '#2ABFAA', Planning: '#E8A030', Review: '#3DC98A', Complete: '#8FA3BC' }

  return (
    <div className="page">
      <SectionHeader title="Projects" count={projects.length} />
      <p className="page-sub">Strategic and operational initiatives</p>
      <div className="project-list">
        {projects.map(p => {
          const budgetPct = Math.round((p.spent / p.budget) * 100)
          return (
            <Card key={p.id} className="project-card">
              <div className="project-header">
                <div>
                  <span className="project-phase" style={{ color: phaseColor[p.phase] }}>{p.phase}</span>
                  <h3 className="project-name">{p.name}</h3>
                </div>
                <span className="project-id mono">{p.id}</span>
              </div>
              <div className="project-meta">
                <span>Owner: <strong>{p.owner}</strong></span>
                <span className="mono">Deadline: {new Date(p.deadline).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
              </div>
              <div className="project-bars">
                <div>
                  <div className="bar-label"><span>Progress</span><span className="mono">{p.progress}%</span></div>
                  <ProgressBar value={p.progress} color="#2ABFAA" />
                </div>
                <div>
                  <div className="bar-label">
                    <span>Budget</span>
                    <span className="mono">{fmt$(p.spent)} / {fmt$(p.budget)}</span>
                  </div>
                  <ProgressBar value={budgetPct} color={budgetPct > 85 ? '#E05252' : '#E8A030'} />
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

// ── People ────────────────────────────────────────────────────────────────────
export function People() {
  const [selectedCompany, setSelectedCompany] = useState('SOI')

  const CO_META = {
    SOI:      { color: '#E8A030', flag: '🇺🇸', label: 'SOI Aviation' },
    CAS:      { color: '#2ABFAA', flag: '🇳🇿', label: 'CAS' },
    NanoTech: { color: '#3DC98A', flag: '🇬🇧', label: 'NanoTech' },
    RedSun:   { color: '#E05252', flag: '🇸🇬', label: 'RedSun' },
  }

  const deptColor = {
    Executive: '#E8A030',
    Finance: '#2ABFAA',
    Operations: '#3DC98A',
    Sales: '#8FA3BC',
    Contracts: '#2ABFAA',
    Compliance: '#E05252',
    IT: '#6366F1',
  }

  const companyPeople = people.filter(p => p.company === selectedCompany)
  const meta = CO_META[selectedCompany]

  return (
    <div className="page">
      <SectionHeader title="People" count={companyPeople.length} />
      <p className="page-sub">Team directory by company</p>

      <div className="company-tabs">
        {Object.entries(CO_META).map(([key, value]) => (
          <button
            key={key}
            className={`company-tab ${selectedCompany === key ? 'active' : ''}`}
            onClick={() => setSelectedCompany(key)}
            style={{
              borderColor: selectedCompany === key ? value.color : undefined,
              color: selectedCompany === key ? value.color : undefined,
            }}
          >
            <span>{value.flag}</span>
            <span>{key}</span>
          </button>
        ))}
      </div>

      <Card className="company-main">
        <div className="company-header">
          <div>
            <h2 className="company-name">{meta.label}</h2>
            <p className="company-role" style={{ color: meta.color }}>
              {companyPeople.length} team members
            </p>
          </div>
          <div className="company-flag">{meta.flag}</div>
        </div>

        <div className="people-grid">
          {companyPeople.map(p => {
            const initials = p.name.split(' ').map(n => n[0]).join('')
            return (
              <Card key={p.email} className={`person-card ${!p.active ? 'inactive' : ''}`}>
                <div
                  className="person-avatar"
                  style={{
                    background: (deptColor[p.dept] || meta.color) + '33',
                    color: deptColor[p.dept] || meta.color,
                  }}
                >
                  {initials}
                </div>

                <div className="person-info">
                  <p className="person-name">{p.name}</p>
                  <p className="person-title">{p.title}</p>
                  <span
                    className="person-dept"
                    style={{ color: deptColor[p.dept] || meta.color }}
                  >
                    {p.dept}
                  </span>
                  {!p.active && <span className="inactive-badge">Inactive</span>}
                </div>

                <p className="person-email mono">{p.email}</p>
              </Card>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

// ── Calendar ─────────────────────────────────────────────────────────────────
export function Calendar() {
  const typeColor = { Meeting: '#2ABFAA', Deadline: '#E05252', Delivery: '#3DC98A' }
  const byDate = calendarEvents.reduce((acc, ev) => {
    if (!acc[ev.date]) acc[ev.date] = []
    acc[ev.date].push(ev)
    return acc
  }, {})

  const dates = Object.keys(byDate).sort()

  return (
    <div className="page">
      <SectionHeader title="Calendar" count={calendarEvents.length} />
      <p className="page-sub">Upcoming deadlines, meetings and deliveries — June 2024</p>

      <div className="calendar-list">
        {dates.map(date => (
          <div key={date} className="cal-day">
            <div className="cal-date">
              <div className="cal-day-num mono">
                {new Date(date + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit' })}
              </div>
              <div className="cal-day-name">
                {new Date(date + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short', month: 'short' })}
              </div>
            </div>
            <div className="cal-events">
              {byDate[date].map((ev, i) => (
                <div key={i} className="cal-event" style={{ borderLeftColor: typeColor[ev.type] }}>
                  <div className="cal-event-header">
                    <span className="cal-event-title">{ev.title}</span>
                    <span className="cal-event-time mono">{ev.time}</span>
                  </div>
                  <div className="cal-event-meta">
                    <span className="cal-event-type" style={{ color: typeColor[ev.type] }}>{ev.type}</span>
                    <span>· {ev.with}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
