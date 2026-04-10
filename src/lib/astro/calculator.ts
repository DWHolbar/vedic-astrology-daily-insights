import * as Astronomy from 'astronomy-engine';
import { tropicalToSidereal, getSignIndex, getDegreeInSign } from './sidereal';
import { NAKSHATRAS } from '@/data/nakshatras';
import type { Nakshatra } from '@/data/nakshatras';

export interface MoonCalculationResult {
  signIndex: number;
  siderealLongitude: number;
  tropicalLongitude: number;
  degreeInSign: number;
  nakshatra: Nakshatra;
  nakshatraPada: number;
}

export function calculateMoonDetails(utcDate: Date): MoonCalculationResult {
  const time = Astronomy.MakeTime(utcDate);
  const ecl = Astronomy.EclipticGeoMoon(time);

  let tropLon = ecl.lon;
  if (tropLon < 0) tropLon += 360;

  const sidLon = tropicalToSidereal(tropLon, utcDate);
  const signIndex = getSignIndex(sidLon);
  const degreeInSign = getDegreeInSign(sidLon);

  // Find nakshatra (each spans 13.3333°)
  const nakshatraIndex = Math.floor(sidLon / 13.333333) % 27;
  const nakshatra = NAKSHATRAS[nakshatraIndex];

  // Each nakshatra has 4 padas of 3°20' (3.3333°)
  const degreeInNakshatra = sidLon - nakshatra.startDegree;
  const pada = Math.floor(degreeInNakshatra / 3.333333) + 1;

  return {
    signIndex,
    siderealLongitude: sidLon,
    tropicalLongitude: tropLon,
    degreeInSign,
    nakshatra,
    nakshatraPada: Math.min(pada, 4),
  };
}
