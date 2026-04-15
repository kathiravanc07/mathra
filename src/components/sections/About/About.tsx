import React from 'react'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import styles from './About.module.scss'

const CHECKLIST_KEYS = ['mentors', 'subjects', 'online', 'offline', 'chanter', 'community'] as const

export const About: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className={styles.about}>
      <div className={styles.about__container}>

        {/* ── Left — image frame ──────────────────────────────── */}
        <div className={styles.about__imgside}>

          {/* Gradient border → cream inner frame */}
          <div className={styles.about__frame}>
            <div className={styles.about__frameinner}>
              <img
                src="/Logo.png"
                alt="Manthra Prathibhimbam"
                className={styles.about__frameimg}
              />
              <p className={styles.about__quote}>
                "{t('about.tagline')}"
              </p>
            </div>
          </div>

          {/* Badge ab1 — Global Community (bottom-right) */}
          <div className={`${styles.about__badge} ${styles['about__badge--br']}`}>
            <div className={styles.about__badgeicon}>
              <Globe strokeWidth={2} />
            </div>
            <div className={styles.about__badgetext}>
              <strong>{t('about.badge_global_title')}</strong>
              <span>{t('about.badge_global_sub')}</span>
            </div>
          </div>

          {/* Badge ab2 — Online & Offline (top-left) */}
          <div className={`${styles.about__badge} ${styles['about__badge--tl']}`}>
            <div className={styles.about__badgeicon}>✦</div>
            <div className={styles.about__badgetext}>
              <strong>{t('about.badge_mode_title')}</strong>
              <span>{t('about.badge_mode_sub')}</span>
            </div>
          </div>

        </div>

        {/* ── Right — content ─────────────────────────────────── */}
        <div className={styles.about__content}>

          <span className={styles.about__eyebrow}>{t('about.eyebrow')}</span>
          <h2 className={styles.about__title}>{t('about.title')}</h2>
          <div className={styles.about__divider} />

          <p className={styles.about__para}>{t('about.p1')}</p>
          <p className={styles.about__para}>{t('about.p2')}</p>
          <p className={styles.about__para}>{t('about.p3')}</p>

          {/* Checklist */}
          <div className={styles.about__list}>
            {CHECKLIST_KEYS.map(key => (
              <div key={key} className={styles.about__listitem}>
                {t(`about.checklist.${key}`)}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
