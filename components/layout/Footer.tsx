"use client";

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">Legion Remix Hub</h3>
            <p className="text-gray-400 text-sm">
              Your complete guide to World of Warcraft: Legion Remix. Find class guides,
              Bronze farming strategies, reward lists, and leveling tips.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Event runs from October 7, 2025 to January 19, 2026
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/getting-started" className="text-gray-400 hover:text-white text-sm">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/guides/leveling" className="text-gray-400 hover:text-white text-sm">
                  Leveling Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/bronze-farming" className="text-gray-400 hover:text-white text-sm">
                  Bronze Farming
                </Link>
              </li>
              <li>
                <Link href="/reputation" className="text-gray-400 hover:text-white text-sm">
                  Reputation Guide
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-gray-400 hover:text-white text-sm">
                  All Rewards
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-400 hover:text-white text-sm">
                  Legion Remix Bronze Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.wowhead.com/guide/legion-remix-rewards-mounts-transmog"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("outbound_click", { page: "global_footer", destination: "wowhead_guide" })}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Wowhead Guide
                </a>
              </li>
              <li>
                <a
                  href="https://www.icy-veins.com/wow/legion-remix-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("outbound_click", { page: "global_footer", destination: "icy_veins_guide" })}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Icy Veins
                </a>
              </li>
              <li>
                <a
                  href="https://worldofwarcraft.blizzard.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("outbound_click", { page: "global_footer", destination: "official_wow_site" })}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Official WoW Site
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Recommended Sites</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://getchargen.com/" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("outbound_click", { page: "global_footer", destination: "getchargen" })} className="text-gray-400 hover:text-white text-sm">AI Character Generator</a>
              </li>
              <li>
                <a href="https://stunt-simulator.com/" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("outbound_click", { page: "global_footer", destination: "stunt_simulator" })} className="text-gray-400 hover:text-white text-sm">Stunt Simulator 2</a>
              </li>
              <li>
                <a href="https://poe327.net/" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("outbound_click", { page: "global_footer", destination: "poe327" })} className="text-gray-400 hover:text-white text-sm">POE 3.27</a>
              </li>
              <li>
                <a href="https://cowboysafari.online/?utm_source=legionremixhub.com&utm_medium=internal_crosslink&utm_campaign=network_crosslink&utm_content=footer" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("outbound_click", { page: "global_footer", destination: "cowboy_safari" })} className="text-gray-400 hover:text-white text-sm">Cowboy Safari</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-950/60 p-5">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Legion Remix deep links</h4>
          <p className="mt-2 text-xs text-gray-500">
            Extra internal routes for long-tail searches, archive lookups, news explainers, and one-click troubleshooting.
          </p>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: 'Class Mounts', href: '/guides/class-mounts' },
              { label: 'Marksmanship Hunter', href: '/classes/hunter/marksmanship' },
              { label: 'Discipline Priest', href: '/classes/priest/discipline' },
              { label: 'Guardian Druid', href: '/classes/druid/guardian' },
              { label: 'Raids Guide', href: '/guides/raids' },
              { label: 'Bronze Calculator', href: '/calculator' },
              { label: 'Rewards Tracker', href: '/rewards' },
              { label: 'Road Map', href: '/roadmap' },
              { label: 'Release Schedule', href: '/guides/release-schedule' },
              { label: 'Legion Assaults', href: '/guides/legion-assaults' },
              { label: 'Sargerei Regalia', href: '/guides/sargerei-commanders-regalia' },
              { label: 'Suramar Time', href: '/how-long-is-the-suramar-questline' },
              { label: 'Class Mount Hotfix', href: '/news/class-mount-quests-hotfixed' },
              { label: 'Phase 5 Live', href: '/news/phase-5-infinite-echoes-live' },
              { label: 'Housing Decor', href: '/news/housing-decor-legion-remix' },
              { label: 'Fragmented Mementos', href: '/news/fragmented-mementos-new-sources' },
              { label: 'Moratari Skip Fix', href: '/news/moratari-quest-skip-fixes' },
              { label: 'Hidden Artifact Hotfix', href: '/news/hidden-artifact-appearances-hotfixed' },
              { label: 'Character Transfer', href: '/news/legion-remix-character-transfer' },
              { label: 'Phase 4 Live', href: '/news/phase-4-legion-remix-now-live' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-gray-800 bg-gray-900/70 px-3 py-2 text-gray-400 transition hover:border-green-600/60 hover:text-white"
                onClick={() => trackEvent('footer_deep_link_click', { page: 'global_footer', destination: link.href })}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm" onClick={() => trackEvent("footer_click", { page: "global_footer", destination: "privacy" })}>
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-gray-600">|</span>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm" onClick={() => trackEvent("footer_click", { page: "global_footer", destination: "terms" })}>
              Terms of Use
            </Link>
          </div>
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Legion Remix Hub. World of Warcraft and Blizzard Entertainment
            are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
            This community tool is fan-made and not affiliated with, endorsed by, or sponsored by Blizzard Entertainment.
          </p>
        </div>
      </div>
    </footer>
  );
}
