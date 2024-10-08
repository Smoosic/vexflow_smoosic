#!/usr/bin/env node

// Convert SMuFL OTF font to Vexflow glyph file.
// Usage: node fontgen_smufl.js Bravura_1.392.otf ../../src/fonts/bravura_glyphs.ts

const fs = require('fs');
const process = require('process');
// eslint-disable-next-line
const opentype = require('opentype.js');
const prettier = require('prettier');
const prettierConfig = require('../../.prettierrc.js');

function LogError(...args) {
  // eslint-disable-next-line
  console.error(...args);
}
function formatUnicode(unicode) {
  unicode = unicode.toString(16);
  if (unicode.length > 4) {
      return ("000000" + unicode.toUpperCase()).substr(-6)
  } else {
      return ("0000" + unicode.toUpperCase()).substr(-4)
  }
}
// Convert OTF glyph path to Vexflow glyph path
function toVFPath(glyph) {
  const unistring = glyph.unicodes.map(formatUnicode).join(', ').toLowerCase();
  return `content: "\\${unistring}";`
}

const args = process.argv.slice(2);
if (args.length < 2) {
  LogError('Usage: node fontgen_smufl.js [fontfile.otf] [outfile.json]');
  LogError('e.g: node fontgen_smufl.js Bravura_1.392.otf bravura_glyphs.ts');
  process.exit(255);
}

const fontFile = args[0];
const outFile = args[1];

const font = opentype.loadSync(fontFile);
const glyphNamesData = fs.readFileSync('./config/glyphnames.json');
const glyphNames = JSON.parse(glyphNamesData);
const VALID_CODES = require('./config/valid_codes');

const fontData = [];

// For each code in VALID_CODES, load the UTF code point from glyphnames.json, look
// it up in the font file, and generate a vexflow path.
Object.keys(VALID_CODES).forEach((k) => {
  const glyphCode = glyphNames[k];
  if (!glyphCode) {
    LogError('Skipping missing glyph:', k);
    return;
  }
  const code = glyphCode.codepoint.substring(2);
  const intCode = String.fromCodePoint(parseInt(code, 16));
  const testGlyph = font.charToGlyphIndex(intCode);
  if (testGlyph === 0) {
    console.log('No glyph for  ' + k);
  } else {
    const glyph = font.charToGlyph(intCode);
    const content = toVFPath(glyph);    
    fontData.push(`.icon-${k}:before {${content}}`);
  }
});

// Use our prettier rules to format the output JSON file. See: .prettierrc.js
// That way, if we ever edit & save the file, the diff will be minimal.
// We use String.slice(0, -1) to remove the final newline character.
prettierConfig.parser = 'json5'; // Tell prettier we are parsing JSON.

LogError('Writing to file:', outFile);
const writeInterface = fs.createWriteStream(outFile);
fontData.forEach((ln) => {
  writeInterface.write(`${ln}\n`);
});
writeInterface.end();

