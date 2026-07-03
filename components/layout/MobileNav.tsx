'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { NavigationItem } from './navigationData';
import { trackEvent } from '@/lib/analytics';

type MobileNavProps = {
  navigation: NavigationItem[];
};

export default function MobileNav({ navigation }: MobileNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center md:hidden">
        <button
          onClick={() => {
            const nextOpen = !menuOpen;
            setMenuOpen(nextOpen);
            trackEvent('mobile_nav_toggle', { expanded: nextOpen ? 'true' : 'false' });
          }}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-menu"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
        >
          <span className="sr-only">Toggle main menu</span>
          {menuOpen ? (
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

      {menuOpen && (
        <div id="mobile-navigation-menu" className="absolute left-0 right-0 top-16 z-50 border-t border-gray-800 bg-gray-900 shadow-2xl md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map(item => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block min-h-11 rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                  title={item.title ?? item.name}
                  onClick={() => {
                    trackEvent('navigation_click', { page: 'mobile_nav', destination: item.href, label: item.name });
                    setMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map(subItem => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block min-h-11 rounded-md px-3 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
                        onClick={() => {
                          trackEvent('navigation_click', { page: 'mobile_nav', destination: subItem.href, label: subItem.name });
                          setMenuOpen(false);
                        }}
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
    </>
  );
}
