export interface Nakshatra {
  index: number;
  name: string;
  startDegree: number;
  endDegree: number;
  ruler: string;
  deity: string;
  symbol: string;
}

// Each nakshatra spans 13°20' (13.3333°) of the sidereal zodiac
// Total: 27 nakshatras covering 360°
export const NAKSHATRAS: Nakshatra[] = [
  { index: 0, name: 'Ashwini', startDegree: 0, endDegree: 13.3333, ruler: 'Ketu', deity: 'Ashwini Kumaras', symbol: 'Horse head' },
  { index: 1, name: 'Bharani', startDegree: 13.3333, endDegree: 26.6667, ruler: 'Venus', deity: 'Yama', symbol: 'Yoni' },
  { index: 2, name: 'Krittika', startDegree: 26.6667, endDegree: 40, ruler: 'Sun', deity: 'Agni', symbol: 'Razor' },
  { index: 3, name: 'Rohini', startDegree: 40, endDegree: 53.3333, ruler: 'Moon', deity: 'Brahma', symbol: 'Chariot' },
  { index: 4, name: 'Mrigashira', startDegree: 53.3333, endDegree: 66.6667, ruler: 'Mars', deity: 'Soma', symbol: 'Deer head' },
  { index: 5, name: 'Ardra', startDegree: 66.6667, endDegree: 80, ruler: 'Rahu', deity: 'Rudra', symbol: 'Teardrop' },
  { index: 6, name: 'Punarvasu', startDegree: 80, endDegree: 93.3333, ruler: 'Jupiter', deity: 'Aditi', symbol: 'Bow & quiver' },
  { index: 7, name: 'Pushya', startDegree: 93.3333, endDegree: 106.6667, ruler: 'Saturn', deity: 'Brihaspati', symbol: 'Lotus' },
  { index: 8, name: 'Ashlesha', startDegree: 106.6667, endDegree: 120, ruler: 'Mercury', deity: 'Naga', symbol: 'Serpent' },
  { index: 9, name: 'Magha', startDegree: 120, endDegree: 133.3333, ruler: 'Ketu', deity: 'Pitris', symbol: 'Throne' },
  { index: 10, name: 'Purva Phalguni', startDegree: 133.3333, endDegree: 146.6667, ruler: 'Venus', deity: 'Bhaga', symbol: 'Hammock' },
  { index: 11, name: 'Uttara Phalguni', startDegree: 146.6667, endDegree: 160, ruler: 'Sun', deity: 'Aryaman', symbol: 'Bed' },
  { index: 12, name: 'Hasta', startDegree: 160, endDegree: 173.3333, ruler: 'Moon', deity: 'Savitar', symbol: 'Hand' },
  { index: 13, name: 'Chitra', startDegree: 173.3333, endDegree: 186.6667, ruler: 'Mars', deity: 'Vishwakarma', symbol: 'Pearl' },
  { index: 14, name: 'Swati', startDegree: 186.6667, endDegree: 200, ruler: 'Rahu', deity: 'Vayu', symbol: 'Coral' },
  { index: 15, name: 'Vishakha', startDegree: 200, endDegree: 213.3333, ruler: 'Jupiter', deity: 'Indra-Agni', symbol: 'Archway' },
  { index: 16, name: 'Anuradha', startDegree: 213.3333, endDegree: 226.6667, ruler: 'Saturn', deity: 'Mitra', symbol: 'Lotus' },
  { index: 17, name: 'Jyeshtha', startDegree: 226.6667, endDegree: 240, ruler: 'Mercury', deity: 'Indra', symbol: 'Earring' },
  { index: 18, name: 'Mula', startDegree: 240, endDegree: 253.3333, ruler: 'Ketu', deity: 'Nirriti', symbol: 'Roots' },
  { index: 19, name: 'Purva Ashadha', startDegree: 253.3333, endDegree: 266.6667, ruler: 'Venus', deity: 'Apas', symbol: 'Fan' },
  { index: 20, name: 'Uttara Ashadha', startDegree: 266.6667, endDegree: 280, ruler: 'Sun', deity: 'Vishvadevas', symbol: 'Tusk' },
  { index: 21, name: 'Shravana', startDegree: 280, endDegree: 293.3333, ruler: 'Moon', deity: 'Vishnu', symbol: 'Ear' },
  { index: 22, name: 'Dhanishta', startDegree: 293.3333, endDegree: 306.6667, ruler: 'Mars', deity: 'Vasu', symbol: 'Drum' },
  { index: 23, name: 'Shatabhisha', startDegree: 306.6667, endDegree: 320, ruler: 'Rahu', deity: 'Varuna', symbol: 'Circle' },
  { index: 24, name: 'Purva Bhadrapada', startDegree: 320, endDegree: 333.3333, ruler: 'Jupiter', deity: 'Aja Ekapada', symbol: 'Sword' },
  { index: 25, name: 'Uttara Bhadrapada', startDegree: 333.3333, endDegree: 346.6667, ruler: 'Saturn', deity: 'Ahir Budhnya', symbol: 'Twins' },
  { index: 26, name: 'Revati', startDegree: 346.6667, endDegree: 360, ruler: 'Mercury', deity: 'Pushan', symbol: 'Fish' },
];
