import { useState } from "react";
import type { Experience } from "../types";
export function useExperience(experiences: readonly Experience[]) {
  const [selectedId, setSelectedId] = useState(experiences[0]?.id ?? "");
  const selected =
    experiences.find((item) => item.id === selectedId) ?? experiences[0];
  return { selected, selectedId, select: setSelectedId };
}
