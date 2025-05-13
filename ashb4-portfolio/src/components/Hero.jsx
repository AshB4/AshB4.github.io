const Hero = () => {
  return (
    <section className="bg-cream flex flex-col justify-center items-center text-center px-6 pt-24 pb-12">
      <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
        Hi, I’m Ashley
      </h1>

      <p className="text-lg md:text-xl font-sans text-gray-700 max-w-2xl leading-relaxed mb-8">
        I build creative, accessible web tools with React, Tailwind, and a touch of strategy.
        Scroll to see what I’ve shipped lately.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
  href="https://docs.google.com/document/d/19HFN6pRnTZDTc1Jwqptp28mheV37MvwMedhZZhBu-ZA/edit?usp=sharing"
  className="bg-lavender text-white font-sans font-semibold px-6 py-3 rounded shadow hover:bg-purple-300 transition"
  target="_blank"
  rel="noopener noreferrer"
>
  Hire Me
</a>

<a
  href="#contact"
  className="border-2 border-emerald-500 text-emerald-600 font-sans font-semibold px-6 py-3 rounded hover:bg-emerald-50 transition"
>
  Contact
</a>

      </div>
    </section>
  );
};

export default Hero;
