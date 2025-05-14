// src/components/GumroadProducts.jsx
const products = [
  {
    name: 'Green Square Ritual',
    description: 'Daily GitHub commit automation with stealth mode, notifications, and dev-ritual flavor.',
    link: 'https://fleurdevie.gumroad.com/l/github-streak-shell-script',
  },
  {
  name: 'PromptStorm',
  description: 'A 100-prompt Notion and PDF/CSV bundle for creators and founders. Built to spark clarity and flow in GPT-based workflows.',
    link: 'https://fleurdevie.gumroad.com/l/100prompt-storm',
  },
  {
    name: 'Goblin Self-Care Kit',
    description: 'Printable journal, affirmations, coloring pages and cursed spa rituals for chaotic cuties.',
    link: 'https://fleurdevie.gumroad.com/l/goblin-core-coloring-affirmations',
  },
  {
    name: 'AI-Powered Grad Launch Kit',
    description: '100-prompt Notion + PDF starter bundle for grads with sass + strategy.',
    link: 'https://fleurdevie.gumroad.com/l/ai-powered-grad',
  }
];

const GumroadProducts = () => {
  return (
    <section id="products" className="py-20 px-6 bg-cream text-gray-900 text-center">
      <h2 className="text-4xl font-serif font-bold mb-6 text-darkpurple">Gumroad Products</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-semibold hover:underline"
            >
              View on Gumroad →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GumroadProducts;
