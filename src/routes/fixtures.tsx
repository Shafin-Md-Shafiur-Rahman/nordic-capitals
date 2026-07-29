import { createFileRoute } from "@tanstack/react-router";
import { fixtures, results } from "@/lib/club-data";

const title = "Fixtures & Results — Nordic Capitals Cricket Club";
const description =
  "Upcoming Nordic Capitals cricket fixtures, start times, grounds and recent match results in Finland.";

export const Route = createFileRoute("/fixtures")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: FixturesPage,
});

function FixturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-5xl tracking-widest">Fixtures &amp; Results</h1>

      <h2 className="mt-10 text-2xl tracking-widest">Upcoming</h2>
      <div className="mt-4 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary text-xs uppercase tracking-widest text-muted-foreground">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Start</th>
              <th className="p-3">Opponent</th>
              <th className="p-3">Ground</th>
              <th className="p-3">Competition</th>
            </tr>
          </thead>
          <tbody>
            {fixtures.map((f) => (
              <tr key={f.date} className="border-t border-border bg-card">
                <td className="p-3">{f.date}</td>
                <td className="p-3">{f.time}</td>
                <td className="p-3 font-semibold">{f.opponent}</td>
                <td className="p-3">{f.venue}</td>
                <td className="p-3 text-muted-foreground">{f.comp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 text-2xl tracking-widest">Results</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {results.map((r) => (
          <li key={r.date} className="rounded-lg border border-border bg-card p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{r.date}</p>
            <p className="mt-1 font-semibold">{r.opponent}</p>
            <p className="mt-2 text-lg font-semibold text-accent">{r.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}