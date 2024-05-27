import { describe, it, expect } from 'vitest';
import { fizzbuzz } from '../src/FizzBuzz';

describe('FizzBuzz', () => {
  it('should return "1" for 1', () => {
    expect(fizzbuzz(1)).toBe('1');
  });
  it('should return "2" for 2', () => {
    expect(fizzbuzz(2)).toBe('2');
  });
  it('should return "FIZZ" for 3', () => {
    expect(fizzbuzz(3)).toBe('FIZZ');
  });
  /**
   * Refacto : 
   * on voit que pour les nombres simples 
   * il s'agit de simplement retourner leur représentation 
   * en chaîne de caractères
   *   if (number === 1 || number === 2) return number.toString();
   */
  it('should return "4" for 4', () => {
    expect(fizzbuzz(4)).toBe('4');
  });
    /**
   * Refacto : 
   * on voit qu'il vaudrait mieux inverser la logique 
   * pour faire un early return dans le cas du FIZZ
   * et pour tous les autres nombres
   * le return de number.toString()
   * if (number === 3 ) return 'FIZZ';
   * return number.toString();
   */
    it('should return "BUZZ" for 5', () => {
      expect(fizzbuzz(5)).toBe('BUZZ');
    });
    /**
   * Refacto : 
   * On a une sensation de répétition
   * mais on sait pas encore trop de quoi
   * donc on ajoute un doublon 
   * pour retester un cas de fizz
   * et ensuite un autre pour retester un cas de buzz
   * et voir apparaître les répétitions
   */ 
    it('should return "FIZZ" for 36', () => {
      expect(fizzbuzz(36)).toBe('FIZZ');
    });
    it('should return "BUZZ" for 55', () => {
      expect(fizzbuzz(55)).toBe('BUZZ');
    });
    /**
   * Refacto : 
   * On voit apparaître la notion de multiple
   * si number est divisible par 3 sans reste
   * c'est un multiple de 3 -> FIZZ
   * si number est divisible par 5 sans reste
   * c'est un multiple de 5 -> BUZZ
   * On peut remplacer les vérifications d'équivalences directes 
   * par des vérifications de modulo
   * refacto 1 :   if (number % 3 === 0) return 'FIZZ';
   * refacto 2 :   if (number % 5 === 0) return 'BUZZ';
   */ 

    /**
   * Refacto : 
   * On extrait les deux vérifications dans des fonctions
   * pour masquer les calculs
   * et faire apparaître à la place la logique métier
   *   if (isMultipleOf3(number)) return 'FIZZ';
   *   if (isMultipleOf5(number)) return 'BUZZ';
   */ 
    it('should return "FIZZBUZZ" for 15', () => {
      expect(fizzbuzz(15)).toBe('FIZZBUZZ');
    });
    /**
   * Refacto : 
   * On a la sensation que ce cas est un condensé des deux autres
   * Mais on va doubler le test pour voir
   * avec un autre multiple de 3 et de 5 qui ne finit pas par 5
   */ 
    it('should return "FIZZBUZZ" for 60', () => {
      expect(fizzbuzz(60)).toBe('FIZZBUZZ');
    });
    /**
   * Refacto : 
   * On remplace les deux tests en dur 
   * par l'appel à nos deux fonctions déjà crées
   *   if (isMultipleOf3(number) && isMultipleOf5(number)) return 'FIZZBUZZ';
   */ 

    /**
   * Refacto : 
   * On voit qu'on a pas mal de bruit à la lecture
   * ce serait pas mal de masquer encore les calculs 
   * et de faire apparaître encore plus de logique métier
   */ 

    /**
   * Refacto : 
   * On a une différence de niveau d'abstraction 
   * entre les fonctions qu'on vient de créer 
   * et le return final
   * on l'extrait aussi dans une focntion 
   * pour garder un niveau d'abstraction unique
   * sur l'ensemble de la fonction parente
   */ 
});

