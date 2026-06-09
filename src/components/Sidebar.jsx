import { useState } from 'react'

const NAV = [
  { id: 'overview',   icon: '◈', label: 'Overview'       },
  { id: 'operations', icon: '⬡', label: 'Operations'     },
  { id: 'decisions',  icon: '◆', label: 'Decision Queue' },
  { id: 'projects',   icon: '⬜', label: 'Projects'       },
  { id: 'people',     icon: '◉', label: 'People'         },
  { id: 'companies',  icon: '◧', label: 'Companies'      },
  { id: 'calendar',   icon: '▦', label: 'Calendar'       },
]

export default function Sidebar({ active, onNav }) {
  const now = new Date()
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="none" stroke="#E8A030" strokeWidth="1.5"/>
            <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" fill="#E8A030" opacity="0.18"/>
            <line x1="14" y1="2" x2="14" y2="26" stroke="#E8A030" strokeWidth="0.75" opacity="0.5"/>
            <line x1="2" y1="8" x2="26" y2="20" stroke="#E8A030" strokeWidth="0.75" opacity="0.5"/>
            <line x1="26" y1="8" x2="2" y2="20" stroke="#E8A030" strokeWidth="0.75" opacity="0.5"/>
          </svg>
        </div>
        <div>
          <div className="logo-name">SOI Aviation</div>
          <div className="logo-sub">Command Center</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {NAV.map(item => (
          <button
            key={item.id}
            className={`nav-item ${active === item.id ? 'nav-active' : ''}`}
            onClick={() => onNav(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="footer-date mono">{dateStr}</div>
        <div className="footer-user">
          <div className="user-avatar">GG</div>
          <div>
            <div className="user-name">Greg Gaba</div>
            <div className="user-role">CEO</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
