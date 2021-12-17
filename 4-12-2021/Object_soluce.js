// 1

// const dog = {
//     name : "exercices",
//     legs : 1,
//     color : "red",
//     age : 1,
//     bark : bark =>  { return ("woof woof")},
//     breed : "pdf",
//     getDogInfo : getDogInfo => { return (Object.entries(dog))},

// };
// console.log(dog.getDogInfo())


// 2
// const users = {
// Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//     },
//     Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//     },
//     Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//     },
//     Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//     },
//     John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//     },
//     Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//     },
//     Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//     }
// }


// //     const mostSkills = n =>{
// //         let skillArr = 0,
// //             topUser;
// //         for (let person in n){
// //             if (n[person].skills.length > skillArr){
// //                 skillArr = n[person].skills.length;
// //                 topUser = person;

// //             }
       
// //     }
// //     return topUser
// // }
// // console.log(mostSkills(users))


// // // 2


// // const connectedUser = n =>{
// //     let count = 0,
// //         topUser;
// //     for (let person in n){
// //         if (n[person].isLoggedIn){
// //             count++
// //         }
   
// // }
// // return count
// // }
// // console.log(connectedUser(users))


// // const point50 = n =>{
// //     let count = 0,
// //         topUser;
// //     for (let person in n){
// //         if (n[person].points>=50){
// //             count++
// //         }
   
// // }
// // return count
// // }
// // console.log(point50(users))


// // 1

// // const findMERN = n =>{
// //     let a = {};
// //     for (let i in n){
               
// //     } 
// // }

// // 2 3 4 5



// // level 3 *****************


// // 1


// const personAccount = {
//     firstName : '',
//     lastName : '',
//     incomes : [],
//     expenses : [],
//     totalInCome : totalInCome => {return personAccount.incomes.reduce((a,b)=> (a+b)),0},
//     totalExpense : totalExpense => {return personAccount.expenses.reduce((a,b)=> (a+b),0)},
//     accountInfo : accountInfo => {return `${personAccount.firstName} ${personAccount.lastName} has ${personAccount.totalInCome()} incomes and ${personAccount.totalExpense()}expenses`;},
//     addIncome : addIncome = n => { personAccount.totalExpense();},
//     addExpense : addExpense   = n => { personAccount.expenses.push(n);},
//     accountBalance : accountBalance => {return (personAccount.totalInCome()-personAccount.totalExpense())},
// };

// personAccount.firstName = 'aek';
// personAccount.lastName = 'Ferdjani';
// personAccount.addIncome(10);
// console.log(personAccount.totalInCome());
// personAccount.addIncome(10);
// console.log(personAccount.totalInCome());
// personAccount.addExpense(10);
// personAccount.addExpense(5);
// personAccount.incomes(10);
// console.log(personAccount.accountBalance());
// console.log(personAccount.accountInfo());




// 2


const users = [
    {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt:'08/01/2020 9:00 AM',
    isLoggedIn: false
    },
    {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt:'08/01/2020 9:30 AM',
    isLoggedIn: true
    },
    {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt:'08/01/2020 9:45 AM',
    isLoggedIn: true
    },
    {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt:'08/01/2020 9:50 AM',
    isLoggedIn: false
    },
    {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt:'08/01/2020 10:00 AM',
    isLoggedIn: false
    }
    ];
    const products = [
    {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
    },
    {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
    },
    {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
    }
    ]

    // can work with method array.prototype.find()

const signUp=(users,user)=>{
    for (let index = 0; index < users.length; index++) {
       if(users[index].email==user.email){
           return "this users has already an account"
       } 
    }
    users.push(user)
}

const signIn = (username, password)=>{
    let found = false;
    for (let index = 0; index < users.length; index++) {
        if((users[index].username == username) && (users[index].password == password)){
             users[index].isLoggedIn = true;  
             found = true;
             return "succes signIN";
        } 
       
    }
    return found === false ?   "You need to signUp first!" : null; 

}

const rateProduct = (idU, idP) => {

}

signIn('Thomas','123333')
console.log(signIn('Thomas','123333'))
console.log(users)





