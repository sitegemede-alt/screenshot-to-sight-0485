import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Container, PageHeader, seo } from "@/components/site";

export const Route = createFileRoute("/pontos-de-atencao")({
  head: () => seo("Pontos de Atenção", "Caixas no chão, umidade, proximidade com hortifrúti, ovos quebrados e venda fracionada."),
  component: Page,
});

const pontos = [
  { icon: "📦", t: "Caixas no chão", d: "O armazenamento diretamente no piso pode favorecer o contato das embalagens com sujidades e dificultar a higienização.", r: "Manter as embalagens afastadas do chão." },
  { icon: "💧", t: "Umidade", d: "A exposição à umidade e a líquidos provenientes de outros produtos deve ser evitada e avaliada conforme as condições do ambiente.", r: "Proteger os produtos contra umidade." },
  { icon: "🥬", t: "Proximidade com hortifrúti", d: "A proximidade entre ovos e outros produtos não representa automaticamente uma irregularidade. É necessário avaliar a organização, a separação e a possibilidade de contaminação cruzada.", r: "Avaliar organização e separação dos produtos." },
  { icon: "🥚", t: "Ovos quebrados", d: "A integridade da casca é importante para a segurança do produto.", r: "Ovos com alterações devem ser avaliados conforme os critérios de inspeção e legislação aplicável." },
  { icon: "🛒", t: "Venda fracionada", d: "A venda fracionada deve ser analisada considerando a rotulagem, as orientações do fabricante e a legislação aplicável, principalmente quanto à preservação das informações de lote, validade e procedência.", r: "Preservar as informações de identificação do produto." },
];

function Page() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <PageHeader eyebrow="Pontos de Atenção" title="O que merece um olhar mais cuidadoso?">Situações que devem ser avaliadas conforme o contexto e a legislação — sem pressupor irregularidade.</PageHeader>
      <Container className="grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-3">
        {pontos.map((p, i) => (
          <div key={p.t} className="flex flex-col rounded-3xl border border-border bg-card p-6 card-lift">
            <div className="text-5xl">{p.icon}</div>
            <h3 className="mt-4 text-xl font-bold uppercase">{p.t}</h3>
            {open === i && (
              <div className="animate-fade-up mt-3 space-y-3">
                <p className="text-muted-foreground">{p.d}</p>
                <p className="rounded-xl bg-secondary/10 p-3 font-semibold text-secondary">✔ {p.r}</p>
              </div>
            )}
            <button onClick={() => setOpen(open === i ? null : i)} className="mt-auto self-start pt-5 font-semibold text-accent hover:underline">
              {open === i ? "Fechar" : "Saiba mais →"}
            </button>
          </div>
        ))}
      </Container>
    </>
  );
}
