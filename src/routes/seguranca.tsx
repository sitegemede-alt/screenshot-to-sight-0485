import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Egg, Bug, Store, ShieldCheck, Bird, Truck, Package, ShoppingCart, CookingPot, Users } from "lucide-react";
import { Container, PageHeader, Flow, SectionTitle, seo } from "@/components/site";

export const Route = createFileRoute("/seguranca")({
  head: () => seo("Segurança dos Ovos", "Nutrição, segurança, comercialização e saúde pública: o caminho do ovo da produção ao consumo."),
  component: Page,
});

const cards = [
  { icon: Egg, t: "Nutrição", d: "O ovo é um alimento nutritivo, rico em proteínas, vitaminas e minerais." },
  { icon: Bug, t: "Segurança", d: "A aparência do ovo não é suficiente para determinar se ele está livre de microrganismos." },
  { icon: Store, t: "Comercialização", d: "As condições de armazenamento, exposição e manipulação devem ser avaliadas." },
  { icon: ShieldCheck, t: "Saúde pública", d: "Boas práticas ajudam a reduzir riscos de doenças transmitidas por alimentos." },
];

function Page() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageHeader eyebrow="Segurança dos Ovos" title="Um alimento nutritivo que exige cuidado">Toque nos cards para saber mais.</PageHeader>
      <Container className="py-16">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <button key={c.t} onClick={() => setOpen(open === c.t ? null : c.t)} className={`flex flex-col bg-card p-6 text-left transition ${open === c.t ? "bg-muted" : "hover:bg-muted/60"}`}>
              <div className="flex items-start justify-between border-b border-border pb-3">
                <c.icon className="h-6 w-6 text-accent" aria-hidden />
                <span className="label text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold">{c.t}</h3>
              <p className={`mt-2 text-muted-foreground transition-all ${open === c.t ? "opacity-100" : "line-clamp-1 opacity-60"}`}>{c.d}</p>
            </button>
          ))}
        </div>
        <div className="mt-20">
          <SectionTitle>Da produção ao consumo</SectionTitle>
          <div className="mt-8"><Flow vertical steps={[{ icon: Bird, label: "Produção" }, { icon: Truck, label: "Transporte" }, { icon: Package, label: "Armazenamento" }, { icon: Store, label: "Comercialização" }, { icon: ShoppingCart, label: "Compra" }, { icon: CookingPot, label: "Preparo" }, { icon: Users, label: "Consumo" }]} /></div>
        </div>
      </Container>
    </>
  );
}
