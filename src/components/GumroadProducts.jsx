// src/components/GumroadProducts.jsx
const products = [
  {
    name: 'Scary Kawaii Halloween: A Coloring Book So Cute, It’s Scary!',
    description:
      'Spooky-cute Halloween pages (single-sided) for kids and adults. Ghosties, candies, and sweet-but-scary vibes.',
    link:
      'https://www.amazon.com/Scary-Kawaii-Halloween-Coloring-Book/dp/B0DHDNTW87',
    vendor: 'Amazon',
    img: 'https://m.media-amazon.com/images/I/71lC7tkVPSL._SL1250_.jpg'
  },
  {
    name:
      'Buzzing Adventures: A Coloring Book of Bees – Explore the World of Bees',
    description:
      'Whimsical bees, flowers, and beehives with a gentle educational twist. Great for nature-loving creatives.',
    link:
      'https://www.amazon.com/Buzzing-Adventures-Coloring-Explore-Beehives/dp/B0D9R6ZMPX',
    vendor: 'Amazon',
    img: 'https://m.media-amazon.com/images/I/71FfH9m-ViL._SL1293_.jpg'
  },
  {
    
    name: 'PromptStorm',
    description:
      'A 100-prompt Notion and PDF/CSV bundle for creators and founders. Built to spark clarity and flow in GPT-based workflows.',
    link: 'https://fleurdevie.gumroad.com/l/100prompt-storm',
    vendor: 'Gumroad',
    img: 'https://public-files.gumroad.com/cl4kcid98mhxbdmz9gv5cblq5g0n'
  },
  {
    name: 'Goblin Self-Care Kit',
    description:
      'Printable journal, affirmations, coloring pages and cursed spa rituals for chaotic cuties.',
    link: 'https://fleurdevie.gumroad.com/l/goblin-core-coloring-affirmations',
    vendor: 'Gumroad',
    img:'https://public-files.gumroad.com/8zkh486xdztioliehhkba0arw9e0'
  },
  {
    name: 'AI-Powered Grad Launch Kit',
    description:
      '100-prompt Notion + PDF starter bundle for grads with sass + strategy.',
    link: 'https://fleurdevie.gumroad.com/l/ai-powered-grad',
    vendor: 'Gumroad',
    img: 'https://public-files.gumroad.com/7l7j9w5akr6jdfvso9rwzlixxxr7'
  }
];

const GumroadProducts = () => {
  return (
    <section
      id="products"
      className="py-20 px-6 bg-cream text-gray-900 text-center"
      aria-labelledby="products-heading"
    >
      <h2
        id="products-heading"
        className="text-4xl font-serif font-bold mb-6 text-darkpurple"
      >
      Creative Side Projects</h2>

      <p className="text-lg max-w-2xl mx-auto mb-12">
Alongside dev work, I’ve shipped published products on Amazon and Gumroad from spooky-cute coloring books to AI-powered productivity kits. These projects let me explore design, automation, and user experience outside of client work.</p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-left"
          >
            {product.img && (
              <img
                src={product.img}
                alt={`${product.name} cover`}
                className="w-full h-48 object-cover rounded mb-4"
                loading="lazy"
              />
            )}
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-purple-700 font-semibold underline focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
              aria-label={`Open ${product.name} on ${product.vendor || 'the store'}`}
            >
              View on {product.vendor || 'Store'} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GumroadProducts;
