const checkPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let divider = 2;
  while (divider < number) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};
const sayPrimeOrNot = (number) => {
  const result = checkPrime(number) ? 'yes' : 'no';
  console.log(result);
};
export default sayPrimeOrNot;