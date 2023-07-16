// Write your solution in this file!
let employee = {
    name: "Sergio",
    streetAddress: "9261 Charolais Way"
}
function updateEmployeeWithKeyAndValue(employeeObject = employee, key, value) {
    let newObj = {...employee};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject = employee, key, value) {
    employee[key] = value;
    return employee; 
}
function deleteFromEmployeeByKey(employeeObject = employee, key) {
    let newObj = {...employeeObject};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employeeObject = employee, key) {
    delete employeeObject[key];
    return employeeObject;
}

updateEmployeeWithKeyAndValue();
destructivelyUpdateEmployeeWithKeyAndValue();
deleteFromEmployeeByKey();
destructivelyDeleteFromEmployeeByKey();