import { createFileRoute } from "@tanstack/react-router";

const title = "Contact — Nordic Capitals";
const description = "Get in touch with Nordic Capitals about membership, trials and club enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-5xl tracking-widest">Contact</h1>
      <p className="mt-4 text-muted-foreground">
        Club contact details are being finalised and will be published here shortly.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {["Address", "Phone", "Email", "Opening hours"].map((label) => (
          <div key={label} className="rounded-lg border border-dashed border-border bg-card p-6">
            <p className="text-xs uppercase tracking-widest text-accent">{label}</p>
            <p className="mt-2 text-sm text-muted-foreground">To be added</p>
          </div>
        ))}
      </div>
    </div>
  );
}