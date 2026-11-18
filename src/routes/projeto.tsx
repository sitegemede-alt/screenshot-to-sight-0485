import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Egg, HeartPulse, Recycle } from "lucide-react";
import { Container, PageHeader, Flow, SectionTitle, seo } from "@/components/site";

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
        <SectionTitle>Locais observados</SectionTitle>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {["Feira de São Joaquim", "CEASA, Salvador"].map((l, i) => (
            <div key={l} className="border border-border bg-card p-8 card-lift">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <MapPin className="h-6 w-6 text-accent" aria-hidden />
                <span className="label text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-4 font-display text-3xl font-black">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <SectionTitle>Objetivos</SectionTitle>
          <ol className="mt-8 border-t border-border">
            {objetivos.map((o, i) => (
              <li key={o} className="flex items-start gap-5 border-b border-border py-4 transition hover:bg-muted">
                <span className="label w-8 shrink-0 pt-1 text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg">{o}</span>
              </li>
            ))}
          </ol>
        </div>
        <section className="mt-20 border-y border-border py-14 text-center">
          <h2 className="text-3xl font-bold">Sobre o projeto</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">“Este site foi desenvolvido como ferramenta educativa para aproximar os conceitos de segurança dos alimentos, inspeção sanitária e sustentabilidade da realidade observada na comercialização de ovos em feiras livres de Salvador.”</p>
          <p className="mt-8 label text-secondary">ODS 2 + ODS 3 + ODS 12</p>
          <div className="mt-8"><Flow vertical steps={[{ icon: Egg, label: "Segurança alimentar" }, { icon: HeartPulse, label: "Saúde pública" }, { icon: Recycle, label: "Consumo responsável" }]} /></div>
        </section>
      </Container>
    </>
  );
}
