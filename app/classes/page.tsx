import Link from 'next/link';
import { classes } from '@/data/classes';
import { legionImages, classMountImages } from '@/data/images';

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Legion Remix Classes</h1>
          <p className="text-gray-400 text-lg mb-6">
            Choose your class and earn exclusive Felscorched mounts. Each class has unique strengths for different content.
          </p>

          {/* Fel Mounts Showcase Banner */}
          <div className="relative rounded-lg overflow-hidden border border-green-700/30 mb-8">
            <img
              src={legionImages.felClassMounts}
              alt="Felscorched Class Mounts"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">EXCLUSIVE REWARD</span>
                <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">FREE @ LEVEL 80</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Felscorched Class Mounts</h2>
              <p className="text-gray-300 text-lg max-w-3xl">
                Each of the 12 classes earns a unique Fel-infused version of their Legion class mount at level 80.
                Automatically awarded for free, or purchase for 20,000 Bronze for alt characters.
              </p>
            </div>
          </div>
        </div>

        {/* Role Filter Info */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🛡️</span>
              <h3 className="text-lg font-semibold text-blue-400">Tanks</h3>
            </div>
            <p className="text-sm text-gray-300">
              Instant dungeon queues. Best for efficient leveling and Bronze farming through dungeon spam.
            </p>
          </div>

          <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">💚</span>
              <h3 className="text-lg font-semibold text-green-400">Healers</h3>
            </div>
            <p className="text-sm text-gray-300">
              Near-instant queues. Great balance of group content efficiency and solo viability.
            </p>
          </div>

          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">⚔️</span>
              <h3 className="text-lg font-semibold text-red-400">DPS</h3>
            </div>
            <p className="text-sm text-gray-300">
              Best for solo questing with Heroic World Tier. Strong AoE specs excel at farming.
            </p>
          </div>
        </div>

        {/* Classes Grid */}
        <h2 className="text-2xl font-bold text-white mb-6">All 12 Classes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <Link
              key={cls.id}
              href={`/classes/${cls.id}`}
              className="bg-gray-800 border border-gray-700 hover:border-green-500 rounded-lg overflow-hidden transition-all group hover:shadow-lg hover:shadow-green-500/20"
            >
              {/* Class Mount Preview */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={classMountImages[cls.id] ?? legionImages.felClassMounts}
                  alt={`${cls.name} Felscorched Mount`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold shadow"
                    style={{
                      backgroundColor: `${cls.iconColor}33`,
                      border: `1px solid ${cls.iconColor}66`,
                      color: cls.iconColor
                    }}
                  >
                    {cls.name}
                  </span>
                </div>
              </div>

              {/* Class Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors" style={{ color: cls.iconColor }}>
                  {cls.name}
                </h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{cls.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-900/50 rounded px-3 py-2">
                    <div className="text-xs text-gray-500 mb-1">Primary Stat</div>
                    <div className="text-sm font-semibold text-white">{cls.primaryStat}</div>
                  </div>
                  <div className="bg-gray-900/50 rounded px-3 py-2">
                    <div className="text-xs text-gray-500 mb-1">Armor Type</div>
                    <div className="text-sm font-semibold text-white">{cls.armorType}</div>
                  </div>
                </div>

                {/* Specs */}
                <div className="border-t border-gray-700 pt-4 mb-4">
                  <div className="text-xs text-gray-500 mb-2">Specializations:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cls.specs.map((spec) => (
                      <span
                        key={spec.name}
                        className={`text-xs px-2 py-1 rounded ${
                          spec.role === 'Tank' ? 'bg-blue-900/40 text-blue-300 border border-blue-700/30' :
                          spec.role === 'Healer' ? 'bg-green-900/40 text-green-300 border border-green-700/30' :
                          'bg-red-900/40 text-red-300 border border-red-700/30'
                        }`}
                      >
                        {spec.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fel Mount Info */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-700/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-xs text-gray-400 mb-1">🐎 Fel Mount</div>
                      <div className="text-sm font-semibold text-green-400 truncate">
                        {cls.felMount.name}
                      </div>
                    </div>
                    <div className="text-right ml-3">
                      <div className="text-lg font-bold text-yellow-500">
                        {cls.felMount.cost === 0 ? 'FREE' : `${cls.felMount.cost.toLocaleString()} Bronze`}
                      </div>
                      <div className="text-xs text-gray-400">
                        {cls.felMount.cost === 0
                          ? cls.felMount.altCost
                            ? `First level 80 unlock · Alts ${cls.felMount.altCost.toLocaleString()} Bronze`
                            : 'First level 80 unlock'
                          : 'Bronze'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">💡 Choosing Your First Class</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▸</span>
                <span><strong>Tanks & Healers:</strong> Fastest leveling via instant dungeon queues</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▸</span>
                <span><strong>Mobile Classes:</strong> Demon Hunters, Druids, Monks excel at fast travel</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▸</span>
                <span><strong>AoE Specialists:</strong> Great for clearing large mob packs in Heroic World Tier</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▸</span>
                <span><strong>Personal Preference:</strong> Play what you enjoy - all classes are viable!</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border border-yellow-700/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">🎯 Multiple Characters Strategy</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">★</span>
                <span>Create multiple Timerunners to collect all 12 Felscorched mounts</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">★</span>
                <span>Warband XP bonuses make leveling alts 30-50% faster</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">★</span>
                <span>All Bronze and cosmetics are shared across your account</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">★</span>
                <span>Level one main to 80, then quickly level alts for variety</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
