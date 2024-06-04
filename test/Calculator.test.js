import { describe, it, expect } from 'vitest';
import { Calculator } from '../src/Calculator';

describe('String Calculator', () => {
  it('should return "0" for an empty string', () => {
    const calculator = new Calculator();
    expect(calculator.add('')).toEqual('0');
  });
  it('should return "1" for "1"', () => {
    const calculator = new Calculator();
    expect(calculator.add('1')).toEqual('1');
  });
  it('should return "2" for "1,1"', () => {
    const calculator = new Calculator();
    expect(calculator.add('1,1')).toEqual('2');
  });
  it('should return "2.2" for "1.1,1.1"', () => {
    const calculator = new Calculator();
    expect(calculator.add('1.1,1.1')).toEqual('2.2');
  });
  it('should return "5" for "1,1,1,1,1"', () => {
    const calculator = new Calculator();
    expect(calculator.add('1,1,1,1,1')).toEqual('5');
  });
  it('should return "Number expected but EOF found" for "1,1,"', () => {
    const calculator = new Calculator();
    expect(calculator.add('1,1,')).toEqual('Number expected but EOF found');
  });
  it('should return "Number expected but EOF found" for "2,2,"', () => {
    const calculator = new Calculator();
    expect(calculator.add('2,2,')).toEqual('Number expected but EOF found');
  });
  it('should return "Number expected but EOF found" for "1,2,3,"', () => {
    const calculator = new Calculator();
    expect(calculator.add('1,2,3,')).toEqual('Number expected but EOF found');
  });
  it('should return "2" for "1\n1"', () => {
    const calculator = new Calculator();
    expect(calculator.add('1\n1')).toEqual('2');
  });
  it('should return "Number expected but EOF found" for "1,1\n"', () => {
    const calculator = new Calculator();
    expect(calculator.add('1,1\n')).toEqual('Number expected but EOF found');
  });
});

