"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { navigationItems } from './navigationData';
import { trackEvent } from '@/lib/analytics';

export default function Navigation() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-400">Legion Remix Hub</span>
            </Link>
            <DesktopNav />
          </div>
          <MobileNav navigation={navigationItems} />
        </div>
      </div>
    </nav>
  );
}

function DesktopNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={navRef} className="hidden md:ml-8 md:flex md:space-x-1 md:items-center">
      {navigationItems.map(item => {
        const hasSubmenu = !!item.submenu;
        const isOpen = openMenu === item.name;

        return (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => hasSubmenu && setOpenMenu(item.name)}
            onMouseLeave={() => hasSubmenu && setOpenMenu(null)}
          >
            <Link
              href={item.href}
              onClick={(e) => {
                trackEvent("navigation_click", { page: "global_nav", destination: item.href, label: item.name });
                if (hasSubmenu) {
                  e.preventDefault();
                  setOpenMenu(isOpen ? null : item.name);
                }
              }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
              title={item.title ?? item.name}
              aria-expanded={hasSubmenu ? isOpen : undefined}
              aria-haspopup={hasSubmenu ? 'menu' : undefined}
            >
              {item.name}
              {hasSubmenu && (
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </Link>

            {hasSubmenu && (
              <div
                className={`absolute left-0 top-full mt-1 w-56 rounded-md border border-gray-800 bg-gray-900 shadow-lg transition-opacity duration-150 z-50 ${
                  isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="py-1">
                  {item.submenu!.map(subItem => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => {
                        trackEvent("navigation_click", { page: "global_nav", destination: subItem.href, label: subItem.name });
                        setOpenMenu(null);
                      }}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
