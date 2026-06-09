import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Overview from './components/Overview'
import Operations from './components/Operations'
import Companies from './components/Companies'
import { DecisionQueue, Projects, People, Calendar } from './components/Pages'

export default function App() {
  const [page, setPage] = useState('overview')

  const pages = {
    overview:   <Overview />,
    operations: <Operations />,
    decisions:  <DecisionQueue />,
    projects:   <Projects />,
    people:     <People />,
    companies:  <Companies />,
    calendar:   <Calendar />,
  }

  return (
    <div className="app-shell">
      <Sidebar active={page} onNav={setPage} />
      <main className="main-content">
        {pages[page] || <Overview />}
      </main>
    </div>
  )
}
