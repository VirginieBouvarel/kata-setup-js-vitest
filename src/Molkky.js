export class Molkky {
  constructor() {
    this.score = 0;
    this.missCount = 0;
  }
  getScore() {
    return this.score;
  }
  hitOnePin(number) {
    this.updateScore(number);
  }
  hitPins(pinsCount) {
    this.updateScore(pinsCount);
  }
  missPins() {
    this.missCount ++;
  }
  updateScore(scoreToAdd) {
    this.score += scoreToAdd;
    this.applyPenalityIfScoreGoesBeyond50();
    this.missCount = 0;
  }
  applyPenalityIfScoreGoesBeyond50() {
    if (this.score > 50) this.score = 25;
  }
  win() {
    return this.score === 50;
  }
  lose() {
    return this.missCount >=3;
  }
}
