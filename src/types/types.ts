export type ItemType = {
  name: string;
  url: string;
  id: number;
  types: {
    slot: number;
    type: { name: string; url: string }
  }[];
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: object;
    versions: object;
  };
  moves: any[];
  stats: any[];
  weight: number;
};
