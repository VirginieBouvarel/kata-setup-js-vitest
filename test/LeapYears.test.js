import { describe, it, expect } from 'vitest';
import { isLeapYears } from '../src/LeapYears';

describe('LeapYears', () => {
  it('should return true', () => {
    expect(isLeapYears()).toBe(true);
  })
});

