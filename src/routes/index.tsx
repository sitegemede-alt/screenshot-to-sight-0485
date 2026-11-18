import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-ovos.jpg";
import { Container, Flow, Highlight, Card, seo } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => seo("Início", "Ovo Seguro: da produção à mesa, a segurança também importa. Projeto educativo sobre ovos em feiras de Salvador."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative min-h-[80vh] overflow-hidden">
        <img src={hero} alt="Bandejas de ovos em uma feira livre" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <Container className="relative flex min-h-[80vh] flex-col justify-center py-20 text-shell">
          <p className="animate-fade-up font-semibold uppercase tracking-[0.3em] text-yolk">Feira de São Joaquim · CEASA · Salvador</p>
          <h1 className="animate-fade-up mt-4 text-6xl font-black md:text-8xl">OVO SEGURO</h1>
          <p className="animate-fade-up mt-4 max-w-2xl font-display text-2xl md:text-3xl">Da produção à mesa, a segurança também importa.</p>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg opacity-90">Os ovos são alimentos nutritivos e importantes para a alimentação da população. Entretanto, sua qualidade e segurança dependem de fatores como procedência, inspeção, armazenamento, higiene, integridade da casca, embalagem e comercialização.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/pontos-de-atencao" className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:scale-105">Conheça os riscos</Link>
            <Link to="/projeto" className="rounded-full border-2 border-shell px-7 py-3.5 font-semibold transition hover:bg-shell hover:text-foreground">Explore o projeto</Link>
          </div>
        </Container>
      </section>
      <Container className="py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">O caminho do ovo</h2>
        <div className="mt-10"><Flow steps={[{ icon: "🐔", label: "Produção" }, { icon: "🚚", label: "Transporte" }, { icon: "📦", label: "Armazenamento" }, { icon: "🏪", label: "Comercialização" }, { icon: "🧑", label: "Consumidor" }]} /></div>
        <div className="mt-16"><Highlight>“Segurança dos alimentos é responsabilidade de toda a cadeia.”</Highlight></div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Link to="/classificacao"><Card icon="🟢" title="Classificação dos ovos">Categoria A, Categoria B e impróprios: entenda a diferença.</Card></Link>
          <Link to="/guia"><Card icon="✅" title="Guia do consumidor">Checklist interativo para uma compra consciente.</Card></Link>
          <Link to="/quiz"><Card icon="🧠" title="Quiz">Teste seus conhecimentos em 10 perguntas.</Card></Link>
        </div>
      </Container>
    </>
  );
}
