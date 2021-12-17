// //edabit*******

// function filterArray(arr) {
//     let noStrings = [];
//     for(i=0; i<arr.length;i++){
//         typeof(arr[i]) === "number" ? noStrings.push(arr[i]) : null;
//     }
//     return (noStrings)
// }

// //edabit question/////////////////////////////////////////////////:
// const filterArray1 = arr => arr.filter(a => +a === a)
// const getAbsSum=(a)=>eval(a.map(e=>Math.abs(e)).join('+'))
    // Object.prototype.hasOwnProperty()
    // The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).  

// /////////////////////////////////////////////////////////////////:

// function filterArray2(arr) {
// return arr.filter((x) => typeof x === 'number');
//   }


// const getAbsSum = arr =>{
//     let absSum = 0; 
//     for(i=0;i<arr.length;i++){
//         arr[i] > 0 ? absSum += arr[i] : absSum += -arr[i];
//     }
//     return absSum
// }
	

// const inkLevels = a => {
// 	a=a;
//     let inkoo = {
//         "cyan": 23,
//         "magenta": 12,
//         "yellow": 10
//       };
//     return inkoo
// }

// const inkLevels = inks => {
// 	let inkLeft = Math.min(...Object.values(inks));
//     console.log(inkLeft)	
//     return inkLeft
// }

// inkLevels({
//     "cyan": 23,
//     "magenta": 12,
//     "yellow": 10
//   })

// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

// let countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++
//   }
//   else {
//     allNames[name] = 1
//   }
//   console.log(allNames);
//   return allNames
// }, {})


// let a = { Alice: 1 }; 
// let b = a['Alice'];
// console.log(b)

// let people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 21 }
//   ];

// let people2 = {  name : 'Alice', 
//                 age : 21,
//                 goody : 'Max', 
//                 age1 : 20  }
// console.log(Object.keys(people2))
// console.log(people2.name);
// console.log(people2['age'])

  
//   function groupBy(objectArray, property) {
//     return objectArray.reduce(function (acc, obj) {
//       let key = obj[property]
      
//       console.log("top obj")
//       console.log(obj);
//       console.log("bot obj top key")
//       console.log(key);
//       console.log("bot key");
//       console.log(acc[key]);

//       if (!acc[key]) {
//         acc[key] = []
//       }

//       acc[key].push(obj);
//       console.log(acc);
//       return acc
//     }, {})
//   }
  
//   let groupedPeople = groupBy(people, 'age')


// const GUEST_LIST = {
// 	Randy: "Germany",
// 	Karla: "France",
// 	Wendy: "Japan",
// 	Norman: "England",
// 	Sam: "Argentina"
// }

// const greeting =name => {
//     let soluce;
// 	Object.keys(GUEST_LIST).includes(name) ? soluce =`Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.` : soluce ="Hi! I'm a guest.";
//     console.log(soluce);
//     return soluce
		
// }

// greeting("Randy")
// greeting("Sam")
// greeting("Monti")

let str = '5 4 3 2 -1';
let strC = [...str].filter(i => i !=='-')
strC = [...strC].filter(i => i !==' ')
console.log(strC)
console.log([...str].filter(i => i !=='-').join(''));
console.log(Math.max(...strC))
console.log(str)


