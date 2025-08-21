/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeDataArrays) {
  return employeeDataArrays.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(dateStamp.split(' ')[1], 10), 
    date: dateStamp.split(' ')[0]
  });
  return this;
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.split(' ')[1], 10),
        date: dateStamp.split(' ')[0]
    });
    return this;
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find(event => event.date === date);
  let timeOut = this.timeOutEvents.find(event => event.date === date);
  
  if (!timeIn || !timeOut) return 0;
  
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date){
  let hours = hoursWorkedOnDate.call(this, date)
  return hours * this.payPerHour;
}

function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find(function(employee) {
    return employee.firstName === firstNameString;
  });
}

function allWagesFor() {
  return this.timeInEvents.reduce((total, e) => {
    return total + wagesEarnedOnDate.call(this, e.date)
  }, 0)
}

function calculatePayroll(employees) {
  return employees.reduce((total, emp) => {
    return total + allWagesFor.call(emp)
  }, 0)
};











/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}*/

