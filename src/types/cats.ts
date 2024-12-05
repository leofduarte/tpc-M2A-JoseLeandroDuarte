interface Breed {
  id: string;
  name: string;
  temperament: string;
}

interface Cat {
  id: string;
  url: string;
  breeds?: Breed[];
}

interface CatsState {
  cats: Cat[];
  breeds: Breed[];
  loading: boolean;
  error: string | null;
}

export type { Cat, CatsState, Breed };