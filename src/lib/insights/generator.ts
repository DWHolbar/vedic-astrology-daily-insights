import { getAllPlanetPositions } from '@/lib/astro/engine';
import { ZODIAC_SIGNS, THEME_INFO } from '@/data/constants';
import { ALL_TEMPLATES } from '@/data/insightTemplates';
import type { DailyInsight, InsightTheme, ZodiacSign, PlanetPosition } from '@/lib/astro/types';

function getHouseFromMoon(moonSignIndex: number, planetSignIndex: number): number {
  let house = planetSignIndex - moonSignIndex + 1;
  if (house <= 0) house += 12;
  return house;
}

function deterministicIndex(seed: number, arrayLength: number): number {
  if (arrayLength <= 0) return 0;
  // Simple hash from seed
  let hash = seed;
  hash = ((hash >> 16) ^ hash) * 0x45d9f3b;
  hash = ((hash >> 16) ^ hash) * 0x45d9f3b;
  hash = (hash >> 16) ^ hash;
  return Math.abs(hash) % arrayLength;
}

function dateSeed(date: Date, signIndex: number, themeIndex: number): number {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return date.getFullYear() * 10000 + dayOfYear * 100 + signIndex * 10 + themeIndex;
}

function generateInsightForTheme(
  theme: InsightTheme,
  moonSign: ZodiacSign,
  planets: PlanetPosition[],
  date: Date
): DailyInsight {
  const templates = ALL_TEMPLATES[theme];
  if (!templates) {
    return {
      theme,
      title: THEME_INFO[theme].title,
      content: 'Planetary energies are in a neutral phase for this area of life.',
      icon: THEME_INFO[theme].icon,
    };
  }

  const themeIndex = Object.keys(ALL_TEMPLATES).indexOf(theme);
  const seed = dateSeed(date, moonSign.index, themeIndex);
  const parts: string[] = [];

  // Check each planet's house position relative to moon sign
  for (const planet of planets) {
    if (planet.id === 'rahu' || planet.id === 'ketu') continue;

    const house = getHouseFromMoon(moonSign.index, planet.sign.index);
    const planetTemplates = templates.planetInHouse[planet.id];

    if (planetTemplates && planetTemplates[house]) {
      const options = planetTemplates[house];
      const idx = deterministicIndex(seed + planet.id.length, options.length);
      parts.push(options[idx]);
    }

    // Check retrograde
    if (planet.isRetrograde && templates.retrograde[planet.id]) {
      const retroOptions = templates.retrograde[planet.id];
      const idx = deterministicIndex(seed + 99 + planet.id.length, retroOptions.length);
      parts.push(retroOptions[idx]);
    }
  }

  // If no specific planetary insights, use general
  if (parts.length === 0) {
    const idx = deterministicIndex(seed, templates.general.length);
    parts.push(templates.general[idx]);
  }

  // Limit to 2-3 sentences
  const content = parts.slice(0, 3).join(' ');

  return {
    theme,
    title: THEME_INFO[theme].title,
    content,
    icon: THEME_INFO[theme].icon,
  };
}

export function generateDailyInsights(
  moonSignIndex: number,
  date: Date
): DailyInsight[] {
  const moonSign = ZODIAC_SIGNS[moonSignIndex];
  const planets = getAllPlanetPositions(date);

  const themes: InsightTheme[] = [
    'general',
    'career',
    'relationships',
    'health',
    'finances',
    'spirituality',
  ];

  return themes.map((theme) =>
    generateInsightForTheme(theme, moonSign, planets, date)
  );
}
