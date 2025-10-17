import type { Metadata } from 'next';
import Link from 'next/link';
import { classes } from '@/data/classes';
import { legionImages, classMountImages } from '@/data/images';
import { buildCanonicalUrl } from '@/lib/seo';
import { classLoreList } from '@/data/classLore';

export const metadata: Metadata = {
  title: 'Legion Remix Class Comparison & Builds 2025',
  description: 'Compare every Legion Remix class with spec roles, mounts, leveling priorities, Heroic World Tier picks, and quick links so your Timerunner roster stays sharp.',
  alternates: {
    canonical: buildCanonicalUrl('/classes'),
  },
};

export default function ClassesPage() {
  const featuredLinks = [
    { label: 'Havoc & Vengeance Demon Hunter builds', href: '/classes/demon-hunter' },
    { label: 'Brewmaster Monk mitigation planner', href: '/classes/monk/brewmaster' },
    { label: 'Protection Paladin raid toolkit', href: '/classes/paladin/protection' },
    { label: 'Restoration Druid raid healing tips', href: '/classes/druid/restoration' },
    { label: 'Subtlety Rogue opener notes', href: '/classes/rogue/subtlety' },
    { label: 'Class mount gallery', href: '/rewards#meta-rewards' }
  ];

  const referenceHighlights = [
    {
      title: 'The Best Classes for Legion Remix: Tier List & Rankings',
      summary: 'Outlines which specs excel at solo play, dungeon farming, and raid roles—mirrored in the spotlight sections below.'
    },
    {
      title: 'Timerunner Character Guide',
      summary: 'Explains class campaign unlocks, artifact acquisition, and hero talent access referenced in each spec page.'
    },
    {
      title: 'Infinite Artifact Weapon Traits & Leveling',
      summary: 'Shows how each class routes Artifactum Sand and Knowledge into their artifact tree, a key topic across the class guides.'
    },
    {
      title: 'Infinite Knowledge Guide',
      summary: 'Details the account-wide rank system that gives alts a head start—useful when planning multi-class rosters.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Legion Remix Classes</h1>
          <p className="text-gray-400 text-lg mb-6">
            Choose Timerunners that match your goals—soloing Heroic world tiers, anchoring Mythic+ groups, or rushing Bronze. Start with the recommendations below, then dive into spec guides for deeper tuning.
          </p>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-5 mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-300">
              {featuredLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 hover:border-green-500 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

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

        {/* Priority Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-green-400 mb-3">Solo Standouts</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <strong className="text-green-300">Havoc Demon Hunter Legion Remix Guide highlight:</strong> Double-jump mobility plus huge self-heal spikes make Heroic tier viable at level 10.
              </li>
              <li>
                <strong className="text-green-300">Beast Mastery Hunter Legion Remix build:</strong> Tank pets absorb empowered mobs while you kite and loot.
              </li>
              <li>
                <strong className="text-green-300">Blood Death Knight Legion Remix route:</strong> Near-unkillable sustain for Argus story bosses and Bronze rares.
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-amber-300 mb-3">Group Backbone</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <strong className="text-amber-200">Vengeance Demon Hunter Legion Remix tank guide:</strong> Sigils and Infernal Strike speed up keystone pulls dramatically.
              </li>
              <li>
                <strong className="text-amber-200">Restoration Shaman Legion Remix healer build:</strong> Swap between Totemic and Farseer hero talents for any damage profile.
              </li>
              <li>
                <strong className="text-amber-200">Retribution Paladin Legion Remix guide:</strong> Burst windows, Blessings, and immunity tools keep groups moving.
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">Heroic World Tier Ready</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <strong className="text-blue-200">Windwalker Monk Legion Remix build:</strong> Spinning Crane Kick cleave deletes empowered packs before they scale.
              </li>
              <li>
                <strong className="text-blue-200">Balance Druid Legion Remix guide:</strong> Starfall and DoTs control large pulls while self-heals keep you upright.
              </li>
              <li>
                <strong className="text-blue-200">Protection Paladin Legion Remix build:</strong> Instant queues plus wings-level cooldowns make Bronze hour farms consistent.
              </li>
            </ul>
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

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Order Hall Postcards</h2>
          <p className="text-sm text-gray-300 mb-6">
            Preview each class order hall at a glance—tap a card to dive into lore-rich walkthroughs and full image galleries.
          </p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {classLoreList.map((lore) => {
              const classMeta = classes.find((cls) => cls.id === lore.id);
              const orderHallSection = lore.sections.find((section) =>
                section.title.toLowerCase().includes('order hall')
              );
              if (!classMeta || !orderHallSection?.image) {
                return null;
              }
              const previewBullets = orderHallSection.bullets?.slice(0, 2) ?? [];

              return (
                <Link
                  key={`order-hall-${lore.id}`}
                  href={`/classes/${lore.id}`}
                  className="group bg-gray-900/40 border border-gray-700 hover:border-green-500 rounded-xl overflow-hidden transition-colors"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={orderHallSection.image.src}
                      alt={orderHallSection.image.alt ?? `${classMeta.name} order hall`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 bg-gray-900/80 border border-gray-700 text-xs text-gray-200 rounded-full mb-2">
                        {lore.tagline}
                      </span>
                      <div className="flex items-center">
                        <span className="text-lg font-semibold text-white">{classMeta.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-300 line-clamp-3">{orderHallSection.description}</p>
                    {previewBullets.length > 0 && (
                      <ul className="mt-4 space-y-1 text-xs text-gray-400">
                        {previewBullets.map((item, idx) => (
                          <li key={`${lore.id}-orderhall-bullet-${idx}`} className="flex items-start">
                            <span className="text-green-400 mr-2 mt-0.5">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
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

        <div className="mt-12 bg-gray-900/40 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Reference Highlights</h2>
          <p className="text-sm text-gray-300 mb-4">
            These are the source articles that inform class rankings, artifact paths, and leveling suggestions across every spec page.
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            {referenceHighlights.map((item) => (
              <li key={item.title} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p>{item.summary}</p>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-4">
            Review the tier list and Timerunner guide before swapping mains—they track the latest hotfix adjustments and unlock requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
