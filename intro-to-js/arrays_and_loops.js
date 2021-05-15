/* @param myfunction => a call back function
    @param name => string
*/
function showName(myFunction, name) {
    //let name = 'Hanifa'
    return myFunction(name)
}

//call backs and IFE
function callme(value) {
    function transformValue() {
        console.log(value);
    }
return transformValue();
}

// below is an anonymous / namless self invoking function
(
    function(){
        console.log('hello again');
    }
)()

callme('Hey there');

//arrow function
const changeCase = (name) => name.toUpperCase();

//another arrow function without a parameter
const newName = () => {
    return 'Nothing to see here!'
}
//annoymous funcs
const randomFunc = function() {
    return 'yet nothing else!'
}
randomFunc()
console.log(showName(changeCase, 'Baliqys'));

// Arrays
let numbers = [];
let names = Array();

names.push('Hanifa')
names.push(['Baliqys', 'Amalina', 'Japhal'])
console.log(names);

//add more items
names.push(randomFunc);
names.push({age: 30});
names.push(new Date());
console.log(names);

//call a function in the array
console.log(names[2]());

//add to the start of the array
names.unshift('Happy New Year');
console.log(names.join());
console.log(names.toString());
names.shift()

console.log(names);
names[2] = 234;
names[1] = 'today'

console.log('first array', names);

//spreading arrays into arrays
let namesCopy = [...names];
console.log('copied array', namesCopy);

//getting certain items from the array
let [,age] = namesCopy;
console.log(age);
namesCopy[0] = 'Fanny';
console.log('copied array', namesCopy);

// String
let firstName = '';
firstName = 'Hanifa Najjingo';
firstName.toLowerCase();
firstName = firstName.replace(' ', '3');
console.log(firstName);
firstName = 'Hanifa';
lastName = 'Najjingo';
let fullName = firstName.concat(' ', lastName);
fullName1 = firstName + ' ' + lastName;
fullName2 = `${firstName} ${lastName}`;
console.log(fullName);
console.log(fullName, ' ', fullName1, ' ', fullName2);

let x = fullName.match(firstName);
console.log(x);

// Loops
function isOfAge(person) {
    return person.age >=18
}
//while loops
let number =0;
while(number <= 19){
   console.log('hello', number);
   number +=1
}

//switch control state
function isOfAge(person) {
    switch (person.age){
        case 12:
            console.log('you can go to the mall');
            break
        case 15:
            console.log('you can go to the beach');
            break
        case 18:
            console.log('you can drive');
            break
        default:
             console.log("you're too old for this");
    }
}
isOfAge({age: 12});
isOfAge({age: 15});
isOfAge({age: 18});
isOfAge({age: 25});

//for loops
for(let number=0; number <=19; number++) {
    console.log('Hey', number);
}
for(let number=0; number<12; number++) {
    if(number == 9) break;
    console.log('we made it here');
}

let empty = [];
names.forEach(name => empty.push(name));
console.log(empty.length);
for(let item of names) {
    console.log(item);
}

// Promises
//let apiCall = fetchUsers(); //take 25 min to return data
//let getUsers = () => new Promise(cb, rj) => {
//    cb('hello');
//    rj('failed');
//});
//getUsers().then(Response => response).catch(err => console.log(err))
//getUsers()