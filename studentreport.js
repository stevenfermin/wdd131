const Days = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//for loop
for (let i = 0; i < studentReport; i++) {
    console.log(studentReport[i]); //printing the result
}

//while loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]); //printing the result
    }
    i++; //adding a number to continue with the next value in the array
}

//Foreach loop
studentReport.forEach(function(item) {
    if (item < LIMIT) {
        console.log(item); //printing the result
    }
});

// For...in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]); //printing the result
    }
}

const numberOfDays = 6; // variable days in future setting
const options = { weekday: "long" }; // Intl.DateTimeFormat vs. short, etc.

// Getting the date of today
const today = new Date();

// TODAY test output
let todaystring = new Intl.DateTimeFormat("en-US", options).format(today); //Getting the day of today
document.getElementById("today").innerHTML = `Today is <strong>${todaystring}</strong>`; //Printing the day of today

// next n days
for (let i = 1; i <= numberOfDays; i++) {
	const nextday = new Date();
	nextday.setDate(today.getDate() + i);
	let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
	const item = document.createElement("li"); // list item
	item.textContent = nextdaystring;
	document.querySelector("ul").appendChild(item);
}