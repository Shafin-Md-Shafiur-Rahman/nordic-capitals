import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

const title = "Sign In — Nordic Capitals Cricket Club";
const description = "Player and admin sign in for Nordic Capitals Cricket Club members in Finland.";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  const [role, setRole] = useState<"player" | "admin">("player");

  return (
    <div className="mx-auto flex max-w-md flex-col px-4 py-20">
      <h1 className="text-4xl tracking-widest">Sign in</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Choose your account type. Accounts are not active yet — this screen is ready to be connected.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-2 rounded-lg border border-border bg-card p-1">
        {(["player", "admin"] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-colors ${
              role === r
                ? "bg-ice text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          toast.info(`${role === "admin" ? "Admin" : "Player"} accounts aren't enabled yet.`);
        }}
      >
        <div>
          <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-xs uppercase tracking-widest text-muted-foreground"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            placeholder="••••••••"
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-ice px-4 py-2.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-glow"
        >
          Sign in as {role}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Admin panel is under development.
      </p>
    </div>
  );
}