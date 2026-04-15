import React from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────
type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'outline-navy'
  | 'outline-terra'

type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  fullWidth?: boolean
  as?: 'button' | 'a'
  href?: string
}

// ─── Variant Classes ─────────────────────────────────────────────────────────
const variantClasses: Record<ButtonVariant, string> = {
  primary:       'btn btn--primary',
  secondary:     'btn btn--secondary',
  outline:       'btn btn--outline',
  'outline-navy':'btn btn--outline-navy',
  'outline-terra':'btn btn--outline-terra',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'btn--sm',
  md: 'btn--md',
  lg: 'btn--lg',
}

// ─── Component ───────────────────────────────────────────────────────────────
export const Button: React.FC<ButtonProps> = ({
  variant   = 'primary',
  size      = 'md',
  children,
  fullWidth = false,
  className = '',
  as        = 'button',
  href,
  ...rest
}) => {
  const classes = [
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // Render as <a> tag if href is provided
  if (as === 'a' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}