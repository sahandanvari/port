import { createContext, useContext } from "react";
import type { ThemeValues } from "./defaults";
import { DEFAULTS } from "./defaults";

export interface ThemeContextValue {
  values: ThemeValues;
  update: (partial: Partial<ThemeValues>) => void;
  reset: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  values: DEFAULTS,
  update: () => {},
  reset: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
