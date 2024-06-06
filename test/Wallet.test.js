/**
 * Règles :
 * Given a wallet containing financial assets, 
 * build a function that compute the value of wallet in a currency.
 * The financial assets have a quantity and a type 
 * which can be for example Apple, Euros, Bitcoins and Dollars.
 * To value the wallet in a currency you could use an external api to provide rate exchanges
 */

 // RED

import { describe, expect, it } from 'vitest';
import { Wallet } from '../src/Wallet';

describe('Wallet', () => {
  it('should return 0 for an empty wallet', () => {
    const wallet = new Wallet();
    expect(wallet.amount()).toBe(0);
  });
  it('should return 1 for a wallet with one euro', () => {
    const wallet = new Wallet();
    wallet.addAsset({ type: 'euro', quantity: 1 });
    expect(wallet.amount()).toBe(1);
  });
  it('should return 2 for a wallet with two assets of one euro', () => {
    const wallet = new Wallet();
    wallet.addAsset({ type: 'euro', quantity: 1 });
    wallet.addAsset({ type: 'euro', quantity: 1 });
    expect(wallet.amount()).toBe(2);
  });
  it('should return 3 for a wallet with two assets of one and two euros', () => {
    const wallet = new Wallet();
    wallet.addAsset({ type: 'euro', quantity: 1 });
    wallet.addAsset({ type: 'euro', quantity: 2 });
    expect(wallet.amount()).toBe(3);
  });
  it('should return 2 for a wallet with one dollar', () => {
    const wallet = new Wallet();
    wallet.addAsset({ type: 'dollar', quantity: 1 });
    expect(wallet.amount()).toBe(2);
  });
  it('should return 10 for a wallet with one bitcoin', () => {
    const wallet = new Wallet();
    wallet.addAsset({ type: 'bitcoin', quantity: 1 });
    expect(wallet.amount()).toBe(10);
  });
  it('should return 25 for a wallet with one euro, 2 dollars and 2 bitcoins', () => {
    const wallet = new Wallet();
    wallet.addAsset({ type: 'euro', quantity: 1 });
    wallet.addAsset({ type: 'dollar', quantity: 2 });
    wallet.addAsset({ type: 'bitcoin', quantity: 2 });
    expect(wallet.amount()).toBe(25);
  });
  it('should return 1 for a wallet with two euros, in dollars', () => {
    const wallet = new Wallet();
    wallet.addAsset({ type: 'euro', quantity: 2 });
    expect(wallet.amount('dollars')).toBe(1);
  });
  it('should return 2 for a wallet with four euros, in dollars', () => {
    const wallet = new Wallet();
    wallet.addAsset({ type: 'euro', quantity: 4 });
    expect(wallet.amount('dollars')).toBe(2);
  });
  it('should return 1 for a wallet with ten euros, in bitcoins', () => {
    const wallet = new Wallet();
    wallet.addAsset({ type: 'euro', quantity: 10 });
    expect(wallet.amount('bitcoins')).toBe(1);
  });
  it('should return 2 for a wallet with twenty euros, in bitcoins', () => {
    const wallet = new Wallet();
    wallet.addAsset({ type: 'euro', quantity: 20 });
    expect(wallet.amount('bitcoins')).toBe(2);
  });
});

