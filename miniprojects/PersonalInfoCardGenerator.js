/*
Author: Salem Maina
Date: 13/06/2025
This is my learning of JavaScript. Jump in the journey with me.
Here's the miniproject test description:
Personal Info Card Generator
Use: Objects, strings, variables

Description: Create an object to store a person's name, age, and occupation. 
Write a function to display this info in a formatted string like:
"Hi, I'm John Doe, a 25-year-old Web Developer."
*/
const PersonalInfo ={
    name: "Salem Maina",
    age: "21",
    occupation: "Software Developer"
}

function printPersonalInfo(){
    document.getElementById("personalInfo").innerHTML = "Hi,  I'm " + PersonalInfo.name + ", a " + PersonalInfo.age + "-year-old " + PersonalInfo.occupation;
}

printPersonalInfo()
