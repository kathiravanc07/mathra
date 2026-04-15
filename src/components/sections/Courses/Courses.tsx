import React from 'react'
import { useTranslation } from 'react-i18next'
import { Monitor, Building2 } from 'lucide-react'
import { COURSES } from '@/data/courses.data'
import styles from './Courses.module.scss'

const COURSE_ICONS: Record<string, React.ReactNode> = {
  online:  <Monitor   size={40} strokeWidth={1.5} />,
  offline: <Building2 size={40} strokeWidth={1.5} />,
}

export const Courses: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="courses" className={styles.courses}>
      <div className={styles.courses__container}>

        {/* Section header */}
        <div className={styles.courses__header}>
          <span className={styles.courses__eyebrow}>
            {t('courses.eyebrow')}
          </span>
          <h2 className={styles.courses__title}>
            {t('courses.title')}
          </h2>
          <p className={styles.courses__sub}>
            {t('courses.sub')}
          </p>
          <div className={styles.courses__divider} />
        </div>

        {/* Cards grid */}
        <div className={styles.courses__grid}>
          {COURSES.map(course => (
            <div
              key={course.id}
              className={`${styles.courses__card} ${styles[`courses__card--${course.mode}`]}`}
            >
              {/* Colored header */}
              <div className={styles.courses__cardhead}>
                <div className={styles.courses__icon}>
                  {COURSE_ICONS[course.mode]}
                </div>
                <h3 className={styles.courses__cardtitle}>
                  {t(`courses.${course.mode}.title`)}
                </h3>
                <p className={styles.courses__cardtagline}>
                  {t(`courses.${course.mode}.tagline`)}
                </p>
              </div>

              {/* White body */}
              <div className={styles.courses__cardbody}>
                <p className={styles.courses__cardbodytext}>
                  {t(`courses.${course.mode}.body`)}
                </p>
                <p className={styles.courses__cardnote}>
                  {t(`courses.${course.mode}.note`)}
                </p>
                <a
                  href={course.ctaHref}
                  className={`${styles.courses__cta} ${
                    course.mode === 'online'
                      ? styles['courses__cta--navy']
                      : styles['courses__cta--terra']
                  }`}
                >
                  {t(`courses.${course.mode}.cta`)}
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
