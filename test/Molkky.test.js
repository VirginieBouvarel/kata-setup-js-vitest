import { describe, it, expect } from 'vitest';
import { Molkky } from '../src/Molkky';

describe('Molkky', () => {
  // On veut initialiser une partie de Molkky 
  // Qui renvoie un score de 0 au démarrage
  it('should return 0 when starting', () => {
    const party = new Molkky();
    expect(party.getScore()).toBe(0);
  });
  // Un lancé a lieu
  // qui touche une quille
  // et incrémente le score de la valeur de la quille
  it('should incremente the score by 1 if 1 pin with the value 1 fall', () => {
    const party = new Molkky();
    const previousScore = party.getScore();
    party.throw([1]);
    expect(party.getScore()).toBe(previousScore + 1);
  });
  // Un lancé a lieu
  // qui touche les quilles 5, 7 et 9
  // et incrémente le score du nombre de quilles tombées
  it('should incremente the score by 3 if 3 pins fall', () => {
    const party = new Molkky();
    const previousScore = party.getScore();
    party.throw([5, 7, 9]);
    expect(party.getScore()).toBe(previousScore + 3);
  });
  /**
   * Autres test avec une ou plusieurs valeurs
   * Les tests devraient être verts directement
   */
  it('should incremente the score by 7 if 7 pins fall', () => {
    const party = new Molkky();
    const previousScore = party.getScore();
    party.throw([3, 12, 1, 8, 5, 7, 9]);
    expect(party.getScore()).toBe(previousScore + 7);
  });
  it('should incremente the score by 10 if 1 pin with the value 10 fall', () => {
    const party = new Molkky();
    const previousScore = party.getScore();
    party.throw([10]);
    expect(party.getScore()).toBe(previousScore + 10);
  });
  /**
   * Remarque :
   * On répète du code dans la rédaction des tests 
   * voir comment exécuter
   * const party = new Molkky(); seulement dans le describe ?
   * const previousScore = party.getScore(); avant chaque test 
   */

  // Un lancé a lieu
  // qui ne touche aucune quille
  // le score ne doit pas être incrémenté
  it('should not incremente the score if 0 pin fall', () => {
    const party = new Molkky();
    const previousScore = party.getScore();
    party.throw([]);
    expect(party.getScore()).toBe(previousScore);
  });
});
