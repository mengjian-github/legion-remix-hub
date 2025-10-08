import { notFound } from 'next/navigation';
import Link from 'next/link';
import { classes } from '@/data/classes';
import { legionImages, classMountImages } from '@/data/images';

export async function generateStaticParams() {
  return classes.map((cls) => ({
    classId: cls.id,
  }));
}

export default async function ClassPage({ params }: { params: Promise<{ classId: string }> }) {
  const { classId } = await params;
  const classData = classes.find((c) => c.id === classId);

  if (!classData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/classes"
            className="text-green-400 hover:text-green-300 mb-4 inline-block"
          >
            ← Back to Classes
          </Link>
          <div className="rounded-lg mb-6 overflow-hidden border-2" style={{ borderColor: classData.iconColor }}>
            <div className="relative h-56">
              <img
                src={classMountImages[classData.id] ?? legionImages.felClassMounts}
                alt={`${classData.name} Felscorched Mount`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-5 left-6 right-6">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-3"
                  style={{
                    backgroundColor: `${classData.iconColor}33`,
                    border: `1px solid ${classData.iconColor}66`,
                    color: classData.iconColor
                  }}
                >
                  {classData.name}
                </span>
                <h1 className="text-4xl font-bold text-white mb-2">{classData.name}</h1>
                <p className="text-lg text-gray-200 max-w-3xl">{classData.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Specs */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Specializations</h2>
              <div className="space-y-4">
                {classData.specs.map((spec) => (
                  <div
                    key={spec.name}
                    className="bg-gray-750 border border-gray-600 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{spec.name}</h3>
                      <span className={`px-3 py-1 rounded text-sm font-medium ${
                        spec.role === 'Tank' ? 'bg-blue-600 text-white' :
                        spec.role === 'Healer' ? 'bg-green-600 text-white' :
                        'bg-red-600 text-white'
                      }`}>
                        {spec.role}
                      </span>
                    </div>
                    <p className="text-gray-400">{spec.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Class Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Primary Stat</div>
                  <div className="text-lg font-semibold text-white">{classData.primaryStat}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Armor Type</div>
                  <div className="text-lg font-semibold text-white">{classData.armorType}</div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Legion Remix Tips</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span className="text-gray-300">
                    Level to 80 to unlock your exclusive Felscorched mount
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span className="text-gray-300">
                    Tanks and Healers have instant dungeon queues for efficient Bronze farming
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span className="text-gray-300">
                    Use Heroic World Tier for 500% bonus XP when soloing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span className="text-gray-300">
                    Complete Infinite Research daily quests for Warband XP bonuses
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Fel Mount */}
              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Felscorched Mount</h3>
                <div className="relative w-full h-36 rounded-lg overflow-hidden mb-4 border border-green-700/30">
                  <img
                    src={classMountImages[classData.id] ?? legionImages.felClassMounts}
                    alt={`${classData.name} Felscorched Mount preview`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                </div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">
                  {classData.felMount.name}
                </h4>
                <div className="space-y-2 mb-4 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>First Unlock</span>
                    <span className="text-yellow-500 font-bold">
                      {classData.felMount.cost === 0 ? 'FREE at level 80' : `${classData.felMount.cost.toLocaleString()} Bronze`}
                    </span>
                  </div>
                  {classData.felMount.altCost && (
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Alternate Characters</span>
                      <span>{classData.felMount.altCost.toLocaleString()} Bronze via Grandmaster Jakkus</span>
                    </div>
                  )}
                </div>
              </div>


              {/* Quick Links */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Related Guides</h3>
                <div className="space-y-2">
                  <Link
                    href="/guides/leveling"
                    className="block text-green-400 hover:text-green-300 text-sm"
                  >
                    → Leveling Guide
                  </Link>
                  <Link
                    href="/guides/bronze-farming"
                    className="block text-green-400 hover:text-green-300 text-sm"
                  >
                    → Bronze Farming
                  </Link>
                  <Link
                    href="/calculator"
                    className="block text-green-400 hover:text-green-300 text-sm"
                  >
                    → Bronze Calculator
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
