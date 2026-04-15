import React from 'react'
import { useTranslation } from 'react-i18next'
import { NEWS_ITEMS } from '@/data/news.data'
import styles from './News.module.scss'

export const News: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="news" className={styles.news}>
      <div className={styles.news__container}>

        <div className={styles.news__header}>
          <span className={styles.news__eyebrow}>{t('news.eyebrow')}</span>
          <h2 className={styles.news__title}>{t('news.title')}</h2>
          <p className={styles.news__sub}>{t('news.sub')}</p>
          <div className={styles.news__divider} />
        </div>

        <div className={styles.news__grid}>
          {NEWS_ITEMS.map(item => (
            <div key={item.id} className={styles.news__card}>
              <div className={`${styles.news__accent} ${styles[`news__accent--${item.variant}`]}`} />
              <div className={styles.news__cardbody}>
                <span className={styles.news__tag}>
                  {t(`news.cards.${item.variant}.tag`)}
                </span>
                <h4 className={styles.news__cardtitle}>
                  {t(`news.cards.${item.variant}.title`)}
                </h4>
                <p className={styles.news__cardbodytext}>
                  {t(`news.cards.${item.variant}.body`)}
                </p>
                <div className={styles.news__date}>
                  {t(`news.cards.${item.variant}.date`)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
