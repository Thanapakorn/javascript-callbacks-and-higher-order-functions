// Exercise #1: For Each Function

function forEach(array, operation) {
  for (let slary of array) {
    operation(slary);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, function (slary) {
  newEmployeeSalaries.push(slary + 5000);
});

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
