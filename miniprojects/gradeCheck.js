/*
Author: Salem Maina
Date: 17/06/2025
This is my learning of JavaScript. Jump in the journey with me.
Here's the miniproject test description:
Grade Checker
Concepts: if/else, switch, comparisons, booleans

Description: Take a numeric score (0–100) and assign a letter 
grade (A–F). Also show if the student has passed or failed.
*/

function grader(){
    let grade = Number(prompt("Enter your grade marks (0-100):"));
    let gradeType = '';
    if (grade >= 90 && grade < 100){
        gradeType = 'A';
    }
    else if (grade >= 75 && grade < 90){
        gradeType = 'B';
    }
    else if (grade >= 60 && grade < 75){
        gradeType = 'C';
    }
    else if (grade >= 45 && grade < 60){
        gradeType = 'D';
    }
    else if (grade >= 30 && grade < 45){
        gradeType = 'E';
    }
    else{
        gradeType = 'F';
    }
    switch (gradeType){
        case 'A':
            document.getElementById("result").innerText = "Congratulations. You have grade A";
            break;
        case 'B':
            document.getElementById("result").innerText = "Congratulations. You have grade B";
            break;
        case 'C':
            document.getElementById("result").innerText = "You have grade C";
            break;
        case 'D':
            document.getElementById("result").innerText = "You have grade D";
            break;
        case 'E':
            document.getElementById("result").innerText = "You have grade E";
            break;
        case 'F':
            document.getElementById("result").innerText = "You have grade F";
            break;
        default:
            document.getElementById("result").innerText = "Please enter your grade.";
    }
}

grader()