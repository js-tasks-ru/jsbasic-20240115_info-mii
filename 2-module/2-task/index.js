let obj = {};
let schedule = {};
obj === schedule;

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
schedule["8:30"] = "подъём";
console.log(isEmpty(obj));
alert(isEmpty(schedule));
