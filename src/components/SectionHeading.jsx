function SectionHeading({ as: Heading = 'h2', id, children, className = '' }) {
  const headingClassName = `section-heading ${className}`.trim();
  const headingContent = (
    <>
      <span className="section-heading__rule" aria-hidden="true" />
      <span className="section-heading__text">{children}</span>
      <span className="section-heading__rule" aria-hidden="true" />
    </>
  );

  return Heading === 'h1' ? (
    <h1 id={id} className={headingClassName}>{headingContent}</h1>
  ) : (
    <h2 id={id} className={headingClassName}>{headingContent}</h2>
  );
}

export default SectionHeading;
