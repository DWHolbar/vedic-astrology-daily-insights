'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ZODIAC_SIGNS } from '@/data/constants';
import { NAKSHATRAS } from '@/data/nakshatras';
import { calculateMoonDetails } from '@/lib/astro/calculator';
import type { MoonCalculationResult } from '@/lib/astro/calculator';

const TIMEZONE_OPTIONS = [
  { label: 'UTC-12:00 (Baker Island)', offset: -12 },
  { label: 'UTC-11:00 (Samoa)', offset: -11 },
  { label: 'UTC-10:00 (Hawaii)', offset: -10 },
  { label: 'UTC-09:00 (Alaska)', offset: -9 },
  { label: 'UTC-08:00 (Pacific US)', offset: -8 },
  { label: 'UTC-07:00 (Mountain US)', offset: -7 },
  { label: 'UTC-06:00 (Central US)', offset: -6 },
  { label: 'UTC-05:00 (Eastern US)', offset: -5 },
  { label: 'UTC-04:00 (Atlantic)', offset: -4 },
  { label: 'UTC-03:00 (Buenos Aires)', offset: -3 },
  { label: 'UTC-02:00 (Mid-Atlantic)', offset: -2 },
  { label: 'UTC-01:00 (Azores)', offset: -1 },
  { label: 'UTC+00:00 (London, GMT)', offset: 0 },
  { label: 'UTC+01:00 (Paris, Berlin)', offset: 1 },
  { label: 'UTC+02:00 (Cairo, Jerusalem)', offset: 2 },
  { label: 'UTC+03:00 (Moscow, Riyadh)', offset: 3 },
  { label: 'UTC+03:30 (Tehran)', offset: 3.5 },
  { label: 'UTC+04:00 (Dubai)', offset: 4 },
  { label: 'UTC+04:30 (Kabul)', offset: 4.5 },
  { label: 'UTC+05:00 (Karachi)', offset: 5 },
  { label: 'UTC+05:30 (India, Sri Lanka)', offset: 5.5 },
  { label: 'UTC+05:45 (Nepal)', offset: 5.75 },
  { label: 'UTC+06:00 (Dhaka)', offset: 6 },
  { label: 'UTC+06:30 (Myanmar)', offset: 6.5 },
  { label: 'UTC+07:00 (Bangkok, Jakarta)', offset: 7 },
  { label: 'UTC+08:00 (Singapore, Beijing)', offset: 8 },
  { label: 'UTC+09:00 (Tokyo, Seoul)', offset: 9 },
  { label: 'UTC+09:30 (Adelaide)', offset: 9.5 },
  { label: 'UTC+10:00 (Sydney)', offset: 10 },
  { label: 'UTC+11:00 (Solomon Islands)', offset: 11 },
  { label: 'UTC+12:00 (Auckland)', offset: 12 },
  { label: 'UTC+13:00 (Tonga)', offset: 13 },
];

export default function CalculatorPage() {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('12:00');
  const [tzOffset, setTzOffset] = useState(5.5); // default IST
  const [result, setResult] = useState<MoonCalculationResult | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    if (!birthDate) {
      setError('Please enter your date of birth.');
      return;
    }

    const [year, month, day] = birthDate.split('-').map(Number);
    const [hours, minutes] = birthTime.split(':').map(Number);

    // Convert local time to UTC
    const totalMinutesLocal = hours * 60 + minutes;
    const offsetMinutes = tzOffset * 60;
    const totalMinutesUTC = totalMinutesLocal - offsetMinutes;

    const utcDate = new Date(Date.UTC(year, month - 1, day));
    utcDate.setUTCMinutes(utcDate.getUTCMinutes() + totalMinutesUTC);

    try {
      const calc = calculateMoonDetails(utcDate);
      setResult(calc);
    } catch {
      setError('Could not calculate Moon sign for this date. Please check your inputs.');
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Moon Sign Calculator
          </h1>
          <p className="text-navy-300">
            Enter your birth details to discover your Vedic Moon sign (Rashi)
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-navy-100 p-6 sticky top-6">
              <h2 className="font-semibold text-lg mb-4 text-navy-900">Birth Details</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="birth-date" className="block text-sm font-medium text-slate-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    id="birth-date"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-navy-400"
                  />
                </div>

                <div>
                  <label htmlFor="birth-time" className="block text-sm font-medium text-slate-700 mb-1">
                    Time of Birth
                  </label>
                  <input
                    id="birth-time"
                    type="time"
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-navy-400"
                  />
                  <p className="text-xs text-slate-400 mt-1">
                    Accurate birth time is important &mdash; the Moon changes sign every ~2.5 days
                  </p>
                </div>

                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-slate-700 mb-1">
                    Timezone of Birth Place
                  </label>
                  <select
                    id="timezone"
                    value={tzOffset}
                    onChange={(e) => setTzOffset(parseFloat(e.target.value))}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-navy-400"
                  >
                    {TIMEZONE_OPTIONS.map((tz) => (
                      <option key={tz.offset} value={tz.offset}>
                        {tz.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleCalculate}
                  className="w-full bg-navy-600 text-white py-2.5 rounded-lg font-medium hover:bg-navy-700 transition-colors"
                >
                  Calculate Moon Sign
                </button>

                {error && (
                  <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error}</p>
                )}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {!result ? (
              <div className="bg-white rounded-xl border border-navy-100 p-8 text-center">
                <div className="text-6xl mb-4 opacity-30">☽</div>
                <h3 className="text-lg font-medium text-slate-400 mb-2">
                  Enter your birth details
                </h3>
                <p className="text-sm text-slate-400">
                  Your Vedic Moon sign, nakshatra, and planetary details will appear here
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Moon Sign Result */}
                <div className="bg-gradient-to-br from-navy-600 to-navy-800 rounded-xl p-6 text-white">
                  <p className="text-navy-200 text-sm mb-1 uppercase tracking-wide">Your Vedic Moon Sign</p>
                  <div className="flex items-center gap-4">
                    <span className="text-6xl">{ZODIAC_SIGNS[result.signIndex].symbol}</span>
                    <div>
                      <h2 className="text-3xl font-bold">
                        {ZODIAC_SIGNS[result.signIndex].name}
                      </h2>
                      <p className="text-navy-200 text-lg">
                        {ZODIAC_SIGNS[result.signIndex].vedicName} Rashi
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detailed Position */}
                <div className="bg-white rounded-xl border border-navy-100 p-6">
                  <h3 className="font-semibold text-lg mb-4 text-navy-900">Moon Position Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-navy-50 rounded-lg p-3">
                      <p className="text-xs text-slate-500 uppercase">Sidereal Longitude</p>
                      <p className="font-semibold text-navy-800">
                        {Math.floor(result.siderealLongitude)}&deg;{' '}
                        {Math.floor((result.siderealLongitude % 1) * 60)}&apos;
                      </p>
                    </div>
                    <div className="bg-navy-50 rounded-lg p-3">
                      <p className="text-xs text-slate-500 uppercase">Degree in Sign</p>
                      <p className="font-semibold text-navy-800">
                        {Math.floor(result.degreeInSign)}&deg;{' '}
                        {Math.floor((result.degreeInSign % 1) * 60)}&apos;
                      </p>
                    </div>
                    <div className="bg-navy-50 rounded-lg p-3">
                      <p className="text-xs text-slate-500 uppercase">Nakshatra</p>
                      <p className="font-semibold text-navy-800">{result.nakshatra.name}</p>
                      <p className="text-xs text-slate-500">{result.nakshatra.deity} &middot; Pada {result.nakshatraPada}</p>
                    </div>
                    <div className="bg-navy-50 rounded-lg p-3">
                      <p className="text-xs text-slate-500 uppercase">Nakshatra Lord</p>
                      <p className="font-semibold text-navy-800">{result.nakshatra.ruler}</p>
                    </div>
                    <div className="bg-navy-50 rounded-lg p-3">
                      <p className="text-xs text-slate-500 uppercase">Sign Ruler</p>
                      <p className="font-semibold text-navy-800">
                        {ZODIAC_SIGNS[result.signIndex].ruler}
                      </p>
                    </div>
                    <div className="bg-navy-50 rounded-lg p-3">
                      <p className="text-xs text-slate-500 uppercase">Element</p>
                      <p className="font-semibold text-navy-800">
                        {ZODIAC_SIGNS[result.signIndex].element}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sign Description */}
                <div className="bg-white rounded-xl border border-navy-100 p-6">
                  <h3 className="font-semibold text-lg mb-3 text-navy-900">
                    About {ZODIAC_SIGNS[result.signIndex].vedicName} ({ZODIAC_SIGNS[result.signIndex].name}) Moon
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {getSignDescription(result.signIndex)}
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-navy-50 rounded-xl border border-navy-200 p-6 text-center">
                  <p className="text-slate-600 mb-3">
                    Now that you know your Moon sign, explore your daily insights!
                  </p>
                  <Link
                    href={`/daily-insights/${ZODIAC_SIGNS[result.signIndex].name.toLowerCase()}`}
                    className="inline-block bg-navy-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-navy-700 transition-colors"
                  >
                    View {ZODIAC_SIGNS[result.signIndex].name} Daily Insights &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-10 bg-white rounded-xl border border-navy-100 p-6">
          <h3 className="font-semibold text-lg mb-3 text-navy-900">
            Why is Moon Sign Important in Vedic Astrology?
          </h3>
          <div className="text-slate-600 text-sm leading-relaxed space-y-2">
            <p>
              In Vedic astrology (Jyotish), the <strong>Moon sign (Chandra Rashi)</strong> is
              considered the most significant indicator in your birth chart. While Western
              astrology emphasizes the Sun sign, Vedic astrology regards the Moon as the ruler
              of the mind, emotions, and daily experiences.
            </p>
            <p>
              Your Moon sign determines which <strong>Nakshatra</strong> (lunar mansion) you
              were born under. There are 27 Nakshatras, each spanning 13&deg;20&apos; of the
              zodiac, and each has its own deity, ruling planet, and unique characteristics.
            </p>
            <p>
              For accurate results, providing the <strong>exact birth time</strong> is crucial
              because the Moon moves approximately 12-13 degrees per day, changing signs
              roughly every 2.5 days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function getSignDescription(index: number): string {
  const descriptions: Record<number, string> = {
    0: 'With Moon in Mesha (Aries), you possess a dynamic and pioneering emotional nature. You are quick to react, fiercely independent, and driven by passion. Your emotional responses are direct and energetic, with a natural leadership quality. You thrive on challenges and have a courageous heart that propels you forward.',
    1: 'With Moon in Vrishabha (Taurus), you have a deeply stable and sensual emotional nature. You seek comfort, security, and beauty in all aspects of life. Your feelings run deep but steady, and you are loyal and devoted in relationships. You have a natural appreciation for art, music, and the finer things in life.',
    2: 'With Moon in Mithuna (Gemini), you have a versatile and intellectually curious emotional nature. You process feelings through communication and mental analysis. Your mood shifts quickly, and you need constant stimulation and variety. You are naturally witty, sociable, and gifted with words.',
    3: 'With Moon in Karka (Cancer), the Moon is in its own sign, making your emotional nature deeply intuitive and nurturing. You are profoundly connected to family, home, and traditions. Your empathy is remarkable, and you have a natural ability to care for others. Emotional security is your highest priority.',
    4: 'With Moon in Simha (Leo), you possess a regal and confident emotional nature. You need recognition, creative expression, and the ability to shine. Your heart is generous and warm, and you naturally attract attention. You lead with your heart and have a dramatic, passionate approach to life.',
    5: 'With Moon in Kanya (Virgo), you have an analytical and detail-oriented emotional nature. You process feelings through practical analysis and seek perfection in your environment. You are naturally helpful, health-conscious, and have a keen eye for improvement. Service to others brings you emotional fulfillment.',
    6: 'With Moon in Tula (Libra), you have a harmonious and relationship-oriented emotional nature. You seek balance, beauty, and fairness in all interactions. Partnership is essential to your emotional well-being, and you have a natural diplomatic ability. You are drawn to art, aesthetics, and social harmony.',
    7: 'With Moon in Vrishchika (Scorpio), you have an intensely deep and transformative emotional nature. You feel everything profoundly and are drawn to life\'s mysteries. Your intuition is powerful, and you have remarkable emotional resilience. You value truth, loyalty, and authentic connections above all.',
    8: 'With Moon in Dhanu (Sagittarius), you have an optimistic and philosophical emotional nature. You seek meaning, adventure, and higher knowledge. Your spirit is free and expansive, and you are drawn to wisdom traditions, travel, and cultural exploration. You inspire others with your enthusiasm and vision.',
    9: 'With Moon in Makara (Capricorn), you have a disciplined and ambitious emotional nature. You process feelings with maturity and pragmatism. You value structure, achievement, and long-term security. Though reserved emotionally, your commitment and perseverance run deep, and you build lasting foundations.',
    10: 'With Moon in Kumbha (Aquarius), you have an innovative and humanitarian emotional nature. You process feelings through an intellectual and progressive lens. You value individuality, social causes, and forward-thinking ideas. Your emotional connections are often expressed through group involvement and visionary pursuits.',
    11: 'With Moon in Meena (Pisces), you have a deeply spiritual and compassionate emotional nature. You are naturally empathetic, intuitive, and connected to the unseen realms. Your imagination is boundless, and you have a gift for creativity and healing. You seek transcendence and divine connection.',
  };
  return descriptions[index] || '';
}
