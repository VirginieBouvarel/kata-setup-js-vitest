import { describe, expect, it } from 'vitest';
import { Quantity } from '../src/Quantity';

describe('Quantity', () => {
  it('should have a quantity', () => {
    expect( Quantity.of(1).value).toBe(1);
  });
  it('should not have zero quantity', () => {
    expect( () => Quantity.of(0)).toThrowError('Quantity should be positive');
  });
  it('should not have negative quantity', () => {
    expect( () => Quantity.of(-5)).toThrowError('Quantity should be positive');
  });
})