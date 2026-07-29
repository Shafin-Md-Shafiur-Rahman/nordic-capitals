import { createFileRoute } from "@tanstack/react-router";
import { teams } from "@/lib/club-data";

const title = "Teams — Nordic Capitals Cricket Club";
const description =
  "Meet the six Nordic Capitals cricket squads, from the first XI to women's, junior and indoor teams.";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TeamsPage,
});

function TeamsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-5xl tracking-widest">Teams</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Six squads competing across Finnish cricket. Squad photos and player profiles will be added
        from the admin panel.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map((t) => (
          <article key={t.name} className="rounded-lg border border-border bg-card p-6">
            <div className="mb-4 flex h-32 items-center justify-center rounded bg-secondary text-xs uppercase tracking-widest text-muted-foreground">
              Squad photo coming soon
            </div>
            <h2 className="text-2xl leading-tight">{t.name}</h2>
            <p className="mt-1 text-xs uppercase tracking-widest text-accent">{t.division}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {t.players} players · {t.coach}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}