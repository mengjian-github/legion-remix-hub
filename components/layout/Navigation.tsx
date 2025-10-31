'use client';

import Link from 'next/link';
import { useState } from 'react';

const rewardsSubmenu = [
  { name: 'Overview', href: '/rewards' },
  { name: 'Mounts & Class Rides', href: '/rewards/mounts' },
  { name: 'Battle Pets', href: '/rewards/pets' },
  { name: 'Toys & Illusions', href: '/rewards/toys' },
  { name: 'Transmog & Weapons', href: '/rewards/transmog' },
  { name: 'Housing Decor', href: '/rewards/housing' },
  { name: 'Reputation Vendors', href: '/rewards/reputation' },
];

const reputationSubmenu = [
  { name: 'Overview', href: '/reputation' },
  { name: 'Court of Farondis', href: '/reputation/court-of-farondis' },
  { name: 'Dreamweavers', href: '/reputation/dreamweavers' },
  { name: 'Highmountain Tribe', href: '/reputation/highmountain-tribe' },
  { name: 'The Nightfallen', href: '/reputation/the-nightfallen' },
  { name: 'The Wardens', href: '/reputation/the-wardens' },
  { name: 'Valarjar', href: '/reputation/valarjar' },
  { name: 'Armies of Legionfall', href: '/reputation/armies-of-legionfall' },
  { name: 'Kirin Tor Emissary', href: '/reputation/kirin-tor' },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Road Map', href: '/roadmap', title: 'Legion Remix Road Map' },
  { name: 'News', href: '/news' },
  {
    name: 'Guides',
    href: '/guides',
    submenu: [
      { name: 'Getting Started', href: '/guides/getting-started' },
      { name: 'Leveling Guide', href: '/guides/leveling' },
      { name: 'Bronze Farming', href: '/guides/bronze-farming' },
      { name: 'Ancient Mana', href: '/guides/ancient-mana' },
      { name: 'Fragmented Mementos', href: '/guides/fragmented-mementos' },
      { name: 'Lock, Stock & Goblins', href: '/guides/lock-stock-two-smoking-goblins' },
      { name: 'Suramar Campaign', href: '/guides/suramar-campaign' },
      { name: 'Infinite Bazaar Vendors', href: '/guides/bronze-vendors' },
      { name: 'Class Mounts', href: '/guides/class-mounts' },
      { name: 'Dungeon Roadmap', href: '/guides/dungeons' },
      { name: 'Raid Prep', href: '/guides/raids' },
      { name: 'Infinite Knowledge', href: '/guides/infinite-knowledge' },
      { name: 'Reputation Guide', href: '/guides/reputation' },
      { name: 'Hunter Pet Finder', href: '/guides/hunter-pets' },
    ]
  },
  {
    name: 'Reputation',
    href: '/reputation',
    submenu: reputationSubmenu,
  },
  {
    name: 'Classes',
    href: '/classes',
    submenu: [
      { name: 'Warrior', href: '/classes/warrior' },
      { name: 'Paladin', href: '/classes/paladin' },
      { name: 'Hunter', href: '/classes/hunter' },
      { name: 'Rogue', href: '/classes/rogue' },
      { name: 'Priest', href: '/classes/priest' },
      { name: 'Death Knight', href: '/classes/death-knight' },
      { name: 'Shaman', href: '/classes/shaman' },
      { name: 'Mage', href: '/classes/mage' },
      { name: 'Warlock', href: '/classes/warlock' },
      { name: 'Monk', href: '/classes/monk' },
      { name: 'Druid', href: '/classes/druid' },
      { name: 'Demon Hunter', href: '/classes/demon-hunter' },
    ]
  },
  {
    name: 'Rewards',
    href: '/rewards',
    submenu: rewardsSubmenu,
  },
  { name: 'Bronze Calculator', href: '/calculator', title: 'Legion Remix Bronze Calculator' },
  { name: 'FAQ', href: '/faq' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-400">Legion Remix Hub</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-1 md:items-center">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                    title={item.title ?? item.name}
                    onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.name}
                    {item.submenu && (
                      <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && openDropdown === item.name && (
                    <div
                      className="absolute left-0 top-full mt-1 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                  title={item.title ?? item.name}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-gray-800"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
