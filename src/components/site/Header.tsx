import { Link } from "@tanstack/react-router";
import { Menu, Snowflake } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/teams", label: "Teams" },
  { to: "/fixtures", label: "Fixtures" },
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-ice shadow-glow">
            <Snowflake className="size-5 text-primary-foreground" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl tracking-widest">NORDIC CAPITALS</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Sports Club
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/signin"
            className="rounded-md bg-ice px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Sign in
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="rounded-md border border-border p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="size-5" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-4 pb-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm uppercase tracking-wider text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/signin"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md bg-ice px-4 py-2 text-center text-sm font-semibold uppercase text-primary-foreground"
          >
            Sign in
          </Link>
        </nav>
      )}
    </header>
  );
}