import type { ZodiacSign } from '@/lib/astro/types';

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { index: 0, name: 'Aries', vedicName: 'Mesha', symbol: '♈', ruler: 'Mars', element: 'Fire', quality: 'Cardinal', startDegree: 0, endDegree: 30 },
  { index: 1, name: 'Taurus', vedicName: 'Vrishabha', symbol: '♉', ruler: 'Venus', element: 'Earth', quality: 'Fixed', startDegree: 30, endDegree: 60 },
  { index: 2, name: 'Gemini', vedicName: 'Mithuna', symbol: '♊', ruler: 'Mercury', element: 'Air', quality: 'Mutable', startDegree: 60, endDegree: 90 },
  { index: 3, name: 'Cancer', vedicName: 'Karka', symbol: '♋', ruler: 'Moon', element: 'Water', quality: 'Cardinal', startDegree: 90, endDegree: 120 },
  { index: 4, name: 'Leo', vedicName: 'Simha', symbol: '♌', ruler: 'Sun', element: 'Fire', quality: 'Fixed', startDegree: 120, endDegree: 150 },
  { index: 5, name: 'Virgo', vedicName: 'Kanya', symbol: '♍', ruler: 'Mercury', element: 'Earth', quality: 'Mutable', startDegree: 150, endDegree: 180 },
  { index: 6, name: 'Libra', vedicName: 'Tula', symbol: '♎', ruler: 'Venus', element: 'Air', quality: 'Cardinal', startDegree: 180, endDegree: 210 },
  { index: 7, name: 'Scorpio', vedicName: 'Vrishchika', symbol: '♏', ruler: 'Mars', element: 'Water', quality: 'Fixed', startDegree: 210, endDegree: 240 },
  { index: 8, name: 'Sagittarius', vedicName: 'Dhanu', symbol: '♐', ruler: 'Jupiter', element: 'Fire', quality: 'Mutable', startDegree: 240, endDegree: 270 },
  { index: 9, name: 'Capricorn', vedicName: 'Makara', symbol: '♑', ruler: 'Saturn', element: 'Earth', quality: 'Cardinal', startDegree: 270, endDegree: 300 },
  { index: 10, name: 'Aquarius', vedicName: 'Kumbha', symbol: '♒', ruler: 'Saturn', element: 'Air', quality: 'Fixed', startDegree: 300, endDegree: 330 },
  { index: 11, name: 'Pisces', vedicName: 'Meena', symbol: '♓', ruler: 'Jupiter', element: 'Water', quality: 'Mutable', startDegree: 330, endDegree: 360 },
];

export const PLANETS = [
  { id: 'sun', name: 'Sun', vedicName: 'Surya', symbol: '☉', nature: 'Malefic' },
  { id: 'moon', name: 'Moon', vedicName: 'Chandra', symbol: '☽', nature: 'Benefic' },
  { id: 'mars', name: 'Mars', vedicName: 'Mangal', symbol: '♂', nature: 'Malefic' },
  { id: 'mercury', name: 'Mercury', vedicName: 'Budha', symbol: '☿', nature: 'Neutral' },
  { id: 'jupiter', name: 'Jupiter', vedicName: 'Guru', symbol: '♃', nature: 'Benefic' },
  { id: 'venus', name: 'Venus', vedicName: 'Shukra', symbol: '♀', nature: 'Benefic' },
  { id: 'saturn', name: 'Saturn', vedicName: 'Shani', symbol: '♄', nature: 'Malefic' },
  { id: 'rahu', name: 'Rahu', vedicName: 'Rahu', symbol: '☊', nature: 'Malefic' },
  { id: 'ketu', name: 'Ketu', vedicName: 'Ketu', symbol: '☋', nature: 'Malefic' },
];

export const SIGN_SLUGS: Record<string, number> = {
  aries: 0, taurus: 1, gemini: 2, cancer: 3,
  leo: 4, virgo: 5, libra: 6, scorpio: 7,
  sagittarius: 8, capricorn: 9, aquarius: 10, pisces: 11,
};

export const THEME_INFO = {
  career: { title: 'Career & Profession', icon: '💼', description: 'Professional growth and workplace dynamics' },
  relationships: { title: 'Relationships & Love', icon: '❤️', description: 'Love, partnerships, and social connections' },
  health: { title: 'Health & Wellness', icon: '🏥', description: 'Physical vitality and mental well-being' },
  finances: { title: 'Finances & Wealth', icon: '💰', description: 'Financial prospects and material gains' },
  spirituality: { title: 'Spirituality & Growth', icon: '🧘', description: 'Inner growth and spiritual development' },
  general: { title: 'General Outlook', icon: '⭐', description: 'Overall energy and daily guidance' },
};
