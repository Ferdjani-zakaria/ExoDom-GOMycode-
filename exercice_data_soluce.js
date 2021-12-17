// 1
let challenge1 = 'loren city';
// 2
console.log(challenge1)
// 3
console.log(challenge1.length)
// 4
let challenge4 = challenge1.toUpperCase();
console.log(challenge4)
// 5
let challenge5 = challenge1.toLowerCase();
console.log(challenge5)
// 6
let challenge6 = challenge1.substr(6);
console.log(challenge6)
// 7
let challenge7 = 'full stack JS track';
challenge7 = challenge7.substr(0,11);
console.log(challenge7)
// 8
let challenge8 = challenge7.includes('script');
console.log(challenge8)
// 9
let challenge9 = 'full stack JS track';
challenge9 = challenge9.split('');
console.log(challenge9)
// 10
let challenge10 = 'full stack JS track';
challenge10 = challenge10.split(' '); 
console.log(challenge10)
// 11
let challenge11 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
challenge11 = challenge11.split(',');
console.log(challenge11)
// 12
let challenge12 = 'Full stackJS track';
challenge12 = challenge12.replace('track','groupe');
console.log(challenge12)
// 13
let challenge13 = 'full stack JS track';
challenge13 = challenge13.charAt(15);
console.log(challenge13)
// 14
let challenge14 = 'full stack JS track';
challenge14 = challenge14.charCodeAt(15);
console.log(challenge14)
// 15
let challenge15 = 'full stackJS';
challenge15 = challenge15.indexOf('a');
console.log(challenge15)
// 16
let challenge16 = 'full stackJS track';
challenge16 = challenge16.lastIndexOf('a');
console.log(challenge9)
// 17
let challenge17 = 'You cannot end a sentence with because because because is a conjunction';
challenge17 = challenge17.indexOf('because');
console.log(challenge17)
// 18
let challenge18 = 'You cannot end a sentence with because because because is a conjunction';
challenge18 = challenge18.lastIndexOf('because');
console.log(challenge18)
// 19
let challenge19 = 'You cannot end a sentence with because because because is a conjunction';
challenge19 = challenge19.search('because');
console.log(challenge19)
// 20
let challenge20 = ' 30 Days Of JavaScript ';
challenge20 = challenge20.trim();
console.log(challenge20)
// 21
let challenge21 = 'Full stackJS track';
challenge21 = challenge21.startsWith('Full');
console.log(challenge21)
// 22
let challenge22 = 'Full stackJS track';
challenge22 = challenge22.endsWith('track');
console.log(challenge22)
// 23
let challenge23 = '30 Days Of JavaScript';
challenge23 = challenge23.match(/a/g);// //expression regulier et g pour chercher en 'global'.
console.log(challenge23)
// 24
let challenge24_1 = 'Full stack';
let challenge24_2 = ' JavaScript';
let challenge24 = challenge24_1.concat(challenge24_2);
console.log(challenge24)
// 25
let challenge25 = 'Full stackJS track ';
challenge25 = challenge25.repeat(2);
console.log(challenge25)
//exo2 ***********************************************

// 1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another\'.')
// 2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
// 3
let sentence_2 = "I hope this course is not full of jargon."
sentence_2 = sentence_2.includes("jargon");
console.log(sentence_2)
// 4
let randomNumber = Math.random()*100;
console.log(randomNumber)
let randomNumber2 = Math.random()*50+50;
console.log(randomNumber2)
let randomNumber3 = Math.random()*255;
console.log(randomNumber3)
// 10
let sentence_3 = 'JavaScript';
let randomChar = sentence_3[Math.floor(Math.random()*sentence_3.length)];
console.log(randomChar)

// pdf 2
const person = {
    firstName: "Omar",
    lastName: "Farid",
    country: "Algeria",
    city: "Blida",
    age: 45,
    isMarried: true,
    year: 2021,
}
//1
console.log(typeof(person.age))
// 2
console.log(10 == "10")
// 3
console.log(parseInt('9.8')==10)
// 4

console.log(person.age == 45)

console.log(person.firstName == "Amine")
console.log(person.country == "Tunisia")
console.log(person.city == "Alger")
console.log(person.year == 2021)
console.log(person.age == 45)
console.log(person.city == "Blida")
// 5
console.log((4>3)&&(10<9))
// 7
let object = new Date();
console.log(object.getUTCFullYear())


// exo 2 page 2



// 1
let base = prompt("Enter base")
let height = prompt ("Enter height")
let area = 0.5*base*height;
alert(`the area of the triangle is : ${area}`)

// 2
let a = prompt("Enter side a")
a =  parseInt(a);
let b = prompt("Enter side b")
b =  parseInt(b);
let c = prompt("Enter side c")
c =  parseInt(c);
let perimeter = a+b+c;
alert(`The perimeter of the triangle is ${perimeter}`)

// 3
let length = prompt("Enter length")
let width = prompt ("Enter width")
let area_rectangle = parseInt(length)*parseInt(width);
alert(area_rectangle)
let perimeter_rectangle = (parseInt(length)+parseInt(width))*2
alert(perimeter_rectangle)

// 4
let radius = prompt("Enter radius")
let area = parseInt(radius)*parseInt(radius)*Math.PI;
let circumference = 2*Math.PI*parseInt(radius);
alert(area)
alert(circumference)

// 5
let x , y = 2*x-2;
let x_intercept = 1;
let y_intercept = -2;


