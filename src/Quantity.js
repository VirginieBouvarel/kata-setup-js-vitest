export class Quantity {
  value;
  constructor(value) {
    if (value <= 0) {
      throw new Error('Quantity should be positive');
    }
    this.value = value;
  }
  static of(value) {
    return new Quantity(value);
  }
}
