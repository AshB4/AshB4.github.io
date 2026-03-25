function ProfileHeroCard({
  imageSrc,
  imageAlt,
  title,
  titleId,
  subtitle,
  subtitleClassName = 'mt-2 font-serif text-2xl text-darkpurple leading-tight',
  topContent,
  paragraphs = [],
  paragraphClassNameByIndex = {},
  children,
  className = ''
}) {
  return (
    <section
      aria-labelledby={titleId}
      className={`rounded-2xl bg-white/65 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-xl ring-1 ring-black/5 grid items-center gap-6 sm:gap-7 md:gap-9 md:grid-cols-12 ${className}`.trim()}
    >
      <div className="md:col-span-5">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="aspect-[4/5] w-full max-w-xs mx-auto md:max-w-none rounded-2xl object-cover shadow-xl"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="md:col-span-7 text-center md:text-left">
        {topContent}

        <h1
          id={titleId}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-darkpurple leading-tight"
        >
          {title}
        </h1>

        {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}

        {paragraphs.map((text, index) => (
          <p
            key={text}
            className={`${index === 0 ? 'mt-4' : 'mt-3'} text-base sm:text-lg max-w-2xl mx-auto md:mx-0 text-gray-800 leading-relaxed ${paragraphClassNameByIndex[index] || ''}`.trim()}
          >
            {text}
          </p>
        ))}

        {children}
      </div>
    </section>
  )
}

export default ProfileHeroCard
