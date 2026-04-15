import React from 'react'
import { useTranslation } from 'react-i18next'
import { STATS } from '@/data/stats.data'
import styles from './StatsStrip.module.scss'

export const StatsStrip: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.stats}>
      <div className={styles.stats__inner}>
        {STATS.map(stat => (
          <div key={stat.id} className={styles.stats__item}>
            <div className={styles.stats__value}>
              {t(`stats.${stat.id}.value`)}
            </div>
            <div className={styles.stats__label}>
              {t(`stats.${stat.id}.label`)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
