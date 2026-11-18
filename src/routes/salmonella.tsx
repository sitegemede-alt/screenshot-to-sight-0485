import { createFileRoute } from "@tanstack/react-router";
import { Egg, Bug, CookingPot, Thermometer, Sparkles, Package, Search, Landmark } from "lucide-react";
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
        <Flow vertical steps={[{ icon: Egg, label: "Ovo aparentemente normal" }, { icon: Bug, label: "Possibilidade de contaminação" }, { icon: CookingPot, label: "Manipulação/preparo inadequado" }, { icon: Thermometer, label: "Doença transmitida por alimento" }]} />
        <h2 className="mt-20 text-center text-3xl font-bold">Como reduzir riscos</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <Card icon={Sparkles} title="Higiene" /><Card icon={Package} title="Armazenamento adequado" /><Card icon={Search} title="Procedência" /><Card icon={Landmark} title="Inspeção" /><Card icon={CookingPot} title="Preparo adequado" />
        </div>
      </Container>
    </>
  );
}
