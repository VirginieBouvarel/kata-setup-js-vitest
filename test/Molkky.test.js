/**
 * Règles :
 * Si le joueur touche une seule quille il marque autant de points que la valeur de la quille ✔️
 * Si le joueur touche plusieurs quilles il marque autant de points que de quilles tombées ✔️
 * Si le score du joueur dépasse 50, le score du joueur est ramené à 25 ✔️
 * Le joueur gagne la partie si il atteint 50 points exactement ✔️
 * Le joueur perds la partie si il ne touche aucune quille 3 fois d'affilée ✔️
 */

import { beforeEach, describe, expect, it } from 'vitest';
import { Molkky } from '../src/Molkky';

describe('Molkky', () => {
  let game;
  beforeEach(() => {
    game = new Molkky();
  })

  it('should score 0 before the start of the game', () => {
    expect(game.getScore()).toBe(0);
  });
  describe('If hits only one pin he scores the pin\'s value', () => {
    it('should score 3 for pin 3', () => {
      game.hitOnePin(3);
      expect(game.getScore()).toBe(3);
    });
    it('should score 8 for pin 5 after pin 3', () => {
      game.hitOnePin(3);
      game.hitOnePin(5);
      expect(game.getScore()).toBe(8);
    });
  });
  describe('If hits more than one pin, he scores the number of pins', () => {
    it('should score 4 for 4 pins', () => {
      game.hitPins(4);
      expect(game.getScore()).toBe(4);
    });
    it('should score 9 for 4 pins, then 5', () => {
      game.hitPins(4);
      game.hitPins(5);
      expect(game.getScore()).toBe(9);
    });
  });
  describe('If the score go beyond 50, the score is update to 25', () => {
    it('should score 25 when score goes beyond 50 by hitting one pin several times', () => {
      hitOnePinUntilScores50(game);
      game.hitOnePin(5);
      expect(game.getScore()).toBe(25);
    });
    it('should score 25 when score goes beyond 50 by hitting multiple pins several times', () => {
      hitPinsUntilScores50(game)
      game.hitPins(5);
      expect(game.getScore()).toBe(25);
    });
  });
  describe('Win the game if scores exactly 50', () => {
    it('should win the game if scores exactly 50', () => {
      hitOnePinUntilScores50(game);
      expect(game.win()).toBe(true);
    });
    it('should not win the game if score is 0', () => {
      expect(game.win()).toBe(false);
    });
  });
  describe('End the game if miss the pins 3 times in a row', () => {
    it('should not lose the game if miss the pins once', () => {
      game.missPins();
      expect(game.lose()).toBe(false);
    });
    it('should not lose the game if miss the pins twice', () => {
      game.missPins();
      game.missPins();
      expect(game.lose()).toBe(false);
    });
    it('should lose the game if miss the pins 3 times in a row', () => {
      game.missPins();
      game.missPins();
      game.missPins();
      expect(game.lose()).toBe(true);
    });
    it('should not lose the game if miss the pins 3 times but not in a row, by hitting one pin in between', () => {
      game.missPins();
      game.missPins();
      game.hitOnePin(3);
      game.missPins();
      expect(game.lose()).toBe(false);
    });
    it('should not lose the game if miss the pins 3 times but not in a row, by hitting multiple pins in between', () => {
      game.missPins();
      game.missPins();
      game.hitPins(3);
      game.missPins();
      expect(game.lose()).toBe(false);
    });
  });
});

function hitOnePinUntilScores50(game) {
  for (let index = 0; index < 5; index++) {
    game.hitOnePin(10);
  }
}
function hitPinsUntilScores50(game) {
  for (let index = 0; index < 5; index++) {
    game.hitPins(10);
  }
}
