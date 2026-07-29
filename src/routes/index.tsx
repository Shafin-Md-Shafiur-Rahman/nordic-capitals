import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { fixtures, news, results } from "@/lib/club-data";

const title = "Nordic Capitals Sports Club";
const description =
  "Official home of Nordic Capitals: teams, fixtures, results, club news and member sign in.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="relative isolate">
        <img
          src={heroImg}
          alt="Nordic Capitals players training under floodlights"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-night-fade" />
        <div className="relative mx-auto max-w-6xl px-4 py-32 sm:py-44">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Est. in the north</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[0.95] sm:text-7xl">
            Cold ground. Warm club. Nordic Capitals.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground">
            Six teams, one community. Follow the season, meet the squads and join the club.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/fixtures"
              className="rounded-md bg-ice px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-glow"
            >
              Season fixtures
            </Link>
            <Link
              to="/signin"
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:bg-secondary"
            >
              Player sign in
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4">
          {[
            ["6", "Teams"],
            ["119", "Registered players"],
            ["3", "Training grounds"],
            ["1974", "Founded"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-4xl text-accent">{value}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl tracking-widest">Next up</h2>
          <ul className="mt-5 space-y-3">
            {fixtures.slice(0, 3).map((f) => (
              <li
                key={f.date}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
              >
                <div>
                  <p className="font-semibold">{f.opponent}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {f.date} · {f.time} · {f.venue}
                  </p>
                </div>
                <span className="rounded bg-secondary px-2 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {f.comp}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl tracking-widest">Recent results</h2>
          <ul className="mt-5 space-y-3">
            {results.map((r) => (
              <li
                key={r.date}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
              >
                <div>
                  <p className="font-semibold">{r.opponent}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{r.date}</p>
                </div>
                <span className="font-display text-2xl text-accent">{r.score}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl tracking-widest">Club news</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {news.map((n) => (
              <article key={n.title} className="rounded-lg border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-widest text-accent">{n.date}</p>
                <h3 className="mt-2 text-xl leading-tight">{n.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{n.excerpt}</p>
              </article>
            ))}
          </div>
          <Link
            to="/news"
            className="mt-8 inline-block text-sm uppercase tracking-widest text-accent hover:underline"
          >
            All news →
          </Link>
        </div>
      </section>
    </div>
  );
}
