import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import feira from "@/assets/feira.jpg";
import hero from "@/assets/hero-ovos.jpg";
import { MapPin } from "lucide-react";
import { Container, PageHeader, SectionTitle, seo } from "@/components/site";

export const Route = createFileRoute("/visita")({
  head: () => seo("Nossa Visita", "Um olhar sobre a comercialização de ovos na Feira de São Joaquim e na CEASA, em Salvador."),
  component: Page,
});

type Foto = { src: string; legenda: string };
const iniciais: Foto[] = [
  { src: feira, legenda: "Condições do ambiente" },
  { src: hero, legenda: "Organização dos produtos" },
];
const sugestoes = ["Armazenamento das caixas", "Condições do ambiente", "Ovos quebrados", "Organização dos produtos", "Comercialização dos ovos"];

function Page() {
  const [fotos, setFotos] = useState<Foto[]>(iniciais);
  const [legenda, setLegenda] = useState<string>("Armazenamento das caixas");
  const add = (files: FileList | null) => {
    if (!files) return;
    const novas = Array.from(files).map((f) => ({ src: URL.createObjectURL(f), legenda }));
    setFotos((p) => [...p, ...novas]);
  };
  return (
    <>
      <PageHeader eyebrow="Nossa Visita" title="Um olhar sobre a comercialização de ovos em Salvador">
        Durante as observações foram avaliadas situações relacionadas ao armazenamento, organização, higiene, integridade dos ovos, procedência, embalagem e comercialização.
      </PageHeader>
      <Container className="py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {[["Feira de São Joaquim", "Uma das feiras mais tradicionais de Salvador, com grande variedade de alimentos."], ["CEASA", "Central de abastecimento que concentra a distribuição de alimentos na região."]].map(([t, d]) => (
            <div key={t} className="border border-border bg-card p-8 card-lift">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <MapPin className="h-6 w-6 text-accent" aria-hidden />
                <span className="label text-muted-foreground">local</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <SectionTitle>Galeria da visita</SectionTitle>
          <p className="mt-3 text-muted-foreground">Adicione as fotos reais da visita e escolha uma legenda. As imagens atuais são ilustrativas.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 border border-border bg-muted p-4">
            <label className="label text-muted-foreground" htmlFor="legenda-select">Legenda</label>
            <select id="legenda-select" value={legenda} onChange={(e) => setLegenda(e.target.value)} className="border border-border bg-card px-4 py-2">
              {sugestoes.map((s) => <option key={s}>{s}</option>)}
            </select>
            <label className="cursor-pointer bg-primary px-5 py-2 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground transition hover:bg-yolk">
              + Adicionar fotos<input type="file" accept="image/*" multiple className="hidden" onChange={(e) => add(e.target.files)} />
            </label>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fotos.map((f, i) => (
              <figure key={i} className="overflow-hidden border border-border bg-card card-lift">
                <img src={f.src} alt={f.legenda} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="flex items-center gap-3 border-t border-border p-3">
                  <span className="label shrink-0 text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <input value={f.legenda} onChange={(e) => setFotos((p) => p.map((x, j) => (j === i ? { ...x, legenda: e.target.value } : x)))} className="w-full bg-transparent font-medium outline-none" aria-label="Legenda" />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
