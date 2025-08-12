const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-purple-900 text-slate-100 mt-2">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center">
        {/* Visual fun w/ an accessible alt for SR users */}
        <p className="text-base">
          <span className="sr-only">
            Built with React and Tailwind. Fueled by coffee.
          </span>
          <span aria-hidden="true">
            Built with React &amp; Tailwind. Fueled by coffee. ☕
          </span>{" "}
          <span>
            &copy; <time dateTime={String(year)}>{year}</time> Ashley Broussard
          </span>
        </p>

        <nav aria-label="Footer" className="mt-4">
          <h2 className="sr-only">Footer navigation</h2>
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-6">
            <li>
              <a
                href="mailto:Fleurdeviefarmsllc@gmail.com"
                className="underline decoration-2 underline-offset-2 rounded px-3 py-2
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                           focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                           hover:decoration-2 hover:font-bold font-underline"
              >
                Email
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/ashley-m-broussard-33a392253"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 underline-offset-2 rounded px-3 py-2
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                           focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                           hover:decoration-2 hover:font-bold font-underline"
              >
                LinkedIn <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/AshB4"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 underline-offset-2 rounded px-3 py-2
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                           focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                           hover:decoration-2 hover:font-bold font-underline"
              >
                GitHub <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>

            <li>
              <a
                href="https://fleurdevie.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 underline-offset-2 rounded px-3 py-2
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                           focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                           hover:decoration-2 hover:font-bold font-underline"
              >
                Gumroad <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
