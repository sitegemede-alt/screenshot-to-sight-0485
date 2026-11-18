import { Link, usePathname } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowDown, ArrowRight, type LucideIcon } from "lucide-react";

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
    <Link to="/" className="flex shrink-0 items-center gap-2.5 whitespace-nowrap">
      <span className="grid h-8 w-7 place-items-center rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-shell ring-1 ring-border">
        <span className="h-2.5 w-2.5 rounded-[50%] bg-yolk" />
      </span>
      <span className="font-display text-lg font-black tracking-[0.2em]">OVO SEGURO</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden border-b border-border/70 md:block">
        <Container className="flex items-center justify-between py-1.5 label text-muted-foreground">
          <span>Dossiê de observação · ovos em feiras livres</span>
          <span>Salvador · Bahia</span>
        </Container>
      </div>
      <Container className="flex items-center justify-between gap-4 py-3">
        <Logo />
        <nav className="hidden flex-wrap justify-end gap-x-1 xl:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="border-b-2 border-transparent px-2 py-1 label text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "border-yolk text-foreground" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button aria-label="Abrir menu" onClick={() => setOpen(!open)} className="border border-border px-3 py-1.5 label transition hover:bg-muted xl:hidden">
          {open ? "Fechar" : "Menu"}
        </button>
      </Container>
      {open && (
        <nav className="grid grid-cols-2 gap-x-4 border-t border-border px-4 py-3 xl:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
              className="border-b border-border/70 px-1 py-2 label hover:bg-muted" activeProps={{ className: "text-foreground" }}>
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
    <footer className="mt-24 border-t-2 border-yolk bg-earth text-accent-foreground">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-display text-4xl font-black tracking-[0.12em]">OVO SEGURO</p>
            <p className="mt-3 max-w-md opacity-80">“Da produção à mesa, a segurança também importa.”</p>
            <p className="mt-6 inline-block border border-accent-foreground/40 px-3 py-1.5 label opacity-90">Projeto acadêmico de Medicina Veterinária</p>
          </div>
          <nav className="grid content-start gap-y-2 md:justify-end">
            {links.map(([to, l]) => <Link key={to} to={to} className="label opacity-80 hover:opacity-100 hover:underline">{l}</Link>)}
          </nav>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-accent-foreground/25 pt-4 label opacity-70">
          <span>Feira de São Joaquim · CEASA · Salvador</span>
          <span>ODS 2 · ODS 3 · ODS 12</span>
        </div>
      </Container>
    </footer>
  );
}

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  const pathname = usePathname();
  const idx = NAV.findIndex((n) => n.to === pathname);
  return (
    <section className="border-b border-border bg-muted/70">
      <Container className="py-12 md:py-16">
        <div className="flex items-center justify-between gap-6 border-b border-border pb-4">
          <p className="label flex items-center gap-2 text-secondary">
            <span className="h-2 w-2 shrink-0 bg-yolk" aria-hidden />
            {eyebrow}
          </p>
          {idx >= 0 && (
            <p className="label shrink-0 text-muted-foreground">
              {String(idx + 1).padStart(2, "0")} / {String(NAV.length).padStart(2, "0")}
            </p>
          )}
        </div>
        <h1 className="mt-6 max-w-3xl animate-fade-up text-4xl font-black md:text-6xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl animate-fade-up text-lg text-muted-foreground">{children}</div>}
      </Container>
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>;
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-border pb-3">
      <h2 className="text-3xl font-bold md:text-4xl">{children}</h2>
      <span className="label shrink-0 text-muted-foreground">seção</span>
    </div>
  );
}

export function Flow({ steps, vertical = false }: { steps: { icon: LucideIcon; label: string }[]; vertical?: boolean }) {
  return (
    <ol className={`flex ${vertical ? "mx-auto max-w-sm flex-col" : "flex-wrap items-stretch justify-center"} gap-2`}>
      {steps.map((s, i) => (
        <li key={s.label} className={`flex ${vertical ? "flex-col" : "flex-col"} items-center gap-2`}>
          <div className="flex w-full items-center gap-3 border border-border bg-card px-4 py-3 animate-step" style={{ animationDelay: `${i * 0.3}s` }}>
            <span className="label text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <s.icon className="h-5 w-5 shrink-0 text-accent" aria-hidden />
            <span className="font-semibold">{s.label}</span>
          </div>
          {i < steps.length - 1 && (vertical
            ? <ArrowDown className="h-4 w-4 text-muted-foreground" aria-hidden />
            : <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden />)}
        </li>
      ))}
    </ol>
  );
}

export function Card({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children?: ReactNode }) {
  return (
    <div className="border border-border bg-card p-6 card-lift">
      <div className="flex items-start justify-between gap-3 border-b border-border pb-3">
        <Icon className="h-6 w-6 text-accent" aria-hidden />
        <span className="label text-muted-foreground">nota</span>
      </div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      {children && <div className="mt-2 text-muted-foreground">{children}</div>}
    </div>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <figure className="border-y border-border py-10">
      <div className="mx-auto max-w-3xl border-l-2 border-yolk pl-6 md:pl-10">
        <blockquote className="font-display text-2xl font-medium italic leading-snug md:text-4xl">{children}</blockquote>
      </div>
    </figure>
  );
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
