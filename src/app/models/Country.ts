export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  languages: {
    [key: string]: string;
  };
  idioms: {
    key: string;
    value: string;
  }[];
}