// ============================================
// DATA / COURSES
// ============================================
import type { Course } from '@/types/course.types'

export const COURSES: Course[] = [
  {
    id:         'online',
    mode:       'online',
    icon:       '🖥️',
    titleKey:   'courses.online.title',
    taglineKey: 'courses.online.tagline',
    bodyKey:    'courses.online.body',
    noteKey:    'courses.online.note',
    ctaKey:     'courses.online.cta',
    ctaHref:    '#contact',
  },
  {
    id:         'offline',
    mode:       'offline',
    icon:       '🏛️',
    titleKey:   'courses.offline.title',
    taglineKey: 'courses.offline.tagline',
    bodyKey:    'courses.offline.body',
    noteKey:    'courses.offline.note',
    ctaKey:     'courses.offline.cta',
    ctaHref:    '#contact',
  },
]