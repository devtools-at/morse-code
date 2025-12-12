/**
 * Morse Code Translator
 * Convert text to/from Morse code
 *
 * Online tool: https://devtools.at/tools/morse-code
 *
 * @packageDocumentation
 */

function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split('')
    .map(char => MORSE_CODE_MAP[char] || char)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function morseToText(morse: string): string {
  return morse
    .trim()
    .split(/\s+/)
    .map(code => REVERSE_MORSE_MAP[code] || code)
    .join('')
    .replace(/\//g, ' ');
}

// Export for convenience
export default { encode, decode };
