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

/*first class vs higher-order- functions*/

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}


const transformer = function(str, fn){
    console.log(`Origi9nal string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function(){
    console.log('👏');
}
document.body.addEventListener('click', high5);
['Isaac', 'Kelsey', 'Ivaan'].forEach(high5);