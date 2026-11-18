import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Egg, ArrowRight } from "lucide-react";
import { Container, PageHeader, seo } from "@/components/site";
import { PERGUNTAS, nivel } from "@/lib/quiz";

export const Route = createFileRoute("/quiz")({
  head: () => seo("Quiz", "Teste seus conhecimentos sobre segurança dos ovos em 10 perguntas."),
  component: Page,
});

function Page() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const done = i >= PERGUNTAS.length;
  const p = PERGUNTAS[Math.min(i, PERGUNTAS.length - 1)]!;
  const reset = () => { setI(0); setScore(0); setPick(null); };
  return (
    <>
      <PageHeader eyebrow="Quiz" title="Teste seus conhecimentos" />
      <Container className="py-16">
        <div className="mx-auto max-w-2xl rounded-3xl bg-card p-8 shadow-soft">
          {done ? (
            <div className="animate-fade-up text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Sua pontuação</p>
              <p className="mt-2 font-display text-7xl font-black">{score}/{PERGUNTAS.length}</p>
              <p className="mt-4 flex items-center justify-center gap-2 text-2xl font-semibold"><Egg className="h-7 w-7 text-accent" aria-hidden />{nivel(score)}</p>
              <button onClick={reset} className="mt-8 rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground transition hover:scale-105">Refazer quiz</button>
            </div>
          ) : (
            <div key={i} className="animate-fade-up">
              <div className="mb-6 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full bg-yolk-gradient transition-all" style={{ width: `${(i / PERGUNTAS.length) * 100}%` }} /></div>
              <p className="text-sm text-muted-foreground">Pergunta {i + 1} de {PERGUNTAS.length}</p>
              <h2 className="mt-2 text-2xl font-bold">{p.q}</h2>
              <div className="mt-6 space-y-3">
                {p.ops.map((o, j) => {
                  const st = pick === null ? "border-border hover:border-primary hover:bg-muted" : j === p.c ? "border-success bg-success/15" : j === pick ? "border-destructive bg-destructive/10" : "border-border opacity-60";
                  return (
                    <button key={o} disabled={pick !== null} onClick={() => { setPick(j); if (j === p.c) setScore((s) => s + 1); }} className={`w-full rounded-2xl border-2 p-4 text-left transition ${st}`}>{o}</button>
                  );
                })}
              </div>
              {pick !== null && (
                <button onClick={() => { setI(i + 1); setPick(null); }} className="mt-6 flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition hover:scale-105">
                  {i + 1 === PERGUNTAS.length ? "Ver resultado" : <>Próxima <ArrowRight className="h-4 w-4" aria-hidden /></>}
                </button>
              )}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
