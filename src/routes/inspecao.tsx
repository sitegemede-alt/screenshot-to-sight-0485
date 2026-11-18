import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Tag, Calendar, Search, Landmark, Package, Globe, TriangleAlert } from "lucide-react";
import { Container, PageHeader, Highlight, seo } from "@/components/site";

export const Route = createFileRoute("/inspecao")({
  head: () => seo("Inspeção Sanitária", "SIF, SIE, SIM e SISBI-POA, além de rotulagem e rastreabilidade das embalagens de ovos."),
  component: Page,
});

const hotspots = [
  { k: "lote", icon: Tag, t: "LOTE", d: "Ajuda na identificação e rastreabilidade.", x: "12%", y: "18%" },
  { k: "val", icon: Calendar, t: "VALIDADE", d: "Permite verificar o prazo indicado para o produto.", x: "70%", y: "14%" },
  { k: "proc", icon: Search, t: "PROCEDÊNCIA", d: "Permite identificar a origem do produto.", x: "42%", y: "8%" },
  { k: "insp", icon: Landmark, t: "INSPEÇÃO", d: "Indica o serviço de inspeção relacionado ao produto.", x: "84%", y: "62%" },
  { k: "emb", icon: Package, t: "EMBALAGEM", d: "Ajuda a preservar as informações e as condições do produto.", x: "6%", y: "70%" },
];

function Page() {
  const [sel, setSel] = useState(hotspots[0]!);
  return (
    <>
      <PageHeader eyebrow="Inspeção Sanitária" title="Quem fiscaliza os produtos de origem animal?" />
      <Container className="py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[{ I: Landmark, t: "SIF", d: "Serviço de Inspeção Federal." }, { I: Landmark, t: "SIE", d: "Serviço de Inspeção Estadual." }, { I: Landmark, t: "SIM", d: "Serviço de Inspeção Municipal." }, { I: Globe, t: "SISBI-POA", d: "Sistema Brasileiro de Inspeção de Produtos de Origem Animal." }].map(({ I, t, d }) => (
            <div key={t} className="rounded-3xl border border-border bg-card p-6 card-lift"><I className="h-10 w-10 text-accent" aria-hidden /><h3 className="mt-3 font-display text-3xl font-black text-secondary">{t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>
          ))}
        </div>
        <p className="mt-6 flex items-start gap-3 rounded-2xl border-l-4 border-primary bg-muted p-5"><TriangleAlert className="mt-0.5 h-6 w-6 shrink-0 text-accent" aria-hidden /><span>Os serviços de inspeção possuem competências e abrangências específicas. A identificação encontrada na embalagem deve ser analisada conforme a legislação aplicável.</span></p>

        <h2 className="mt-20 text-3xl font-bold">Rotulagem e rastreabilidade</h2>
        <p className="mt-2 text-muted-foreground">Clique nos pontos da embalagem.</p>
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-2xl">
            <div className="absolute inset-[12%_4%_6%_4%] rounded-3xl bg-earth/80 shadow-lift" />
            <div className="absolute inset-[6%_8%_auto_8%] h-[22%] rounded-t-3xl bg-earth" />
            <div className="absolute inset-[30%_10%_14%_10%] grid grid-cols-6 grid-rows-2 gap-3 p-2">
              {Array.from({ length: 12 }).map((_, i) => <div key={i} className="rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-shell shadow-soft" />)}
            </div>
            {hotspots.map((h) => (
              <button key={h.k} onClick={() => setSel(h)} style={{ left: h.x, top: h.y }} aria-label={h.t}
                className={`absolute grid h-11 w-11 place-items-center rounded-full border-2 border-card shadow-lift transition hover:scale-110 ${sel.k === h.k ? "bg-primary scale-110" : "bg-card animate-step"}`}><h.icon className="h-5 w-5 text-accent" aria-hidden /></button>
            ))}
          </div>
          <div key={sel.k} className="animate-fade-up rounded-3xl bg-card p-8 shadow-soft">
            <sel.icon className="h-12 w-12 text-accent" aria-hidden /><h3 className="mt-3 text-2xl font-bold">{sel.t}</h3><p className="mt-2 text-lg text-muted-foreground">{sel.d}</p>
          </div>
        </div>
        <div className="mt-14"><Highlight>“Saber de onde veio o alimento também faz parte da segurança alimentar.”</Highlight></div>
      </Container>
    </>
  );
}
