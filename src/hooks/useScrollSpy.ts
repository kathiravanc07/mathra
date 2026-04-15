// ============================================
// HOOKS / useScrollSpy
// Returns the currently visible section id
// Usage: const activeId = useScrollSpy(['home','about','contact'])
// ============================================
import { useState, useEffect } from 'react'

export const useScrollSpy = (sectionIds: string[], offset = 80): string => {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (!section) continue
        if (section.getBoundingClientRect().top <= offset) {
          setActiveId(sectionIds[i])
          return
        }
      }
      setActiveId(sectionIds[0] ?? '')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // run on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}