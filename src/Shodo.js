export class Wallet {
 constructor(assets) {
  this.assets = assets;
  this.conversionsToEuro = { euro : 1, dollar: 2 };
 }
  amount() {
    if (!this.assets) return 0;
    return this.assets.reduce((sum, currentValue) => {
      return sum += currentValue.quantity * this.conversionsToEuro[currentValue.type];
    }, 0);
  }
}