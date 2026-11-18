import { createFileRoute, Link } from "@tanstack/react-router";
import { Circle, Egg, Search, Tag, ShoppingCart, Eye, CheckCircle2 } from "lucide-react";
import { Container, PageHeader, Flow, Highlight, Egg3D, seo } from "@/components/site";

export const Route = createFileRoute("/classificacao")({
  head: () => seo("Classificação dos Ovos", "Categoria A, Categoria B (industrialização) e ovos impróprios para consumo humano."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Classificação dos Ovos" title="Você sabe qual ovo pode chegar à sua mesa?" />
      <Container className="py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl overflow-hidden border-b-8 border-success bg-card p-8 card-lift">
            <div className="-mx-8 -mt-8 mb-6 flex justify-center rounded-t-3xl bg-hero-dark py-8"><Egg3D variant="a" size="h-36 w-28" /></div>
            <Circle className="h-9 w-9 fill-success text-success" aria-hidden /><h2 className="mt-3 text-2xl font-bold">OVOS DE CATEGORIA A</h2>
            <p className="mt-3 text-muted-foreground">Os ovos destinados ao consumo humano são classificados de acordo com suas características qualitativas. A Categoria A corresponde aos ovos que atendem aos requisitos estabelecidos para essa categoria.</p>
            <ul className="mt-5 space-y-2 font-medium">
              {[{ I: Egg, t: "Qualidade" }, { I: Search, t: "Avaliação" }, { I: Tag, t: "Identificação" }, { I: ShoppingCart, t: "Destinação ao consumo conforme os requisitos legais" }].map(({ I, t }) => (
                <li key={t} className="flex items-center gap-2"><I className="h-5 w-5 shrink-0 text-accent" aria-hidden />{t}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl overflow-hidden border-b-8 border-warning bg-card p-8 card-lift">
            <div className="-mx-8 -mt-8 mb-6 flex justify-center rounded-t-3xl bg-hero-dark py-8"><Egg3D variant="b" size="h-36 w-28" /></div>
            <Circle className="h-9 w-9 fill-warning text-warning" aria-hidden /><h2 className="mt-3 text-2xl font-bold">OVOS DE CATEGORIA B</h2>
            <p className="mt-3 text-muted-foreground">Os ovos classificados como Categoria B apresentam características que os diferenciam dos ovos de Categoria A e possuem destinação específica conforme a legislação.</p>
            <p className="mt-5 rounded-2xl bg-warning/25 p-4 text-center font-display text-xl font-black">DESTINAÇÃO: INDUSTRIALIZAÇÃO</p>
            <p className="mt-3 text-sm text-muted-foreground">Ovos de Categoria B são destinados exclusivamente à industrialização, conforme o regulamento aplicável.</p>
          </article>
          <article className="rounded-3xl overflow-hidden border-b-8 border-destructive bg-card p-8 card-lift">
            <div className="-mx-8 -mt-8 mb-6 flex justify-center rounded-t-3xl bg-hero-dark py-8"><Egg3D variant="bad" size="h-36 w-28" /></div>
            <Circle className="h-9 w-9 fill-destructive text-destructive" aria-hidden /><h2 className="mt-3 text-2xl font-bold">QUANDO O OVO NÃO PODE SER CONSUMIDO?</h2>
            <p className="mt-3 text-muted-foreground">Alguns ovos podem apresentar características ou alterações que os tornam impróprios para o consumo humano. A classificação e a destinação devem seguir os critérios de inspeção e a legislação aplicável.</p>
            <ul className="mt-5 list-disc space-y-1 pl-5 text-sm"><li>Alterações incompatíveis com o consumo;</li><li>Comprometimento da integridade;</li><li>Alterações detectadas durante a inspeção;</li><li>Produtos que não atendam aos requisitos sanitários.</li></ul>
          </article>
        </div>
        <div className="mt-10"><Highlight>“A aparência isolada não é suficiente para determinar todas as condições sanitárias do produto.”</Highlight></div>

        <h2 className="mt-16 text-3xl font-bold">Tabela comparativa</h2>
        <div className="mt-6 overflow-x-auto rounded-3xl border border-border bg-card shadow-soft">
          <table className="w-full min-w-[600px] text-left">
            <thead className="bg-muted"><tr>{["Classificação", "Características", "Destinação"].map((h) => <th key={h} className="p-4 font-display">{h}</th>)}</tr></thead>
            <tbody>
              {[["Categoria A", "Atende aos requisitos da categoria", "Consumo humano, conforme legislação"], ["Categoria B", "Características específicas previstas na legislação", "Industrialização"], ["Impróprio", "Não atende aos requisitos para consumo humano", "Destinação conforme legislação"]].map((r) => (
                <tr key={r[0]} className="border-t border-border transition hover:bg-muted/60">{r.map((c, i) => <td key={i} className={`p-4 ${i === 0 ? "font-semibold" : ""}`}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-20 rounded-3xl bg-muted p-10">
          <h2 className="text-3xl font-bold">Ovo trincado, quebrado ou alterado: qual a diferença?</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">A integridade da casca é um dos aspectos considerados na avaliação dos ovos. Trincas, quebras ou alterações não devem ser julgadas apenas a olho: a destinação depende da classificação e dos critérios previstos na legislação.</p>
          <div className="relative mx-auto mt-8 grid max-w-2xl place-items-center overflow-hidden rounded-3xl bg-hero-dark pb-14 pt-16 md:py-12">
            <Egg3D size="h-52 w-40 md:h-72 md:w-56" cracks />
            <div className="pointer-events-none absolute h-28 w-28 rounded-full border-2 border-yolk shadow-lift animate-lens" />
            {[["Trinca", "left-3 top-3 md:left-[8%] md:top-[22%]"], ["Quebra", "right-3 top-12 md:right-[8%] md:top-[40%]"], ["Alteração", "left-3 bottom-3 md:left-[10%] md:bottom-[24%]"]].map(([t, c]) => (
              <span key={t} className={`absolute ${c} flex items-center gap-2 rounded-full bg-hero-dark/80 px-3 py-1 text-xs font-semibold text-hero-text md:text-sm`}><span className="h-2.5 w-2.5 rounded-full bg-yolk animate-step" />{t}: avaliar</span>
            ))}
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">Ilustração: pontos observados na casca devem ser avaliados conforme os critérios de inspeção.</p>
          <div className="mt-8"><Flow steps={[{ icon: Eye, label: "Observação" }, { icon: Search, label: "Avaliação" }, { icon: Tag, label: "Classificação" }, { icon: CheckCircle2, label: "Destinação correta" }]} /></div>
        </section>

        <div className="mt-14 text-center">
          <Link to="/quiz" className="inline-block rounded-full bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow-soft transition hover:scale-105">QUERO TESTAR MEUS CONHECIMENTOS</Link>
        </div>
      </Container>
    </>
  );
}
