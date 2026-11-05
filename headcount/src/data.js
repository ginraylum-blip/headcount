// Annual figures carried over from v1 of the site.
// Every counter on the page is annualTotal / seconds-in-a-year × elapsed time.
// These are projections from annual statistics, not measured live counts.

const FAOSTAT = {
  name: "FAOSTAT — Production: Crops and livestock products (QCL)",
  url: "https://www.fao.org/faostat/en/#data/QCL",
};

// Land animals, shown as full scroll sections with a shackle line.
// `perIcon` is how many animals one hanging silhouette stands for in the caption.
export const LAND = [
  {
    id: "chickens",
    name: "Chickens",
    verb: "slaughtered for meat",
    annual: 78_533_920_000,
    shape: "chicken",
    life: {
      fact: "A hen talks to her chicks while they are still inside the egg, and they peep back to her through the shell.",
      natural: 8,
      naturalLabel: "up to 8 years",
      killedAt: 0.1154,
      killedLabel: "about 6 weeks",
    },
    photo: {
      src: "/photos/chicken.jpg",
      focus: "56% 45%",
      alt: "A hen standing with her chicks",
      credit: "Yann",
      license: "CC BY-SA 4.0",
      page: "https://commons.wikimedia.org/wiki/File:Hen_with_chicks,_Raisen_district,_MP,_India.jpg",
    },
    source: FAOSTAT,
    note: "Broilers make up most of this. One chicken hangs on the line below for every chicken killed in the last few milliseconds.",
  },
  {
    id: "ducks",
    name: "Ducks",
    verb: "slaughtered for meat",
    annual: 4_230_000_000,
    shape: "duck",
    life: {
      fact: "Ducklings bond with the first moving thing they see after hatching and follow it everywhere.",
      natural: 10,
      naturalLabel: "up to 10 years",
      killedAt: 0.1346,
      killedLabel: "about 7 weeks",
    },
    photo: {
      src: "/photos/duck.jpg",
      focus: "62% 50%",
      alt: "A brown duck swimming in a pond at sunset",
      credit: "Basile Morin",
      license: "CC BY-SA 4.0",
      page: "https://commons.wikimedia.org/wiki/File:Brown_domestic_duck_with_orange_beak_in_a_pond_at_golden_hour_in_Don_Det_Laos.jpg",
    },
    source: FAOSTAT,
  },
  {
    id: "pigs",
    name: "Pigs",
    verb: "slaughtered",
    annual: 1_500_000_000,
    shape: "pig",
    life: {
      fact: "Pigs learn their own names, and can use a mirror to find food hidden behind them.",
      natural: 15,
      naturalLabel: "up to 15 years",
      killedAt: 0.5000,
      killedLabel: "about 6 months",
    },
    photo: {
      src: "/photos/pig.jpg",
      focus: "45% 50%",
      alt: "A pig rooting in soft earth",
      credit: "Gzen92",
      license: "CC BY-SA 4.0",
      page: "https://commons.wikimedia.org/wiki/File:Cochon_domestique_(Sus_scrofa_domesticus)_(2).jpg",
    },
    source: FAOSTAT,
  },
  {
    id: "sheep",
    name: "Sheep",
    verb: "slaughtered for meat",
    annual: 704_000_000,
    shape: "sheep",
    life: {
      fact: "Sheep can remember the faces of around 50 other sheep for two years.",
      natural: 12,
      naturalLabel: "up to 12 years",
      killedAt: 0.5000,
      killedLabel: "about 6 months",
    },
    photo: {
      src: "/photos/sheep.jpg",
      focus: "62% 55%",
      alt: "A young lamb kneeling to graze",
      credit: "Prosthetic Head",
      license: "CC BY-SA 4.0",
      page: "https://commons.wikimedia.org/wiki/File:Lamb_Kneeling.jpg",
    },
    source: FAOSTAT,
  },
  {
    id: "goats",
    name: "Goats",
    verb: "slaughtered",
    annual: 564_000_000,
    shape: "goat",
    life: {
      fact: "When goats can’t solve a problem, they look to the people nearby for help, much like dogs do.",
      natural: 15,
      naturalLabel: "up to 15 years",
      killedAt: 0.7500,
      killedLabel: "usually under a year",
    },
    photo: {
      src: "/photos/goat.jpg",
      focus: "38% 45%",
      alt: "A young goat in profile against the sky",
      credit: "Béria Lima de Rodríguez",
      license: "CC BY-SA 3.0",
      page: "https://commons.wikimedia.org/wiki/File:Baby_Goat_in_Margarita_Island,_Venezuela.jpg",
    },
    source: FAOSTAT,
  },
  {
    id: "turkeys",
    name: "Turkeys",
    verb: "slaughtered",
    annual: 504_128_000,
    shape: "turkey",
    life: {
      fact: "A turkey’s bare head shifts from red to blue to white as its mood changes.",
      natural: 10,
      naturalLabel: "up to 10 years",
      killedAt: 0.3333,
      killedLabel: "about 4 months",
    },
    photo: {
      src: "/photos/turkey.jpg",
      focus: "55% 50%",
      alt: "Three turkeys with their tail feathers fanned out",
      credit: "SKas",
      license: "CC BY-SA 4.0",
      page: "https://commons.wikimedia.org/wiki/File:Domesticated_turkey.jpg",
    },
    source: FAOSTAT,
  },
  {
    id: "cattle",
    name: "Cattle",
    verb: "slaughtered",
    annual: 300_000_000,
    shape: "cow",
    life: {
      fact: "Cows form close friendships, and their stress drops when they are with the companion they prefer.",
      natural: 20,
      naturalLabel: "up to 20 years",
      killedAt: 1.5000,
      killedLabel: "about 18 months for beef; dairy cows at about 5 years",
    },
    photo: {
      src: "/photos/cow.jpg",
      focus: "68% 45%",
      alt: "Close-up of a black and white cow",
      credit: "Amélie Tsaag Valren",
      license: "CC BY-SA 4.0",
      page: "https://commons.wikimedia.org/wiki/File:Pontivy_concours_bovin_Normande_portrait.jpg",
    },
    source: FAOSTAT,
  },
];

// Aquatic animals: estimates with wide ranges.
export const FIELD_PHOTO = {
  src: "/photos/field.jpg",
  alt: "",
  credit: "Dietmar Rabich",
  license: "CC BY-SA 4.0",
  page: "https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Umland_--_2014_--_7042.jpg",
};

export const FISH_PHOTO = {
  src: "/photos/fish.jpg",
  alt: "A dusky grouper swimming over the seabed",
  credit: "Diego Delso",
  license: "CC BY-SA 4.0",
  page: "https://commons.wikimedia.org/wiki/File:Mero_(Epinephelus_marginatus),_Madeira,_Portugal,_2019-05-31,_DD_24.jpg",
};

export const WATER = [
  {
    id: "fish",
    name: "Wild-caught fish",
    verb: "estimated in recorded landings",
    annual: 1_500_000_000_000,
    source: {
      name: "Fishcount — wild-caught finfish estimate, 2003–2022 average",
      url: "https://fishcount.org.uk/",
    },
  },
  {
    id: "shrimp",
    name: "Farmed shrimp and prawns",
    verb: "estimated harvested for food",
    annual: 440_000_000_000,
    source: {
      name: "Rethink Priorities — farmed shrimp slaughter estimate",
      url: "https://rethinkpriorities.org/",
    },
  },
  {
    id: "crabs",
    name: "Farmed true crabs",
    verb: "estimated harvested for food",
    annual: 12_000_000_000,
    source: {
      name: "Fishcount — farmed crab estimate from FAO aquaculture data",
      url: "https://fishcount.org.uk/",
    },
  },
];

// Everything else, shown in a compact ledger.
export const OTHER = [
  {
    id: "male-chicks",
    name: "Male chicks culled at hatch",
    annual: 7_000_000_000,
    unit: "chicks",
    source: { name: "Compassion in World Farming", url: "https://www.ciwf.org.uk/" },
  },
  {
    id: "eggs",
    name: "Hen eggs produced",
    annual: 1_780_000_000_000,
    unit: "eggs",
    source: FAOSTAT,
  },
  {
    id: "leather",
    name: "Hides entering the leather supply",
    annual: 350_000_000,
    unit: "hides",
    source: { name: "FAO / leather industry estimates", url: "https://www.fao.org/" },
  },
  {
    id: "fur",
    name: "Animals killed for fur",
    annual: 100_000_000,
    unit: "animals",
    source: { name: "Fur Free Alliance", url: "https://www.furfreealliance.com/" },
  },
  {
    id: "milk",
    name: "Milk produced",
    annual: 985_000_000,
    unit: "tonnes",
    source: FAOSTAT,
  },
  {
    id: "bycatch",
    name: "Marine fisheries discards",
    annual: 9_100_000,
    unit: "tonnes",
    source: {
      name: "FAO — A third assessment of global marine fisheries discards",
      url: "https://www.fao.org/fishery/en/statistics",
    },
  },
];

export const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60;
export const perSecond = (annual) => annual / SECONDS_PER_YEAR;
export const LAND_PER_SECOND = LAND.reduce((s, a) => s + perSecond(a.annual), 0);

const annualOf = (list, id) => list.find((x) => x.id === id).annual;

// Every animal killed, grouped for the opening counter.
// Leather hides are left out because those animals are already counted as
// slaughtered for meat; bycatch is left out because it is only known in tonnes.
export const KILLED_GROUPS = [
  { label: "fish", annual: annualOf(WATER, "fish") },
  { label: "shrimp and prawns", annual: annualOf(WATER, "shrimp") },
  { label: "land animals", annual: LAND.reduce((s, a) => s + a.annual, 0) },
  { label: "crabs", annual: annualOf(WATER, "crabs") },
  { label: "male chicks", annual: annualOf(OTHER, "male-chicks") },
  { label: "animals for fur", annual: annualOf(OTHER, "fur") },
];
export const ALL_PER_SECOND = KILLED_GROUPS.reduce((s, g) => s + perSecond(g.annual), 0);

// Free full-length documentaries. All contain graphic footage.
export const FILMS = [
  {
    title: "Dominion",
    year: 2018,
    length: "2 hours",
    place: "Australia",
    about:
      "Drone, hidden and handheld cameras inside farms and slaughterhouses: pigs, chickens, cows, sheep, fish and more. Narrated by Joaquin Phoenix, Rooney Mara and Sia.",
    url: "https://www.youtube.com/watch?v=LQRAfJyEsko",
    action: "Watch free on YouTube",
  },
  {
    title: "Land of Hope and Glory",
    year: 2017,
    length: "48 minutes",
    place: "United Kingdom",
    about:
      "Undercover footage from around 100 British farms and slaughterhouses, including ones sold as high-welfare. The shortest film here.",
    url: "https://www.landofhopeandglory.org/",
    action: "Watch free",
  },
  {
    title: "Lucent",
    year: 2014,
    length: "1 hour 47 minutes",
    place: "Australia",
    about: "One industry from birth to death: sows in farrowing crates, piglets, and the gas chambers used to stun pigs before slaughter.",
    url: "https://www.farmtransparency.org/lucent",
    action: "Watch free",
  },
  {
    title: "Earthlings",
    year: 2005,
    length: "1 hour 35 minutes",
    place: "United States",
    about: "The film many of the others grew out of. Covers animals used for food, clothing, entertainment and research. Narrated by Joaquin Phoenix.",
    url: "https://www.earthlings.com/",
    action: "Watch free",
  },
];
