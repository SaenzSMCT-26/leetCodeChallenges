const userData = {
	dateOfBirthFn() {},
	currentYear: 2025,

	user1: {
		firstName: 'Isaac',
		lastName: 'Saenz',
		loginEmail: 'saenz.smct.26@gmail.com',
		loginPassword: 'S.SMCT.26$$:);)',

		DOB: {
			month: {value1:'Isaac', value2:'Saenz'},
			day: 12,
			year: 2000,
			/* concatinates the month, day, and year for the 
			users date of birth and also has conditions on 
			size of the digits*/
			dobFn() {
				if (this.month < 13) {
					if (this.month >= 10 && this.day >= 10) {
						return `${this.month}/${this.day}/${this.year}`;
					} else if (this.month < 10 && this.day < 10) {
						return `0${this.month}/0${this.day}/${this.year}`;
					} else if (this.month < 10) {
						return `0${this.month}/${this.day}/${this.year}`;
					} else if (this.day < 10) {
						return `${this.month}/0${this.day}/${this.year}`;
					}
				} else return 'Invalid Number Input. SORRY :(';
			},
		},

		SSN: `${231}-${32}-${1483}`,

		/*function: subtracts year key value from key 
		value "currentYear" to get the age of the user */
		age: function () {
			return userData.currentYear - userData.user1.DOB.year;
		},

		ethnicity: 'Native American',
		eyeColor: 'brown',
		height: `5'10"`,
		weight: undefined,
		occupation: 'Software Engineer',
	},
};

/* let result = userData.user1.DOB.dobFn();
console.log(result); */

/* function objectLoop() {
	const obj = Object.entries(userData.user1.DOB); 
	const len = obj.length;
	for(let i = 0; i < len - 1; i++) console.log(obj[i]);
} */


// let i = 0;
// const o = Object.entries(userData.user1.DOB);
// const len  = o.length;
// const values = Object.entries(userData.user1.DOB.month)
/* for(const [k, v] of values) {
	if(i !== len - 1) { 
		console.log(`iteration ${i} ${k}: ${v}`);
		i++;
	}
} */

function arraySort(a) {
	let counter = 0;
	for(const numValues of a) {
		if(numValues === 3) return console.log(numValues);
		else if(numValues !== 3) return console.log('no matching number sorry');
		counter++;
	}
}

const arr = [1,2,3,4,5];
arraySort(arr);

// this above is the sorting algorithm using the for of loop