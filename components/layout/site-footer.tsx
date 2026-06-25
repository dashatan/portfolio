import { profile } from "@/content/profile";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-shell flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] tracking-wide text-muted uppercase">
          {profile.name} · {new Date().getFullYear()}
        </p>
        <p className="max-w-md text-sm text-muted">{site.footer}</p>
      </div>
    </footer>
  );
}
