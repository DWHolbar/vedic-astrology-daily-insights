import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="text-gold-400">☽</span> Vedic Astrology Daily Insights
            </h3>
            <p className="text-sm leading-relaxed">
              Daily astrological guidance based on real planetary transits and the ancient
              wisdom of Vedic astrology. All calculations use the sidereal zodiac with
              Lahiri ayanamsa.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/calendar" className="hover:text-white transition-colors">Moon Calendar</Link></li>
              <li><Link href="/transits" className="hover:text-white transition-colors">Current Transits</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Moon Signs</h4>
            <div className="grid grid-cols-2 gap-1 text-sm">
              {['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'].map((sign) => (
                <Link
                  key={sign}
                  href={`/daily-insights/${sign}`}
                  className="hover:text-white transition-colors capitalize"
                >
                  {sign}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-6 text-center text-xs text-navy-400">
          <p>
            Insights are based on Vedic astrological transit analysis and are for guidance purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
