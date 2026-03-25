function SectionCardGrid({ sections }) {
  return (
    <div className="mt-10 space-y-8">
      {sections.map((section) => (
        <section key={section.title} aria-label={section.title}>
          <h2 className="font-serif text-2xl font-bold text-darkpurple">{section.title}</h2>
          <ul className="mt-4 grid gap-3 sm:gap-4 md:grid-cols-2">
            {section.items.map((item) => (
              <li key={`${item.label}-${item.link}`}>
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noreferrer' : undefined}
                  className="block h-full rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-3 sm:px-5 sm:py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-indigo-100 hover:shadow"
                >
                  <p className="font-semibold text-indigo-900">{item.label}</p>
                  <p className="mt-1 text-sm text-gray-700">{item.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default SectionCardGrid
