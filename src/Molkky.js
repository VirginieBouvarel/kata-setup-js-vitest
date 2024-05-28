
/**
 * Démarrer une partie
 * Calculer le score :
 * Si 1 quille tombe -> score += valeur
 * Si 1+ quilles tombent -> score += nombre de quilles
 * Ajouter la règle de fin de partie : exactement 50 points
 * Si le score dépasse 50 -> le score = 25 points
 * Si trois lancés d'affilé ne touchent aucune quille -> Défaite
 */

export class Molkky {
  constructor() {
    this.score = 0;
  }
  getScore() {
    return this.score;
  }
  throw(array) {
    if (array.length === 1) {
      this.score += array[0];
      return;
    }
    this.score += array.length;
  }
}
