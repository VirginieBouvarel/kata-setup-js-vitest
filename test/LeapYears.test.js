import { describe, it, expect } from 'vitest';
import { isLeapYears } from '../src/LeapYears';

describe('LeapYears', () => {
  it('should return true for 2000', () => {
    expect(isLeapYears(2000)).toBe(true);
  });
  /**
   * Pour éviter d'avoir un test qui passe automatiquement
   * à la prochaine étape
   * on teste une année non bisextile
   */
  it('should return false for 1800', () => {
    expect(isLeapYears(1800)).toBe(false);
  });
  it('should return false for 1700', () => {
    expect(isLeapYears(1700)).toBe(false);
  });
  /**
   * Remarque :
   * On voit que les années bisextiles (2000) 
   * comme les années non bisextiles (1800 et 1700)
   * peuvent être divisible par 1000
   * ce n'est pas un critère différenciant
   */
  it('should return false for 2008', () => {
    expect(isLeapYears(2008)).toBe(true);
  });
/**
 * Refacto :
 * Pour faire apparaître le cas 2000 dans les vérifications
 * Afin de faire apraître des similitudes
 * return true ->   if (year === 2000) return true;
 */


});

