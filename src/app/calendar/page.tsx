'use client';

import { useEffect, useState, useMemo } from 'react';
import { getMoonPhaseInfo, getMoonSign, getUpcomingEclipses } from '@/lib/astro/engine';
import { ZODIAC_SIGNS } from '@/data/constants';
import type { MoonPhaseInfo, EclipseEvent } from '@/lib/astro/types';

interface CalendarDay {
  date: Date;
  dayOfMonth: number;
  isCurrentMonth: boolean;
  moonPhase: MoonPhaseInfo;
  moonSignIndex: number;
}

function buildCalendar(year: number, month: number): CalendarDay[] {
  const firstDay = new Date(year, month, 1);
  const startDow = firstDay.getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: CalendarDay[] = [];

  // Previous month fill
  const prevMonthDays = new Date(year, month, 0).getDate();
  for (let i = startDow - 1; i >= 0; i--) {
    const d = new Date(year, month - 1, prevMonthDays - i, 12, 0, 0);
    days.push({
      date: d,
      dayOfMonth: prevMonthDays - i,
      isCurrentMonth: false,
      moonPhase: getMoonPhaseInfo(d),
      moonSignIndex: getMoonSign(d),
    });
  }

  // Current month
  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, month, day, 12, 0, 0);
    days.push({
      date: d,
      dayOfMonth: day,
      isCurrentMonth: true,
      moonPhase: getMoonPhaseInfo(d),
      moonSignIndex: getMoonSign(d),
    });
  }

  // Next month fill
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    const d = new Date(year, month + 1, i, 12, 0, 0);
    days.push({
      date: d,
      dayOfMonth: i,
      isCurrentMonth: false,
      moonPhase: getMoonPhaseInfo(d),
      moonSignIndex: getMoonSign(d),
    });
  }

  return days;
}

export default function CalendarPage() {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(0);
  const [eclipses, setEclipses] = useState<EclipseEvent[]>([]);
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);

  useEffect(() => {
    const now = new Date();
    setYear(now.getFullYear());
    setMonth(now.getMonth());
  }, []);

  useEffect(() => {
    const start = new Date(year, month, 1);
    setEclipses(getUpcomingEclipses(start, 4));
  }, [year, month]);

  const calendarDays = useMemo(() => buildCalendar(year, month), [year, month]);

  const monthName = new Date(year, month, 1).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
  };

  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
  };

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

  return (
    <div>
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Moon Phase Calendar</h1>
          <p className="text-navy-300">
            Track lunar phases, moon signs, and celestial events for any month
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            className="p-2 rounded-lg bg-white border border-navy-200 hover:border-navy-400 text-slate-600 transition-colors"
          >
            &larr; Previous
          </button>
          <h2 className="text-2xl font-bold text-navy-900">{monthName}</h2>
          <button
            onClick={nextMonth}
            className="p-2 rounded-lg bg-white border border-navy-200 hover:border-navy-400 text-slate-600 transition-colors"
          >
            Next &rarr;
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-xl border border-navy-100 overflow-hidden">
          {/* Day headers */}
          <div className="grid grid-cols-7 bg-navy-50 border-b border-navy-100">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="py-2 text-center text-sm font-semibold text-navy-700">
                {day}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7">
            {calendarDays.map((day, idx) => {
              const dayStr = `${day.date.getFullYear()}-${day.date.getMonth()}-${day.date.getDate()}`;
              const isToday = dayStr === todayStr;
              const isSelected = selectedDay?.date.getTime() === day.date.getTime();

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedDay(day)}
                  className={`p-2 sm:p-3 border-b border-r border-navy-50 text-center transition-colors min-h-[70px] sm:min-h-[90px] flex flex-col items-center ${
                    !day.isCurrentMonth ? 'opacity-40' : ''
                  } ${isToday ? 'bg-navy-50 ring-2 ring-inset ring-navy-400' : ''} ${
                    isSelected ? 'bg-navy-100' : 'hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-sm font-medium ${isToday ? 'text-navy-600' : 'text-slate-700'}`}>
                    {day.dayOfMonth}
                  </span>
                  <span className="text-xl mt-0.5">{day.moonPhase.emoji}</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 hidden sm:block">
                    {ZODIAC_SIGNS[day.moonSignIndex].symbol} {ZODIAC_SIGNS[day.moonSignIndex].name.slice(0, 3)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Day Detail */}
        {selectedDay && (
          <div className="mt-6 bg-white rounded-xl border border-navy-100 p-6">
            <h3 className="font-semibold text-lg mb-3">
              {selectedDay.date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-4xl mb-1">{selectedDay.moonPhase.emoji}</div>
                <p className="font-medium text-navy-700">{selectedDay.moonPhase.phase}</p>
                <p className="text-sm text-slate-500">
                  {selectedDay.moonPhase.illumination.toFixed(1)}% illuminated
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-1">{ZODIAC_SIGNS[selectedDay.moonSignIndex].symbol}</div>
                <p className="font-medium text-navy-700">
                  Moon in {ZODIAC_SIGNS[selectedDay.moonSignIndex].name}
                </p>
                <p className="text-sm text-slate-500">
                  {ZODIAC_SIGNS[selectedDay.moonSignIndex].vedicName}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-1">
                  {selectedDay.moonPhase.angle.toFixed(0)}&deg;
                </div>
                <p className="font-medium text-navy-700">Phase Angle</p>
                <p className="text-sm text-slate-500">
                  Element: {ZODIAC_SIGNS[selectedDay.moonSignIndex].element}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Moon Phase Legend */}
        <div className="mt-6 bg-white rounded-xl border border-navy-100 p-6">
          <h3 className="font-semibold mb-3">Moon Phase Guide</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {[
              { emoji: '\u{1F311}', name: 'New Moon' },
              { emoji: '\u{1F312}', name: 'Waxing Crescent' },
              { emoji: '\u{1F313}', name: 'First Quarter' },
              { emoji: '\u{1F314}', name: 'Waxing Gibbous' },
              { emoji: '\u{1F315}', name: 'Full Moon' },
              { emoji: '\u{1F316}', name: 'Waning Gibbous' },
              { emoji: '\u{1F317}', name: 'Last Quarter' },
              { emoji: '\u{1F318}', name: 'Waning Crescent' },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2">
                <span className="text-xl">{p.emoji}</span>
                <span className="text-slate-600">{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Eclipses */}
        {eclipses.length > 0 && (
          <div className="mt-6 bg-white rounded-xl border border-navy-100 p-6">
            <h3 className="font-semibold mb-3">Upcoming Eclipses</h3>
            <div className="space-y-3">
              {eclipses.map((ecl, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <span className="text-lg">
                    {ecl.type === 'solar' ? '\u{2600}' : '\u{1F315}'}
                  </span>
                  <div>
                    <span className="font-medium capitalize">
                      {ecl.kind} {ecl.type} eclipse
                    </span>
                    <span className="text-slate-400 ml-2">
                      {ecl.date.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
