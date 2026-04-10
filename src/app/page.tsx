'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { ZODIAC_SIGNS } from '@/data/constants';
import { getMoonPhaseInfo, getRetrogradePlanets, getMoonSign } from '@/lib/astro/engine';
import type { MoonPhaseInfo, PlanetPosition } from '@/lib/astro/types';

export default function Home() {
  const [now, setNow] = useState<Date | null>(null);
  const [moonPhase, setMoonPhase] = useState<MoonPhaseInfo | null>(null);
  const [retrogrades, setRetrogrades] = useState<PlanetPosition[]>([]);
  const [currentMoonSign, setCurrentMoonSign] = useState<number>(0);

  useEffect(() => {
    const date = new Date();
    setNow(date);
    setMoonPhase(getMoonPhaseInfo(date));
    setRetrogrades(getRetrogradePlanets(date));
    setCurrentMoonSign(getMoonSign(date));
  }, []);

  const formattedDate = useMemo(() => {
    if (!now) return '';
    return now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, [now]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Discover your Unique Chart with the{' '}
            <span className="text-gold-400">Vedic Astrology</span> Calculator
          </h1>
          <p className="text-lg sm:text-xl text-navy-200 max-w-3xl mx-auto mb-6">
            Use our Vedic Astrology Calculator to take the first step in uncovering your
            life path. Get daily insights based on real planetary transits and your Moon
            sign.
          </p>
          {now && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-navy-200">
              <span className="text-sm">{formattedDate}</span>
              {moonPhase && (
                <span className="flex items-center gap-1 text-sm">
                  <span className="text-xl">{moonPhase.emoji}</span>
                  {moonPhase.phase} &middot; {moonPhase.illumination.toFixed(0)}% illuminated
                </span>
              )}
              {now && (
                <span className="text-sm">
                  Moon in {ZODIAC_SIGNS[currentMoonSign].name} ({ZODIAC_SIGNS[currentMoonSign].vedicName})
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Zodiac Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-center mb-2">Select Your Moon Sign</h2>
        <p className="text-center text-slate-500 mb-8">
          Choose your Vedic Moon sign to view today&apos;s personalized insights
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {ZODIAC_SIGNS.map((sign) => (
            <Link
              key={sign.index}
              href={`/daily-insights/${sign.name.toLowerCase()}`}
              className="sign-card bg-white rounded-xl border border-navy-100 p-5 text-center hover:border-navy-400"
            >
              <div className="text-4xl mb-2">{sign.symbol}</div>
              <h3 className="font-semibold text-slate-800">{sign.name}</h3>
              <p className="text-xs text-slate-500">{sign.vedicName}</p>
              <div className="mt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
                <span>Ruler: {sign.ruler}</span>
                <span>&middot;</span>
                <span>{sign.element}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Today's Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Moon Phase Card */}
          {moonPhase && (
            <div className="bg-white rounded-xl border border-navy-100 p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">{moonPhase.emoji}</span>
                Current Moon Phase
              </h3>
              <p className="text-2xl font-bold text-navy-600 mb-1">{moonPhase.phase}</p>
              <p className="text-slate-500 text-sm">
                Phase angle: {moonPhase.angle.toFixed(1)}&deg; &middot;{' '}
                {moonPhase.illumination.toFixed(1)}% illuminated
              </p>
              <Link
                href="/calendar"
                className="inline-block mt-4 text-sm text-navy-600 hover:text-navy-800 font-medium"
              >
                View Moon Calendar &rarr;
              </Link>
            </div>
          )}

          {/* Retrograde Status */}
          <div className="bg-white rounded-xl border border-navy-100 p-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">&#8634;</span>
              Retrograde Planets
            </h3>
            {retrogrades.length > 0 ? (
              <div className="space-y-2">
                {retrogrades.map((p) => (
                  <div key={p.id} className="flex items-center gap-2">
                    <span className="text-lg">{p.symbol}</span>
                    <span className="font-medium">{p.name}</span>
                    <span className="text-sm text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                      Retrograde
                    </span>
                    <span className="text-sm text-slate-400">
                      in {p.sign.name}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500">No major planets are currently retrograde.</p>
            )}
            <Link
              href="/transits"
              className="inline-block mt-4 text-sm text-navy-600 hover:text-navy-800 font-medium"
            >
              View All Transits &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
