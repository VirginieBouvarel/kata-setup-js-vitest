/**
 * Règles :
 * Given a wallet containing financial assets, 
 * build a function that compute the value of wallet in a currency.
 * The financial assets have a quantity and a type 
 * which can be for example Apple, Euros, Bitcoins and Dollars.
 * To value the wallet in a currency you could use an external api to provide rate exchanges
 */

 // RED

import { beforeEach, describe, expect, it } from 'vitest';
import { Wallet } from '../src/Wallet';
import { Quantity } from '../src/Quantity';

const Asset = {
  EURO: 'euro',
  DOLLAR: 'dollar',
  BITCOIN: 'bitcoin',
};

describe('Wallet', () => {
  const rateProvider = (fromAsset, toCurrency) => {
    if (fromAsset === 'euro') {
      if (toCurrency === 'dollars') {
        return 0.5;
      }
    }
    if (fromAsset === 'dollar') {
      if (toCurrency === 'euros') {
        return 2;
      }
    }
    if (fromAsset === 'bitcoin') {
      if (toCurrency === 'euros') {
        return 10;
      }
    }
    return 1;
  };

  let wallet;
  beforeEach(() => {
    wallet = new Wallet();
  });

  it('should return 0 for an empty wallet', () => {
    expect(wallet.amount('euros', rateProvider)).toBe(0);
  });
  it('should return 3 for a wallet with two assets of one and two euros', () => {
    wallet.addAsset({ type: Asset.EURO, quantity: Quantity.of(1) });
    wallet.addAsset({ type: 'euro', quantity: Quantity.of(2) });
    expect(wallet.amount('euros', rateProvider)).toBe(3);
  });
  it('should return 25 for a wallet with one euro, 2 dollars and 2 bitcoins', () => {
    wallet.addAsset({ type: 'euro', quantity: Quantity.of(1) });
    wallet.addAsset({ type: 'dollar', quantity: Quantity.of(2) });
    wallet.addAsset({ type: 'bitcoin', quantity: Quantity.of(2) });
    expect(wallet.amount('euros', rateProvider)).toBe(25);
  });
  it('should return 1 for a wallet with two euros, in dollars', () => {
    wallet.addAsset({ type: 'euro', quantity: Quantity.of(2) });
    expect(wallet.amount('dollars', rateProvider)).toBe(1);
  });
});

