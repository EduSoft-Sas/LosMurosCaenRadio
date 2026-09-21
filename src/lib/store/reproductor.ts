import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type EstadoReproductor = {
  sonando: boolean;
  volumen: number;
  oyentes: number;
  setSonando: (v: boolean) => void;
  alternar: () => void;
  setVolumen: (v: number) => void;
  setOyentes: (fn: (n: number) => number) => void;
};

export const useReproductor = create<EstadoReproductor>()(
  persist(
    (set) => ({
      sonando: false,
      volumen: 70,
      oyentes: 312,
      setSonando: (sonando) => set({ sonando }),
      alternar: () => set((s) => ({ sonando: !s.sonando })),
      setVolumen: (volumen) => set({ volumen }),
      setOyentes: (fn) => set((s) => ({ oyentes: fn(s.oyentes) })),
    }),
    {
      name: "lmc-reproductor",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ volumen: s.volumen }),
    },
  ),
);
