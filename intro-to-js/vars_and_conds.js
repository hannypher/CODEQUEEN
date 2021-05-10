// var, const, let => variable declarations
var myName = 'Hanifa Najjingo'; //used to declare variables with changing data
//console.log(myName);

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

let gender = (myName == 'Hanifa Najjingo') ? 'female': 'male';
console.log(gender);

//conditions
if(myName == 'Hanifa') {
    gender = 'female';
}
