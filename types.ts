
export interface Slide {
  src: string;
  alt: string;
  audioSrc?: string; // Optional linked audio
}

export interface StyleMapItem {
  id: string;
  style: string;
  track: string;
  scene: string;
  img: string;
  note: string;
  feel: string;
  tone: 'slow' | 'medium' | 'fast';
  video: string;
  mapPosition: { x: number; y: number }; // Percentage 0-100
  mapType: 'boss' | 'run-gun' | 'dice' | 'shop';
}

export interface SectionLink {
  id: string;
  label: string;
}
