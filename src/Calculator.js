export class Calculator {
  separators = [',', '\n'];

  add(string) {
    if (string === '') return '0';
    if (this.lastCharacterIsNotANumber(string)) return 'Number expected but EOF found';

    const values = string.split(this.splitRegex()).map((value) => parseFloat(value));
    if (values.length === 1) return string;

    const sum = values.reduce((sum, currentValue) => sum += currentValue, 0);
    return sum.toString();
  }

  lastCharacterIsNotANumber(string) {
    return this.separators.includes(string.at(-1));
  }

  splitRegex() {
    return new RegExp(this.separators.join('|'));
  }
}
