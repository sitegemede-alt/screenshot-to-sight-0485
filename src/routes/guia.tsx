import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PartyPopper, XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Container, PageHeader, seo } from "@/components/site";

export const Route = createFileRoute("/guia")({
  head: () => seo("Guia do Consumidor", "Checklist para comprar ovos com consciência, boas práticas para comerciantes e mitos ou verdades."),
  component: Page,
});

const itens = ["Embalagem adequada", "Validade", "Lote", "Procedência", "Identificação de inspeção", "Integridade dos ovos", "Condições de armazenamento"];
const praticas = ["Manter caixas afastadas do chão;", "Proteger os produtos contra umidade;", "Retirar produtos danificados conforme os critérios aplicáveis;", "Preservar informações de identificação e rastreabilidade;", "Manter ambiente organizado e higienizado."];
const mitos = [
  { f: "Se o ovo estiver bonito, ele está seguro.", r: "MITO", e: "A aparência não garante a ausência de microrganismos.", ok: false },
  { f: "Ovos da Categoria B possuem destinação específica.", r: "VERDADE", e: "São destinados à industrialização, conforme a legislação.", ok: true },
  { f: "Todo ovo quebrado é automaticamente impróprio para consumo.", r: "NÃO NECESSARIAMENTE", e: "A avaliação deve seguir os critérios legais e de inspeção.", ok: false },
  { f: "A proximidade com outro produto sempre significa irregularidade.", r: "MITO", e: "É preciso avaliar organização, separação e risco de contaminação cruzada.", ok: false },
  { f: "A embalagem pode fornecer informações importantes sobre o produto.", r: "VERDADE", e: "Lote, validade, procedência e inspeção ajudam na rastreabilidade.", ok: true },
];

function Page() {
  const [check, setCheck] = useState<string[]>([]);
  const [rev, setRev] = useState<number[]>([]);
  const all = check.length === itens.length;
  return (
    <>
      <PageHeader eyebrow="Guia do Consumidor" title="Antes de comprar ovos, observe:" />
      <Container className="py-16">
        <div className="mx-auto max-w-2xl rounded-3xl bg-card p-8 shadow-soft">
          <div className="mb-5 h-3 overflow-hidden rounded-full bg-muted"><div className="h-full bg-yolk-gradient transition-all duration-500" style={{ width: `${(check.length / itens.length) * 100}%` }} /></div>
          {itens.map((i) => {
            const on = check.includes(i);
            return (
              <label key={i} className={`mb-2 flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition ${on ? "border-secondary bg-secondary/10" : "border-border hover:bg-muted"}`}>
                <input type="checkbox" checked={on} onChange={() => setCheck(on ? check.filter((x) => x !== i) : [...check, i])} className="h-5 w-5 accent-secondary" />
                <span className={on ? "font-semibold" : ""}>{i}</span>
              </label>
            );
          })}
          {all && <p className="animate-fade-up mt-5 flex items-center justify-center gap-2 rounded-2xl bg-yolk-gradient p-5 text-center font-display text-xl font-bold text-primary-foreground"><PartyPopper className="h-6 w-6 shrink-0" aria-hidden />Você está mais preparado para fazer uma compra consciente!</p>}
        </div>

        <h2 className="mt-20 text-3xl font-bold">Guia do comerciante: boas práticas na comercialização</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {praticas.map((p, i) => (
            <div key={p} className="rounded-3xl border border-border bg-card p-5 card-lift"><p className="font-display text-4xl font-black text-primary">{i + 1}</p><p className="mt-2">{p}</p></div>
          ))}
        </div>

        <h2 className="mt-20 text-3xl font-bold">Mitos ou verdades?</h2>
        <p className="mt-2 text-muted-foreground">Clique em cada frase para revelar a resposta.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {mitos.map((m, i) => {
            const shown = rev.includes(i);
            return (
              <button key={i} onClick={() => setRev(shown ? rev.filter((x) => x !== i) : [...rev, i])} className={`rounded-3xl border p-6 text-left card-lift ${shown ? (m.ok ? "border-success bg-success/10" : "border-destructive bg-destructive/10") : "border-border bg-card"}`}>
                <p className="font-display text-xl">“{m.f}”</p>
                {shown ? <div className="animate-fade-up mt-3"><p className="flex items-center gap-2 font-bold">{m.ok ? <CheckCircle2 className="h-5 w-5 text-success" aria-hidden /> : <XCircle className="h-5 w-5 text-destructive" aria-hidden />}{m.r}</p><p className="text-muted-foreground">{m.e}</p></div> : <p className="mt-3 flex items-center gap-1 text-sm font-semibold text-accent">Revelar <ArrowRight className="h-4 w-4" aria-hidden /></p>}
              </button>
            );
          })}
        </div>
      </Container>
    </>
  );
}
