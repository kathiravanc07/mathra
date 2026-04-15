import React from 'react'
import { useTranslation } from 'react-i18next'
import { TICKER_SUBJECT_KEYS } from '@/data/nav.data'
import styles from './Ticker.module.scss'

// ─── Component ───────────────────────────────────────────────────────────────
export const Ticker: React.FC = () => {
  const { t } = useTranslation()

  // Duplicate items so the scroll loop is seamless
  const items = [...TICKER_SUBJECT_KEYS, ...TICKER_SUBJECT_KEYS]

  return (
    <div className={styles['ticker-strip']} aria-label="Subjects ticker">

      {/* Left label */}
      <div className={styles['ticker-strip__label']}>
        <span>✦ {t('subjects.section_eyebrow')}</span>
      </div>

      {/* Scrolling track */}
      <div className={styles['ticker-strip__track']}>
        <ul className={styles['ticker-strip__list']}>
          {items.map((subject, index) => (
            <li key={index} className={styles['ticker-strip__item']}>
              <span className={styles['ticker-strip__dot']}>✦</span>
              {t(subject)}
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}