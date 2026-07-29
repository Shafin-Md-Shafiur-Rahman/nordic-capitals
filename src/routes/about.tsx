import { createFileRoute } from "@tanstack/react-router";

const title = "About the Club — Nordic Capitals";
const description = "The story, values and facilities behind Nordic Capitals sports club.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Community first", body: "Open doors, affordable membership and a place for every level." },
  { title: "Develop players", body: "A clear pathway from the youth academy through to the first team." },
  { title: "Compete hard", body: "Disciplined, honest performances every week of the season." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-5xl tracking-widest">About the Club</h1>
      <p className="mt-5 text-lg text-muted-foreground">
        Nordic Capitals is a member-run sports club with six competing teams and a growing youth
        academy. We train through the dark months and play the whole season out, whatever the weather.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl leading-tight">{v.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-lg border border-border bg-card p-6">
        <h2 className="text-2xl tracking-widest">Club history</h2>
        <p className="mt-3 text-muted-foreground">
          Founded in 1974 by a handful of local players, the club has grown into one of the region's
          largest community sports organisations. Full history and honours will be published here.
        </p>
      </div>
    </div>
  );
}