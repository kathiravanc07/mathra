// ============================================
// DATA / STATS
// ============================================
export interface Stat {
    id:        string
    valueKey:  string
    labelKey:  string
  }
  
  export const STATS: Stat[] = [
    { id: 'subjects', valueKey: 'stats.subjects.value', labelKey: 'stats.subjects.label' },
    { id: 'global',   valueKey: 'stats.global.value',   labelKey: 'stats.global.label'   },
    { id: 'modes',    valueKey: 'stats.modes.value',     labelKey: 'stats.modes.label'    },
    { id: 'mentors',  valueKey: 'stats.mentors.value',   labelKey: 'stats.mentors.label'  },
  ]