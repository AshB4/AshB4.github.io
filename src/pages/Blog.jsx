import BackToTop from "../components/BackToTop";
import Contact from "../components/Contact";
import FollowAlong from "../components/FollowAlong";
import Footer from "../components/Footer";

function Blog() {
  return (
    <main className="bg-cream min-h-screen text-gray-900 font-sans">
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-xl ring-1 ring-black/5">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-darkpurple text-center">
            Blog
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-700 text-center max-w-2xl mx-auto leading-relaxed">
            New posts are available through the RSS feed, and I share updates,
            experiments, and notes across the channels below.
          </p>

          <p className="mt-6 text-center">
            <a
              href="/feed.xml"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-700 px-6 py-3 font-semibold text-white shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400 hover:bg-indigo-800 transition"
            >
              Open RSS Feed
            </a>
          </p>

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
