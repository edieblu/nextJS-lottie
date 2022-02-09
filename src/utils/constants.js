export const RATINGS = {
  0: "Not Yet Rated",
  1: "Requires Improvement",
  2: "Good",
  3: "Outstanding",
};

export const RATINGS_TO_VALUE = {
  [RATINGS[0]]: 0,
  [RATINGS[1]]: 1,
  [RATINGS[2]]: 2,
  [RATINGS[3]]: 3,
};

export const RATINGS_SLIDER = {
  MIN: RATINGS_TO_VALUE["Not Yet Rated"],
  DEFAULT: RATINGS_TO_VALUE["Good"],
  MAX: RATINGS_TO_VALUE["Outstanding"],
};

export const PRICE_SLIDER = {
  MIN: 750,
  DEFAULT: 1250,
  MAX: 1500,
};

export const NAV_ITEMS = [
  { name: "Search", url: "/" },
  { name: "Advice & Insight", url: "/" },
  { name: "About", url: "/" },
];
