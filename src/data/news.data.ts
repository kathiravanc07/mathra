// ============================================
// DATA / NEWS
// ============================================
import type { NewsItem } from '@/types/news.types'

export const NEWS_ITEMS: NewsItem[] = [
  {
    id:       'current',
    variant:  'current',
    tagKey:   'news.cards.current.tag',
    titleKey: 'news.cards.current.title',
    bodyKey:  'news.cards.current.body',
    dateKey:  'news.cards.current.date',
  },
  {
    id:       'upcoming',
    variant:  'upcoming',
    tagKey:   'news.cards.upcoming.tag',
    titleKey: 'news.cards.upcoming.title',
    bodyKey:  'news.cards.upcoming.body',
    dateKey:  'news.cards.upcoming.date',
  },
  {
    id:       'future',
    variant:  'future',
    tagKey:   'news.cards.future.tag',
    titleKey: 'news.cards.future.title',
    bodyKey:  'news.cards.future.body',
    dateKey:  'news.cards.future.date',
  },
]