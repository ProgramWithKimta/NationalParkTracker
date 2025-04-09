export interface EntranceFee {
  title: string;
  cost: string; // Cost is returned as a string in the API
}

export interface ParkImage {
  url: string;
  altText: string;
}

export interface Park {
  id: string;
  fullName: string;
  description: string;
  states: string;
  directionsInfo: string;
  entranceFees: EntranceFee[];
  images: ParkImage[];
}