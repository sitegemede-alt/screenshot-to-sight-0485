import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/projeto", label: "O Projeto" },
  { to: "/seguranca", label: "Segurança dos Ovos" },
  { to: "/visita", label: "Nossa Visita" },
  { to: "/pontos-de-atencao", label: "Pontos de Atenção" },
  { to: "/classificacao", label: "Classificação" },
  { to: "/inspecao", label: "Inspeção Sanitária" },
  { to: "/salmonella", label: "Salmonella" },
  { to: "/ods", label: "ODS" },
  { to: "/guia", label: "Guia do Consumidor" },
  { to: "/quiz", label: "Quiz" },
  { to: "/referencias", label: "Referências" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-xl font-bold">
      <span className="grid h-9 w-8 place-items-center rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-shell shadow-soft">
        <span className="h-3.5 w-3.5 rounded-full bg-yolk-gradient" />
      </span>
      OVO SEGURO
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden flex-wrap justify-end gap-1 xl:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-primary text-primary-foreground font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button aria-label="Abrir menu" onClick={() => setOpen(!open)} className="rounded-full border border-border px-4 py-2 text-sm font-medium xl:hidden">
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="grid grid-cols-2 gap-1 border-t border-border px-4 py-3 xl:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
              className="rounded-lg px-3 py-2 text-sm hover:bg-muted" activeProps={{ className: "bg-primary font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const links = [["/", "Início"], ["/projeto", "O Projeto"], ["/classificacao", "Classificação"], ["/ods", "ODS"], ["/quiz", "Quiz"], ["/referencias", "Referências"]] as const;
  return (
    <footer className="mt-24 bg-earth text-accent-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2">
        <div>
          <p className="font-display text-3xl font-bold">OVO SEGURO</p>
          <p className="mt-2 opacity-80">“Da produção à mesa, a segurança também importa.”</p>
          <p className="mt-6 inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">Projeto acadêmico — Medicina Veterinária</p>
        </div>
        <div className="flex flex-wrap content-start gap-x-5 gap-y-2 md:justify-end">
          {links.map(([to, l]) => <Link key={to} to={to} className="opacity-80 hover:opacity-100 hover:underline">{l}</Link>)}
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted">
      <div className="absolute -right-16 -top-20 h-72 w-56 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-shell opacity-80 animate-wobble" />
      <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-20 animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-3xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>;
}

export function Flow({ steps, vertical = false }: { steps: { icon: string; label: string }[]; vertical?: boolean }) {
  return (
    <div className={`flex ${vertical ? "flex-col items-center" : "flex-wrap items-center justify-center"} gap-3`}>
      {steps.map((s, i) => (
        <div key={s.label} className={`flex ${vertical ? "flex-col" : ""} items-center gap-3`}>
          <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft animate-step" style={{ animationDelay: `${i * 0.3}s` }}>
            <span className="text-2xl">{s.icon}</span><span className="font-medium">{s.label}</span>
          </div>
          {i < steps.length - 1 && <span className="text-xl text-accent">{vertical ? "↓" : "→"}</span>}
        </div>
      ))}
    </div>
  );
}

export function Card({ icon, title, children }: { icon: string; title: string; children?: ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 card-lift">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      {children && <div className="mt-2 text-muted-foreground">{children}</div>}
    </div>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <blockquote className="rounded-3xl bg-yolk-gradient p-8 text-center font-display text-2xl font-semibold text-primary-foreground shadow-soft md:text-3xl">{children}</blockquote>;
}

export function seo(title: string, description: string) {
  const t = `${title} | Ovo Seguro`;
  return { meta: [{ title: t }, { name: "description", content: description }, { property: "og:title", content: t }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
}

export function Egg3D({ variant = "a", size = "h-40 w-30", cracks = false }: { variant?: "a" | "b" | "bad"; size?: string; cracks?: boolean }) {
  const f = variant === "b" ? "egg-3d-b" : variant === "bad" ? "egg-3d-bad" : "";
  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${size} egg-3d animate-egg-float ${f}`}>
        {(cracks || variant === "bad") && (
          <svg viewBox="0 0 100 130" className="absolute inset-0 h-full w-full" aria-hidden>
            <path d="M30 20 L42 42 L35 55 L48 70 L44 88" stroke="currentColor" strokeWidth="1.8" fill="none" className="text-earth" />
            <path d="M42 42 L55 47 M48 70 L60 74" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-earth" />
          </svg>
        )}
      </div>
      <div className="mt-3 h-3 w-24 egg-shadow animate-egg-shadow" />
    </div>
  );
}
