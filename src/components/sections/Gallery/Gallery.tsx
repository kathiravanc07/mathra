import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, X } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './Gallery.module.scss'

// ── Add image objects here as photos become available ────────────────────────
// Example: { src: '/gallery/event-01.jpg', alt: 'Chanting session, Mumbai 2024' }
const GALLERY_IMAGES: { src: string; alt: string; title?: string; desc?: string }[] = [
  { src: '/gallery/Pooja-Photo-1.jpg', alt: 'Pooja Event 1', title: 'Pooja Ceremony',        desc: 'Sacred pooja ceremony conducted by our mentors'     },
  { src: '/gallery/Pooja-Photo-2.jpg', alt: 'Pooja Event 2', title: 'Vedic Chanting Session', desc: 'Group chanting session with devoted learners'        },
  { src: '/gallery/Pooja-Photo-3.jpg', alt: 'Pooja Event 3', title: 'Spiritual Gathering',    desc: 'Community gathering for spiritual learning'          },
  { src: '/gallery/Pooja-Photo-4.jpg', alt: 'Pooja Event 4', title: 'Manthra Practice',       desc: 'Dedicated manthra practice session'                 },
  { src: '/gallery/Pooja-Photo-5.jpg', alt: 'Pooja Event 5', title: 'Offline Event',          desc: 'In-person event organized across cities'            },
  { src: '/gallery/Pooja-Photo-6.jpg', alt: 'Pooja Event 6', title: 'Sacred Rituals',         desc: 'Traditional Vedic rituals and practices'            },
]

// ── Responsive image with original-fallback on error ─────────────────────────
const GalleryImage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src}
    srcSet={`${src}?w=400 400w, ${src}?w=800 800w, ${src} 1200w`}
    sizes="(max-width: 480px) calc(100vw - 2rem), (max-width: 768px) calc(50vw - 2rem), calc(33vw - 2rem)"
    alt={alt} loading="lazy" decoding="async"
    onError={(e) => { const img = e.currentTarget; img.srcset = ''; img.src = src }}
    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
  />
)

// ── Lightbox with Swiper ──────────────────────────────────────────────────────
const Lightbox = ({
  images,
  startIndex,
  onClose,
}: {
  images: typeof GALLERY_IMAGES
  startIndex: number
  onClose: () => void
}) => (
  <div className={styles.gallery__lightbox} onClick={onClose}>
    <button className={styles.gallery__lbclose} onClick={onClose} aria-label="Close">
      <X size={22} />
    </button>
    <div className={styles.gallery__lbswiper} onClick={(e) => e.stopPropagation()}>
      <Swiper
        modules={[Navigation, Keyboard]}
        navigation
        keyboard={{ enabled: true }}
        initialSlide={startIndex}
        loop={images.length > 1}
        spaceBetween={16}
        style={{ width: '100%', height: '100%' }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className={styles.gallery__lbslide}>
              <img src={img.src} alt={img.alt} />
              {(img.title || img.desc) && (
                <div className={styles.gallery__lbinfo}>
                  {img.title && <h4 className={styles.gallery__lbtitle}>{img.title}</h4>}
                  {img.desc  && <p  className={styles.gallery__lbdesc}>{img.desc}</p>}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)

// ── Gallery section ───────────────────────────────────────────────────────────
const PLACEHOLDER_SLOTS = [1, 2, 3, 4, 5, 6]

export const Gallery: React.FC = () => {
  const { t } = useTranslation()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const hasImages = GALLERY_IMAGES.length > 0

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.gallery__container}>

        <div className={styles.gallery__header}>
          <span className={styles.gallery__eyebrow}>{t('gallery.eyebrow')}</span>
          <h2 className={styles.gallery__title}>{t('gallery.title')}</h2>
          <p className={styles.gallery__sub}>{t('gallery.sub')}</p>
          <div className={styles.gallery__divider} />
        </div>

        <div className={styles.gallery__grid}>
          {hasImages
            ? GALLERY_IMAGES.map((image, index) => (
                <div key={index} className={styles.gallery__card} onClick={() => setLightboxIndex(index)}>
                  <GalleryImage src={image.src} alt={image.alt} />
                </div>
              ))
            : PLACEHOLDER_SLOTS.map(slot => (
                <div key={slot} className={styles.gallery__card}>
                  <span className={styles.gallery__icon}><Image size={32} strokeWidth={1.2} /></span>
                  <span className={styles.gallery__label}>{t('gallery.coming_soon')}</span>
                </div>
              ))
          }
        </div>

        {!hasImages && <p className={styles.gallery__note}>{t('gallery.note')}</p>}

      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  )
}
