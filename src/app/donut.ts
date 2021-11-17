
export interface Result {
  id:   number;
  ref:  string;
  name: string;
}

export interface Donuts {
  count: number;
  results: Result[];
}

export interface Donut {
  id:                number;
  ref:               string;
  name:              string;
  calories:          number;
  extras:            string[];
  photo:             string;
  photo_attribution: string;
}
