import { createFileRoute } from "@tanstack/react-router";

const title = "About the Club — Nordic Capitals Cricket Club";
const description =
  "The story, values and facilities behind Nordic Capitals Cricket Club in Finland.";

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
  {
    title: "Community first",
    body: "Open doors, affordable membership and a welcome for every nationality and skill level.",
  },
  {
    title: "Develop cricketers",
    body: "A clear pathway from junior soft-ball cricket through to the first XI.",
  },
  {
    title: "Compete hard",
    body: "Disciplined, spirited cricket across the Finnish league and cup season.",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-5xl tracking-widest">About the Club</h1>
      <p className="mt-5 text-lg text-muted-foreground">
        Nordic Capitals is a member-run cricket club based in Finland, fielding six squads across the
        national league, cup and junior competitions. We bat and bowl indoors through the long winter,
        then play every weekend of the short Finnish summer.
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
          Started in 1998 by a small group of cricket-mad friends playing on a borrowed matting wicket,
          the club has grown into one of Finland's most active cricket communities. Full history and
          honours will be published here.
        </p>
      </div>
    </div>
  );
}