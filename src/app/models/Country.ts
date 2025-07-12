export interface Country {
  name: string;
  capital: string;
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  languages: {
    name: string;
  }[];
}

export const COUNTRIES: Country[] = [
  {
    name: "Spain",
    capital: "Madrid",
    region: "Europe",
    population: 47350000,
    flags: {
      png: "https://flagcdn.com/w320/es.png",
      svg: "https://flagcdn.com/es.svg"
    },
    languages: [{ name: "Spanish" }]
  },
  {
    name: "Germany",
    capital: "Berlin",
    region: "Europe",
    population: 83100000,
    flags: {
      png: "https://flagcdn.com/w320/de.png",
      svg: "https://flagcdn.com/de.svg"
    },
    languages: [{ name: "German" }]
  },
  {
    name: "Brazil",
    capital: "Brasília",
    region: "Americas",
    population: 213000000,
    flags: {
      png: "https://flagcdn.com/w320/br.png",
      svg: "https://flagcdn.com/br.svg"
    },
    languages: [{ name: "Portuguese" }]
  },
  {
    name: "Japan",
    capital: "Tokyo",
    region: "Asia",
    population: 126000000,
    flags: {
      png: "https://flagcdn.com/w320/jp.png",
      svg: "https://flagcdn.com/jp.svg"
    },
    languages: [{ name: "Japanese" }]
  },
  {
    name: "Kenya",
    capital: "Nairobi",
    region: "Africa",
    population: 53770000,
    flags: {
      png: "https://flagcdn.com/w320/ke.png",
      svg: "https://flagcdn.com/ke.svg"
    },
    languages: [{ name: "Swahili" }, { name: "English" }]
  },
  {
    name: "India",
    capital: "New Delhi",
    region: "Asia",
    population: 1393409038,
    flags: {
      png: "https://flagcdn.com/w320/in.png",
      svg: "https://flagcdn.com/in.svg"
    },
    languages: [{ name: "Hindi" }, { name: "English" }]
  },
  {
    name: "United States",
    capital: "Washington, D.C.",
    region: "Americas",
    population: 331000000,
    flags: {
      png: "https://flagcdn.com/w320/us.png",
      svg: "https://flagcdn.com/us.svg"
    },
    languages: [{ name: "English" }]
  },
  {
    name: "France",
    capital: "Paris",
    region: "Europe",
    population: 67000000,
    flags: {
      png: "https://flagcdn.com/w320/fr.png",
      svg: "https://flagcdn.com/fr.svg"
    },
    languages: [{ name: "French" }]
  },
  {
    name: "Australia",
    capital: "Canberra",
    region: "Oceania",
    population: 25690000,
    flags: {
      png: "https://flagcdn.com/w320/au.png",
      svg: "https://flagcdn.com/au.svg"
    },
    languages: [{ name: "English" }]
  },
  {
    name: "South Korea",
    capital: "Seoul",
    region: "Asia",
    population: 51800000,
    flags: {
      png: "https://flagcdn.com/w320/kr.png",
      svg: "https://flagcdn.com/kr.svg"
    },
    languages: [{ name: "Korean" }]
  },
  {
    name: "Mexico",
    capital: "Mexico City",
    region: "Americas",
    population: 126000000,
    flags: {
      png: "https://flagcdn.com/w320/mx.png",
      svg: "https://flagcdn.com/mx.svg"
    },
    languages: [{ name: "Spanish" }]
  },
  {
    name: "Egypt",
    capital: "Cairo",
    region: "Africa",
    population: 102300000,
    flags: {
      png: "https://flagcdn.com/w320/eg.png",
      svg: "https://flagcdn.com/eg.svg"
    },
    languages: [{ name: "Arabic" }]
  }
];