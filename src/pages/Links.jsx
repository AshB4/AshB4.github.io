import { useRef } from 'react'
import CanvasHexFrame from '../components/HexFrames'
import AbLogo from '../assets/AbLogo.png'
import Ash from '../assets/ColorPopAsh.webp'
import GumroadProducts from '../components/GumroadProducts'
import ProfileHeroCard from '../components/ProfileHeroCard'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

function Links() {
  const linksSectionRef = useRef(null)

  return (
    <main className="bg-cream min-h-screen text-gray-900 font-sans">
      <section ref={linksSectionRef} className="relative isolate overflow-hidden py-12 sm:py-16">
        <CanvasHexFrame containerRef={linksSectionRef} />

        <div className="mx-auto max-w-xl lg:max-w-5xl px-4 sm:px-6 relative z-10">
          <ProfileHeroCard
            imageSrc={Ash}
            imageAlt="Portrait of Ashley Broussard"
            title="Hi, I'm AshB4"
            titleId="hero-title"
            subtitle="What I make"
            paragraphs={[
              'A mix of useful tools, creative experiments, and a few things that turned out better than expected.'
            ]}
          />

          <section className="mt-8 relative rounded-2xl bg-white/75 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-xl ring-1 ring-black/5">
            <img
              src={AbLogo}
              alt="Ashley Broussard monogram"
              className="absolute top-4 right-4 w-14 sm:w-14 opacity-25"
              loading="lazy"
            />

            <p className="font-serif text-2xl sm:text-3xl font-bold text-darkpurple leading-tight pr-16">
              AI tools, chaotic creations, and digital experiments.
            </p>
            <p className="mt-4 text-base sm:text-lg max-w-3xl text-gray-800 leading-relaxed">
              Built with code, curiosity, and a little bit of gremlin energy.
            </p>
            <p className="mt-3 text-base sm:text-lg max-w-3xl font-semibold text-darkpurple leading-relaxed">
              I build things people end up using.
            </p>
            <p className="mt-3 text-base sm:text-lg max-w-3xl text-gray-800 leading-relaxed">
              Mostly web apps, tools, and digital products built to solve problems or at least make life a little easier.
            </p>
          </section>
        </div>

      </section>

      <GumroadProducts />
      <Contact
        title="Let's Connect"
        description="I build things people end up using. If you want to collaborate, have an idea, or just found something interesting, reach out or explore more below."
        showLiveProject={false}
      />

      <Footer showSocialLinks={false} />
      <BackToTop />
    </main>
  )
}

export default Links
