import { describe, it, expect } from 'vitest';
import { toRomanNumber } from '../src/RomanNumerals';

describe('Roman Numerals', () => {
  it('should return "I" for 1', () => {
    expect(toRomanNumber(1)).toBe('I');
  })
  it('should return "II" for 2', () => {
    expect(toRomanNumber(2)).toBe('II');
  })
  it('should return "III" for 3', () => {
    expect(toRomanNumber(3)).toBe('III');
  })
  it('should return "V" for 5', () => {
    expect(toRomanNumber(5)).toBe('V');
  });
  it('should return "XXI" for 21', () => {
    expect(toRomanNumber(21)).toBe('XXI');
  });
  it('should return "XXXII" for 32', () => {
    expect(toRomanNumber(32)).toBe('XXXII');
  });
  it('should return "L" for 50', () => {
    expect(toRomanNumber(50)).toBe('L');
  });
  it('should return "C" for 100', () => {
    expect(toRomanNumber(100)).toBe('C');
  });
  it('should return "D" for 500', () => {
    expect(toRomanNumber(500)).toBe('D');
  });
  it('should return "M" for 1000', () => {
    expect(toRomanNumber(1000)).toBe('M');
  });
  it('should return "VI" for 6', () => {
    expect(toRomanNumber(6)).toBe('VI');
  });
  it('should return "IV" for 4', () => {
    expect(toRomanNumber(4)).toBe('IV');
  });
  it('should return "IX" for 9', () => {
    expect(toRomanNumber(9)).toBe('IX');
  });
  it('should return "CXXIX" for 129', () => {
    expect(toRomanNumber(129)).toBe('CXXIX');
  });
  it('should return "XCV" for 95', () => {
    expect(toRomanNumber(95)).toBe('XCV');
  });
  it('should return "XLVIII" for 48', () => {
    expect(toRomanNumber(48)).toBe('XLVIII');
  });
  it('should return "CDLVIII" for 458', () => {
    expect(toRomanNumber(458)).toBe('CDLVIII');
  });
  it('should return "CMLXXVI" for 976', () => {
    expect(toRomanNumber(976)).toBe('CMLXXVI');
  });
	it('should return "MMCMXLIX" for 2949', () => {
		expect(toRomanNumber(2949)).toBe('MMCMXLIX');
	});
});

