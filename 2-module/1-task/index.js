let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
  let res = 0;
  for (let key in salaries) {
    if (isFinite(salaries[key]) && salaries[key] !== null && typeof salaries[key] === 'number') {
      res += salaries[key];
    }
  }
  return res;
}
console.log(sumSalary(salaries));