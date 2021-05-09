/* variable => holds data or reference to data
can be declared using the
-var
-let
-const
*/

var myName = "Hanifa";
let age = 20;
const profession ='Lawyer';

console.log(myName, age, profession);

myName ='Baliqys';
age =18;
//profession = 'Human Resource Manager';
console.log(myName, age, profession);

(function showInfo(){
    let myName = 'Amalina';
    console.log(myName, age, profession);
})();