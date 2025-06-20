let person = {
    name: "John",
    age: 30
};
let selection = "name";
person[selection] = "Jane";

console.log(person.name);

function greet(name,  age){
    console.log('Hello ' + name + ', you are ' + age + ' years old.');
}

greet(person.name, person.age);