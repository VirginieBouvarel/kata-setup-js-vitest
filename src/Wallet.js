export class Wallet {
  assets = [];

  addAsset(asset) {
    this.assets.push(asset);
  }
  amount(currency, rateProvider) {
    return this.assets.reduce((sum, asset) => sum += this.valueIn(currency, asset, rateProvider), 0);
  }
  valueIn(currency, asset, rateProvider) {
    return asset.quantity.value * rateProvider(asset.type, currency);
  }
}
