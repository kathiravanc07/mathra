import React from 'react'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, CreditCard, Smartphone } from 'lucide-react'
import styles from './Contact.module.scss'

const CONTACT_ITEMS = [
  { key: 'phone',   Icon: Phone      },
  { key: 'email',   Icon: Mail       },
  { key: 'address', Icon: MapPin     },
  { key: 'upi',     Icon: CreditCard },
  { key: 'social',  Icon: Smartphone },
] as const

export const Contact: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact__container}>

        {/* Header */}
        <div className={styles.contact__header}>
          <span className={styles.contact__eyebrow}>
            {t('contact.eyebrow')}
          </span>
          <h2 className={styles.contact__title}>
            {t('contact.title')}
          </h2>
          <p className={styles.contact__sub}>
            {t('contact.sub')}
          </p>
          <div className={styles.contact__divider} />
        </div>

        <div className={styles.contact__grid}>

          {/* Left — contact items */}
          <div className={styles.contact__col}>
            <h3 className={styles.contact__colheading}>Get in Touch</h3>
            {CONTACT_ITEMS.map(({ key, Icon }) => (
              <div key={key} className={styles.contact__item}>
                <div className={styles.contact__ico}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className={styles.contact__info}>
                  <strong>{t(`contact.${key}.label`)}</strong>
                  <p>{t(`contact.${key}.value`)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — bank details */}
          <div>
            <div className={styles.contact__bankcard}>
              <div className={styles.contact__bankheader}>
                <span>{t('contact.bank.title')}</span>
              </div>
              {(['ifsc', 'account', 'upi'] as const).map(field => (
                <div key={field} className={styles.contact__bankrow}>
                  <span className={styles.contact__banklbl}>
                    {t(`contact.bank.${field}.label`)}
                  </span>
                  <span className={styles.contact__bankval}>
                    {t(`contact.bank.${field}.value`)}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
