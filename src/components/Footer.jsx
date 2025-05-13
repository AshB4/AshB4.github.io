const Footer = () => {
  return (
    <footer className="bg-lavender text-white text-center py-8 mt-2">
      <p className="text-lg font-sans mb-2">
        Made with 💻, ☕, and Tailwind by Ashley Broussard
      </p>

      <div className="flex justify-center gap-6 text-sm">
        <a
          href="mailto:Fleurdeviefarmsllc@gmail.com"
          className="hover:underline"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/ashley-m-broussard-33a392253"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AshB4"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://fleurdevie.gumroad.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Gumroad
        </a>
      </div>
    </footer>
  );
};

export default Footer;
