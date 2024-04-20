/* eslint-disable no-unused-vars, no-useless-escape */

const isValidCompanyUsername = (username, firstName, lastName) => {
  const regex = new RegExp(`^(sales|tech)\\d\\w-${firstName[0]}${lastName}\\d?$`);
  console.log(regex) // to help you debug, look at the final regex
  return regex.test(username);
};// Basically got to do / twice (//) in order to print it correctly.
console.log(isValidCompanyUsername('sales9b-ajohnson1', 'albert', 'johnson'))
console.log(isValidCompanyUsername('tech1a-jjones', 'jason', 'jones'))
console.log(isValidCompanyUsername('sales4b-areyes', 'ana', 'reyes'))

console.log(isValidCompanyUsername('areyes', 'ana', 'reyes'))
console.log(isValidCompanyUsername('', 'joe', 'cats'))

module.exports = {
  isValidCompanyUsername,
};
