import React from 'react'
import { LegalPage } from './legal/LegalPage'

export const LegalNoticePage: React.FC = () => (
  <LegalPage
    eyebrow="Legal"
    title="Legal Notice"
    intro="All audio recordings, Vedic chants, and teaching materials are protected under the Copyright Act, 1957."
    sections={[
      {
        body: 'Sharing, forwarding, distributing, or uploading these materials through WhatsApp, Telegram, email, social media, or any other platform without prior written permission is strictly prohibited.',
      },
      {
        heading: 'Specifically Prohibited',
        bullets: [
          'Forwarding chant audio files to individuals or groups',
          'Uploading recordings to WhatsApp groups or YouTube',
          'Recording live classes and sharing externally',
          'Distributing login access or course materials',
        ],
      },
      {
        heading: 'Legal Consequences',
        bullets: [
          'Immediate suspension or termination of access',
          'Legal notice and civil/criminal action',
          'Claim for damages and financial penalties',
        ],
      },
    ]}
    contact="info@manthraprathibhimbam.com"
  />
)
