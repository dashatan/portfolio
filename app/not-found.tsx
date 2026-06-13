import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-5 py-24">
      <div className="max-w-md text-center">
        <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">
          404
        </p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight">Route not found</h1>
        <p className="mt-3 text-sm text-muted">
          The page you requested doesn't exist in this system map.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-border px-5 py-2.5 text-sm text-accent"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
