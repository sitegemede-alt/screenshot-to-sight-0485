import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Package, Droplets, Leaf, Egg, ShoppingCart, Check, ArrowRight } from "lucide-react";
import { Container, PageHeader, seo } from "@/components/site";

export const Route = createFileRoute("/pontos-de-atencao")({
  head: () => seo("Pontos de Atenção", "Caixas no chão, umidade, proximidade com hortifrúti, ovos quebrados e venda fracionada."),
  component: Page,
});

const pontos = [
  { icon: Package, t: "Caixas no chão", d: "O armazenamento diretamente no piso pode favorecer o contato das embalagens com sujidades e dificultar a higienização.", r: "Manter as embalagens afastadas do chão." },
  { icon: Droplets, t: "Umidade", d: "A exposição à umidade e a líquidos provenientes de outros produtos deve ser evitada e avaliada conforme as condições do ambiente.", r: "Proteger os produtos contra umidade." },
  { icon: Leaf, t: "Proximidade com hortifrúti", d: "A proximidade entre ovos e outros produtos não representa automaticamente uma irregularidade. É necessário avaliar a organização, a separação e a possibilidade de contaminação cruzada.", r: "Avaliar organização e separação dos produtos." },
  { icon: Egg, t: "Ovos quebrados", d: "A integridade da casca é importante para a segurança do produto.", r: "Ovos com alterações devem ser avaliados conforme os critérios de inspeção e legislação aplicável." },
  { icon: ShoppingCart, t: "Venda fracionada", d: "A venda fracionada deve ser analisada considerando a rotulagem, as orientações do fabricante e a legislação aplicável, principalmente quanto à preservação das informações de lote, validade e procedência.", r: "Preservar as informações de identificação do produto." },
];

function Page() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <PageHeader eyebrow="Pontos de Atenção" title="O que merece um olhar mais cuidadoso?">Situações que devem ser avaliadas conforme o contexto e a legislação, sem pressupor irregularidade.</PageHeader>
      <Container className="py-16">
        <div className="border-t border-border">
          {pontos.map((p, i) => (
            <div key={p.t} className="border-b border-border py-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <div className="flex w-full items-center gap-4 md:w-80 md:shrink-0">
                  <span className="label w-8 shrink-0 text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <p.icon className="h-6 w-6 shrink-0 text-accent" aria-hidden />
                  <h3 className="text-xl font-bold uppercase">{p.t}</h3>
                </div>
                <div className="flex-1">
                  {open === i && (
                    <div className="animate-fade-up space-y-3">
                      <p className="text-muted-foreground">{p.d}</p>
                      <p className="flex items-start gap-2 border-l-2 border-secondary bg-muted p-3 font-semibold text-secondary"><Check className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />{p.r}</p>
                    </div>
                  )}
                  <button onClick={() => setOpen(open === i ? null : i)} className="mt-2 flex items-center gap-1 text-sm font-bold uppercase tracking-[0.12em] text-accent hover:underline">
                    {open === i ? "Fechar" <>Saiba mais <ArrowRight className="h-4 w-4" aria-hidden /></>}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
