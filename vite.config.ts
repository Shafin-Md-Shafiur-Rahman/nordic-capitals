// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build: set GITHUB_PAGES=true (and optionally BASE_PATH=/repo-name/).
// Prerenders every public page to static HTML. Lovable's normal build is unaffected.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.BASE_PATH || "/";

const staticPages = ["/", "/teams", "/fixtures", "/news", "/about", "/contact", "/signin"];

export default defineConfig({
  vite: isGithubPages ? { base: basePath } : {},
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGithubPages
      ? {
          router: { basepath: basePath },
          pages: staticPages.map((path) => ({ path })),
          prerender: { enabled: true, autoStaticPathsDiscovery: false },
        }
      : {}),
  },
});
