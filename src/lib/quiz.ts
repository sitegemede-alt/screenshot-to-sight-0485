export type Pergunta = { q: string; ops: string[]; c: number };
export const PERGUNTAS: Pergunta[] = [
  { q: "Qual categoria possui destinação exclusiva para industrialização?", ops: ["Categoria A", "Categoria B", "Categoria Extra"], c: 1 },
  { q: "O que significa SIF?", ops: ["Sistema de Informação Fiscal", "Serviço de Inspeção Federal", "Selo de Identificação de Feiras"], c: 1 },
  { q: "Qual ODS está diretamente relacionado à saúde?", ops: ["ODS 2", "ODS 3", "ODS 12"], c: 1 },
  { q: "Por que as caixas não devem ficar diretamente no chão?", ops: ["Por questão estética", "Pode favorecer contato com sujidades e dificultar a higienização", "Porque ocupam muito espaço"], c: 1 },
  { q: "A aparência do ovo garante que ele está livre de Salmonella?", ops: ["Sim, sempre", "Não, a aparência não é suficiente", "Só se a casca for branca"], c: 1 },
  { q: "Qual informação ajuda na rastreabilidade?", ops: ["Cor da casca", "Lote", "Tamanho da bandeja"], c: 1 },
  { q: "O que deve ser avaliado em relação à venda fracionada?", ops: ["Preservação das informações de lote, validade e procedência", "Apenas o preço", "Somente a cor dos ovos"], c: 0 },
  { q: "Qual ODS está relacionado ao consumo e produção responsáveis?", ops: ["ODS 3", "ODS 2", "ODS 12"], c: 2 },
  { q: "O que significa contaminação cruzada?", ops: ["Transferência de microrganismos de um alimento, superfície ou utensílio para outro", "Mistura de ovos brancos e vermelhos", "Cozinhar dois alimentos juntos"], c: 0 },
  { q: "Qual a importância da inspeção sanitária?", ops: ["Definir o preço do produto", "Verificar se os produtos atendem aos requisitos sanitários, protegendo a saúde pública", "Escolher o fornecedor mais barato"], c: 1 },
];
export function nivel(score: number) {
  if (score >= 10) return "Especialista em segurança dos ovos";
  if (score >= 8) return "Consumidor consciente";
  if (score >= 5) return "Consumidor atento";
  return "Aprendiz";
}
