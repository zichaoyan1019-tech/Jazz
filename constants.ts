
import { Slide, StyleMapItem } from './types';

// Access the base URL defined in vite.config.ts (e.g., '/Jazz/')
// This ensures assets load correctly whether on localhost or GitHub Pages
const BASE_URL = (import.meta as any).env?.BASE_URL ?? '/';

export const introSlides: Slide[] = Array.from({ length: 7 }, (_, i) => ({
  // Changed from `/S...` to `${BASE_URL}S...`
  src: `${BASE_URL}S${i + 1}.jpg`,
  alt: `Jazz History Slide ${i + 1}`,
  audioSrc: `${BASE_URL}S${i + 1}.mp3`
}));

export const cupheadSlides: Slide[] = Array.from({ length: 8 }, (_, i) => ({
  src: `${BASE_URL}${i + 1}.jpg`,
  alt: `Cuphead Visual Overview ${i + 1}`,
}));

// =====================================================================
// HOW TO ADJUST MAP POSITIONS:
// mapPosition: { x: number, y: number }
// x = Percentage from LEFT (0 = left edge, 100 = right edge)
// y = Percentage from TOP (0 = top edge, 100 = bottom edge)
// =====================================================================

export const styleMap: StyleMapItem[] = [
  {
    id: 'ragtime',
    style: 'Ragtime',
    track: 'Funhouse Frazzle',
    scene: 'Run & Gun – Funhouse',
    img: `${BASE_URL}funhouse-frazzle.jpg`,
    note: 'Ragtime syncopations and repetitive piano patterns reflect the rotating, disorienting mechanics of the Funhouse stage. The quirky rhythm captures the playful confusion of navigating a shifting carnival environment.',
    feel: 'Medium · Bouncy',
    tone: 'medium',
    video: 'https://www.youtube.com/embed/LGOcSIhApvE',
    // 调整位置：最左边门口处
    mapPosition: { x: 10, y: 50 },
    mapType: 'run-gun'
  },
  {
    id: 'dixieland',
    style: 'Hot Jazz / Dixieland',
    track: 'Floral Fury',
    scene: 'Cagney Carnation Boss',
    img: `${BASE_URL}floral-fury.jpg`,
    note: 'Using Dixieland-style collective improvisation, the music matches Cagney Carnation’s unpredictable, fast-moving attacks. The lively rhythm and chaotic interplay between instruments reinforce the wild, animated personality of the floral battlefield.',
    feel: 'Fast · Tense',
    tone: 'fast',
    video: 'https://www.youtube.com/embed/8q0x4Xdc05E',
    // 调整位置：左侧区域 (Isle I)
    mapPosition: { x: 25, y: 70 },
    mapType: 'boss'
  },
  {
    id: 'stride',
    style: 'Stride Piano',
    track: 'Fiery Frolic',
    scene: 'Grim Matchstick Boss',
    img: `${BASE_URL}fiery-frolic.jpg`,
    note: 'With its fast stride-piano textures, the track mirrors Grim Matchstick’s rapid movements and escalating attacks. The frantic keyboard style intensifies the sense of danger, turning the boss fight into a fiery musical spectacle.',
    feel: 'Fast · Tense',
    tone: 'fast',
    video: 'https://www.youtube.com/embed/U4-_HZA1o0A',
    // 调整位置：Floral 旁边的山门口 (上方一点)
    mapPosition: { x: 28, y: 50 },
    mapType: 'boss'
  },
  {
    id: 'cool',
    style: 'Cool Jazz',
    track: 'Porkrind’s Shop',
    scene: 'Porkrind Shop',
    img: `${BASE_URL}porkrind-shop.jpg`,
    note: 'The cool-jazz style provides a calm, low-pressure atmosphere that contrasts with the rest of the game. Its relaxed groove supports the shop’s function as a safe, restorative space for players between difficult battles.',
    feel: 'Slow · Cool',
    tone: 'slow',
    video: 'https://www.youtube.com/embed/MYxNkbvErw8',
    // 调整位置：地图中心
    mapPosition: { x: 50, y: 55 },
    mapType: 'shop'
  },
  {
    id: 'swing',
    style: 'Big Band Swing',
    track: 'Botanic Panic',
    scene: 'Root Pack Boss',
    // Updated filename to be web-safe
    img: `${BASE_URL}botanic-panic.jpg`,
    note: 'This big-band swing track amplifies the Root Pack’s slapstick behavior through bold brass hits and energetic rhythms. Its punchy, cartoon-like phrasing mirrors the boss’s exaggerated animations, making the fight feel like a 1930s comic routine brought to life.',
    feel: 'Medium · Bouncy',
    tone: 'medium',
    video: 'https://www.youtube.com/embed/3SXs4yayRrE',
    // 调整位置：Shop 右边的房子
    mapPosition: { x: 60, y: 48 },
    mapType: 'boss'
  },
  {
    id: 'cartoon',
    style: 'Cartoon Jazz',
    track: 'King Dice Theme',
    scene: 'King Dice Boss',
    img: `${BASE_URL}king-dice.jpg`,
    note: 'This cartoon-jazz song gives King Dice the flair of a smooth but menacing show host. Its theatrical brass lines and swaggering groove enhance his role as a charismatic villain controlling the high-stakes casino.',
    feel: 'Fast · Showy',
    tone: 'fast',
    video: 'https://www.youtube.com/embed/U_h64mIW_9I',
    // 调整位置：右上角
    mapPosition: { x: 85, y: 18 },
    mapType: 'dice'
  },
];
