export class Game {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }
  score() {
    let rollsCopy = [...this.rolls];

    let totalScore = 0;
    for (let frame = 0; frame < 10; frame++) {
      totalScore += frameScore(rollsCopy);
      rollsCopy = rollsCopy.slice(rollsToRemove(rollsCopy));
    }

    return totalScore;
  }
}

function frameScore(rollsCopy) {
  if (isStrike(rollsCopy)) return strikeScore(rollsCopy);
  if (isSpare(rollsCopy)) return spareScore(rollsCopy);
  return normalScore(rollsCopy);
}
function rollsToRemove(rollsCopy) {
  return isStrike(rollsCopy) ? 1 : 2;
}
function isStrike(rollsCopy) {
  return rollsCopy[0] === 10;
}
function isSpare(rollsCopy) {
  return rollsCopy[0] + rollsCopy[1] === 10;
}
function strikeScore(rollsCopy) {
  return 10 + rollsCopy[1] + rollsCopy[2];
}
function spareScore(rollsCopy) {
  return 10 + rollsCopy[2];
}
function normalScore(rollsCopy) {
  return rollsCopy[0] + rollsCopy[1];
}





