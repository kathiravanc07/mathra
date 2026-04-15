// ============================================
// TYPES / SUBJECT
// ============================================
import type { LucideIcon } from 'lucide-react'

export interface Subject {
  id:      string
  icon:    LucideIcon
  nameKey: string  // i18n translation key
  descKey: string  // i18n translation key
}
