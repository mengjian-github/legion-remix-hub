import Link from 'next/link';

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
                <a href="https://stunt-simulator.com/" className="text-gray-400 hover:text-white text-sm">Stunt Simulator 2</a>
              </li>
              <li>
                <a href="https://poe327.net/" className="text-gray-400 hover:text-white text-sm">POE 3.27</a>
              </li>
              <li>
                <a href="https://cowboysafari.online/" className="text-gray-400 hover:text-white text-sm">Cowboy Safari</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Legion Remix Hub. World of Warcraft and Blizzard Entertainment
            are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
            This site is fan-made and not affiliated with Blizzard Entertainment.
          </p>
        </div>
      </div>
    </footer>
  );
}
