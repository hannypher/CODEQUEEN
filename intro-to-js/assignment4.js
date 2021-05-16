/*
func performCovidTest
@param person: object
*/

function performCovidTest (person) {
    let message;
    if (person && typeof person == 'object') {
        //destructuring
        let {name, temperature} = person;
        myName = name;
        if (!temperature) {
            console.log('please provide your temperature')
        }
        if(!name) {
            myName = 'Jane Doe'
        }

    //    switch(temperature) {
    //        case 33:
    //            message = 'you have normal temperature';
    //            break
    //        case 35:
    //            message = 'please see a physician for further tests';
    //            break
    //        case 37:
    //            message = 'you may have contracted Covid19, please call MOH';
    //            break
    //        default:
    //            message = 'status unknown';            
    //    }

    if (temperature == 33) {
        message = `You have normal temperature ${temperature}`;
    } else if (temperature == 35) {
        message = `Please see a physician for further tests ${temperature}`;
    } else if (temperature >= 37) {
        message = `You may have contracted Covid19, please call MOH ${temperature}`;
    } else {
        message = 'Status Unknown';
    }
    return `${myName}: ${message}`;
} else {
    message = 'Invalid Data Provided';
    return `${message}`;
}
}

//try running this
let covidTest1 = performCovidTest({temperature: 33})
console.log(covidTest1);

let covidTest2 = performCovidTest({temperature: 35})
console.log(covidTest2);

let covidTest3 = performCovidTest({temperature: 37})
console.log(covidTest3);

let covidTest4 = performCovidTest({temperature: 18})
console.log(covidTest4);

let covidTest5 = performCovidTest({temperature: 45})
console.log(covidTest5); 

let covidTest6 = performCovidTest(345)
console.log(covidTest6);

//reverse arrays
let myArray = [1,2,3,4,5,6,7,8,9];
const rewind = arr => (Array.isArray(arr) && arr.length) ? arr.reverse(): 'Not an array';
console.log(rewind(234));
console.log(myArray);
console.log(rewind(myArray))

