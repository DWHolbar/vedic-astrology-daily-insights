'use client';

import { useEffect, useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ZODIAC_SIGNS, SIGN_SLUGS, THEME_INFO } from '@/data/constants';
import { generateDailyInsights } from '@/lib/insights/generator';
import { getAllPlanetPositions, getMoonPhaseInfo } from '@/lib/astro/engine';
import type { DailyInsight, PlanetPosition, MoonPhaseInfo } from '@/lib/astro/types';

export default function DailyInsightsPage() {
  const params = useParams();
  const signSlug = (params.sign as string)?.toLowerCase();
  const signIndex = SIGN_SLUGS[signSlug] ?? 0;
  const sign = ZODIAC_SIGNS[signIndex];

  const [dateStr, setDateStr] = useState('');
  const [insights, setInsights] = useState<DailyInsight[]>([]);
  const [planets, setPlanets] = useState<PlanetPosition[]>([]);
  const [moonPhase, setMoonPhase] = useState<MoonPhaseInfo | null>(null);

  const selectedDate = useMemo(() => {
    if (!dateStr) return new Date();
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d, 12, 0, 0);
  }, [dateStr]);

  const computeInsights = useCallback(() => {
    setInsights(generateDailyInsights(signIndex, selectedDate));
    setPlanets(getAllPlanetPositions(selectedDate));
    setMoonPhase(getMoonPhaseInfo(selectedDate));
  }, [signIndex, selectedDate]);

  useEffect(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    setDateStr(`${yyyy}-${mm}-${dd}`);
  }, []);

  useEffect(() => {
    if (dateStr) computeInsights();
  }, [dateStr, computeInsights]);

  const formattedDate = useMemo(() => {
    return selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, [selectedDate]);

  // Find previous and next sign slugs
  const prevSign = ZODIAC_SIGNS[(signIndex + 11) % 12].name.toLowerCase();
  const nextSign = ZODIAC_SIGNS[(signIndex + 1) % 12].name.toLowerCase();

  return (
    <div>
      {/* Sign Header */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <Link
              href={`/daily-insights/${prevSign}`}
              className="text-navy-300 hover:text-white text-sm"
            >
              &larr; {ZODIAC_SIGNS[(signIndex + 11) % 12].name}
            </Link>
            <Link
              href={`/daily-insights/${nextSign}`}
              className="text-navy-300 hover:text-white text-sm"
            >
              {ZODIAC_SIGNS[(signIndex + 1) % 12].name} &rarr;
            </Link>
          </div>

          <div className="text-center">
            <div className="text-6xl mb-3">{sign.symbol}</div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-1">
              {sign.name}{' '}
              <span className="text-navy-300 font-normal">({sign.vedicName})</span>
            </h1>
            <p className="text-navy-300 text-sm">
              Ruler: {sign.ruler} &middot; Element: {sign.element} &middot; Quality: {sign.quality}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <label htmlFor="date-picker" className="text-sm text-navy-300">
              Select Date:
            </label>
            <input
              id="date-picker"
              type="date"
              value={dateStr}
              onChange={(e) => setDateStr(e.target.value)}
              className="bg-navy-800 border border-navy-600 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-navy-400"
            />
          </div>
          <p className="text-center text-navy-400 text-sm mt-2">{formattedDate}</p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl font-bold mb-6">Daily Insights for {sign.name}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {insights.map((insight) => (
            <div
              key={insight.theme}
              className="insight-card bg-white rounded-xl border border-navy-100 p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{insight.icon}</span>
                <h3 className="font-semibold text-navy-900">{insight.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{insight.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Planetary Context Sidebar */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current Planet Positions */}
          <div className="bg-white rounded-xl border border-navy-100 p-5">
            <h3 className="font-semibold text-lg mb-4">
              Planetary Positions on {formattedDate}
            </h3>
            <div className="space-y-2">
              {planets.map((p) => (
                <div key={p.id} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-lg w-6 text-center">{p.symbol}</span>
                    <span className="font-medium">{p.name}</span>
                    {p.isRetrograde && p.id !== 'rahu' && p.id !== 'ketu' && (
                      <span className="text-xs text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full">
                        R
                      </span>
                    )}
                  </div>
                  <div className="text-slate-500">
                    {p.sign.name} {p.degreeInSign.toFixed(1)}&deg;
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Moon Phase */}
          {moonPhase && (
            <div className="bg-white rounded-xl border border-navy-100 p-5">
              <h3 className="font-semibold text-lg mb-4">Moon Phase</h3>
              <div className="text-center">
                <div className="text-6xl mb-3 moon-phase-icon">{moonPhase.emoji}</div>
                <p className="text-xl font-bold text-navy-600">{moonPhase.phase}</p>
                <p className="text-sm text-slate-500 mt-1">
                  {moonPhase.illumination.toFixed(1)}% illuminated
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Phase angle: {moonPhase.angle.toFixed(1)}&deg;
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sign Navigation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h3 className="font-semibold mb-3">All Moon Signs</h3>
        <div className="flex flex-wrap gap-2">
          {ZODIAC_SIGNS.map((s) => (
            <Link
              key={s.index}
              href={`/daily-insights/${s.name.toLowerCase()}`}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                s.index === signIndex
                  ? 'bg-navy-600 text-white'
                  : 'bg-white border border-navy-200 text-slate-600 hover:border-navy-400'
              }`}
            >
              {s.symbol} {s.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
