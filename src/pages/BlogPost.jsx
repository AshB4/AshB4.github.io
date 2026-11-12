import { Navigate, useParams } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { posts } from "../data/posts";

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(
    (item) => item.slug === slug && item.includeInFeed !== false
  );

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="bg-cream min-h-screen text-main font-sans">
      <article className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl bg-surface/85 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-xl ring-1 ring-white/10">
          <p className="text-sm font-semibold text-muted/75">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-darkpurple leading-tight">
            {post.title}
          </h1>

          {post.coverImageUrl ? (
            <img
              src={post.coverImageUrl}
              alt={post.coverImageAlt || ""}
              className="mt-6 aspect-video w-full rounded-xl object-cover shadow ring-1 ring-white/10"
            />
          ) : null}

          <div
            className="mt-8 space-y-5 text-muted leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <ul className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-muted/80"
              >
                {tag}
              </li>
            ))}
          </ul>

          <p className="mt-8">
            <a
              href="/blog"
              className="text-muted underline underline-offset-4 decoration-lavender hover:decoration-2 hover:font-bold"
            >
              Back to Blog
            </a>
          </p>
        </div>
      </article>

      <Contact
        title="Let's Connect"
        description="If something here sparks an idea, a collaboration, or a question, reach out and tell me what you’re working on."
        showLiveProject={false}
      />

      <Footer />
      <BackToTop />
    </main>
  );
}

export default BlogPost;
