import React from 'react'
import { LegalPage } from './legal/LegalPage'

export const DisclaimerPage: React.FC = () => (
  <LegalPage
    eyebrow="Legal"
    title="Disclaimer"
    intro="The content provided on ManthraPrathibhimbam.com is for educational and spiritual purposes only."
    sections={[
      {
        bullets: [
          'All teachings related to Vedas, mantras, and rituals are shared based on traditional knowledge and interpretations.',
          'We do not make any guarantees regarding spiritual, health, financial, or personal outcomes.',
          'Users are encouraged to seek professional advice where necessary.',
          'Participation is voluntary and based on individual interest and belief.',
        ],
      },
      {
        body: 'ManthraPrathibhimbam.com shall not be held responsible for any decisions or actions taken based on information provided on this website.',
      },
    ]}
    contact="info@manthraprathibhimbam.com"
  />
)
