import { useState } from 'react'
import { rfqs, salesOrders, purchaseOrders, shipments, payments } from '../data/mockData'
import { SectionHeader, StatusBadge, PriorityDot, DataTable, Card, fmt$ } from './UI'

const TABS = ['RFQ Tracker', 'Sales Orders', 'Purchase Orders', 'Shipping', 'Payments']

function fmt (d) { if (!d) return '—'; return new Date(d).toLocaleDateString('en-GB', { day:'2-digit', month:'short' }) }

export default function Operations() {
  const [tab, setTab] = useState(0)

  const rfqCols = [
    { key: 'id',       label: 'RFQ No',    render: v => <span className="mono text-xs">{v}</span> },
    { key: 'customer', label: 'Customer'  },
    { key: 'parts',    label: 'Part / Description', render: v => <span title={v} style={{ maxWidth: 200, display:'block', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{v}</span> },
    { key: 'qty',      label: 'Qty',       render: v => <span className="mono">{v}</span> },
    { key: 'due',      label: 'Due',       render: v => <span className="mono">{fmt(v)}</span> },
    { key: 'priority', label: 'Priority',  render: v => <PriorityDot priority={v} /> },
    { key: 'status',   label: 'Status',    render: v => <StatusBadge status={v} /> },
    { key: 'value',    label: 'Est. Value',render: v => <span className="mono">{fmt$(v)}</span> },
  ]

  const soCols = [
    { key: 'id',       label: 'SO No',     render: v => <span className="mono text-xs">{v}</span> },
    { key: 'customer', label: 'Customer'  },
    { key: 'po',       label: 'Customer PO', render: v => <span className="mono text-xs">{v}</span> },
    { key: 'value',    label: 'Value',     render: v => <span className="mono">{fmt$(v)}</span> },
    { key: 'ordered',  label: 'Ordered',   render: v => <span className="mono">{fmt(v)}</span> },
    { key: 'required', label: 'Required',  render: v => <span className="mono">{fmt(v)}</span> },
    { key: 'status',   label: 'Status',    render: v => <StatusBadge status={v} /> },
  ]

  const poCols = [
    { key: 'id',     label: 'PO No',   render: v => <span className="mono text-xs">{v}</span> },
    { key: 'vendor', label: 'Vendor'  },
    { key: 'part',   label: 'Part'    },
    { key: 'qty',    label: 'Qty',    render: v => <span className="mono">{v}</span> },
    { key: 'cost',   label: 'Cost',   render: v => <span className="mono">{fmt$(v)}</span> },
    { key: 'issued', label: 'Issued', render: v => <span className="mono">{fmt(v)}</span> },
    { key: 'eta',    label: 'ETA',    render: v => <span className="mono">{fmt(v)}</span> },
    { key: 'status', label: 'Status', render: v => <StatusBadge status={v} /> },
  ]

  const shipCols = [
    { key: 'id',         label: 'Shipment',  render: v => <span className="mono text-xs">{v}</span> },
    { key: 'so',         label: 'SO',        render: v => <span className="mono text-xs">{v}</span> },
    { key: 'customer',   label: 'Customer'  },
    { key: 'awb',        label: 'AWB / Track', render: v => <span className="mono text-xs">{v}</span> },
    { key: 'carrier',    label: 'Carrier'   },
    { key: 'dispatched', label: 'Dispatched', render: v => <span className="mono">{fmt(v)}</span> },
    { key: 'eta',        label: 'ETA',      render: v => <span className="mono">{fmt(v)}</span> },
    { key: 'status',     label: 'Status',   render: v => <StatusBadge status={v} /> },
  ]

  const payCol = [
    { key: 'id',       label: 'Ref',      render: v => <span className="mono text-xs">{v}</span> },
    { key: 'customer', label: 'Customer' },
    { key: 'invoice',  label: 'Invoice',  render: v => <span className="mono text-xs">{v}</span> },
    { key: 'amount',   label: 'Amount',   render: v => <span className="mono">{fmt$(v)}</span> },
    { key: 'due',      label: 'Due Date', render: v => <span className="mono">{fmt(v)}</span> },
    { key: 'method',   label: 'Method'   },
    { key: 'status',   label: 'Status',   render: v => <StatusBadge status={v} /> },
  ]

  const content = [
    { data: rfqs,         cols: rfqCols,  key: 'id' },
    { data: salesOrders,  cols: soCols,   key: 'id' },
    { data: purchaseOrders, cols: poCols, key: 'id' },
    { data: shipments,    cols: shipCols, key: 'id' },
    { data: payments,     cols: payCol,   key: 'id' },
  ]

  const summaries = [
    { label: 'Open RFQs',      v: rfqs.length,          color: '#E8A030' },
    { label: 'Open SOs',       v: salesOrders.filter(s => s.status !== 'Shipped').length, color: '#2ABFAA' },
    { label: 'Active POs',     v: purchaseOrders.filter(p => p.status !== 'Received').length, color: '#2ABFAA' },
    { label: 'In-flight Ships',v: shipments.filter(s => s.status === 'In Transit').length, color: '#3DC98A' },
    { label: 'Overdue Pay',    v: payments.filter(p => p.status === 'Overdue').length, color: '#E05252' },
  ]

  return (
    <div className="page">
      <SectionHeader title="Operations" />
      <p className="page-sub">Live tracker across all active transactions</p>

      <div className="ops-summary">
        {summaries.map(s => (
          <div key={s.label} className="ops-stat">
            <span className="mono" style={{ fontSize: 22, fontWeight: 600, color: s.color }}>{s.v}</span>
            <span className="ops-stat-lbl">{s.label}</span>
          </div>
        ))}
      </div>

      <Card>
        <div className="tab-bar">
          {TABS.map((t, i) => (
            <button key={t} className={`tab-btn ${tab === i ? 'tab-active' : ''}`} onClick={() => setTab(i)}>
              {t}
            </button>
          ))}
        </div>
        <DataTable
          columns={content[tab].cols}
          rows={content[tab].data}
          keyField={content[tab].key}
        />
      </Card>
    </div>
  )
}
