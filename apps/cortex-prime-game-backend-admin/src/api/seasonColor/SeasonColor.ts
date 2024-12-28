export type SeasonColor = {
  color: string | null;
  createdAt: Date;
  id: string;
  typeField?: "Dawn" | "Noon" | "Dusk" | "Night" | null;
  updatedAt: Date;
};
