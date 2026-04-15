import React from 'react'
import { useTranslation } from 'react-i18next'
import { Flower2, Bell, Eye } from 'lucide-react'
import styles from './LogoMeaning.module.scss'

const MEANING_KEYS = ['lotus', 'manthra', 'prathibhimbam'] as const
const COLOR_KEYS   = ['maroon', 'blue'] as const

const MEANING_ICONS: Record<typeof MEANING_KEYS[number], React.ReactNode> = {
  lotus:         <Flower2 size={18} strokeWidth={1.5} />,
  manthra:       <Bell    size={18} strokeWidth={1.5} />,
  prathibhimbam: <Eye     size={18} strokeWidth={1.5} />,
}

export const LogoMeaning: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="logo-meaning" className={styles.logo}>
      <div className={styles.logo__container}>

        {/* ── Centered section header ──────────────────────────── */}
        <div className={styles.logo__header}>
          <span className={styles.logo__eyebrow}>
            {t('logo_meaning.eyebrow')}
          </span>
          <h2 className={styles.logo__title}>
            {t('logo_meaning.title')}
          </h2>
          <div className={styles.logo__divider} />
        </div>

        {/* ── Two-column layout ────────────────────────────────── */}
        <div className={styles.logo__wrap}>

          {/* Left — sticky logo */}
          <div className={styles.logo__logocol}>
            <img
              src="/Logo.png"
              alt="Manthra Prathibhimbam Logo"
              className={styles.logo__img}
            />
            <div className={styles.logo__caption}>
              {t('logo_meaning.logo_caption')}
            </div>
            <div className={styles.logo__sub}>
              {t('logo_meaning.logo_sub')}
            </div>
          </div>

          {/* Right — cards */}
          <div className={styles.logo__cardscol}>

            {/* Meaning cards */}
            {MEANING_KEYS.map(key => (
              <div key={key} className={styles.logo__mcard}>
                <div className={styles.logo__mcardheader}>
                  <div className={styles.logo__mcardicon}>
                    {MEANING_ICONS[key]}
                  </div>
                  <h4 className={styles.logo__mcardtitle}>
                    {t(`logo_meaning.${key}.title`)}
                  </h4>
                </div>
                <p className={styles.logo__mcardbody}>
                  {t(`logo_meaning.${key}.body`)}
                </p>
              </div>
            ))}

            {/* Color meaning cards */}
            <div className={styles.logo__colorrow}>
              {COLOR_KEYS.map(key => (
                <div
                  key={key}
                  className={`${styles.logo__colorcard} ${styles[`logo__colorcard--${key}`]}`}
                >
                  <div className={styles.logo__colorhead}>
                    <div className={styles.logo__swatch} />
                    <h4 className={styles.logo__colortitle}>
                      {t(`logo_meaning.${key}.title`)}
                    </h4>
                  </div>
                  <p className={styles.logo__colorbody}>
                    {t(`logo_meaning.${key}.body`)}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
