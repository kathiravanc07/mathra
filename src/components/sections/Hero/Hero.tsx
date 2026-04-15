import React from 'react'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import styles from './Hero.module.scss'

export const Hero: React.FC = () => {
  const { t } = useTranslation()

  const cardSubjectsRaw = t('hero.card_subjects', { returnObjects: true })
  const cardSubjects: string[] = Array.isArray(cardSubjectsRaw) ? cardSubjectsRaw : []

  return (
    <section id="home" className={styles.hero}>

      {/* Decorative background circles */}
      <div className={styles.hero__circle1} aria-hidden="true" />
      <div className={styles.hero__circle2} aria-hidden="true" />
      <div className={styles.hero__circle3} aria-hidden="true" />

      <div className={styles.hero__container}>

        {/* ── Left content ──────────────────────────────── */}
        <div className={styles.hero__content}>

          <div className={styles.hero__badge}>
            {t('hero.badge')}
          </div>

          <h1 className={styles.hero__title}>
            {t('hero.title_line1')}
            <span className={styles['hero__title-line2']}>
              {t('hero.title_line2')}
            </span>
          </h1>

          <p className={styles.hero__desc}>
            {t('hero.description')}
          </p>

          <div className={styles.hero__btns}>
            <a href="#courses" className={styles.hero__btnprimary}>
              {t('hero.cta_primary')}
            </a>
            <a href="#about" className={styles.hero__btnoutline}>
              {t('hero.cta_secondary')}
            </a>
          </div>

          {/* Stats */}
          <div className={styles.hero__stats}>

            <div className={styles.hero__stat}>
              <div className={styles.hero__statvalue}>
                {t('hero.stat_subjects_value')}
              </div>
              <div className={styles.hero__statlabel}>
                {t('hero.stat_subjects_label')}
              </div>
            </div>

            <div className={styles.hero__stat}>
              <div className={styles.hero__statvalue}>
                <Globe strokeWidth={2} />
              </div>
              <div className={styles.hero__statlabel}>
                {t('hero.stat_global_label')}
              </div>
            </div>

            <div className={styles.hero__stat}>
              <div className={styles.hero__statvalue}>
                {t('hero.stat_modes_value')}
              </div>
              <div className={styles.hero__statlabel}>
                {t('hero.stat_modes_label')}
              </div>
            </div>

          </div>
        </div>

        {/* ── Right card ────────────────────────────────── */}
        <div className={styles.hero__card}>

          {/* Card header */}
          <div className={styles.hero__cardheader}>
            <img
              src="/Logo.png"
              alt="Manthra Prathibhimbam logo"
              className={styles.hero__cardlogo}
            />
            <div>
              <div className={styles.hero__cardbrand}>
                {t('brand.name')}
              </div>
              <div className={styles.hero__cardtagline}>
                ✦ {t('hero.card_tagline')} ✦
              </div>
            </div>
          </div>

          {/* Subject list */}
          <div className={styles.hero__cardlist}>
            {cardSubjects.map((subject, i) => (
              <div key={i} className={styles.hero__carditem}>
                <div className={styles.hero__cardcheck} />
                {subject}
              </div>
            ))}
          </div>

          {/* Card CTA */}
          <a href="#courses" className={styles.hero__cardcta}>
            {t('hero.card_cta')} →
          </a>

        </div>

      </div>
    </section>
  )
}
