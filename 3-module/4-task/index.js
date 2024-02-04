function showSalary(users, age) {
    const userFiltered = users.filter(el => el.age <= age)
    const result = userFiltered.map((el => `${el.name}, ${el.balance}`)).join('\n');
    return result;
}
