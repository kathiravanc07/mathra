import { Hero }          from '@/components/sections/Hero'
import { Ticker }        from '@/components/ui/Ticker'
import { SubjectCards }  from '@/components/sections/SubjectCards'
import { About }         from '@/components/sections/About'
import { LogoMeaning }   from '@/components/sections/LogoMeaning'
import { Courses }       from '@/components/sections/Courses'
import { StatsStrip }    from '@/components/sections/StatsStrip'
import { Gallery }       from '@/components/sections/Gallery'
import { News }          from '@/components/sections/News'
import { Contact }       from '@/components/sections/Contact'

export const HomePage: React.FC = () => (
  <main>
    <Hero />
    <Ticker />
    <SubjectCards />
    <About />
    <LogoMeaning />
    <Courses />
    <StatsStrip />
    <Gallery />
    <News />
    <Contact />
  </main>
)