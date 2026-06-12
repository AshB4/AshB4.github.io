const followLinks = [
  {
    href: "https://www.pinterest.com/ColorWithAshB/",
    label: "Pinterest (ideas + visuals)",
  },
  {
    href: "https://www.facebook.com/ColorWithAshB/",
    label: "Facebook (updates + posts)",
  },
  {
    href: "https://dev.to/ashb4",
    label: "Dev.to (what I’m learning)",
  },
  {
    href: "https://www.reddit.com/user/HearingSpecialist813/",
    label: "Reddit (AshB4 Studios)",
    ariaLabel: "Reddit profile for AshB4 Studios",
  },
];

const FollowAlong = ({ className = "mt-12" }) => {
  return (
    <section className={`${className} rounded-2xl bg-cream py-10 px-4 sm:px-6`}>
      <h2 className="text-2xl font-serif font-bold text-darkpurple text-center">
        Follow along
      </h2>

      <p className="text-sm text-slate-600 text-center mt-4">
        Where I share new creations, experiments, and things I’m working on.
      </p>

      <ul className="flex flex-wrap justify-center gap-6 mt-6 text-base font-medium">
        {followLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 underline underline-offset-4 decoration-slate-700 hover:decoration-2 hover:font-bold"
              aria-label={link.ariaLabel}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FollowAlong;
