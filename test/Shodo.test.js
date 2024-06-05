/**
 * Règles :
 * Wallet
 * Given a wallet containing financial assets, build a function that compute the value of wallet in * a currency.
 * The financial assets have a quantity and a type which can be for example Apple, Euros, Bitcoins
 * and Dollars.
 * To value the wallet in a currency you could use an external api to provide rate exchanges
 */


import { describe, expect, it } from 'vitest';
import { Wallet } from '../src/Shodo';


describe('Wallet', () => {
  it('should return 0 for an empty wallet', () => {
    const wallet = new Wallet();
    expect(wallet.amount()).toBe(0);
  });
  it('should return 2 for wallet with two euro assets', () => {
    const assets = [ { type: 'euro', quantity: 1 }, { type: 'euro', quantity: 1 } ];
    const wallet = new Wallet(assets);
    expect(wallet.amount()).toBe(2);
  });
  it('should return 3 for wallet with one euro and one dollar assets', () => {
    const assets = [ { type: 'euro', quantity: 1 }, { type: 'dollar', quantity: 1 } ];
    const wallet = new Wallet(assets);
    expect(wallet.amount()).toBe(3);
  });
});

