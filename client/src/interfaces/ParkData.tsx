export interface Park {
  fullName: string;
  description: string;
  states: string;
  directionsInfo: string;
  entranceFees: { cost: number; title: string }[];
  images: { url: string; altText: string }[];
};