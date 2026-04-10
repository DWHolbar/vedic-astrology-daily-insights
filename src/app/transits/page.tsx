'use client';

import { useEffect, useState } from 'react';
import {
  getAllPlanetPositions,
  getRetrogradePlanets,
  getUpcomingEclipses,
  findSignChanges,
} from '@/lib/astro/engine';
import type { PlanetPosition, EclipseEvent } from '@/lib/astro/types';

export default function TransitsPage() {
  const [planets, setPlanets] = useState<PlanetPosition[]>([]);
  const [retrogrades, setRetrogrades] = useState<PlanetPosition[]>([]);
  const [eclipses, setEclipses] = useState<EclipseEvent[]>([]);
  const [signChanges, setSignChanges] = useState<
    { planet: string; date: Date; fromSign: string; toSign: string }[]
  >([]);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const date = new Date();
    setNow(date);
    setPlanets(getAllPlanetPositions(date));
    setRetrogrades(getRetrogradePlanets(date));
    setEclipses(getUpcomingEclipses(date, 6));
    setSignChanges(findSignChanges(date, 60));
  }, []);

  if (!now) return null;

  return (
    <div>
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Current Planetary Transits</h1>
          <p className="text-navy-300">
            Real-time sidereal positions using Lahiri ayanamsa &middot;{' '}
            {now.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Planet Positions Table */}
        <div className="bg-white rounded-xl border border-navy-100 overflow-hidden">
          <div className="px-6 py-4 bg-navy-50 border-b border-navy-100">
            <h2 className="font-semibold text-lg text-navy-900">
              Navagraha Positions (Sidereal)
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-50 text-left text-slate-500">
                  <th className="px-6 py-3">Planet</th>
                  <th className="px-6 py-3">Vedic Name</th>
                  <th className="px-6 py-3">Sign</th>
                  <th className="px-6 py-3">Degree</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {planets.map((p) => (
                  <tr key={p.id} className="border-b border-navy-50 last:border-b-0">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{p.symbol}</span>
                        <span className="font-medium">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-slate-500">{p.vedicName}</td>
                    <td className="px-6 py-3">
                      <span className="mr-1">{p.sign.symbol}</span>
                      {p.sign.name} ({p.sign.vedicName})
                    </td>
                    <td className="px-6 py-3 font-mono">
                      {Math.floor(p.degreeInSign)}&deg;{' '}
                      {Math.floor((p.degreeInSign % 1) * 60)}&apos;
                    </td>
                    <td className="px-6 py-3">
                      {p.isRetrograde && p.id !== 'rahu' && p.id !== 'ketu' ? (
                        <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full text-xs font-medium">
                          &#8634; Retrograde
                        </span>
                      ) : p.id === 'rahu' || p.id === 'ketu' ? (
                        <span className="text-slate-400 text-xs">Always retrograde</span>
                      ) : (
                        <span className="text-emerald-600 text-xs font-medium">Direct</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Retrograde Alert */}
        <div className="bg-white rounded-xl border border-navy-100 p-6">
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="text-amber-500">&#8634;</span> Active Retrogrades
          </h2>
          {retrogrades.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {retrogrades.map((p) => (
                <div
                  key={p.id}
                  className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 border border-amber-100"
                >
                  <span className="text-2xl">{p.symbol}</span>
                  <div>
                    <h3 className="font-semibold text-amber-900">
                      {p.name} Retrograde
                    </h3>
                    <p className="text-sm text-amber-700">
                      Currently retrograde in {p.sign.name} ({p.sign.vedicName}) at{' '}
                      {p.degreeInSign.toFixed(1)}&deg;
                    </p>
                    <p className="text-xs text-amber-600 mt-1">
                      {p.name === 'Mercury' &&
                        'Communications, technology, and travel may experience disruptions. Review contracts carefully.'}
                      {p.name === 'Venus' &&
                        'Relationships and finances undergo reevaluation. Past connections may resurface.'}
                      {p.name === 'Mars' &&
                        'Physical energy may fluctuate. Avoid impulsive actions and redirect drive inward.'}
                      {p.name === 'Jupiter' &&
                        'Growth and expansion turn inward. Philosophical reflection is favored.'}
                      {p.name === 'Saturn' &&
                        'Review long-term commitments and structures. Patience with delays is essential.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">
              No major planets are currently retrograde. This is a favorable period for
              initiating new projects and moving forward with plans.
            </p>
          )}
        </div>

        {/* Upcoming Eclipses */}
        <div className="bg-white rounded-xl border border-navy-100 p-6">
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span>&#9681;</span> Upcoming Eclipses
          </h2>
          <div className="space-y-4">
            {eclipses.map((ecl, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100"
              >
                <span className="text-2xl">
                  {ecl.type === 'solar' ? '\u{2600}\u{FE0F}' : '\u{1F315}'}
                </span>
                <div>
                  <h3 className="font-semibold capitalize">
                    {ecl.kind} {ecl.type} Eclipse
                  </h3>
                  <p className="text-sm text-slate-600">
                    {ecl.date.toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {ecl.type === 'solar'
                      ? 'Solar eclipses mark powerful new beginnings and can trigger significant life changes.'
                      : 'Lunar eclipses bring culmination and revelation, illuminating hidden truths.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Sign Changes */}
        {signChanges.length > 0 && (
          <div className="bg-white rounded-xl border border-navy-100 p-6">
            <h2 className="font-semibold text-lg mb-4">
              Upcoming Planetary Sign Changes (next 60 days)
            </h2>
            <div className="space-y-2">
              {signChanges.slice(0, 20).map((change, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm py-2 border-b border-slate-50 last:border-b-0"
                >
                  <span className="text-slate-400 min-w-[100px]">
                    {change.date.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="font-medium">{change.planet}</span>
                  <span className="text-slate-400">moves from</span>
                  <span className="text-navy-600">{change.fromSign}</span>
                  <span className="text-slate-400">to</span>
                  <span className="text-navy-600">{change.toSign}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
