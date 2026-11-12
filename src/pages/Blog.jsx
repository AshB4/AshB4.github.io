import { useEffect } from 'react';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import { posts } from '../data/posts';

const pageTitle = 'Technical Writing | Ashley Broussard';
const pageDescription = 'Technical writing by Ashley Broussard on accessibility, full-stack development, workflow automation, reliability, and business applications.';

function BrandedThumbnail({ label, source }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-video w-full flex-col justify-between overflow-hidden rounded-2xl border border-lavender/20 bg-gradient-to-br from-hero-glass via-project-card to-navy p-5 sm:p-6"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lavender/80">
        {label}
      </span>
      <span className="self-start rounded-full border border-lavender/30 bg-brand/20 px-3 py-1 text-xs font-semibold text-lavender">
        {source}
      </span>
    </div>
  );
}

function updateMeta(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function Blog() {
  useEffect(() => {
    const homepageTitle = document.title;
    const description = document.querySelector('meta[name="description"]')?.content;
    const socialTitle = document.querySelector('meta[property="og:title"]')?.content;
    const socialDescription = document.querySelector('meta[property="og:description"]')?.content;
    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalHref = canonical?.href;

    document.title = pageTitle;
    updateMeta('meta[name="description"]', 'content', pageDescription);
    updateMeta('meta[property="og:title"]', 'content', pageTitle);
    updateMeta('meta[property="og:description"]', 'content', pageDescription);
    updateMeta('link[rel="canonical"]', 'href', 'https://ashb4.github.io/blog/');

    return () => {
      document.title = homepageTitle;
      if (description) updateMeta('meta[name="description"]', 'content', description);
      if (socialTitle) updateMeta('meta[property="og:title"]', 'content', socialTitle);
      if (socialDescription) updateMeta('meta[property="og:description"]', 'content', socialDescription);
      if (canonicalHref) updateMeta('link[rel="canonical"]', 'href', canonicalHref);
    };
  }, []);

  return (
    <main className="min-h-screen bg-cream font-sans text-main">
      <section className="matte-paper relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-screen-lg px-4 py-14 sm:px-6 sm:py-20">
          <a
            href="/"
            className="inline-flex rounded-sm text-sm font-semibold text-lavender underline decoration-lavender/70 underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lavender"
          >
            ← Back to portfolio
          </a>

          <SectionHeading
            as="h1"
            id="writing-heading"
            className="mt-8 font-serif text-3xl font-bold text-darkpurple sm:text-4xl"
          >
            Technical Writing
          </SectionHeading>

          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted sm:text-lg">
            Selected writing on accessible software, full-stack development, automation, and the engineering decisions behind useful applications.
          </p>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.url}
                className="h-full overflow-hidden rounded-[1.25rem] border border-lavender/25 bg-project-card shadow-lg shadow-black/20 ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
              >
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${post.title} on ${post.source} (opens in a new tab)`}
                  className="group block h-full rounded-[1.25rem] p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender sm:p-5"
                >
                  <BrandedThumbnail label={post.thumbnailLabel} source={post.source} />

                  <div className="mt-5 flex flex-col">
                    <h2 className="mt-2 font-serif text-xl font-bold leading-tight text-darkpurple group-hover:underline group-hover:decoration-lavender group-hover:underline-offset-4 sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                      {post.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-brand/50 bg-brand/20 px-2.5 py-1 text-xs font-semibold text-lavender"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex text-sm font-semibold text-lavender underline decoration-lavender/70 underline-offset-4">
                      Read article <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>

        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

export default Blog;
