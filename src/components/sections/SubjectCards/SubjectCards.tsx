import React from 'react'
import { useTranslation } from 'react-i18next'
import { SubjectCard } from './SubjectCard'
import { SUBJECTS } from '@/data/subjects.data'
import styles from './SubjectCards.module.scss'

export const SubjectCards: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="subjects" className={styles.subjects}>
      <div className={styles.subjects__container}>

        {/* Section header */}
        <div className={styles.subjects__header}>
          <span className={styles.subjects__eyebrow}>
            {t('subjects.section_eyebrow')}
          </span>
          <h2 className={styles.subjects__title}>
            {t('subjects.section_title')}
          </h2>
          <p className={styles.subjects__sub}>
            {t('subjects.section_sub')}
          </p>
          <div className={styles.subjects__divider} />
        </div>

        {/* Cards grid */}
        <div className={styles.subjects__grid}>
          {SUBJECTS.map(subject => (
            <SubjectCard
              key={subject.id}
              icon={subject.icon}
              nameKey={`subjects.${subject.id}.name`}
              descKey={`subjects.${subject.id}.desc`}
              t={t}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
