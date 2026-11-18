import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, Flow, Card, seo } from "@/components/site";

export const Route = createFileRoute("/salmonella")({
  head: () => seo("Salmonella", "O perigo que nem sempre podemos ver: Salmonella e boas práticas para reduzir riscos."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Salmonella" title="O perigo que nem sempre podemos ver">
        A Salmonella é um importante agente relacionado a doenças transmitidas por alimentos. Por isso, boas práticas de higiene, armazenamento, manipulação e preparo são importantes para reduzir riscos.
      </PageHeader>
      <Container className="py-16">
        <Flow vertical steps={[{ icon: "🥚", label: "Ovo aparentemente normal" }, { icon: "🦠", label: "Possibilidade de contaminação" }, { icon: "🍳", label: "Manipulação/preparo inadequado" }, { icon: "🤒", label: "Doença transmitida por alimento" }]} />
        <h2 className="mt-20 text-center text-3xl font-bold">Como reduzir riscos</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <Card icon="🧼" title="Higiene" /><Card icon="📦" title="Armazenamento adequado" /><Card icon="🔎" title="Procedência" /><Card icon="🏛️" title="Inspeção" /><Card icon="🍳" title="Preparo adequado" />
        </div>
      </Container>
    </>
  );
}
