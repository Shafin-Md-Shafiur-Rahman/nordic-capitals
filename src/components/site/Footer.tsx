import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <h3 className="text-lg tracking-widest">NORDIC CAPITALS CC</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A Finnish cricket club built on cold mornings, warm welcomes and honest cricket.
          </p>
        </div>
        <div>
          <h3 className="text-base tracking-widest">Explore</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>
              <Link to="/teams">Teams</Link>
            </li>
            <li>
              <Link to="/fixtures">Fixtures</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/signin">Player &amp; Admin sign in</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-base tracking-widest">Contact</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Contact details coming soon.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nordic Capitals Cricket Club · Finland
      </div>
    </footer>
  );
}