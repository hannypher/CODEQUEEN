// var, const, let => variable declarations
var myName = 'Hanifa Najjingo'; //used to declare variables with changing data
//console.log(myName);
myName = 'Seraaj';

var lastName = 'Michelle'; //this also declares changing data variables bound to a scope
//let lastName = 'Joan';
var lastName = 'Suzan'; //overides the above declaration
//console.log(lastName);
const showName = (() => {
    //inner scope
    var myName ='New name';
    let lastName = 'Henry';
    console.log('My name:', lastName, ' ', myName);
}) ()

console.log('My name:', lastName, ' ', myName); //sc0pes to the end of the function

const ADDRESS = 'plot 425, Ntinda Complex'; //cannot be re-assigned

//operators
let age =1;
console.log(age += 9); //get the current value of age, add 9 to it
console.log(age-=2); //get the walue of age and assign what remains after subtracting 2
age = age % 2; //modulous operator
console.log(age);
//ternary operator

//let gender = (myName == 'Hanifa Najjingo') ? 'female': 'male';
//console.log(gender);

let gender;
myName = '';

//conditions
if(myName == 'Hanifa') {
    gender = 'female';
} else if (myName == 'Seraaj') {
    gender = 'male';
}
else {
    console.log('last name', lastName);
    if(lastName === 'Michelle') {
        console.log('I am a female'); //never gets executed because it does not meet the condition
    }
    gender = 'unknown'
}
console.log(gender);

//let age = 18; //assigned age to the value of 18
age == 18 //is age equal to 18? condtitional check
age === 18; //works but not ideal as it will coerce to type string

//data types
//objects
let person = {
    name: 'Monica',
    age: 23,
    profession: 'Software Developer'
}

console.log(person['profession']);

person['name'] = 'Angella';
console.log(person.name);

person['0'] = 'Nothing'; //we're adding  new data to the object
console.log(person);
console.log(person['0']);

person = Object.assign(person, {name: 'Henry'}) //change only the name
console.log(person);

person = {...person, name: 'Sheila', age: 26, '0': 'something', profession: 'interior designer', maritalstatus: 'single'}; //using the spread operator
console.log(person);

//another way of creating an object
let Address = Object();
Address.name = 'Kampala, Uganda';
console.log(Address);

//function
function greetme() {
    console.log('Hello')
}
greetme(); //invoke / call the function

function isofAge(person) {
    return person.age > 18;
}
console.log('is allowed to enter, ', isofAge({age: 19}));
console.log('is allowed to enter, ', isofAge({age: 13}));

person['greeting'] = function () {
    console.log(this);
    console.log('Hello', this.name)
    //return 'Hello', + this.name;
};;
//console.log(person.greeting); //evaluates to the value of type function
console.log(person.greeting()); //invoke the function

person['address'] =Address;
console.log(person);
//accessing values of a nested object
console.log(person['address']['name'])
person.address.name = 'Ntinda Complex, Kampala, Uganda';
console.log(person['address']['name']);

let name = 'Nyakato Esther';
console.log('******', this)
console.log('dededeeded', this.name);
let personvalues = Object.values(person);
console.log(personvalues);
personvalues[5] = function(name) {
    console.log('Hello', name);
};
personvalues[5]('Hanifa');


let sample = {}; //declare object
let another = Object(); //declare object
// we use sample [] or sample.keyname to access or assign data to the object sample
function sampleFunc() { //creates a function of name sampleFunc
    // define the function block
    // hold all the logic for this function
}

//sampleFunc() invokes/ calls the defined function
const newName = (name) => console.log(name);

