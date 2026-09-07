const fs = require('fs');
const path = require('path');

const previewDir = path.resolve(__dirname, '..', 'public', 'previews');
const expected = [
  'motionkit-showreel.mp4',
  'creator-explainer.mp4',
  'motionkit-promo.mp4',
  'animated-title.mp4',
  'lower-third.mp4',
  'animated-chart.mp4',
  'transitions.mp4',
  'saas-preset.mp4',
  'creator-preset.mp4',
  'product-preset.mp4',
  'vertical-demo.mp4',
];

const missing = expected.filter((file) => !fs.existsSync(path.join(previewDir, file)));

if (missing.length > 0) {
  console.error('Missing MotionKit preview files:');
  for (const file of missing) console.error(`- public/previews/${file}`);
  process.exit(1);
}

console.log(`Preview verification passed: ${expected.length} files found.`);
