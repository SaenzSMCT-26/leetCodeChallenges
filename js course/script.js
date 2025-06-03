const flight = 'LH234';
const isaac = {
    name: 'Isaac Saenz',
    passport: 265532145345
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;
    passenger.passport === 265532145345 ? console.log('Checked In') : console.log('Wrong Passport!');
}

checkIn(flight, isaac);
console.log(flight);
console.log(isaac);