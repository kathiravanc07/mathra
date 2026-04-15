// ============================================
// TYPES / COURSE
// ============================================
export type CourseMode = 'online' | 'offline'

export interface Course {
  id:          string
  mode:        CourseMode
  icon:        string
  titleKey:    string
  taglineKey:  string
  bodyKey:     string
  noteKey:     string
  ctaKey:      string
  ctaHref:     string
}