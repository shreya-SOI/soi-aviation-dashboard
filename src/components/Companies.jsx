import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { companies } from '../data/mockData'
import { SectionHeader, Card, fmt$ } from './UI'

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct']

const CO_META = {
  SOI: {
    color: '#E8A030',
    flag: '🇺🇸'
  },
  CAS: {
    color: '#2ABFAA',
    flag: '🇳🇿'
  },
  NanoTech: {
    color: '#3DC98A',
    flag: '🇬🇧'
  },
  RedSun: {
    color: '#E05252',
    flag: '🇸🇬'
  },
}
export default function Companies() {
  const [selected, setSelected] = useState('SOI')
  const co = companies[selected]
  const meta = CO_META[selected]

  const chartData = co.monthlyRevenue.map((v, i) => ({ month: MONTHS[i], value: v }))

  const stats = selected === 'SOI'
    ? [
        { label: 'Revenue YTD', v: fmt$(co.revenue) },
        { label: 'Open RFQs',   v: co.openRFQs },
        { label: 'Open SOs',    v: co.openSOs  },
        { label: 'Open POs',    v: co.openPOs  },
      ]
    : [
        { label: 'Spend YTD',   v: fmt$(co.spend)  },
        { label: 'Open POs',    v: co.openPOs       },
        { label: 'On-Time Rate',v: co.onTime        },
      ]

  return (
    <div className="page">
      <SectionHeader title="Companies" />
      <p className="page-sub">SOI Aviation entity &amp; supplier network</p>

      <div className="company-tabs">
        {Object.keys(companies).map(id => (
          <button
            key={id}
            className={`company-tab ${selected === id ? 'company-tab-active' : ''}`}
            style={selected === id ? { borderColor: CO_META[id].color, color: CO_META[id].color } : {}}
            onClick={() => setSelected(id)}
          >
            <span>{CO_META[id].flag}</span>
            <span>{companies[id].name}</span>
          </button>
        ))}
      </div>

      <div className="company-grid">
        <Card className="company-main">
          <div className="company-header">
            <div>
              <h2 className="company-name">{co.name}</h2>
              <p className="company-role" style={{ color: meta.color }}>{co.role} · {co.country}</p>
            </div>
            <div className="company-flag">{meta.flag}</div>
          </div>
          <p className="company-desc">{co.description}</p>

          <div className="company-stats">
            {stats.map(s => (
              <div key={s.label} className="company-stat">
                <span className="mono" style={{ fontSize: 18, fontWeight: 600, color: meta.color }}>{s.v}</span>
                <span className="company-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="chart-title">
            {selected === 'SOI' ? 'Monthly Revenue' : 'Monthly Spend'} — 2024
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(143,163,188,0.1)" />
              <XAxis dataKey="month" tick={{ fill: '#8FA3BC', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#8FA3BC', fontSize: 11 }} axisLine={false} tickLine={false}
                tickFormatter={v => '$' + (v/1000) + 'K'} width={48} />
              <Tooltip
                contentStyle={{ background: '#132035', border: '0.5px solid rgba(143,163,188,0.25)', borderRadius: 8, fontSize: 12 }}
                labelStyle={{ color: '#8FA3BC' }}
                formatter={v => [fmt$(v), 'Value']}
              />
              <Line type="monotone" dataKey="value" stroke={meta.color} strokeWidth={2} dot={{ fill: meta.color, r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <h3 className="chart-title">Key Contacts</h3>
        <div className="contacts-list">
          {co.contacts.map((c, i) => {
            const [name, ...rest] = c.split(' — ')
            return (
              <div key={i} className="contact-row">
                <div className="contact-avatar" style={{ background: meta.color + '22', color: meta.color }}>
                  {name.split(' ').map(n => n[0]).slice(0,2).join('')}
                </div>
                <div>
                  <p className="contact-name">{name}</p>
                  <p className="contact-role">{rest.join(' — ')}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
