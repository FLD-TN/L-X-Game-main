
export interface EnvelopeData {
  id: number;
  rotation: number; // Initial random rotation
  xOffset: number; // Small horizontal variance
  yOffset: number; // Small vertical variance
  delay: number; // Animation delay
  money?: number; // Lucky money amount in VND
}

export type Language = 'vi' | 'en';

export interface ContentSection {
  benediction_title: string;
  benediction_text: string;
  context_title: string;
  context_quote: string;
  value: string;
  unit: string;
}

export interface CardData {
  id: number;
  vi: ContentSection;
  en: ContentSection;
  youtube: {
    video_id: string;
    title: string;
  };
  image: string;
}

export interface VideoContent {
  id: string;
  title: string;
  desc: string;
}

export enum GameState {
  IDLE,
  OPENING,
  REVEALED
}
