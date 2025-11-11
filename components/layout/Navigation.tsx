import Link from 'next/link';
import MobileNav from './MobileNav';
import { navigationItems } from './navigationData';

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
  return (
    <div className="hidden md:ml-8 md:flex md:space-x-1 md:items-center">
      {navigationItems.map(item => (
        <div key={item.name} className="group relative">
          <Link
            href={item.href}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
            title={item.title ?? item.name}
          >
            {item.name}
            {item.submenu && (
              <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </Link>

          {item.submenu && (
            <div className="pointer-events-none absolute left-0 top-full mt-1 w-56 rounded-md border border-gray-800 bg-gray-900 shadow-lg opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-hover:pointer-events-auto z-50">
              <div className="py-1">
                {item.submenu.map(subItem => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
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
  );
}
