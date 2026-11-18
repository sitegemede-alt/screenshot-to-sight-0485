import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Egg, HeartPulse, Recycle } from "lucide-react";
import { Container, PageHeader, Flow, seo } from "@/components/site";

export const Route = createFileRoute("/projeto")({
  head: () => seo("O Projeto", "Por que o projeto Ovo Seguro foi desenvolvido: objetivos e locais observados em Salvador."),
  component: Page,
});

const objetivos = ["Observar as condições de comercialização dos ovos;", "Identificar possíveis pontos de atenção;", "Avaliar condições de armazenamento e higiene;", "Verificar aspectos relacionados à procedência e rastreabilidade;", "Promover educação sanitária;", "Conscientizar comerciantes e consumidores;", "Relacionar segurança alimentar aos ODS 2, 3 e 12."];

function Page() {
  return (
    <>
      <PageHeader eyebrow="O Projeto" title="Por que este projeto foi desenvolvido?">
        Este projeto busca analisar e conscientizar sobre as condições de armazenamento, higiene, manuseio e comercialização de ovos em feiras livres de Salvador, relacionando essas questões aos Objetivos de Desenvolvimento Sustentável da Agenda 2030.
      </PageHeader>
      <Container className="py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {["Feira de São Joaquim", "CEASA, Salvador"].map((l) => (
            <div key={l} className="rounded-3xl bg-secondary p-8 text-secondary-foreground card-lift"><MapPin className="h-8 w-8" aria-hidden /><p className="mt-2 font-display text-2xl font-bold">{l}</p></div>
          ))}
        </div>
        <h2 className="mt-16 text-3xl font-bold">Objetivos</h2>
        <ol className="mt-6 grid gap-3 md:grid-cols-2">
          {objetivos.map((o, i) => (
            <li key={o} className="flex gap-4 rounded-2xl border border-border bg-card p-5 card-lift">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</span><span>{o}</span>
            </li>
          ))}
        </ol>
        <section className="mt-20 rounded-3xl bg-muted p-10 text-center">
          <h2 className="text-3xl font-bold">Sobre o projeto</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">“Este site foi desenvolvido como ferramenta educativa para aproximar os conceitos de segurança dos alimentos, inspeção sanitária e sustentabilidade da realidade observada na comercialização de ovos em feiras livres de Salvador.”</p>
          <p className="mt-8 font-display text-2xl font-bold">ODS 2 + ODS 3 + ODS 12</p>
          <div className="mt-6"><Flow vertical steps={[{ icon: Egg, label: "Segurança alimentar" }, { icon: HeartPulse, label: "Saúde pública" }, { icon: Recycle, label: "Consumo responsável" }]} /></div>
        </section>
      </Container>
    </>
  );
}
