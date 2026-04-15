// ============================================
// TYPES / NEWS
// ============================================
export type NewsVariant = 'current' | 'upcoming' | 'future'

export interface NewsItem {
  id:         string
  variant:    NewsVariant
  tagKey:     string
  titleKey:   string
  bodyKey:    string
  dateKey:    string
}