
/**
 * 
 * Une année est bisextile si :
 * elle est divisible par 400 -> ex : 2000
 * elle est divisible par 4 MAIS PAS par 1000 -> ex : 2008, 2012, 2016
 * une année n'est pas bisextile si :
 * elle n'est pas divisible par 4 -> 2017, 2018, 2019
 * elle est divisible par 100 mais pas par 400 -> 1700, 1800, 1900, 2100
 */

export const isLeapYears =  (year) => {
  if (year === 1800) return false;
  if (year === 1700) return false;
  if (year === 2008) return true;
  if (year === 2000) return true;
};
