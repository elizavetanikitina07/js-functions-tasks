import _ from 'lodash';

// BEGIN
const average = (...numbers) => {
  if (numbers.length === 0) {
    return null;
  }
  const total = _.sum(numbers);
  return total / numbers.length;
};
export default average;
// END