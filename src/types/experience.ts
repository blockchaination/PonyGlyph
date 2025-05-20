export interface Experience {
  id: string;
  title: string;
  description: string;
  location: string;
  region: string;
  price: number;
  imageurl: string;
  duration: string;
  capacity: number;
  rating: number;
  guideid: string;
  guidename: string;
  categories: string[];
  languages: string[];
  difficulty_level: string;
  included: string[];
  excluded: string[];
  meeting_point: {
    latitude: number;
    longitude: number;
    address: string;
  };
  cancellation_policy: string;
}

export interface Guide {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  rating: number;
  languages: string[];
  specialties: string[];
  region: string;
  verified: boolean;
}

export const MOROCCAN_REGIONS = [
  'Tanger-Tétouan-Al Hoceïma',
  'Oriental',
  'Fès-Meknès',
  'Rabat-Salé-Kénitra',
  'Béni Mellal-Khénifra',
  'Casablanca-Settat',
  'Marrakech-Safi',
  'Drâa-Tafilalet',
  'Souss-Massa',
  'Guelmim-Oued Noun',
  'Laâyoune-Sakia El Hamra',
  'Dakhla-Oued Ed-Dahab'
] as const;

export const DIFFICULTY_LEVELS = [
  'easy',
  'moderate',
  'challenging',
  'expert'
] as const;

export const EXPERIENCE_CATEGORIES = [
  'desert',
  'mountains',
  'coast',
  'culture',
  'food',
  'history',
  'adventure',
  'wellness',
  'photography',
  'crafts',
  'nature',
  'hiking'
] as const;