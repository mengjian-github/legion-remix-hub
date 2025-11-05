import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Images to optimize (from user report)
const targets = [
  'public/images/game/hero-banner.png',
  'public/images/game/druid-order-hall.png',
  'public/images/game/timewarped-obelisk.png',
  'public/images/game/artifact-weapon.png',
  'public/images/game/scythe-of-unmaker.png',
  'public/images/game/sargerei-commander.jpg',
  'public/images/game/artifact-trait-tree.png',
  'public/images/game/phase-timeline.png',
  'public/images/game/class-mount-monk.jpg',
  'public/images/game/class-mount-death-knight.jpg',
  'public/images/game/wyrmtongue.png',
];

async function main() {
  for (const rel of targets) {
    const file = path.resolve(rel);
    if (!fs.existsSync(file)) {
      console.warn('Missing file:', rel);
      continue;
    }

    const outWebp = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outAvif = file.replace(/\.(png|jpg|jpeg)$/i, '.avif');

    const image = sharp(file);
    const metadata = await image.metadata();

    // Resize very wide images down to max 1920px width to cap bytes served
    const resize = (metadata.width ?? 0) > 1920;

    const pipeline = image.clone();
    if (resize) pipeline.resize({ width: 1920 });

    // WebP (quality ~ 75 is a good trade-off for photos/PNGs with no harsh artifacts)
    await pipeline
      .clone()
      .webp({ quality: 75, effort: 5 })
      .toFile(outWebp);

    // AVIF sometimes smaller than WebP (try slightly higher quality to avoid banding)
    await pipeline
      .clone()
      .avif({ quality: 55, effort: 4 })
      .toFile(outAvif);

    const inKb = Math.round((fs.statSync(file).size / 1024));
    const webpKb = Math.round((fs.statSync(outWebp).size / 1024));
    const avifKb = Math.round((fs.statSync(outAvif).size / 1024));

    console.log(`${rel} -> WebP ${webpKb} KB, AVIF ${avifKb} KB (src ${inKb} KB)${resize ? ' [resized to max 1920w]' : ''}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
