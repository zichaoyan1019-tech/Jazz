
import { Slide, StyleMapItem } from './types';

// Workaround for missing ImportMeta type definition
const BASE_URL = (import.meta as any).env?.BASE_URL ?? '';

export const introSlides: Slide[] = Array.from({ length: 7 }, (_, i) => ({
  src: `/S${i + 1}.jpg`,
  alt: `Jazz History Slide ${i + 1}`,
  audioSrc: `/S${i + 1}.mp3`
}));

export const cupheadSlides: Slide[] = Array.from({ length: 8 }, (_, i) => ({
  src: `/${i + 1}.jpg`,
  alt: `Cuphead Visual Overview ${i + 1}`,
}));

export const styleMap: StyleMapItem[] = [
  {
    id: 'ragtime',
    style: 'Ragtime',
    track: 'Funhouse Frazzle',
    scene: 'Run & Gun – Funhouse',
    img: '/funhouse-frazzle.jpg',
    note: 'Ragtime syncopations and repetitive piano patterns reflect the rotating, disorienting mechanics of the Funhouse stage. The quirky rhythm captures the playful confusion of navigating a shifting carnival environment.',
    feel: 'Medium · Bouncy',
    tone: 'medium',
    video: 'https://www.youtube.com/embed/LGOcSIhApvE',
    // Moved to "Left Entrance"
    mapPosition: { x: 47, y: 26 },
    mapType: 'run-gun'
  },
  {
    id: 'dixieland',
    style: 'Hot Jazz / Dixieland',
    track: 'Floral Fury',
    scene: 'Cagney Carnation Boss',
    img: '/floral-fury.jpg',
    note: 'Using Dixieland-style collective improvisation, the music matches Cagney Carnation’s unpredictable, fast-moving attacks. The lively rhythm and chaotic interplay between instruments reinforce the wild, animated personality of the floral battlefield.',
    feel: 'Fast · Tense',
    tone: 'fast',
    video: 'https://www.youtube.com/embed/8q0x4Xdc05E',
    // Kept roughly in Isle I area
    mapPosition: { x: 58, y: 70 },
    mapType: 'boss'
  },
  {
    id: 'stride',
    style: 'Stride Piano',
    track: 'Fiery Frolic',
    scene: 'Grim Matchstick Boss',
    img: '/fiery-frolic.jpg',
    note: 'With its fast stride-piano textures, the track mirrors Grim Matchstick’s rapid movements and escalating attacks. The frantic keyboard style intensifies the sense of danger, turning the boss fight into a fiery musical spectacle.',
    feel: 'Fast · Tense',
    tone: 'fast',
    video: 'https://www.youtube.com/embed/U4-_HZA1o0A',
    // Moved to "Mountain Entrance near Floral" (Isle I/II border)
    mapPosition: { x: 24, y: 60 },
    mapType: 'boss'
  },
  {
    id: 'cool',
    style: 'Cool Jazz',
    track: 'Porkrind’s Shop',
    scene: 'Porkrind Shop',
    img: '/porkrind-shop.jpg',
    note: 'The cool-jazz style provides a calm, low-pressure atmosphere that contrasts with the rest of the game. Its relaxed groove supports the shop’s function as a safe, restorative space for players between difficult battles.',
    feel: 'Slow · Cool',
    tone: 'slow',
    video: 'https://www.youtube.com/embed/MYxNkbvErw8',
    // Center Bridge/Area
    mapPosition: { x: 47, y: 60 },
    mapType: 'shop'
  },
  {
    id: 'swing',
    style: 'Big Band Swing',
    track: 'Botanic Panic',
    scene: 'Root Pack Boss',
    // Updated filename to be web-safe
    img: '/botanic-panic.jpg',
    note: 'This big-band swing track amplifies the Root Pack’s slapstick behavior through bold brass hits and energetic rhythms. Its punchy, cartoon-like phrasing mirrors the boss’s exaggerated animations, making the fight feel like a 1930s comic routine brought to life.',
    feel: 'Medium · Bouncy',
    tone: 'medium',
    video: 'https://www.youtube.com/embed/3SXs4yayRrE',
    // Moved to "House entrance right of Shop"
    mapPosition: { x: 30, y: 36 },
    mapType: 'boss'
  },
  {
    id: 'cartoon',
    style: 'Cartoon Jazz',
    track: 'King Dice Theme',
    scene: 'King Dice Boss',
    img: '/king-dice.jpg',
    note: 'This cartoon-jazz song gives King Dice the flair of a smooth but menacing show host. Its theatrical brass lines and swaggering groove enhance his role as a charismatic villain controlling the high-stakes casino.',
    feel: 'Fast · Showy',
    tone: 'fast',
    video: 'https://www.youtube.com/embed/U_h64mIW_9I',
    // Kept Top Right (Casino area)
    mapPosition: { x: 78, y: 15 },
    mapType: 'dice'
  },
];
