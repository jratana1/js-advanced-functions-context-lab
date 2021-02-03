/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
let createEmployeeRecord = function(array){
    return {firstName: array[0],
            familyName: array[1],
            title: array[2],
            payPerHour: array[3],
            timeInEvents: [],
            timeOutEvents: []
    }
}

function createEmployeeRecords(array){
    return array.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp){
    let obj = {type: "TimeIn",
                hour: parseInt(dateStamp.split(" ")[1]),
                date: dateStamp.split(" ")[0]
    }

    this.timeInEvents.push(obj)

    return this
}

function createTimeOutEvent(dateStamp){
    let obj = {type: "TimeOut",
                hour: parseInt(dateStamp.split(" ")[1]),
                date: dateStamp.split(" ")[0]
    }

    this.timeOutEvents.push(obj)

    return this
}

function hoursWorkedOnDate(dateStamp){
    let work = this.timeOutEvents.find(function(e){ return e.date === dateStamp})

    if (work){
        return (work.hour - this.timeInEvents.find(function(e){return e.date === dateStamp}).hour)/100
    }
    else{
    return 0
    }
}

function wagesEarnedOnDate(dateStamp){
    return hoursWorkedOnDate.call(this, dateStamp)*this.payPerHour
}

function calculatePayroll(array){
    return array.reduce(function(last, current){return last + allWagesFor.call(current)}, 0)
}

function findEmployeeByFirstName(array, name){
    return array.find(function(e){return e.firstName === name})
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}