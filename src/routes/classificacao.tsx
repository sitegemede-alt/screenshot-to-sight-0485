import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageHeader, Flow, Highlight, seo } from "@/components/site";

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
          <article className="rounded-3xl border-t-8 border-success bg-card p-8 card-lift">
            <p className="text-4xl">🟢</p><h2 className="mt-3 text-2xl font-bold">OVOS DE CATEGORIA A</h2>
            <p className="mt-3 text-muted-foreground">Os ovos destinados ao consumo humano são classificados de acordo com suas características qualitativas. A Categoria A corresponde aos ovos que atendem aos requisitos estabelecidos para essa categoria.</p>
            <ul className="mt-5 space-y-2 font-medium"><li>🥚 Qualidade</li><li>🔎 Avaliação</li><li>🏷️ Identificação</li><li>🛒 Destinação ao consumo conforme os requisitos legais</li></ul>
          </article>
          <article className="rounded-3xl border-t-8 border-warning bg-card p-8 card-lift">
            <p className="text-4xl">🟡</p><h2 className="mt-3 text-2xl font-bold">OVOS DE CATEGORIA B</h2>
            <p className="mt-3 text-muted-foreground">Os ovos classificados como Categoria B apresentam características que os diferenciam dos ovos de Categoria A e possuem destinação específica conforme a legislação.</p>
            <p className="mt-5 rounded-2xl bg-warning/25 p-4 text-center font-display text-xl font-black">DESTINAÇÃO: INDUSTRIALIZAÇÃO</p>
            <p className="mt-3 text-sm text-muted-foreground">Ovos de Categoria B são destinados exclusivamente à industrialização, conforme o regulamento aplicável.</p>
          </article>
          <article className="rounded-3xl border-t-8 border-destructive bg-card p-8 card-lift">
            <p className="text-4xl">🔴</p><h2 className="mt-3 text-2xl font-bold">QUANDO O OVO NÃO PODE SER CONSUMIDO?</h2>
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
              {[["🟢 Categoria A", "Atende aos requisitos da categoria", "Consumo humano, conforme legislação"], ["🟡 Categoria B", "Características específicas previstas na legislação", "Industrialização"], ["🔴 Impróprio", "Não atende aos requisitos para consumo humano", "Destinação conforme legislação"]].map((r) => (
                <tr key={r[0]} className="border-t border-border transition hover:bg-muted/60">{r.map((c, i) => <td key={i} className={`p-4 ${i === 0 ? "font-semibold" : ""}`}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-20 rounded-3xl bg-muted p-10">
          <h2 className="text-3xl font-bold">Ovo trincado, quebrado ou alterado: qual a diferença?</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">A integridade da casca é um dos aspectos considerados na avaliação dos ovos. Trincas, quebras ou alterações não devem ser julgadas apenas a olho: a destinação depende da classificação e dos critérios previstos na legislação.</p>
          <div className="mt-8"><Flow steps={[{ icon: "👀", label: "Observação" }, { icon: "🔎", label: "Avaliação" }, { icon: "🏷️", label: "Classificação" }, { icon: "✅", label: "Destinação correta" }]} /></div>
        </section>

        <div className="mt-14 text-center">
          <Link to="/quiz" className="inline-block rounded-full bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow-soft transition hover:scale-105">QUERO TESTAR MEUS CONHECIMENTOS</Link>
        </div>
      </Container>
    </>
  );
}
