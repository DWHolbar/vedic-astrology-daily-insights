export interface ZodiacSign {
  index: number;
  name: string;
  vedicName: string;
  symbol: string;
  ruler: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  quality: 'Cardinal' | 'Fixed' | 'Mutable';
  startDegree: number;
  endDegree: number;
}

export interface PlanetPosition {
  id: string;
  name: string;
  vedicName: string;
  symbol: string;
  tropicalLongitude: number;
  siderealLongitude: number;
  sign: ZodiacSign;
  degreeInSign: number;
  isRetrograde: boolean;
}

export interface MoonPhaseInfo {
  phase: MoonPhaseName;
  angle: number;
  illumination: number;
  emoji: string;
}

export type MoonPhaseName =
  | 'New Moon'
  | 'Waxing Crescent'
  | 'First Quarter'
  | 'Waxing Gibbous'
  | 'Full Moon'
  | 'Waning Gibbous'
  | 'Last Quarter'
  | 'Waning Crescent';

export interface EclipseEvent {
  type: 'solar' | 'lunar';
  kind: string;
  date: Date;
  peakTime: Date;
}

export interface TransitEvent {
  type: 'retrograde_start' | 'retrograde_end' | 'sign_change' | 'eclipse';
  planet?: string;
  date: Date;
  description: string;
}

export interface DailyInsight {
  theme: InsightTheme;
  title: string;
  content: string;
  icon: string;
}

export type InsightTheme =
  | 'career'
  | 'relationships'
  | 'health'
  | 'finances'
  | 'spirituality'
  | 'general';

export interface DayCalendarData {
  date: Date;
  moonPhase: MoonPhaseInfo;
  moonSign: ZodiacSign;
  isEclipse: boolean;
}
