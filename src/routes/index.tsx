import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Bird, Truck, Package, Store, User, ListChecks, ClipboardCheck, Brain } from "lucide-react";
import { Container, Flow, Highlight, Card, SectionTitle, seo } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => seo("Início", "Ovo Seguro: da produção à mesa, a segurança também importa. Projeto educativo sobre ovos em feiras de Salvador."),
  component: Index,
});

function Index() {
  const [p, setP] = useState({ x: 0, y: 0 });
  return (
    <>
      <section onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setP({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 }); }}
        className="relative overflow-hidden bg-hero-dark text-hero-text">
        <div className="pointer-events-none absolute inset-3 border border-hero-text/15 md:inset-5" />
        <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-yolk md:left-5 md:top-5" aria-hidden />
        <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-yolk md:right-5 md:top-5" aria-hidden />
        <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-yolk md:bottom-5 md:left-5" aria-hidden />
        <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-yolk md:bottom-5 md:right-5" aria-hidden />
        <div className="absolute left-1/2 top-[38%] h-[520px] w-[520px] egg-glow transition-transform duration-700" style={{ transform: `translate(calc(-50% + ${p.x * -30}px), calc(-50% + ${p.y * -30}px))` }} />
        <Container className="relative flex flex-col items-center py-16 text-center">
          <div className="transition-transform duration-700 ease-out" style={{ transform: `perspective(800px) rotateY(${p.x * 14}deg) rotateX(${p.y * -14}deg) translate(${p.x * 20}px, ${p.y * 20}px)` }}>
            <div className="h-64 w-48 egg-3d animate-egg-float md:h-80 md:w-60" role="img" aria-label="Ovo flutuando" />
          </div>
          <div className="mt-6 h-5 w-40 egg-shadow animate-egg-shadow" />
          <p className="label animate-fade-up mt-10 text-yolk">Feira de São Joaquim · CEASA · Salvador</p>
          <h1 className="animate-fade-up mt-4 text-6xl font-black tracking-tight md:text-8xl">OVO SEGURO</h1>
          <div className="animate-fade-up mt-5 h-px w-24 bg-yolk" aria-hidden />
          <p className="animate-fade-up mt-5 max-w-2xl font-display text-2xl italic md:text-3xl">Da produção à mesa, a segurança também importa.</p>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg opacity-80">Os ovos são alimentos nutritivos e importantes para a alimentação da população. Entretanto, sua qualidade e segurança dependem de fatores como procedência, inspeção, armazenamento, higiene, integridade da casca, embalagem e comercialização.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/pontos-de-atencao" className="bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground transition hover:bg-yolk">Conheça os riscos</Link>
            <Link to="/projeto" className="border border-hero-text px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] transition hover:bg-hero-text hover:text-hero-dark">Explore o projeto</Link>
          </div>
        </Container>
      </section>
      <Container className="py-20">
        <SectionTitle>O caminho do ovo</SectionTitle>
        <div className="mt-10"><Flow steps={[{ icon: Bird, label: "Produção" }, { icon: Truck, label: "Transporte" }, { icon: Package, label: "Armazenamento" }, { icon: Store, label: "Comercialização" }, { icon: User, label: "Consumidor" }]} /></div>
        <div className="mt-16"><Highlight>“Segurança dos alimentos é responsabilidade de toda a cadeia.”</Highlight></div>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <Link to="/classificacao" className="block"><Card icon={ListChecks} title="Classificação dos ovos">Categoria A, Categoria B e impróprios: entenda a diferença.</Card></Link>
          <Link to="/guia" className="block"><Card icon={ClipboardCheck} title="Guia do consumidor">Checklist interativo para uma compra consciente.</Card></Link>
          <Link to="/quiz" className="block"><Card icon={Brain} title="Quiz">Teste seus conhecimentos em 10 perguntas.</Card></Link>
        </div>
      </Container>
    </>
  );
}
