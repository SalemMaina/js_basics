/*
Author: Salem Maina
Date: 18/06/2025
This is my learning of JavaScript. Jump in the journey with me.
Here's the miniproject test description:
Birthday Countdown
•	Use: Dates, variables, numbers
•	Description: Input a birthday (hardcoded or via prompt) and 
    calculate the number of days left until the next occurrence of that date
*/

let birthday = null;
let birthYear = null;
let today = null;
let birthMonth = null;
let birthDate = null;
let currentYear = null;
let currentYearBirthday = null;
let nextYear = null;
let nextBirthday = null;
let daysRemaining =null;
let countDays = null;
let msDay = 1000 * 60 * 60 * 24;


function daysToBirthday(){
    birthday = new Date(prompt("Enter your birthday:"));
    birthYear = birthday.getFullYear();
    birthMonth = birthday.getMonth();
    birthDate = birthday.getDate();
    today = new Date();
    currentYear = today.getFullYear();
    currentYearBirthday = new Date(currentYear, birthMonth, birthDate);
    if (currentYearBirthday < today && currentYear != today){
        nextYear = currentYear + 1;
        nextBirthday = new Date(nextYear, birthMonth, birthDate);
        daysRemaining = Math.ceil((nextBirthday - today) / msDay);
        countDays = Math.round(daysRemaining);
        if (daysRemaining < 1 && daysRemaining > 0){
            daysRemaining = 1;
            document.getElementById("countResult").innerHTML = daysRemaining;
        }
        document.getElementById("countResult").innerHTML = countDays;
    }
    else{
        daysRemaining = Math.ceil(currentYearBirthday - today) / msDay;
        countDays = Math.round(daysRemaining);
        if (daysRemaining < 1 && daysRemaining > 0){
            daysRemaining = 1;
            document.getElementById("countResult").innerHTML = daysRemaining;
        }
        document.getElementById("countResult").innerHTML = countDays;
    }
}
daysToBirthday();