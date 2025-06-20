/*
Author: Salem Maina
Date: 16/06/2025
This is my learning of JavaScript. Jump in the journey with me.
Here's the miniproject test description:
Simple To-Do List (Array version)
Use: Arrays, functions, strings

Description: Users can add items to a 
to-do list, view the list, and remove items by index.
*/

let toDoList = [];
function addItems(){
    let task = prompt("Enter a new task:");
    if(task){
        toDoList.push(task);
        displayTasks();
    }
}
function displayTasks(){
let flen = toDoList.length;
        let text = "<ul>";
        for (let i = 0; i < flen; i++){
            text += `<li>${toDoList[i]} <button onclick="editTask(${i})">Edit</button> <button onclick="deleteItem(${i})">Delete</button></li>`;
        }
        text += "</ul>";
        document.getElementById("taskList").innerHTML = text;
}
function deleteItem(i){
    if (i > -1) { // only splice array when item is found
        toDoList.splice(i, 1); // 2nd parameter means remove one item only
        displayTasks();
    }
}
function editTask(i){
    if (i > -1){
        toDoList[i] = prompt("Edit:");
        displayTasks();
    }
}
function clearTasks(){
    toDoList.splice(0,toDoList.length)
    displayTasks();
}
