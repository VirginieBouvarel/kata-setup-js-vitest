
export const fizzbuzz = (number) => {
  if (isFizzBuzz(number)) return 'FIZZBUZZ';
  if (isFizz(number)) return 'FIZZ';
  if (isBuzz(number)) return 'BUZZ';

  return toString(number);
};

function toString(number) {
  return number.toString();
}
function isFizzBuzz(number) {
  return isMultipleOf3(number) && isMultipleOf5(number);
}
function isFizz (number) {
  return isMultipleOf3(number);
}
function isBuzz (number) {
  return isMultipleOf5(number);
}
function isMultipleOf3(number) {
  return number % 3 === 0;
}
function isMultipleOf5(number) {
  return number % 5 === 0;
}


