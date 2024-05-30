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

import { describe, it, expect } from 'vitest';
import { kata } from '../src/Bowling';

describe('Bowling', () => {
  it('should return true', () => {
    expect(kata()).toBe(true);
  })
});

