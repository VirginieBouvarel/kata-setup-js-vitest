/**
 * Règles :
 * Créer une fonction add() qui prend une string en paramètres et qui retourne une string
 * Une chaîne vide retourne 0 ✔️
 * Il peut y avoir 0 ✔️, 1 ✔️ou 2 arguments séparés par des virgules ✔️
 * Les nombres réçus peuvent être des décimaux ✔️
 * 
 * Règles supplémentaires :
 * add() peut recevoir un nombre inconnu d'arguments ✔️
 * On peut aussi avoir un '\n' en séparateur ✔️
 * Il ne peut pas y avoir de separateur en dernière position. 
 * "1,3," n'est pas valide et doit renvoyer 'Number expected but EOF found' ✔️
 */

// RED

import { describe, it, expect } from 'vitest';
import { Calculator } from '../src/Calculator';

describe('String Calculator', () => {
  it('should return "0" for an empty string', () => {
    const calculator = new Calculator();
    expect(calculator.add('')).toEqual('0');
  });

  [
    { input: '1', output: '1' },
    { input: '1,1', output: '2' },
    { input: '11,11', output: '22' },
    { input: '1.1,1.1', output: '2.2' },
    { input: '1,1,1,1,1', output: '5' },
    { input: '1\n1', output: '2' },
    { input: '1\n2,3', output: '6' },
    { input: '1,3,', output: 'Number expected but EOF found' },
    { input: '1,2,3\n', output: 'Number expected but EOF found' },
  ].forEach((testCase) => {
    it(`should return "${testCase.output}" for "${testCase.input}"`, () => {
      const calculator = new Calculator();
      expect(calculator.add(testCase.input)).toEqual(testCase.output);
    });
  });
});

