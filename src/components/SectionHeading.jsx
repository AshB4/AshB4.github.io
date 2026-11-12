function SectionHeading({ id, children, className = '' }) {
  return (
    <h2 id={id} className={`section-heading ${className}`.trim()}>
      <span className="section-heading__rule" aria-hidden="true" />
      <span className="section-heading__text">{children}</span>
      <span className="section-heading__rule" aria-hidden="true" />
    </h2>
  );
}

export default SectionHeading;
