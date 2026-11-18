import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Container, PageHeader, Flow, seo } from "@/components/site";

export const Route = createFileRoute("/seguranca")({
  head: () => seo("Segurança dos Ovos", "Nutrição, segurança, comercialização e saúde pública: o caminho do ovo da produção ao consumo."),
  component: Page,
});

const cards = [
  { icon: "🥚", t: "Nutrição", d: "O ovo é um alimento nutritivo, rico em proteínas, vitaminas e minerais." },
  { icon: "🦠", t: "Segurança", d: "A aparência do ovo não é suficiente para determinar se ele está livre de microrganismos." },
  { icon: "🏪", t: "Comercialização", d: "As condições de armazenamento, exposição e manipulação devem ser avaliadas." },
  { icon: "🛡️", t: "Saúde pública", d: "Boas práticas ajudam a reduzir riscos de doenças transmitidas por alimentos." },
];

function Page() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageHeader eyebrow="Segurança dos Ovos" title="Um alimento nutritivo que exige cuidado">Toque nos cards para saber mais.</PageHeader>
      <Container className="py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <button key={c.t} onClick={() => setOpen(open === c.t ? null : c.t)} className={`rounded-3xl border p-6 text-left card-lift ${open === c.t ? "border-primary bg-primary/15" : "border-border bg-card"}`}>
              <div className="text-5xl">{c.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{c.t}</h3>
              <p className={`mt-2 text-muted-foreground transition-all ${open === c.t ? "opacity-100" : "line-clamp-1 opacity-60"}`}>{c.d}</p>
            </button>
          ))}
        </div>
        <h2 className="mt-20 text-center text-3xl font-bold">Da produção ao consumo</h2>
        <div className="mt-8"><Flow vertical steps={[{ icon: "🐔", label: "Produção" }, { icon: "🚚", label: "Transporte" }, { icon: "📦", label: "Armazenamento" }, { icon: "🏪", label: "Comercialização" }, { icon: "🛒", label: "Compra" }, { icon: "🍳", label: "Preparo" }, { icon: "👨‍👩‍👧", label: "Consumo" }]} /></div>
      </Container>
    </>
  );
}
