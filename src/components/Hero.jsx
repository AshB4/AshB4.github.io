const Hero = () => {
  return (
    <section className="bg-cream flex flex-col justify-center items-center text-center px-6 pt-24 pb-12">
      <h1 className="text-5xl md:text-6xl font-serif font-bold text-darkpurple mb-6">
        Hi, I’m Ashley Broussard
      </h1>
      
<p class="text-lg mt-2 max-w-xl">
Full-stack developer and UX strategist based in Louisiana, with a flair for turning wild ideas into real, working tools.
I build everything from insurance apps that serve seniors to AI bots that engage fans — fast, accessible, and purpose-driven.
</p>
<p class="mt-4 font-semibold text-accent">
Looking for a remote or hybrid dev role where I can ship quickly, solve real problems, and have fun doing it.
</p>
<br />
      <div className="flex flex-col sm:flex-row gap-4">
        <a
  href="https://docs.google.com/document/d/19HFN6pRnTZDTc1Jwqptp28mheV37MvwMedhZZhBu-ZA/edit?usp=sharing"
  className="bg-lavender text-white font-sans font-bold px-6 py-3 rounded shadow hover:bg-purple-300 transition"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</a>

<a
  href="tel:225-571-1410"
  className="border-2 border-emerald-500 text-emerald-600 font-sans font-bold px-6 py-3 rounded hover:bg-emerald-50 transition"
>
  Contact
</a>

      </div>
      <div></div>
 <h2 class="text-2xl font-bold mt-10">Tech Stack</h2>
<p class="mt-2">
  <strong>Languages & Frameworks:</strong> JavaScript, React, Node.js, PHP, WordPress, MODX, MySQL, PostgreSQL<br/>
  <strong>Frontend Tools:</strong> Tailwind CSS, Bootstrap, Material UI, Formik, Yup, HTML5, CSS3<br/>
  <strong>Dev & Ops:</strong> Git, GitHub, Netlify, Heroku, cPanel, REST APIs, Postman<br/>
  <strong>Design & Strategy:</strong> Figma, UX Writing, Accessibility (WCAG), SEO, Google Analytics<br/>
  <strong>Workflow & Platforms:</strong> GoHighLevel, Jira, ChatGPT, Agile / Scrum
</p>

    </section>
  );
};

export default Hero;
