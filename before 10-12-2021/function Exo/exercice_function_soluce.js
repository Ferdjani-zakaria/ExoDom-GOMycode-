// exo 1**************************************

// 1

function fullName(){
    console.log("My full Name")
}

// 2

function fullNameV2(firstName, lastName){
    let fullName = "firstName + lastName";
    return(fullName)
}

// 3

function addNumbers(x, y){
    return(x+y)
}

// 4

function areaOfRectangle(length, width){
    let area = length + width;
    return(area)
}

// 5

function perimetrerOfRectangle(length, width){
    let perimeter = 2*(length + width);
    return(perimeter)
}   

// 6

function volumeOfRectPrism(length, width){
    let perimeter = length*width*height;
    return(volume)
}   

// 7

function areaOfCircle(radius){
    let areaCircule = Math.PI*radius*radius;
    return(areaCircule)
}   

// 8

function circumOfCircle(radius){
    let circumCircule = 2*Math.PI*radius;
    return(circumCircule)
}   

// 9

const DENSITY = (mass, volume) => {
   let density = mass/volume;
   return(density)
}

// 10

const SPEED = (distance, time) => {
    let speed = distance/time;
    return(`${speed} m/s`)
 }

// 13

// const BMI = (weight, height) => 
function BMI (weight, height) 
{
    let bmi = weight/(height*height);
    if (bmi <= 18.5) {
        console.log("Underweight")
    }
    else if (bmi > 18.5 && bmi < 25 ){
        console.log("Normal weight")
    }

    else if (bmi >= 25 && bmi <= 30 ){
        console.log("Overweight")
    }
    else {
        console.log("Obese")
    }
    return (bmi)
}


// 14

function checkSeason (month){
    const Autumn = "September, October, November";
    const Winter = "December, January, Febuary";
    const Spring = "March, April, May";
    const Summer = "Jun, July, August";
    if (Autumn.includes(month)) {
        console.log("autumn")
    }
    else if (Winter.includes(month)) {
        console.log("winter")
    }
    else if (Spring.includes(month)) {
        console.log("Spring")
    }
    else if (Summer.includes(month)) {
        console.log("Summer")
    }
    else console.log ("not a month")
}


// 15

const findMax = (a,b,c) => 
// function findMax(a,b,c) 
{
    let max ;
    if ((a>b && b>c) || (a>c && c>b)) {
        max = a;
    }

    else if ((b>a && a>c) || (b>c && c>a)) {
        max = b;
    }

    else {
        max = c;
    }
    return max;
}


// exo 2 ************************************


// 1

// const solveLinEquation = (a,b,c) =>
function solveLinEquation(a,b,c)
{
    let y , x;
    x = (Math.random() < 0.5 ? -1 : 1)*Math.random()*100;
    y=(-c-a*x)/b;
   console.log(`x=${x} y=${y}]`)
}


// 2

    const solveQuadEquation = (a,b,c) =>
// function solveQuadEquation(a,b,c)
{
    let x = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    let result;
    x=x2 ?  result = [x]  : result = [x, x2];
    return result;
}

// 3

const printArray = (a) =>{
    for(i=0; i<a.length; i++){
        console.log(a[i])
    }
}

// 4

const showDateTime = () =>{
    let j = new Date();
    let timeNow =`${j.getDate()}/${j.getMonth()}/${j.getFullYear()} ${j.getHours()}:${j.getMinutes()}`;
    return (timeNow)
}

// 5

const swapValues = (a,b) =>{
    let tmp=a;
    a=b;
    b=tmp;
    // [a, b] = [b, a]; ES6
    return  [a,b] //Could not swap def the value.
}


// 6

const reverseArray = (a) =>{
    let b=[];
    for(i=a.length-1; i>-1; i--){
    b.push(a[i]);
    }
    console.log(b)
}

// 7


const capitalizeArray = (a) =>{
    let b=[];
    for( var i=0; i<a.length; i++){
        b.push(a[i].toUpperCase());
    }
    console.log(b)
}

// 8

const addItem = (a) =>{
    let b=[];
    b.push(a); 
    return b;
}

// 9

const removeItem = (array,value) =>{
    array = array.filter(item=> item!==value); 
    return array;
}

// 10

const sumOfNumbers = (num) =>{
    let sum=0;
    for(let i=0; i<=num; i++){
        sum += i;
    } 
    return sum;
}


// 11


const sumOfOdds = (...args) =>{                         
    let b = 0;                                                                                 
    for (var i = 0; i<args.length; i++){
    args[i]%2 !== 0 ? b = b + args[i] : null;
    }   
    return b;
}


// 12


//   sumOfEven same as Odd


// 13

const evensAndOdds = (a) =>{                         
    let sumOdds = 0; 
    let sumEvens = 0;                                                                                
    for (var i = 0; i<=a; i++){
    i%2 !== 0 ? sumOdds = sumOdds + 1 : sumEvens = sumEvens + 1;
    }   
    console.log(`The number of odds are ${sumOdds}.The number of evens are ${sumEvens}.`);
}



// 14 

const sumOfNumbers2 = (...args) =>{                         // ...args is ES6
    let b = 0;                                             // inside the function is a ES5 methode of working                                    
    for (var i = 0; i<args.length; i++){
    b = b + args[i]
    }   
    return b;
}


// 15

const randomIpForUser = () =>{
    let ipUser="";
    for( let i=0; i<4; i++){
        ipUser += Math.floor(Math.random()*256);
        if(i<3){
        ipUser +=".";
        }
    }
    return ipUser;
}

// 16

const randomMacAdresse = () =>{
    let macAdresse="";
    for( let i=0; i<6; i++){
        macAdresse += ("0" + Math.floor(Math.random()*32).toString(16)).slice(-2);
        if(i<5){
        macAdresse +=":";
        }
    }
    return macAdresse;
}


// 17



// 18

const userIdGenerator = (max) =>{
    let generator="";
    const charMIn = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const charMaj = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const numbers = [1,2,3,4,5,6,7,8,9];
    for( let i=0; i<max; i++){
        let ch = Math.floor(Math.random()*3);
        if (ch<0){
            generator += `${charMIn[Math.floor(Math.random()*charMIn.length+1)]}`;
        }
        else if (ch<1){
            generator += `${charMaj[Math.floor(Math.random()*charMaj.length+1)]}`;
        }
        else {
            generator += `${numbers[Math.floor(Math.random()*numbers.length+1)]}`;
        }
        
    }
    console.log(generator)
    return generator;
}



// exo 3 ******************************************


// 1


const userIdGeneratedByUser =()=>{
    let charInput = prompt("Number of character for each ID ?");
    let numInput = prompt("Number of ID generated ?");
    for (i=0; i<numInput; i++){
        userIdGenerator(charInput);
    }
}

//  2

const rgbColorGenerator = () =>{
    // console.log(`rgb(${("00"+(Math.floor(Math.random()*256)).toString(10)).slice(-3)},${("00"+(Math.floor(Math.random()*256)).toString(10)).slice(-3)},${("00"+(Math.floor(Math.random()*256)).toString(10)).slice(-3)})`);
    let array = `rgb(${("00"+(Math.floor(Math.random()*256)).toString(10)).slice(-3)},${("00"+(Math.floor(Math.random()*256)).toString(10)).slice(-3)},${("00"+(Math.floor(Math.random()*256)).toString(10)).slice(-3)})`;
    return array
}


// 3

const arrayOfHexaColors = () =>{
    // console.log(`${("0"+(Math.floor(Math.random()*256)).toString(16)).slice(-2)},${("0"+(Math.floor(Math.random()*256)).toString(16)).slice(-2)},${("0"+(Math.floor(Math.random()*256)).toString(16)).slice(-2)}`);
    let array = `${("0"+(Math.floor(Math.random()*256)).toString(16)).slice(-2)}${("0"+(Math.floor(Math.random()*256)).toString(16)).slice(-2)}${("0"+(Math.floor(Math.random()*256)).toString(16)).slice(-2)}`
    return array
}

// 4
const arrayOfRgbColorsGenerator =(num) =>{
    let array=[];
    for(let i=0; i<num; i++){
        array.push(`# ${rgbColorGenerator()}`)
    }
    console.log(array)
    return array;
}


const arrayOfHexColorsGenerator =(num) =>{
    let array=[];
    for(let i=0; i<num; i++){
        array.push(`# ${arrayOfHexaColors()}`)
    }
    console.log(array)
    return array;
    
}

// 5

const convertHexaToRgb = (hexa) =>{
    let r =  parseInt(hexa.substring(1,3),16);
    let g =  parseInt(hexa.substring(3,5),16);
    let b =  parseInt(hexa.substring(5,7),16);
    return `rgb(${r},${g},${b})`;
}



// 6

const convertRgbToHexa = (rgb) =>{
    let r =  parseInt(rgb.substring(4,7),10);
    let g =  parseInt(rgb.substring(8,11),10);
    let b =  parseInt(rgb.substring(12,15),10);
    return `#${("0"+ r).toString(16).slice(-2) }${("0"+g).toString(16).slice(-2)}${("0"+b).toString(16).slice(-2)}`;
}


// 7

const generateColors = (type, num) =>{
    switch(true){
        case type == "hexa":
            arrayOfHexColorsGenerator(num);
            break;
        case type == "rgb":
            arrayOfRgbColorsGenerator(num);
            break;
        default:
            console.log("error")

    }
    
}

// 8

const shuffleArray = (array) =>{
    let array2 = [], a, b;
    b = array.length;
    for (i=0; i<b; i++){
        a = array[Math.floor(Math.random()*array.length)];
        array = array.filter(item=> item!==a); 
        array2.push(a); 
    } 

    array = array2;
    return array

}


// 14

const modifyArray = (array, change) =>{
    array.length>4 ? array[4]= change : console.log('item not found')
    return array
}


// 15


