import React from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────
interface SectionHeaderProps {
  eyebrow?: string          // small pill text above title  e.g. "What We Teach"
  title: string             // main heading
  subtitle?: string         // optional paragraph below title
  align?: 'left' | 'center' | 'right'
  light?: boolean           // true = white text (for dark backgrounds)
  className?: string
}

// ─── Component ───────────────────────────────────────────────────────────────
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align     = 'center',
  light     = false,
  className = '',
}) => {
  const alignClass = {
    left:   'text-left  items-start',
    center: 'text-center items-center',
    right:  'text-right items-end',
  }[align]

  const titleColor    = light ? 'text-white'      : 'text-maroon-800'
  const subtitleColor = light ? 'text-white/80'   : 'text-gray-600'
  const dividerColor  = light ? 'bg-white/40'     : 'bg-saffron-400'
  const eyebrowColor  = light ? 'bg-white/20 text-white' : 'bg-maroon-50 text-maroon-700'

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>

      {/* Eyebrow pill */}
      {eyebrow && (
        <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest ${eyebrowColor} `}>
          {eyebrow}
        </span>
      )}

      {/* Title */}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${titleColor} `}>
        {title}
      </h2>

      {/* Divider */}
      <div className={`h-1 w-16 rounded-full ${dividerColor}`} />

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${subtitleColor} `}>
          {subtitle}
        </p>
      )}

    </div>
  )
}