// ============================================
// DATA / SUBJECTS
// ============================================
import {
  BookOpen, BookText, Library, Flame,
  Music, Flower2, Zap, Sparkles,
  ScrollText, Mic, Music2, Languages,
} from 'lucide-react'
import type { Subject } from '@/types/subject.types'

export const SUBJECTS: Subject[] = [
  { id: 'vedams',        icon: BookOpen,    nameKey: 'subjects.vedams.name',        descKey: 'subjects.vedams.desc'        },
  { id: 'ithihasams',    icon: BookText,    nameKey: 'subjects.ithihasams.name',    descKey: 'subjects.ithihasams.desc'    },
  { id: 'puranams',      icon: Library,     nameKey: 'subjects.puranams.name',      descKey: 'subjects.puranams.desc'      },
  { id: 'sahasranamams', icon: Flame,       nameKey: 'subjects.sahasranamams.name', descKey: 'subjects.sahasranamams.desc' },
  { id: 'stotrams',      icon: Music,       nameKey: 'subjects.stotrams.name',      descKey: 'subjects.stotrams.desc'      },
  { id: 'narayaneeyam',  icon: Flower2,     nameKey: 'subjects.narayaneeyam.name',  descKey: 'subjects.narayaneeyam.desc'  },
  { id: 'chandi',        icon: Zap,         nameKey: 'subjects.chandi.name',        descKey: 'subjects.chandi.desc'        },
  { id: 'sreevidya',     icon: Sparkles,    nameKey: 'subjects.sreevidya.name',     descKey: 'subjects.sreevidya.desc'     },
  { id: 'samskritham',   icon: ScrollText,  nameKey: 'subjects.samskritham.name',   descKey: 'subjects.samskritham.desc'   },
  { id: 'chanting',      icon: Mic,         nameKey: 'subjects.chanting.name',      descKey: 'subjects.chanting.desc'      },
  { id: 'ashtapathi',    icon: Music2,      nameKey: 'subjects.ashtapathi.name',    descKey: 'subjects.ashtapathi.desc'    },
  { id: 'bhajans',       icon: Languages,   nameKey: 'subjects.bhajans.name',       descKey: 'subjects.bhajans.desc'       },
]
