import brushMarkersImg from '../assets/brushMarkers.jpg'
import sketchbookImg from '../assets/SketchBOok.jpg'
import keyboardImg from '../assets/Keyboard.jpg'
import ledLampImg from '../assets/LedLamp.jpg'
import ergonomicImg from '../assets/DeskPadsSet.jpg'
import finelinerPensImg from './finelinerpens.jpg'

const products = [
  {
    name: 'Scary Kawaii Halloween: A Coloring Book So Cute, It\'s Scary!',
    description:
      'Spooky-cute Halloween pages designed to be fun to color, not frustrating, with clean single-sided layouts.',
    link: 'https://www.amazon.com/Scary-Kawaii-Halloween-Coloring-Book/dp/B0DHDNTW87',
    vendor: 'Amazon',
    cta: 'Preview on Amazon',
    img: 'https://m.media-amazon.com/images/I/71lC7tkVPSL._SL1250_.jpg'
  },
  {
    name: 'Buzzing Adventures: A Coloring Book of Bees - Explore the World of Bees',
    description:
      'Whimsical bee-themed pages that help you relax, stay focused, and enjoy a calmer creative session.',
    link: 'https://www.amazon.com/Buzzing-Adventures-Coloring-Explore-Beehives/dp/B0D9R6ZMPX',
    vendor: 'Amazon',
    cta: 'See the Book',
    img: 'https://m.media-amazon.com/images/I/71FfH9m-ViL._SL1293_.jpg'
  },
  {
    name: 'PromptStorm',
    description:
      'A 100-prompt system that helps you break creative blocks and move from idea to execution faster.',
    link: 'https://fleurdevie.gumroad.com/l/100prompt-storm',
    vendor: 'Gumroad',
    cta: 'Get the Bundle',
    img: 'https://public-files.gumroad.com/cl4kcid98mhxbdmz9gv5cblq5g0n'
  },
  {
    name: 'Goblin Self-Care Kit',
    description:
      'A printable self-care set that turns chaotic days into quick grounding rituals you will actually do.',
    link: 'https://fleurdevie.gumroad.com/l/goblin-core-coloring-affirmations',
    vendor: 'Gumroad',
    cta: 'Open on Gumroad',
    img: 'https://public-files.gumroad.com/8zkh486xdztioliehhkba0arw9e0'
  },
  {
    name: 'AI-Powered Grad Launch Kit',
    description:
      'A launch-ready prompt kit that helps grads package skills, show value, and ship faster with AI support.',
    link: 'https://fleurdevie.gumroad.com/l/ai-powered-grad',
    vendor: 'Gumroad',
    cta: 'Get the Bundle',
    img: 'https://public-files.gumroad.com/7l7j9w5akr6jdfvso9rwzlixxxr7'
  },
  {
    name: 'Coming Soon',
    description:
      'New creator tools and experiments are in progress. Join early and catch the next release first.',
    link: '',
    vendor: 'Upcoming',
    cta: 'Launching Soon',
    img: '',
    comingSoon: true
  }
]

const recommended = [
  {
    title: 'Brush Markers Set',
    description: 'Great color range, smooth to use, and a solid mid-range option.',
    image: brushMarkersImg,
    link: 'https://www.amazon.com/dp/B0FH1JBW5T?tag=ashb4studio0b-20',
    cta: 'Check it out'
  },
  {
    title: 'Sketchbook',
    description: 'Where most of my ideas start before they turn into something real.',
    image: sketchbookImg,
    link: 'https://www.amazon.com/dp/B08TLK1ZSV?tag=ashb4studio0b-20',
    cta: 'See it'
  },
  {
    title: 'Mechanical Keyboard',
    description: 'Makes typing all day way more satisfying and less annoying.',
    image: keyboardImg,
    link: 'https://www.amazon.com/dp/B0GRZXQY34?tag=ashb4studio0b-20',
    cta: 'Check it out'
  },
  {
    title: 'LED Light Bar',
    description: 'Adds a really nice vibe when working or drawing at night.',
    image: ledLampImg,
    link: 'https://www.amazon.com/dp/B0F3D8RB4H?tag=ashb4studio0b-20',
    cta: 'Get it'
  },
  {
    title: 'Ergonomic Keyboard',
    description: 'More comfortable setup for longer sessions building or working.',
    image: ergonomicImg,
    link: 'https://www.amazon.com/dp/B0CBHKZ8ZN?tag=ashb4studio0b-20',
    cta: 'See it'
  },
  {
    title: 'Fineliner Pens',
    description: 'Great for outlines, details, and cleaning things up after sketching.',
    image: finelinerPensImg,
    link: 'https://www.amazon.com/dp/B0F9YDP1PM?tag=ashb4studio0b-20',
    cta: 'Check them out'
  }
]

function ProductCard({ title, description, image, link, cta, isComingSoon = false }) {
  return (
    <article className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-left">
      {image ? (
        <img
          src={image}
          alt={`${title} cover`}
          className="w-full h-48 object-cover rounded mb-4"
          loading="lazy"
        />
      ) : null}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      {isComingSoon ? (
        <p className="inline-block text-purple-700 font-semibold">{cta}</p>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-purple-700 font-semibold underline focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
          aria-label={`Open ${title} in a new tab`}
        >
          {cta} {'->'}
        </a>
      )}
    </article>
  )
}

function GumroadProducts() {
  return (
    <section
      id="products"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-cream text-gray-900 text-center"
      aria-labelledby="products-heading"
    >
      <h2 id="products-heading" className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-darkpurple">
        Things I've Made
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            title={product.name}
            description={product.description}
            image={product.img}
            link={product.link}
            cta={product.cta}
            isComingSoon={Boolean(product.comingSoon)}
          />
        ))}
      </div>

      <section className="mt-16 rounded-2xl bg-cream py-10 px-4 sm:px-6">
        <h2 className="text-2xl font-serif font-bold text-darkpurple text-center">
          Stuff I Actually Use
        </h2>

        <p className="text-sm text-slate-600 text-center mb-8 max-w-xl mx-auto">
          A few things I use or want in my setup while building, sketching, or working on ideas.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {recommended.map((item) => (
            <ProductCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
              cta={item.cta}
            />
          ))}
        </div>

        <p className="text-xs text-slate-500 text-center mt-4">
          Some links may be affiliate links, which means I may earn a small commission at no extra cost to you.
        </p>
      </section>
    </section>
  )
}

export default GumroadProducts
