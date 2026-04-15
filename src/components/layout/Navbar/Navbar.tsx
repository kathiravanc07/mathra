import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from '../../ui/LanguageSelector/LanguageSelector'
import styles from './Navbar.module.scss'


const NAV_LINKS = [
  { key: 'nav.home',     href: '/#home'         },
  { key: 'nav.subjects', href: '/#subjects'      },
  { key: 'nav.courses',  href: '/#courses'       },
  { key: 'nav.about',    href: '/#about'         },
  { key: 'nav.news',     href: '/#news'          },
  { key: 'nav.gallery',  href: '/#gallery'       },
]

export const Navbar: React.FC = () => {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles['navbar--scrolled'] : ''}`}>
      <div className={styles.navbar__inner}>

        {/* Brand */}
        <a href="#home" className={styles.navbar__brand}>
          <img src="/Logo.png" alt="Logo" className={styles.navbar__logo} />
          <div className={styles['navbar__brand-text']}>
            <span className={styles['navbar__brand-name']}>
              {t('brand.name')}
            </span>
            <span className={styles['navbar__brand-tagline']}>
              {t('brand.tagline')}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className={styles.navbar__links}>
          {NAV_LINKS.map(link => (
            <li key={link.key}>
              <a href={link.href} className={styles.navbar__link}>
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Language + CTA */}
        <div className={styles['navbar__right']}>
          <LanguageSelector />
          <a href="/#contact" className={styles['navbar__cta']}>
            {t('nav.contact')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.navbar__hamburger}
          onClick={() => setIsMobileOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className={styles['navbar__mobile-menu']}>
          {NAV_LINKS.map(link => (
            <a
              key={link.key}
              href={link.href}
              className={styles['navbar__mobile-link']}
              onClick={() => setIsMobileOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
          <LanguageSelector />
        </div>
      )}
    </nav>
  )
}