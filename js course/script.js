// const flight = 'LH234';
// const isaac = {
//     name: 'Isaac Saenz',
//     passport: 265532145345
// }

// const checkIn = function(flightNum, passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr.' + passenger.name;
//     passenger.passport === 265532145345 ? console.log('Checked In') : console.log('Wrong Passport!');
// }

// checkIn(flight, isaac);
// console.log(flight);
// console.log(isaac);




// const transaction = {
//     id: 104,
//     amount: 500,
//     type: "withdrawal"
// }

// function logTransaction(fn){
//     console.log(`Processing transaction...`);
//     fn(transaction);
// }

// function details(det){
//     console.log(`Transaction #${det.id} of ${det.amount} was a ${det.type}.`)
// }

// logTransaction(details);


/*first class vs higher-order- functions*/

// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }
// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn}`);
// }

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('Hi')('Isaac');