import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { Container, PageHeader, seo } from "@/components/site";

export const Route = createFileRoute("/referencias")({
  head: () => seo("Referências", "Legislação e referências: ODS, RIISPOA, MAPA, Ministério da Saúde, ANVISA e Codex Alimentarius."),
  component: Page,
});

const refs = [
  { t: "Organização das Nações Unidas: Objetivos de Desenvolvimento Sustentável", u: "https://brasil.un.org/pt-br/sdgs" },
  { t: "Brasil: Decreto nº 9.013/2017 (RIISPOA)", u: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/d9013.htm" },
  { t: "Ministério da Agricultura e Pecuária: legislação de inspeção de produtos de origem animal", u: "https://www.gov.br/agricultura/pt-br/assuntos/inspecao/produtos-animal" },
  { t: "Ministério da Saúde: informações sobre doenças transmitidas por alimentos", u: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dta" },
  { t: "ANVISA: segurança dos alimentos", u: "https://www.gov.br/anvisa/pt-br/assuntos/alimentos" },
  { t: "Codex Alimentarius: General Principles of Food Hygiene", u: "https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/" },
];

function Page() {
  return (
    <>
      <PageHeader eyebrow="Legislação e Referências" title="Biblioteca de referências" />
      <Container className="grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-3">
        {refs.map((r) => (
          <article key={r.t} className="flex flex-col rounded-3xl border border-border bg-card p-6 card-lift">
            <BookOpen className="h-8 w-8 text-accent" aria-hidden /><h3 className="mt-3 text-lg font-semibold">{r.t}</h3>
            <a href={r.u} target="_blank" rel="noreferrer" className="mt-auto self-start pt-5"><span className="inline-block rounded-full bg-secondary px-5 py-2 font-semibold text-secondary-foreground transition hover:scale-105">Acessar fonte ↗</span></a>
          </article>
        ))}
      </Container>
    </>
  );
}
