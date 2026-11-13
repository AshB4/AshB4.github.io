
import AbLogo from "../assets/AbLogo.png";

const Footer = ({ showSocialLinks = true }) => {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-brand text-main mt-2">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center">
        <p className="text-base">
          <span>Built with React &amp; Tailwind.</span>{" "}
          <span>
            &copy; <time dateTime={String(year)}>{year}</time> Ashley Broussard
          </span>
        </p>

        <div className="mt-6 flex justify-center">
          <div className="relative grid h-[64px] w-[72px] place-items-center">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 72 64"
              className="absolute inset-0 h-full w-full"
            >
              <polygon
                points="36,1 68,17 68,47 36,63 4,47 4,17"
                fill="#C4A9F0"
                fillOpacity="0.24"
                stroke="#D8C2FF"
                strokeOpacity="0.68"
                strokeWidth="1.2"
              />
              <polygon
                points="36,8 60,20 60,44 36,56 12,44 12,20"
                fill="none"
                stroke="#FFFFFF"
                strokeOpacity="0.14"
                strokeWidth="1"
              />
            </svg>
            <img
              src={AbLogo}
              alt="Ashley Broussard logo"
              className="relative z-10 h-12 w-auto opacity-90"
              style={{ transform: 'translate(-0.23px, 0.23px)' }}
              loading="lazy"
            />
          </div>
        </div>

        <nav aria-label="Footer" className="mt-4">
          <h2 className="sr-only">Footer navigation</h2>
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {showSocialLinks ? (
              <>
                <li>
                  <a
                    href="https://codepen.io/AshB4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-2 underline-offset-2 rounded px-3 py-2
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                             focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                             hover:decoration-2 hover:font-bold font-underline"
                  >
                    Codepen <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>

              </>
            ) : null}

            <li>
              <a
                href="/blog/"
                className="underline decoration-2 underline-offset-2 rounded px-3 py-2
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                         focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                         hover:decoration-2 hover:font-bold font-underline"
              >
                Technical Writing
              </a>
            </li>
            <li>
              <a
                href="/services/"
                className="underline decoration-2 underline-offset-2 rounded px-3 py-2
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                         focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                         hover:decoration-2 hover:font-bold font-underline"
              >
                Services
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
