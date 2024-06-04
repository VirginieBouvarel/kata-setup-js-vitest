export class Calculator {
  separators = [',', '\n'];

  add(string) {
    if (string === '') return '0';
    if (this.lastCharacterIsNotANumber(string)) return 'Number expected but EOF found';

    const values = string.split(this.splitRegex()).map((value) => parseFloat(value));

    if (values.length === 1) return string;

    const sum = values.reduce((acc, current) => acc + current, 0);
    return sum.toString();
  }

  splitRegex() {
    return new RegExp(this.separators.join('|'));
  }

  lastCharacterIsNotANumber(string) {
    return this.separators.includes(string.at(-1));
  }
}
