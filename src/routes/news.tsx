import { createFileRoute } from "@tanstack/react-router";
import { news } from "@/lib/club-data";

const title = "Club News — Nordic Capitals Cricket Club";
const description =
  "Latest announcements, match reports and community updates from Nordic Capitals Cricket Club in Finland.";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-5xl tracking-widest">Club News</h1>
      <div className="mt-10 space-y-8">
        {news.map((n) => (
          <article key={n.title} className="rounded-lg border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-widest text-accent">{n.date}</p>
            <h2 className="mt-2 text-2xl leading-tight">{n.title}</h2>
            <p className="mt-3 text-muted-foreground">{n.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}