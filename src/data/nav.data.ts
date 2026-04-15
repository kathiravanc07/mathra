// ============================================
// DATA / NAV LINKS
// ============================================
export interface NavLink {
    key:  string   // i18n key
    href: string
  }
  
  export const NAV_LINKS: NavLink[] = [
    { key: 'nav.home',         href: '#home'          },
    { key: 'nav.subjects',     href: '#subjects'       },
    { key: 'nav.courses',      href: '#courses'        },
    { key: 'nav.about',        href: '#about'          },
    { key: 'nav.news',         href: '#news'           },
    { key: 'nav.gallery',      href: '#gallery'        },
  ]
  
  // ── Ticker subjects — i18n keys resolved at render time
  export const TICKER_SUBJECT_KEYS: string[] = [
    'subjects.vedams.name',
    'subjects.ithihasams.name',
    'subjects.puranams.name',
    'subjects.sahasranamams.name',
    'subjects.stotrams.name',
    'subjects.narayaneeyam.name',
    'subjects.chandi.name',
    'subjects.sreevidya.name',
    'subjects.samskritham.name',
    'subjects.chanting.name',
    'subjects.ashtapathi.name',
    'subjects.bhajans.name',
  ]