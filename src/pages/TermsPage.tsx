import React from 'react'
import { LegalPage } from './legal/LegalPage'

export const TermsPage: React.FC = () => (
  <LegalPage
    eyebrow="Legal"
    title="Terms & Conditions"
    intro="Welcome to ManthraPrathibhimbam.com. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions."
    sections={[
      {
        number:  '1',
        heading: 'Use of Website',
        body:    'This website is dedicated to providing spiritual knowledge, Vedic teachings, mantra learning, and related educational content. All content is intended for personal, non-commercial use only.',
      },
      {
        number:  '2',
        heading: 'Intellectual Property',
        body:    'All materials on ManthraPrathibhimbam.com, including text, audio, video, chants, and teaching resources, are the intellectual property of the website unless otherwise stated. Unauthorized copying, reproduction, or distribution is strictly prohibited.',
      },
      {
        number:  '3',
        heading: 'User Conduct',
        body:    'Users agree to use the platform respectfully and shall not:',
        bullets: [
          'Share inappropriate or harmful content',
          'Disrupt online classes or sessions',
          'Violate any applicable laws',
        ],
      },
      {
        number:  '4',
        heading: 'Online Classes & Payments',
        bullets: [
          'Fees for online classes or courses must be paid in advance.',
          'Access to sessions will be provided only after successful payment.',
          'Any refund policy, if applicable, will be communicated separately.',
        ],
      },
      {
        number:  '5',
        heading: 'Limitation of Liability',
        body:    'ManthraPrathibhimbam.com does not guarantee uninterrupted access to the website or online classes. We are not liable for any direct or indirect loss arising from the use of our services.',
      },
      {
        number:  '6',
        heading: 'Modifications',
        body:    'We reserve the right to update or modify these terms at any time without prior notice. Continued use of the website constitutes acceptance of the updated terms.',
      },
      {
        number:  '7',
        heading: 'Governing Law',
        body:    'These terms shall be governed by and interpreted in accordance with the laws of India.',
      },
    ]}
    contact="info@manthraprathibhimbam.com"
  />
)
