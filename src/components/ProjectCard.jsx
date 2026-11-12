const sectionTitleClassName =
  'text-xs font-semibold uppercase tracking-[0.18em] text-darkpurple/80';

const sectionBodyClassName = 'mt-1 text-sm leading-6 text-muted';

const actionClassName =
  'text-sm font-medium text-lavender underline decoration-lavender/70 underline-offset-4 transition hover:text-darkpurple hover:decoration-darkpurple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender rounded-sm';

function DetailSection({ title, items, body }) {
  return (
    <section>
      <h5 className={sectionTitleClassName}>{title}</h5>
      {items ? (
        <ul className="mt-2 space-y-2 pl-5 text-sm leading-6 text-muted list-disc marker:text-indigo-500">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className={sectionBodyClassName}>{body}</p>
      )}
    </section>
  );
}

function ProjectCard({ project, isExpanded, onToggleDetails }) {
  const detailsId = `${project.slug}-details`;

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-lavender/25 bg-project-card p-5 shadow-lg shadow-black/20 ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30 sm:p-6">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-11 -left-8 h-28 w-28 bg-gradient-to-br from-brand/30 to-tech-blue/30 blur-[1px]"
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 bg-gradient-to-br from-tech-blue/30 to-brand/20 blur-[1px]"
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
      />

      <div className="relative z-10 flex h-full flex-col">
        {project.img ? (
          <figure className="mb-5 overflow-hidden rounded-2xl border border-lavender/15 bg-main/10 shadow-sm">
            <div className="aspect-[16/9] w-full">
              <img
                src={project.img}
                alt={project.imgAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </figure>
        ) : null}

        {project.eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-lavender">
            {project.eyebrow}
          </p>
        ) : null}

        <h3 className="font-serif text-[1.45rem] font-bold leading-tight text-darkpurple">
          {project.title}
        </h3>

        {project.subtitle ? (
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-lavender">
            {project.subtitle}
          </p>
        ) : null}

        <div className="mt-5 space-y-4">
          <section>
            <h4 className={sectionTitleClassName}>Problem</h4>
            <p className={sectionBodyClassName}>{project.problem}</p>
          </section>

          <section>
            <h4 className={sectionTitleClassName}>Solution</h4>
            <p className={sectionBodyClassName}>{project.solution}</p>
          </section>

          <section>
            <h4 className={sectionTitleClassName}>Impact</h4>
            <p className={sectionBodyClassName}>{project.impact}</p>
          </section>
        </div>

        <div className="mt-5 border-t border-lavender/15 pt-4">
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <li key={tag}>
                <span className="inline-flex items-center rounded-full border border-brand/50 bg-brand/20 px-2.5 py-1 text-[0.72rem] font-semibold tracking-[0.08em] text-lavender">
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col items-start gap-2">
            {project.details ? (
              <button
                type="button"
                onClick={onToggleDetails}
                aria-expanded={isExpanded}
                aria-controls={detailsId}
                className={actionClassName}
              >
                {isExpanded ? 'Hide Details →' : 'View Details →'}
              </button>
            ) : null}

            {project.actionNote ? (
              <p className="text-sm leading-6 text-muted/75">
                {project.actionNote}
              </p>
            ) : null}

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={actionClassName}
              >
                {project.linkLabel || 'View Project'} →
              </a>
            ) : null}
          </div>
        </div>

        {project.details && isExpanded ? (
          <div
            id={detailsId}
            className="mt-5 rounded-2xl border border-lavender/15 bg-gradient-to-br from-brand/25 via-surface to-tech-blue/15 p-4 sm:p-5"
          >
            <div className="space-y-4">
              <DetailSection title="Key Features" items={project.details.features} />
              <DetailSection title="Technical Highlights" items={project.details.technicalHighlights} />
              <DetailSection title="Key Decisions" items={project.details.keyDecisions} />
              <DetailSection title="Challenges" items={project.details.challenges} />
              <DetailSection title="Impact" body={project.details.impact} />
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
