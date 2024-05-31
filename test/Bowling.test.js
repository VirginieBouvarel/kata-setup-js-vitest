/**
 * * Règles :
 * 10 manches -> 2 lancers par manche pour chaque joueur
 * 
 * * Objectif : 
 * faire tomber les 10 quilles en deux lancers
 * 
 * * Score d'une manche : 
 * nombre total de quilles renversées sur les 2 lancers 
 * + Bonus pour les spares et les strikes
 *
 * * SPARE : 
 * Les 10 quilles tombent en 2 lancers
 * score du spare : 10 + Bonus -> nombre de quilles du lancer suivant
 *
 * * STRIKE :
 * Les 10 quilles tombent au 1er lancer
 * Il n'y a pas de second lancer
 * score du strike : 10 + Bonus -> nombre de quilles des 2 lancers suivants
 *
 * * MANCHE 10 :
 * Si SPARE à la dernière manche 
 * -> 1 lancer de plus autorisé pour calculer le bonus (2 + 1 = 3 lancers en tout)
 * Si STRIKE à la dernière manche 
 * -> 2 lancers de plus autorisés pour calculer le bonus (1 + 2 = 3 lancers en tout)
 * 
 * * Exigences :
 * Ecrire une classe Game
 * Qui a deux méthodes : 
 * * * void roll(int) 
 * -> appelée à chaque fois que le joueur fait rouler une balle, 
 * -> int est le nombre de quilles renversées
 * * * int score()
 * -> renvoie le score total du jeu
 * 
 * * Article
 * Lisez cet article « Engineer Notebook : An Extreme Programming Episode » de Robert C. Martin, 
 * où il décrit la résolution de ce kata avec Robert S. Koss. 
 * butunclebob.com/files/downloads/Bowling%20Game%20Kata.ppt
 */

import { describe, expect, it } from 'vitest';
import { Game } from '../src/Bowling';

describe('Bowling', () => {
  it('should score 0 before the start of the game', () => {
    const game = new Game;
    expect(game.getScore()).toBe(0);
  });
  it('should score 9 for a round with 8 pins knocked down at the first roll and 1 at the second', () => {
    const game = new Game;
    game.playARound([8,1]);
    expect(game.getScore()).toBe(9);
  });
  it('should score 7 for a round with 0 pin knocked down at the first roll and 7 at the second', () => {
    const game = new Game;
    game.playARound([0,7]);
    expect(game.getScore()).toBe(7);
  });
  it('should score 16 for a round with 0 pin knocked down at the first roll and 7 at the second after a round with 8 pins knocked down at the first roll and 1 at the second', () => {
    const game = new Game;
    game.playARound([8,1]);
    game.playARound([0,7]);
    expect(game.getScore()).toBe(16);
  });
});


