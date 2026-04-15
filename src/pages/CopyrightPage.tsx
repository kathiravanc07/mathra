import React from 'react'
import { LegalPage } from './legal/LegalPage'

export const CopyrightPage: React.FC = () => (
  <LegalPage
    eyebrow="Legal"
    title="Copyright Notice"
    intro="All audio recordings, Vedic chants, mantras, teaching materials, and related content are the exclusive intellectual property of Manthra Prathibhimbam."
    sections={[
      {
        heading: 'Strictly Prohibited',
        bullets: [
          'Copying, reproducing, or redistributing audio recordings',
          'Uploading content to YouTube, social media, or any platform',
          'Commercial use, resale, or monetization of any content',
          'Sharing access credentials or distributing course materials',
        ],
      },
      {
        heading: 'Limited Usage Permission',
        body:    'Users are granted a limited, non-transferable license to access content strictly for personal, non-commercial learning purposes.',
      },
      {
        heading: 'Unauthorized Use May Result In',
        bullets: [
          'Immediate termination of access',
          'Legal action under applicable copyright laws',
        ],
      },
      {
        body: 'All content is protected under the Copyright Act, 1957 (India) and applicable international copyright laws.',
      },
    ]}
    contact="info@manthraprathibhimbam.com"
  />
)
