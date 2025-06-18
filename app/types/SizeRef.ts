export interface SizingReference {
  id: string;
  rawLabel: string;
  brand: string;
  gender: string;
  sizeSystem: "US" | "UK" | "EU" | "CM";
  ukSize?: string;
  usSize?: string;
  euSize?: string;
  cmSize?: string;
  isComplete: boolean;
  code: string;
}
