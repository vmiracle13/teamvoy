type SimpleType = { name: string; url: string };

export type ItemType = {
  name: string;
  url: string;
  id: number;
  types: {
    slot: number;
    type: SimpleType;
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
  moves: {
    move: SimpleType;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: SimpleType,
      version_group: SimpleType,
    }[];
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: SimpleType;
  }[];
  weight: number;
};
