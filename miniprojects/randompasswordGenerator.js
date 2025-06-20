/*
Author: Salem Maina
Date: 19/06/2025
This is my learning of JavaScript. Jump in the journey with me.
Here's the miniproject test description:
Random Password Generator
Concepts: Math, for loop, strings, arrays, if

Description: Ask the user how long the password should be and 
generate one using uppercase, lowercase, numbers, and symbols.
*/

/*
function pickCharacters (){
    let length = prompt("Enter the length of the password:");
    let allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?/().,:'123456789"
    const passwordText = [];
    if (length < 1){
        document.getElementById("response").innerText = "Invalid password length.";
    }
    else{
      for (i=0; ; i++){
        if (i == length){break;}
        let char = allowedChars.charAt(Math.floor(Math.random()*allowedChars.length))
        passwordText.push(char);
      }
    }
    document.getElementById("response").innerText = passwordText.join("");
}

pickCharacters()
*/




function pickCharacters (){
    let length = Number(prompt("Enter the length of the password:"));
    let allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?/().,:'123456789"
    let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseLetters = lowercaseLetters.toUpperCase();
    let symbols ="?/().,:'";
    let numbers = "123456789";
    const passwordText = [];
    if (length < 6){
        alert("Password has to be more than 6 characters");
    }
    else{
      let randlowcaseLetter = lowercaseLetters.charAt(Math.floor(Math.random()*lowercaseLetters.length));
      let randuppercaseLetter = uppercaseLetters.charAt(Math.floor(Math.random()*uppercaseLetters.length));
      let randSymbol = symbols.charAt(Math.floor(Math.random()*symbols.length));
      let randNumber = Math.floor(Math.random()*numbers.length);

      passwordText.push(randlowcaseLetter);
      passwordText.push(randuppercaseLetter);
      passwordText.push(randSymbol);
      passwordText.push(randNumber);

      let newLength = length - 4;
      for (i = 0; i < newLength; i++){
          let char = allowedChars.charAt(Math.floor(Math.random()*allowedChars.length));
          passwordText.push(char);
        }
    }
    passwordText.sort(() => 0.5 - Math.random());
    document.getElementById("response").innerText = passwordText.join("");
}


pickCharacters()



