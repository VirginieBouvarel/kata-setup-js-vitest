export class Wallet {
  assets = [];
  conversionTo = {
    euros: { euro: 1, dollar: 2, bitcoin: 10},
    dollars: { euro: 0.5, dollar: 1, bitcoin: 5 },
    bitcoins: { euro: 0.1, dollar: 0.2, bitcoin: 1 },
  };

  addAsset(asset) {
    this.assets.push(asset);
  }
  amount(currency = 'euros') {
    return this.assets.reduce((sum, asset) => sum += this.valueIn(currency, asset), 0);
  }
  valueIn(currency, asset) {
    return asset.quantity * this.conversionTo[currency][asset.type];
  }
}
