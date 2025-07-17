const userData = {
	dateOfBirthFn() {},
	currentYear: 2025,

	user1: {
		firstName: 'Isaac',
		lastName: 'Saenz',
		loginEmail: 'saenz.smct.26@gmail.com',
		loginPassword: 'S.SMCT.26$$:);)',

		DOB: {
			month: 7,
			day: 26,
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
		weight: '218lbs',
		occupation: 'Software Engineer',
	},
};

class Fruit {
	constructor(apples, oranges) {
		this.apples = apples;
		this.oranges = oranges;
	}

	appleFn() {
		return this.apples * 4;
	}
	orangeFn() {
		return this.oranges * this.apples;
	}
}

const fruit1 = new Fruit(4, 3);
console.log(fruit1.orangeFn());

/* const data = Object.entries(userData.user1.DOB);
for(const [keys, values] of data) if(typeof values !== 'function') console.log(`${keys} - ${values}`); */

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
	for(const numValues of a) {
		if(numValues === 3) return console.log(numValues);
	}
	return console.log('no matching number sorry')
}

function Apartment1(sqFeet = 1, bedrooms = 1) {
	this.sqFeet = sqFeet;
	this.bedrooms = bedrooms;
}

Apartment1.prototype.isBig = function() {
	this.sqFeet > 100 ? true : false;
	if(this.sqFeet === true) console.log('wow thats a lot of sqfeet');
}

const apart1 = new Apartment1(120, 1);
console.log(apart1.isBig());
console.log(apart1);

function pullDOB() {
	const dateOfBirth = Object.entries(userData.user1.DOB);
	for(const [k, v] of dateOfBirth) if(typeof v !== 'function') {
		console.log(k);
	};
}

pullDOB();


const obj = {
	two: 2,
	fN() {
		const four = 4;
		const addUp = () => {  this.two + four };
		return addUp();
	},
}

obj.fN();


