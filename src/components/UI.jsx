// ── Shared UI Components ──────────────────────────────────────────────────────

export function KPICard({ label, value, delta, unit, prefix = '' }) {
  const isPercent = unit === '%'
  const isCurrency = unit === '$'
  const positive = delta >= 0

  const fmt = (v) => {
    if (isCurrency) return '$' + (v >= 1_000_000 ? (v / 1_000_000).toFixed(2) + 'M' : (v / 1000).toFixed(0) + 'K')
    if (isPercent) return v.toFixed(1) + '%'
    return v.toLocaleString()
  }

  return (
    <div className="kpi-card">
      <p className="kpi-label">{label}</p>
      <p className="kpi-value mono">{fmt(value)}</p>
      <p className={`kpi-delta ${positive ? 'pos' : 'neg'}`}>
        {positive ? '▲' : '▼'} {Math.abs(delta)}{isPercent ? 'pp' : typeof delta === 'number' && delta % 1 !== 0 ? '%' : ''}
        <span> vs last period</span>
      </p>
    </div>
  )
}

export function StatusBadge({ status }) {
  const map = {
    'New':          'badge-blue',
    'In Review':    'badge-amber',
    'Sourcing':     'badge-amber',
    'Quoted':       'badge-teal',
    'In Process':   'badge-blue',
    'Picking':      'badge-blue',
    'Awaiting PO':  'badge-amber',
    'Ready Ship':   'badge-teal',
    'Shipped':      'badge-green',
    'Delivered':    'badge-green',
    'Confirmed':    'badge-teal',
    'In Transit':   'badge-blue',
    'Received':     'badge-green',
    'Pending':      'badge-amber',
    'Overdue':      'badge-red',
    'Ready':        'badge-teal',
  }
  return <span className={`badge ${map[status] || 'badge-slate'}`}>{status}</span>
}

export function PriorityDot({ priority }) {
  const map = { High: '#E05252', Medium: '#E8A030', Low: '#8FA3BC' }
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: map[priority] || '#8FA3BC', flexShrink: 0 }} />
      {priority}
    </span>
  )
}

export function SectionHeader({ title, count }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      {count !== undefined && <span className="section-count">{count}</span>}
    </div>
  )
}

export function DataTable({ columns, rows, keyField = 'id' }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map(c => <th key={c.key}>{c.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row[keyField]}>
              {columns.map(c => (
                <td key={c.key}>
                  {c.render ? c.render(row[c.key], row) : row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ProgressBar({ value, max = 100, color = 'var(--soi-teal)' }) {
  const pct = Math.min(100, (value / max) * 100)
  return (
    <div style={{ background: 'rgba(143,163,188,0.15)', borderRadius: 3, height: 6, overflow: 'hidden' }}>
      <div style={{ width: pct + '%', height: '100%', background: color, borderRadius: 3, transition: 'width .4s' }} />
    </div>
  )
}

export function Card({ children, className = '' }) {
  return <div className={`panel ${className}`}>{children}</div>
}

export function fmt$ (v) {
  if (v >= 1_000_000) return '$' + (v / 1_000_000).toFixed(2) + 'M'
  if (v >= 1_000)     return '$' + (v / 1000).toFixed(0) + 'K'
  return '$' + v.toLocaleString()
}
