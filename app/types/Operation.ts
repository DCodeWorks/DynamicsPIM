export type OperationType =
  | "Export to Shopify"
  | "Auto Attribute Enrichment"
  | "AI Enrichment"
  | "Copy Attributes";

export interface Operation {
  id: string;
  name: string;
  type: OperationType;
  lastRunAt: string;
  nextRunAt: string;
  itemsProcessed: number;
  schedule: string;
}
