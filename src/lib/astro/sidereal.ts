/**
 * Lahiri Ayanamsa calculation for converting tropical to sidereal (Vedic) zodiac.
 * The Lahiri ayanamsa is the official ayanamsa of the Indian government
 * and the most widely used in Vedic astrology.
 */

function dateToJulianDay(date: Date): number {
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const d =
    date.getUTCDate() +
    date.getUTCHours() / 24 +
    date.getUTCMinutes() / 1440 +
    date.getUTCSeconds() / 86400;

  let Y = y;
  let M = m;
  if (M <= 2) {
    Y -= 1;
    M += 12;
  }

  const A = Math.floor(Y / 100);
  const B = 2 - A + Math.floor(A / 4);

  return Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + d + B - 1524.5;
}

export function getLahiriAyanamsa(date: Date): number {
  const jd = dateToJulianDay(date);
  const T = (jd - 2451545.0) / 36525.0; // Julian centuries from J2000.0

  // Lahiri ayanamsa based on Newcomb precession
  // Reference: ayanamsa at J2000.0 = 23.853333 degrees (23°51'12")
  const ayanamsa = 23.853333 + (50.2778 / 3600) * T * 100 + (0.0111 / 3600) * T * T * 10000;

  return ayanamsa;
}

export function tropicalToSidereal(tropicalLongitude: number, date: Date): number {
  const ayanamsa = getLahiriAyanamsa(date);
  let sidereal = tropicalLongitude - ayanamsa;
  if (sidereal < 0) sidereal += 360;
  if (sidereal >= 360) sidereal -= 360;
  return sidereal;
}

export function getSignIndex(siderealLongitude: number): number {
  return Math.floor(siderealLongitude / 30) % 12;
}

export function getDegreeInSign(siderealLongitude: number): number {
  return siderealLongitude % 30;
}
