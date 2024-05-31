
export class Game {
  constructor() {
    this.score = 0;
  }
  getScore() {
    return this.score;
  }
  playARound(array) {
    this.score += array[0];
    this.score += array[1];
  }
}
