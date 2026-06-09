import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart, Line, Legend
} from 'recharts'
import { overviewKPIs, revenueByMonth, pipelineByStage } from '../data/mockData'
import { KPICard, Card, SectionHeader, fmt$ } from './UI'

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: '#132035', border: '0.5px solid rgba(143,163,188,0.25)', borderRadius: 8, padding: '10px 14px', fontSize: 12 }}>
      <p style={{ color: '#8FA3BC', marginBottom: 6 }}>{label}</p>
      {payload.map(p => (
        <p key={p.name} style={{ color: p.color, margin: '2px 0' }}>
          {p.name}: {p.name === 'margin' ? p.value.toFixed(1) + '%' : fmt$(p.value)}
        </p>
      ))}
    </div>
  )
}

export default function Overview() {
  const kpis = Object.values(overviewKPIs)

  return (
    <div className="page">
      <SectionHeader title="Overview" />
      <p className="page-sub">SOI Aviation — live operational snapshot</p>

      <div className="kpi-grid">
        {kpis.map(k => <KPICard key={k.label} {...k} />)}
      </div>

      <div className="chart-grid-2">
        <Card>
          <h3 className="chart-title">Revenue &amp; Margin — YTD</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={revenueByMonth} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E8A030" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#E8A030" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="marGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2ABFAA" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#2ABFAA" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(143,163,188,0.1)" />
              <XAxis dataKey="month" tick={{ fill: '#8FA3BC', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="rev" tick={{ fill: '#8FA3BC', fontSize: 11 }} axisLine={false} tickLine={false}
                tickFormatter={v => '$' + (v/1000) + 'K'} width={52} />
              <YAxis yAxisId="mar" orientation="right" tick={{ fill: '#8FA3BC', fontSize: 11 }} axisLine={false}
                tickLine={false} tickFormatter={v => v + '%'} width={38} />
              <Tooltip content={<CustomTooltip />} />
              <Area yAxisId="rev" type="monotone" dataKey="revenue" name="revenue"
                stroke="#E8A030" strokeWidth={2} fill="url(#revGrad)" dot={false} />
              <Line yAxisId="mar" type="monotone" dataKey="margin" name="margin"
                stroke="#2ABFAA" strokeWidth={1.5} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="chart-title">Pipeline by Stage</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={pipelineByStage} margin={{ top: 4, right: 4, left: 0, bottom: 0 }} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(143,163,188,0.1)" vertical={false} />
              <XAxis dataKey="stage" tick={{ fill: '#8FA3BC', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#8FA3BC', fontSize: 11 }} axisLine={false} tickLine={false}
                tickFormatter={v => '$' + (v/1000) + 'K'} width={52} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" name="value" fill="#E8A030" opacity={0.85} radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <h3 className="chart-title">Quick Status</h3>
        <div className="status-row-grid">
          {[
            { label: 'RFQs awaiting quote',    v: 19, color: '#E8A030' },
            { label: 'SOs ready to ship',      v: 3,  color: '#2ABFAA' },
            { label: 'Overdue payments',        v: 1,  color: '#E05252' },
            { label: 'POs in transit',          v: 1,  color: '#3DC98A' },
            { label: 'Decisions pending',       v: 6,  color: '#E8A030' },
            { label: 'Active projects',         v: 4,  color: '#2ABFAA' },
          ].map(({ label, v, color }) => (
            <div key={label} className="status-item">
              <span className="status-num mono" style={{ color }}>{v}</span>
              <span className="status-lbl">{label}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
