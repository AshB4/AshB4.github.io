import BackToTop from "../components/BackToTop";
import Contact from "../components/Contact";
import FollowAlong from "../components/FollowAlong";
import Footer from "../components/Footer";
import { posts } from "../data/posts";

const postsByDate = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function Blog() {
  return (
    <main className="bg-cream min-h-screen text-gray-900 font-sans">
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-xl ring-1 ring-black/5">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-darkpurple text-center">
            Blog
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-700 text-center max-w-2xl mx-auto leading-relaxed">
            Notes on what I’m building, learning, untangling, and shipping.
          </p>

          <div className="mt-10 space-y-5">
            {postsByDate.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl bg-white p-5 sm:p-6 shadow ring-1 ring-black/5"
              >
                <p className="text-sm font-semibold text-slate-500">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold text-darkpurple leading-tight">
                  <a
                    href={post.canonicalUrl}
                    className="underline decoration-transparent underline-offset-4 hover:decoration-darkpurple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-darkpurple rounded-sm"
                  >
                    {post.title}
                  </a>
                </h2>

                <p className="mt-3 text-slate-700 leading-relaxed">
                  {post.excerpt}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <FollowAlong />
        </div>
      </section>

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

export default Blog;
