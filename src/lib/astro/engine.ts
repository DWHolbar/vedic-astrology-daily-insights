import * as Astronomy from 'astronomy-engine';
import { tropicalToSidereal, getSignIndex, getDegreeInSign } from './sidereal';
import { ZODIAC_SIGNS, PLANETS } from '@/data/constants';
import type { PlanetPosition, MoonPhaseInfo, MoonPhaseName, EclipseEvent } from './types';

function getTropicalLongitude(body: Astronomy.Body, date: Date): number {
  const time = Astronomy.MakeTime(date);

  if (body === Astronomy.Body.Moon) {
    const ecl = Astronomy.EclipticGeoMoon(time);
    let lon = ecl.lon;
    if (lon < 0) lon += 360;
    return lon;
  }

  const geo = Astronomy.GeoVector(body, time, true);
  const ecl = Astronomy.Ecliptic(geo);
  let lon = ecl.elon;
  if (lon < 0) lon += 360;
  return lon;
}

function getMeanLunarNodeLongitude(date: Date): number {
  // Mean ascending node (Rahu) formula from Meeus, Chapter 47
  const jd =
    367 * date.getUTCFullYear() -
    Math.floor(
      (7 * (date.getUTCFullYear() + Math.floor((date.getUTCMonth() + 1 + 9) / 12))) / 4
    ) +
    Math.floor((275 * (date.getUTCMonth() + 1)) / 9) +
    date.getUTCDate() +
    1721013.5 +
    (date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600) / 24;

  const T = (jd - 2451545.0) / 36525.0;

  let omega =
    125.0445479 -
    1934.1362891 * T +
    0.0020754 * T * T +
    (T * T * T) / 467441 -
    (T * T * T * T) / 60616000;

  // Normalize to 0-360
  omega = omega % 360;
  if (omega < 0) omega += 360;

  return omega;
}

function checkRetrograde(body: Astronomy.Body, date: Date): boolean {
  // Sun and Moon are never retrograde
  if (body === Astronomy.Body.Sun || body === Astronomy.Body.Moon) return false;

  const dt = 0.5; // half a day
  const d1 = new Date(date.getTime() - dt * 86400000);
  const d2 = new Date(date.getTime() + dt * 86400000);

  const lon1 = getTropicalLongitude(body, d1);
  const lon2 = getTropicalLongitude(body, d2);

  // Handle wrap-around at 0/360
  let diff = lon2 - lon1;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;

  return diff < 0;
}

const BODY_MAP: Record<string, Astronomy.Body> = {
  sun: Astronomy.Body.Sun,
  moon: Astronomy.Body.Moon,
  mars: Astronomy.Body.Mars,
  mercury: Astronomy.Body.Mercury,
  jupiter: Astronomy.Body.Jupiter,
  venus: Astronomy.Body.Venus,
  saturn: Astronomy.Body.Saturn,
};

export function getAllPlanetPositions(date: Date): PlanetPosition[] {
  const positions: PlanetPosition[] = [];

  for (const planet of PLANETS) {
    if (planet.id === 'rahu' || planet.id === 'ketu') continue;

    const body = BODY_MAP[planet.id];
    if (!body) continue;

    const tropLon = getTropicalLongitude(body, date);
    const sidLon = tropicalToSidereal(tropLon, date);
    const signIdx = getSignIndex(sidLon);
    const degInSign = getDegreeInSign(sidLon);
    const isRetro = checkRetrograde(body, date);

    positions.push({
      id: planet.id,
      name: planet.name,
      vedicName: planet.vedicName,
      symbol: planet.symbol,
      tropicalLongitude: tropLon,
      siderealLongitude: sidLon,
      sign: ZODIAC_SIGNS[signIdx],
      degreeInSign: degInSign,
      isRetrograde: isRetro,
    });
  }

  // Rahu (Mean North Node)
  const rahuTropLon = getMeanLunarNodeLongitude(date);
  const rahuSidLon = tropicalToSidereal(rahuTropLon, date);
  const rahuSignIdx = getSignIndex(rahuSidLon);

  positions.push({
    id: 'rahu',
    name: 'Rahu',
    vedicName: 'Rahu',
    symbol: '\u260A',
    tropicalLongitude: rahuTropLon,
    siderealLongitude: rahuSidLon,
    sign: ZODIAC_SIGNS[rahuSignIdx],
    degreeInSign: getDegreeInSign(rahuSidLon),
    isRetrograde: true, // Rahu is always retrograde
  });

  // Ketu (South Node = Rahu + 180)
  let ketuTropLon = rahuTropLon + 180;
  if (ketuTropLon >= 360) ketuTropLon -= 360;
  const ketuSidLon = tropicalToSidereal(ketuTropLon, date);
  const ketuSignIdx = getSignIndex(ketuSidLon);

  positions.push({
    id: 'ketu',
    name: 'Ketu',
    vedicName: 'Ketu',
    symbol: '\u260B',
    tropicalLongitude: ketuTropLon,
    siderealLongitude: ketuSidLon,
    sign: ZODIAC_SIGNS[ketuSignIdx],
    degreeInSign: getDegreeInSign(ketuSidLon),
    isRetrograde: true, // Ketu is always retrograde
  });

  return positions;
}

export function getMoonSign(date: Date): number {
  const time = Astronomy.MakeTime(date);
  const ecl = Astronomy.EclipticGeoMoon(time);
  let lon = ecl.lon;
  if (lon < 0) lon += 360;
  const sidLon = tropicalToSidereal(lon, date);
  return getSignIndex(sidLon);
}

export function getMoonPhaseInfo(date: Date): MoonPhaseInfo {
  const time = Astronomy.MakeTime(date);
  const angle = Astronomy.MoonPhase(time);
  const illum = Astronomy.Illumination(Astronomy.Body.Moon, time);

  const phaseNames: { max: number; name: MoonPhaseName; emoji: string }[] = [
    { max: 22.5, name: 'New Moon', emoji: '🌑' },
    { max: 67.5, name: 'Waxing Crescent', emoji: '🌒' },
    { max: 112.5, name: 'First Quarter', emoji: '🌓' },
    { max: 157.5, name: 'Waxing Gibbous', emoji: '🌔' },
    { max: 202.5, name: 'Full Moon', emoji: '🌕' },
    { max: 247.5, name: 'Waning Gibbous', emoji: '🌖' },
    { max: 292.5, name: 'Last Quarter', emoji: '🌗' },
    { max: 337.5, name: 'Waning Crescent', emoji: '🌘' },
    { max: 360, name: 'New Moon', emoji: '🌑' },
  ];

  let phaseName: MoonPhaseName = 'New Moon';
  let emoji = '🌑';
  for (const p of phaseNames) {
    if (angle < p.max) {
      phaseName = p.name;
      emoji = p.emoji;
      break;
    }
  }

  return {
    phase: phaseName,
    angle,
    illumination: illum.phase_fraction * 100,
    emoji,
  };
}

export function getUpcomingEclipses(startDate: Date, count: number): EclipseEvent[] {
  const events: EclipseEvent[] = [];
  const time = Astronomy.MakeTime(startDate);

  // Search for lunar eclipses
  let lunarSearch = Astronomy.SearchLunarEclipse(time);
  for (let i = 0; i < count; i++) {
    if (lunarSearch.kind !== 'penumbral') {
      events.push({
        type: 'lunar',
        kind: lunarSearch.kind,
        date: lunarSearch.peak.date,
        peakTime: lunarSearch.peak.date,
      });
    }
    lunarSearch = Astronomy.NextLunarEclipse(lunarSearch.peak);
  }

  // Search for solar eclipses
  let solarSearch = Astronomy.SearchGlobalSolarEclipse(time);
  for (let i = 0; i < count; i++) {
    events.push({
      type: 'solar',
      kind: solarSearch.kind,
      date: solarSearch.peak.date,
      peakTime: solarSearch.peak.date,
    });
    solarSearch = Astronomy.NextGlobalSolarEclipse(solarSearch.peak);
  }

  events.sort((a, b) => a.date.getTime() - b.date.getTime());
  return events.slice(0, count);
}

export function getRetrogradePlanets(date: Date): PlanetPosition[] {
  const positions = getAllPlanetPositions(date);
  return positions.filter(
    (p) => p.isRetrograde && p.id !== 'rahu' && p.id !== 'ketu'
  );
}

export function findSignChanges(
  startDate: Date,
  days: number
): { planet: string; date: Date; fromSign: string; toSign: string }[] {
  const changes: { planet: string; date: Date; fromSign: string; toSign: string }[] = [];
  const planetIds = ['sun', 'moon', 'mars', 'mercury', 'jupiter', 'venus', 'saturn'];

  for (const planetId of planetIds) {
    const body = BODY_MAP[planetId];
    if (!body) continue;

    for (let d = 0; d < days; d++) {
      const date1 = new Date(startDate.getTime() + d * 86400000);
      const date2 = new Date(startDate.getTime() + (d + 1) * 86400000);

      const lon1 = tropicalToSidereal(getTropicalLongitude(body, date1), date1);
      const lon2 = tropicalToSidereal(getTropicalLongitude(body, date2), date2);

      const sign1 = getSignIndex(lon1);
      const sign2 = getSignIndex(lon2);

      if (sign1 !== sign2) {
        const planet = PLANETS.find((p) => p.id === planetId);
        changes.push({
          planet: planet?.name || planetId,
          date: date2,
          fromSign: ZODIAC_SIGNS[sign1].name,
          toSign: ZODIAC_SIGNS[sign2].name,
        });
      }
    }
  }

  changes.sort((a, b) => a.date.getTime() - b.date.getTime());
  return changes;
}
