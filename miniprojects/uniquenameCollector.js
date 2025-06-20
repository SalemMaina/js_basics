/*
Author: Salem Maina
Date: 20/06/2025
This is my learning of JavaScript. Jump in the journey with me.
Here's the miniproject test description:
Unique Name Collector
Concepts: Set, for loop, prompt()

Description: Continuously collect names from the user until 
they enter “stop”. Only store unique names using a Set.
*/
const uniqueNames = new Set();
function collectNames(){
    //const uniqueNames = new Set();
    let name = "";
    for (i = 0; ; i++){
        name = prompt("Enter a unique name:");
        if (/^[a-zA-Z]+$/.test(name)){
          if (name === "stop"){
              break;
          }
          else {
            uniqueNames.add(name);
          }
        }else{
            alert("Please enter a valid name.")
        }
        //if (name = "stop"){break;}
    }
    displayNames()
}
function displayNames(){
    let outPut = " ";
    let uniqueName = null;
    for (uniqueName of uniqueNames){
        outPut += uniqueName + "\n";
    }
    document.getElementById("names").innerText = outPut;
}
collectNames()