/**
* Règles :
* 1 game = 10 frames
* failed score = number of pins
* spare = 10 + number of pins in the next roll
* strike = 10 + number of pins in the next two rolls
* spare in the last frame  = one more bonus roll
* strike in the last frame = two more bonus rolls
* spare and strike more bonus rolls are only used to calculate bonus
* total score is the total of all frame scores

* Objectif : calculate the total score
* for a valid sequence of rolls
*/

// RED

import { describe, expect, it } from 'vitest';
import { Game } from '../src/Bowling';


describe('Bowling', () => {
  it('should score 6 for a [11220*16] game', () => {
    const game = new Game;
    game.roll(1);
    game.roll(1);
    game.roll(2);
    game.roll(2);
    for (let i = 0; i < 16; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(6);
  });
  it('should score 12 for a game with a spare', () => {
    const game = new Game;
    game.roll(5);
    game.roll(5);
    game.roll(1);
    for (let i = 0; i < 17; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(12);
  });
  it('should score 21 for a [545510*15] game', () => {
    const game = new Game;
    game.roll(5);
    game.roll(4);
    game.roll(5);
    game.roll(5);
    game.roll(1);
    for (let i = 0; i < 15; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(21);
  });
  it('should score 12 for a game with a strike', () => {
    const game = new Game;
    game.roll(10);
    game.roll(1);
    game.roll(1);
    for (let i = 0; i < 17; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(14);
  });
  it('should score 300 for a perfect game', () => {
    const game = new Game;
    for (let i = 0; i < 12; i++) {
      game.roll(10);
    }
    expect(game.score()).toBe(300);
  });
});