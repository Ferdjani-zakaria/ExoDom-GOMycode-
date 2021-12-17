// 1 

// const emptyArray = [];

// 2

// let notEmptyArrayW5 = [1,2,3,4,5];

// // 3

// console.log(`question 3 :${notEmptyArrayW5.length}`)

// 4

// let a = notEmptyArrayW5[0]; 
// let b = notEmptyArrayW5[2];
// let c = notEmptyArrayW5[4];
// console.log (`question 4 :${a}${b}${c}`)

// 5

// let mixedDataTypes = [1,"c",3.52,a]
// console.log(mixedDataTypes.length)

// 6

let itCompanies = ["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle", "amazon"];


// 7

// console.log(itCompanies)

// // 8

// console.log(itCompanies.length)

// // 9
// const findMidlleOfArray= array =>{
//     let a
//         middleOf = (array.length%2);
//     middleOf == 1 ? a = ((array.length+1)/2)-1  : a = (array.length/2)-1;
//     return a

// } 
// console.log(`${itCompanies[0]},${itCompanies[findMidlleOfArray(itCompanies)]},${itCompanies[itCompanies.length-1]}`)


// // 10
// console.log(...itCompanies)

// // 11

// for ( i=0; i<itCompanies.length-1; i++){
//     console.log (`${(itCompanies[i]).toUpperCase()}`)

// }

// // 12

// let sentenceArray = ["Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies."];

// // 13
// // console.log(itCompanies.includes('Facebook'))

// const isItInTheArray = (array, company) =>{
//     array.includes(company) ? console.log(`${company}`) : console.log("not found");
// }

// isItInTheArray(itCompanies, "facebook")

// 14

// for (i=0; i < itCompanies.length; i++){
//     itCompanies[i]
// }

// 15

// itCompanies.sort()

// 16

// console.log(`${itCompanies.reverse()}`);

// 17
itCompanies = ["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle", "amazon"]

// console.log(itCompanies.toString().substr(0,25))


// 18 19
// use "slice" and "shift/unshift" add/remove first in the array or "pop" remove last in the array
// 20

// itCompanies.remove()

// 21

// const exo14 = n =>{
//     console.log(["Facebook","Google","Microsoft","Apple","IBM","Oracle","amazon"].filter((company) => company.match(/o/g).length > 1));
// }
// exo14(itCompanies)

// level 2 *********************
import {countriesArr} from "./countries.js" ;

import {web_techsARR} from "./web_techs.js" ;

// console.log(countriesArr)


// 2


// let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// let words = [...text].filter(a => a !== ',');
// words = words.filter(a=>a !=='.');
// words = words.join('');
// words = words.split(' ');
// console.log(words)
// console.log(words.length)

// // 3

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.unshift('meat');
// shoppingCart.push('sugar');
// shoppingCart.indexOf('Tea') = 'Green Tea';


// 4



// const checkEth = n =>{
//     return n.toString().includes('Ethiopia') ? console.log('ETHIOPIA') : n.push('Ethiopia');
// }
// checkEth(countriesArr)
// console.log(countriesArr.toString());
// console.log(countriesArr)

// 5

// const checkSass = n =>{
//     return n.toString().includes('Sass') ? console.log('Sass is a CSS preprocess') : n.push('Sass');
// }
// checkSass(web_techsARR)
// console.log(web_techsARR.toString());
// console.log(web_techsARR)

// // 6

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// const fullStack = (frontEnd.toString()).concat(backEnd.toString()).split(',');
// console.log(fullStack)

// level 3 ***************************

// 1

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24,22,1]

const minMax = n =>{
    let a = n.sort();
    return [a[0], a[a.length-1]]
}

console.log(minMax(ages))
const median = n =>{
    let a = n.sort();
    let one = a[((a.length-1)/2)],
        two = [(a[((a.length)/2)-1] + a[(a.length)/2])/2];

   return (a.length) % 2 ?  one : two;
}


console.log(median(ages));



const averageOf = n =>{
    let a = n.sort(); 
    return n.reduce((a,b)=> a+b,0)/n.length
}

console.log(averageOf(ages))


const rangeOf = n =>{
    let a = minMax(n);
    return a[1]-a[0]
}

console.log(rangeOf(ages))

const theValue = n =>{
    let a = minMax(n);
    return [Math.abs(a[0]-averageOf(n)), Math.abs(a[1]-averageOf(n))]
}

console.log(theValue(ages))


// 1 ***
// console.log(countriesArr.slice(10))

// 2*******
console.log(countriesArr.length)
const medianCountry = n =>{
    let a = n.sort();
    let one = [a[((a.length-1)/2)]],
        two = [a[((a.length)/2)-1], a[(a.length)/2]];

   return (a.length) % 2 ?  one : two;
}
console.log(medianCountry(countriesArr))


// 3***********

