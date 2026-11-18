import { describe, it, expect } from "vitest";
import { nivel, PERGUNTAS } from "./quiz";
describe("quiz", () => {
  it("has at least 10 questions", () => expect(PERGUNTAS.length).toBeGreaterThanOrEqual(10));
  it("0-4 Aprendiz", () => { expect(nivel(0)).toBe("Aprendiz"); expect(nivel(4)).toBe("Aprendiz"); });
  it("5-7 Consumidor atento", () => { expect(nivel(5)).toBe("Consumidor atento"); expect(nivel(7)).toBe("Consumidor atento"); });
  it("8-9 Consumidor consciente", () => { expect(nivel(8)).toBe("Consumidor consciente"); expect(nivel(9)).toBe("Consumidor consciente"); });
  it("10 Especialista", () => expect(nivel(10)).toBe("Especialista em segurança dos ovos"));
});
