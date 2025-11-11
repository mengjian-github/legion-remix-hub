export type NavigationLink = {
  name: string;
  href: string;
  title?: string;
};

export type NavigationItem = NavigationLink & {
  submenu?: NavigationLink[];
};

export const rewardsSubmenu: NavigationLink[] = [
  { name: 'Overview', href: '/rewards' },
  { name: 'Mounts & Class Rides', href: '/rewards/mounts' },
  { name: 'Battle Pets', href: '/rewards/pets' },
  { name: 'Toys & Illusions', href: '/rewards/toys' },
  { name: 'Transmog & Weapons', href: '/rewards/transmog' },
  { name: 'Housing Decor', href: '/rewards/housing' },
  { name: 'Reputation Vendors', href: '/rewards/reputation' },
];

export const reputationSubmenu: NavigationLink[] = [
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

export const navigationItems: NavigationItem[] = [
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
      { name: 'Reputation Guide', href: '/reputation' },
      { name: 'Hunter Pet Finder', href: '/guides/hunter-pets' },
    ],
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
    ],
  },
  {
    name: 'Rewards',
    href: '/rewards',
    submenu: rewardsSubmenu,
  },
  { name: 'Bronze Calculator', href: '/calculator', title: 'Legion Remix Bronze Calculator' },
  { name: 'FAQ', href: '/faq' },
];
