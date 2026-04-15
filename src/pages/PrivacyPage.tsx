import React from 'react'
import { LegalPage } from './legal/LegalPage'

export const PrivacyPage: React.FC = () => (
  <LegalPage
    eyebrow="Legal"
    title="Privacy Policy"
    intro="At ManthraPrathibhimbam.com, we are committed to protecting your privacy and personal information."
    sections={[
      {
        number:  '1',
        heading: 'Information We Collect',
        bullets: [
          'Name, email address, and phone number',
          'Payment details (processed via third-party gateways)',
          'Website usage data (cookies, analytics)',
        ],
      },
      {
        number:  '2',
        heading: 'How We Use Your Information',
        bullets: [
          'To provide access to online classes and materials',
          'To communicate updates, schedules, and announcements',
          'To improve our website and services',
        ],
      },
      {
        number:  '3',
        heading: 'Data Security',
        body:    'We implement reasonable security measures to safeguard your personal information.',
      },
      {
        number:  '4',
        heading: 'Sharing of Information',
        body:    'We do not sell, trade, or rent your personal information.',
      },
      {
        number:  '5',
        heading: 'Cookies Policy',
        body:    'Our website may use cookies to enhance user experience.',
      },
      {
        number:  '6',
        heading: 'Your Rights',
        body:    'You may request access, correction, or deletion of your personal data by contacting us.',
      },
      {
        number:  '7',
        heading: 'Updates to This Policy',
        body:    'We may update this Privacy Policy from time to time.',
      },
    ]}
    contact="info@manthraprathibhimbam.com"
  />
)
