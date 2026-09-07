#!/usr/bin/env node

/**
 * Render Smoke Check Script
 * 
 * This script performs a quick smoke check to ensure the MotionKit project
 * can render videos successfully. It renders a short test composition and
 * validates the output.
 * 
 * Usage: npm run smoke-check
 */

const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = 'public/previews';
const TEST_VIDEO = 'smoke-check-test.mp4';

console.log('🎬 MotionKit Render Smoke Check');
console.log('================================\n');

// Clean up previous test output
const testOutputPath = path.join(OUTPUT_DIR, TEST_VIDEO);
if (fs.existsSync(testOutputPath)) {
  console.log('🧹 Cleaning up previous test output...');
  fs.unlinkSync(testOutputPath);
}

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  console.log('📁 Creating output directory...');
  fs.mkdirSync(OUTPUT_DIR, {recursive: true});
}

try {
  console.log('🚀 Rendering test composition (TitleDemo, 2 seconds)...');
  
  // Render a short test (60 frames = 2 seconds at 30fps)
  const renderCommand = `npx remotion render src/index.ts TitleDemo ${testOutputPath} --frames=0-60 --overwrite`;
  
  execSync(renderCommand, {stdio: 'inherit'});
  
  console.log('\n✅ Render successful!');
  
  // Validate output file exists
  if (fs.existsSync(testOutputPath)) {
    const stats = fs.statSync(testOutputPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log(`📊 Output file size: ${fileSizeMB} MB`);
    console.log(`📁 Output location: ${testOutputPath}`);
    
    if (stats.size > 0) {
      console.log('\n✅ Smoke check PASSED - Project is ready for rendering!');
      
      // Clean up test file
      console.log('🧹 Cleaning up test file...');
      fs.unlinkSync(testOutputPath);
      
      process.exit(0);
    } else {
      console.log('\n❌ Smoke check FAILED - Output file is empty');
      process.exit(1);
    }
  } else {
    console.log('\n❌ Smoke check FAILED - Output file not created');
    process.exit(1);
  }
  
} catch (error) {
  console.error('\n❌ Smoke check FAILED');
  console.error('Error:', error.message);
  process.exit(1);
}
