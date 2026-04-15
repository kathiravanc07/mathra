import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.scss'

const LEGAL_LINKS = [
  { to: '/terms',        key: 'footer.legal.terms'   },
  { to: '/disclaimer',   key: 'footer.legal.disclaimer' },
  { to: '/privacy',      key: 'footer.legal.privacy' },
  { to: '/copyright',    key: 'footer.legal.copyright' },
  { to: '/legal-notice', key: 'footer.legal.notice'  },
]

export const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <p className={styles.footer__brand}>{t('brand.name')}</p>
      <p className={styles.footer__tagline}>{t('footer.tagline')}</p>
      <nav className={styles.footer__legal}>
        {LEGAL_LINKS.map(({ to, key }) => (
          <Link key={to} to={to} className={styles.footer__link}>{t(key)}</Link>
        ))}
      </nav>
      <p className={styles.footer__copy}>{t('footer.copyright')}</p>
    </footer>
  )
}
