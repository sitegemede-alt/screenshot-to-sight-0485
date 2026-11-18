import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, Flow, seo } from "@/components/site";

export const Route = createFileRoute("/ods")({
  head: () => seo("ODS", "Segurança dos ovos e os Objetivos de Desenvolvimento Sustentável 2, 3 e 12 da Agenda 2030."),
  component: Page,
});

const ods = [
  { n: "2", icon: "🟡", t: "Fome Zero e Agricultura Sustentável", d: "Relaciona-se ao acesso a alimentos seguros, nutritivos e suficientes.", c: "bg-warning text-primary-foreground" },
  { n: "3", icon: "🔴", t: "Saúde e Bem-Estar", d: "Relaciona-se à prevenção de doenças transmitidas por alimentos e à proteção da saúde pública.", c: "bg-destructive text-destructive-foreground" },
  { n: "12", icon: "🟢", t: "Consumo e Produção Responsáveis", d: "Relaciona-se ao armazenamento adequado, comercialização responsável, redução de desperdícios e descarte correto.", c: "bg-secondary text-secondary-foreground" },
];

function Page() {
  return (
    <>
      <PageHeader eyebrow="Agenda 2030" title="Segurança dos ovos e os Objetivos de Desenvolvimento Sustentável" />
      <Container className="py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {ods.map((o) => (
            <article key={o.n} className={`rounded-3xl p-8 card-lift ${o.c}`}>
              <p className="font-display text-7xl font-black">ODS {o.n}</p>
              <h2 className="mt-4 text-2xl font-bold">{o.t}</h2>
              <p className="mt-3 opacity-90">“{o.d}”</p>
            </article>
          ))}
        </div>
        <div className="mt-16"><Flow steps={[{ icon: "🥚", label: "Segurança alimentar" }, { icon: "❤️", label: "Saúde" }, { icon: "🌱", label: "Sustentabilidade" }]} /></div>
      </Container>
    </>
  );
}
