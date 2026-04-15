// ============================================
// HOOKS / useLanguage
// Wrapper around i18next for cleaner usage
// Usage: const { currentLang, changeLang } = useLanguage()
// ============================================
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '@/data/languages.data'
import type { Language } from '@/types/language.types'

interface UseLanguageReturn {
  currentLang:  Language
  changeLang:   (code: string) => void
  languages:    Language[]
  isActive:     (code: string) => boolean
}

export const useLanguage = (): UseLanguageReturn => {
  const { i18n } = useTranslation()

  const currentLang =
    LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0]

  const changeLang = (code: string) => {
    i18n.changeLanguage(code)
  }

  const isActive = (code: string) => i18n.language === code

  return {
    currentLang,
    changeLang,
    languages: LANGUAGES,
    isActive,
  }
}