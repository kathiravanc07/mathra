import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Layout }          from '@/components/layout/Layout'
import { HomePage }        from '@/pages/HomePage'
import { TermsPage }       from '@/pages/TermsPage'
import { DisclaimerPage }  from '@/pages/DisclaimerPage'
import { PrivacyPage }     from '@/pages/PrivacyPage'
import { CopyrightPage }   from '@/pages/CopyrightPage'
import { LegalNoticePage } from '@/pages/LegalNoticePage'

const ScrollToSection: React.FC = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/' && hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/terms"         element={<Layout><TermsPage /></Layout>} />
        <Route path="/disclaimer"    element={<Layout><DisclaimerPage /></Layout>} />
        <Route path="/privacy"       element={<Layout><PrivacyPage /></Layout>} />
        <Route path="/copyright"     element={<Layout><CopyrightPage /></Layout>} />
        <Route path="/legal-notice"  element={<Layout><LegalNoticePage /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
