import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, Globe } from 'lucide-react'
import styles from './LanguageSelector.module.scss'

interface Language {
  code: string
  label: string
  nativeLabel: string
  flag: string
}

const LANGUAGES: Language[] = [
  { code: 'en', label: 'English',    nativeLabel: 'English',    flag: '🇬🇧' },
  { code: 'hi', label: 'Hindi',      nativeLabel: 'हिन्दी',       flag: '🇮🇳' },
  { code: 'ta', label: 'Tamil',      nativeLabel: 'தமிழ்',        flag: '🇮🇳' },
  { code: 'te', label: 'Telugu',     nativeLabel: 'తెలుగు',       flag: '🇮🇳' },
  { code: 'ml', label: 'Malayalam',  nativeLabel: 'മലയാളം',      flag: '🇮🇳' },
  { code: 'kn', label: 'Kannada',    nativeLabel: 'ಕನ್ನಡ',        flag: '🇮🇳' },
  { code: 'mr', label: 'Marathi',    nativeLabel: 'मराठी',        flag: '🇮🇳' },
]

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0]

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div
      ref={ref}
      className={`${styles['language-selector']} ${isOpen ? styles['language-selector--open'] : ''}`}
    >
      {/* Trigger button */}
      <button
        className={styles['language-selector__trigger']}
        onClick={() => setIsOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Globe size={14} />
        <span>{current.flag} {current.nativeLabel}</span>
        <ChevronDown size={14} className={styles['language-selector__chevron']} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul
          className={styles['language-selector__dropdown']}
          role="listbox"
        >
          {LANGUAGES.map(lang => (
            <li
              key={lang.code}
              role="option"
              aria-selected={lang.code === i18n.language}
              className={`
                ${styles['language-selector__option']}
                ${lang.code === i18n.language ? styles['language-selector__option--active'] : ''}
              `}
              onClick={() => handleSelect(lang.code)}
            >
              <span className={styles['language-selector__option-flag']}>
                {lang.flag}
              </span>
              <span className={styles['language-selector__option-native']}>
                {lang.nativeLabel}
              </span>
              <span className={styles['language-selector__option-label']}>
                {lang.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}