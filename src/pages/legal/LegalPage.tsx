import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import styles from './LegalPage.module.scss'

export interface LegalSection {
  number?:  string
  heading?: string
  body?:    string
  bullets?: string[]
}

interface LegalPageProps {
  eyebrow:   string
  title:     string
  intro?:    string
  sections:  LegalSection[]
  contact?:  string
}

export const LegalPage: React.FC<LegalPageProps> = ({
  eyebrow, title, intro, sections, contact,
}) => (
  <div className={styles.legal}>

    {/* ── Dark header ──────────────────────────────── */}
    <div className={styles.legal__hero}>
      <div className={styles.legal__heroinner}>
        <Link to="/" className={styles.legal__back}>
          <ArrowLeft size={15} strokeWidth={2} />
          Back to Home
        </Link>
        <span className={styles.legal__eyebrow}>{eyebrow}</span>
        <h1 className={styles.legal__title}>{title}</h1>
        <div className={styles.legal__divider} />
      </div>
    </div>

    {/* ── Content ──────────────────────────────────── */}
    <div className={styles.legal__body}>
      <div className={styles.legal__content}>

        {intro && (
          <p className={styles.legal__intro}>{intro}</p>
        )}

        {sections.map((sec, i) => (
          <div key={i} className={styles.legal__section}>
            {(sec.number ?? sec.heading) && (
              <div className={styles.legal__sechead}>
                {sec.number  && <span className={styles.legal__num}>{sec.number}</span>}
                {sec.heading && <h2 className={styles.legal__heading}>{sec.heading}</h2>}
              </div>
            )}
            {sec.body && (
              <p className={styles.legal__text}>{sec.body}</p>
            )}
            {sec.bullets && sec.bullets.length > 0 && (
              <ul className={styles.legal__list}>
                {sec.bullets.map((b, j) => (
                  <li key={j} className={styles.legal__item}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {contact && (
          <div className={styles.legal__contact}>
            <strong>Contact:</strong>{' '}
            <a href={`mailto:${contact}`}>{contact}</a>
          </div>
        )}

      </div>
    </div>

  </div>
)
