import React from 'react'
import type { LucideIcon } from 'lucide-react'
import styles from './SubjectCards.module.scss'

interface SubjectCardProps {
  icon:    LucideIcon
  nameKey: string
  descKey: string
  t:       (key: string) => string
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ icon: Icon, nameKey, descKey, t }) => (
  <article className={styles.subjects__card}>
    <div className={styles.subjects__icon}>
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <h3 className={styles.subjects__name}>{t(nameKey)}</h3>
    <p className={styles.subjects__desc}>{t(descKey)}</p>
  </article>
)
